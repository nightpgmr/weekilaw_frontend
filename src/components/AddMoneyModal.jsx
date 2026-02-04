import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';
import '../styles/AddMoneyModal.css';

const AddMoneyModal = ({ isOpen, onClose, onSuccess }) => {
  const [coins, setCoins] = useState('');
  const [selectedGateway, setSelectedGateway] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState('');
  const [gateways, setGateways] = useState([]);
  const [coinPackages, setCoinPackages] = useState([]);

  // Fetch gateways and coin packages from MongoDB on mount
  useEffect(() => {
    if (isOpen) {
      fetchPaymentData();
    }
  }, [isOpen]);

  // Listen for postMessage from payment listener page
  useEffect(() => {
    const handleMessage = (event) => {
      // Accept messages from payment gateway domain or same origin
      const allowedOrigins = [
        window.location.origin,
        'https://weekilaw.com',
        'http://localhost:8000', // For local development
        'http://localhost:3000', // For local development
      ];

      if (!allowedOrigins.includes(event.origin) && event.origin !== '*') {
        return;
      }

      console.log('Payment modal received postMessage:', event.data);

      if (event.data && event.data.type) {
        if (event.data.type === 'PAYMENT_COMPLETE' && event.data.success) {
          console.log('✅ Payment completed successfully');
          setLoading(false);
          
          // Trigger success callback
          if (onSuccess) {
            onSuccess({
              success: true,
              transaction_id: event.data.transaction_id,
              ref_num: event.data.ref_num,
            });
          }
          
          // Close modal after short delay
          setTimeout(() => {
            onClose();
          }, 2000);
        } else if (event.data.type === 'PAYMENT_FAILED') {
          console.log('❌ Payment failed');
          setLoading(false);
          setError('پرداخت ناموفق بود');
        }
      }
    };

    // Listen for postMessage events
    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onClose, onSuccess]);

  const fetchPaymentData = async () => {
    try {
      setLoadingData(true);
      
      // Fetch gateways and coin packages in parallel
      const [gatewaysData, packagesData] = await Promise.all([
        apiCall(API_ENDPOINTS.PAYMENT.GATEWAYS),
        apiCall(API_ENDPOINTS.PAYMENT.COIN_PACKAGES),
      ]);

      if (gatewaysData.success && gatewaysData.gateways) {
        setGateways(gatewaysData.gateways);
        // Auto-select first gateway
        if (gatewaysData.gateways.length > 0) {
          setSelectedGateway(gatewaysData.gateways[0].gateway_id || gatewaysData.gateways[0]._id);
        }
      }

      if (packagesData.success && packagesData.packages) {
        // Debug: Log first package to see what fields are available
        if (packagesData.packages.length > 0) {
          console.log('🔍 First coin package from API:', packagesData.packages[0]);
          console.log('🔍 All fields:', Object.keys(packagesData.packages[0]));
          console.log('🔍 Coins value:', packagesData.packages[0].coins);
          console.log('🔍 Debug data:', packagesData.debug);
        }
        
        // Sort packages by coins
        const sorted = packagesData.packages.sort((a, b) => 
          (a.coins || 0) - (b.coins || 0)
        );
        setCoinPackages(sorted);
      }
    } catch (err) {
      console.error('Error fetching payment data:', err);
      setError('خطا در دریافت اطلاعات پرداخت');
    } finally {
      setLoadingData(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!coins) {
      setError('لطفاً یک بسته سکه انتخاب کنید');
      return;
    }

    if (!selectedGateway) {
      setError('لطفاً درگاه پرداخت را انتخاب کنید');
      return;
    }

    // Find selected package
    const selectedPackage = coinPackages.find(pkg => 
      (pkg.coins || pkg.coinAmount || 0) === parseInt(coins) ||
      (pkg._id && pkg._id === coins) ||
      (pkg.id && pkg.id === coins)
    );
    
    if (!selectedPackage) {
      setError('بسته انتخاب شده یافت نشد');
      return;
    }

    // Set loading state - modal will show loading
    setLoading(true);
    
    try {
      // Get package ID (could be _id, id, or packageId)
      const packageId = selectedPackage._id || selectedPackage.id || selectedPackage.packageId || `coin_package_${selectedPackage.coins || selectedPackage.coinAmount}`;

      // Initiate payment using new payment service
      const data = await apiCall(API_ENDPOINTS.PAYMENT.INITIATE, {
        method: 'POST',
        body: JSON.stringify({
          purchase_type: 'coinpackages',
          id: packageId,
          gateway_id: selectedGateway,
        }),
      });

      if (data.success) {
        // Flow: Modal shows loading → Gateway POSTs to Backend → Backend returns HTML → HTML verifies → postMessage → Modal reacts
        
        // Check if we have payment_url (GET redirect) or payment_html (POST form)
        if (data.payment_url) {
          // GET redirect method - open in new window/tab
          const paymentWindow = window.open(data.payment_url, '_blank', 'width=800,height=600');
          
          if (!paymentWindow) {
            setError('لطفاً اجازه باز کردن پنجره جدید را بدهید');
            setLoading(false);
            return;
          }
          
          // Keep loading state - waiting for postMessage from payment window
          // Payment window will verify and send postMessage when done
          return;
        } else if (data.link && data.body) {
          // POST form method - create form and submit
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = data.link;
          form.target = '_blank'; // Open in new window
          form.style.display = 'none';

          // Add form fields from body
          Object.keys(data.body).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = data.body[key];
            form.appendChild(input);
          });

          document.body.appendChild(form);
          
          // Submit form - opens gateway in new window
          // Gateway will POST to backend /api/payment/listener
          // Backend returns HTML page that verifies and sends postMessage
          form.submit();
          
          // Keep loading state - waiting for postMessage
          return;
        } else if (data.link) {
          // If only link provided (GET redirect)
          const paymentWindow = window.open(data.link, '_blank', 'width=800,height=600');
          
          if (!paymentWindow) {
            setError('لطفاً اجازه باز کردن پنجره جدید را بدهید');
            setLoading(false);
            return;
          }
          
          // Keep loading state - waiting for postMessage
          return;
        } else {
          setError('خطا در دریافت لینک پرداخت');
          setLoading(false);
        }
      } else {
        setError(data.message || 'خطا در ایجاد درخواست پرداخت');
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || 'خطا در ارتباط با سرور');
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="add-money-modal-overlay" onClick={onClose}>
      <div className="add-money-modal" onClick={(e) => e.stopPropagation()} dir="rtl">
        <div className="add-money-modal-header">
          <h2>خرید سکه</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="add-money-form">
          {loadingData ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div className="spinner" style={{ margin: '0 auto' }}></div>
              <p>در حال بارگذاری...</p>
            </div>
          ) : loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div className="spinner" style={{ margin: '0 auto', width: '50px', height: '50px' }}></div>
              <h3 style={{ marginTop: '20px', color: '#007bff' }}>در حال انتقال به درگاه پرداخت...</h3>
              <p style={{ marginTop: '10px', color: '#666' }}>لطفاً منتظر بمانید</p>
            </div>
          ) : (
            <>
              {/* Payment Gateway Selection */}
              {gateways.length > 0 && (
                <div className="gateway-selection" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                    انتخاب درگاه پرداخت:
                  </label>
                  <select
                    value={selectedGateway}
                    onChange={(e) => setSelectedGateway(e.target.value)}
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '16px',
                    }}
                  >
                    {gateways.map((gateway) => (
                      <option key={gateway.gateway_id || gateway._id} value={gateway.gateway_id || gateway._id}>
                        {gateway.name_fa || gateway.name || gateway.gateway_id}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Coin Packages */}
              <div className="preset-amounts">
                <span>بسته‌های پیشنهادی:</span>
                <div className="preset-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
                  {coinPackages.map((pkg, index) => {
                    const packageCoins = pkg.coins || pkg.coinAmount || 0;
                    const packagePrice = pkg.price || pkg.amount || pkg.toman || 0;
                    const packageId = pkg._id || pkg.id || pkg.packageId || `coin_package_${packageCoins}`;
                    const isSelected = coins === packageId || coins === packageCoins.toString();

                    return (
                      <button
                        key={packageId || index}
                        type="button"
                        className={`preset-button ${isSelected ? 'selected' : ''}`}
                        onClick={() => setCoins(packageId)}
                        disabled={loading}
                        style={{
                          backgroundColor: isSelected ? '#007bff' : '',
                          color: isSelected ? '#fff' : '',
                          border: '1px solid #ddd'
                        }}
                      >
                        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                          {packageCoins.toLocaleString('fa-IR')} سکه
                        </div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>
                          {packagePrice.toLocaleString('fa-IR')} تومان
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button type="button" onClick={onClose} disabled={loading}>
              انصراف
            </button>
            <button type="submit" disabled={loading || !coins}>
              {loading ? 'در حال پردازش...' : 'پرداخت'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoneyModal;
