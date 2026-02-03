import React, { useState } from 'react';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';
import '../styles/AddMoneyModal.css';

const AddMoneyModal = ({ isOpen, onClose, onSuccess }) => {
  const [coins, setCoins] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Test package: 5 coins for 1,500 toman (for testing)
  const testPackage = {
    coins: 5,
    toman: 1500,
    isTest: true
  };

  // Coin packages: [coins, toman]
  // Conversion rate: 1 coin = 20,000 toman
  // Generate packages from 5 to 100, incrementing by 5
  const coinPackages = [testPackage]; // Add test package first
  for (let coins = 10; coins <= 100; coins += 5) {
    coinPackages.push({
      coins: coins,
      toman: coins * 20000, // 1 coin = 20,000 toman
      isTest: false
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!coins || parseInt(coins) < 1) {
      setError('حداقل تعداد سکه ۱ عدد است');
      return;
    }

    // Find selected package (including test package)
    const selectedPackage = coinPackages.find(pkg => pkg.coins === parseInt(coins));
    
    // Special handling for test package (5 coins = 1500 toman)
    if (parseInt(coins) === 5) {
      // Check if it's the test package
      const isTestPackage = selectedPackage && selectedPackage.isTest;
      if (!isTestPackage) {
        setError('لطفاً بسته تست ۵ سکه (۱۵۰۰ تومان) را انتخاب کنید');
        return;
      }
    } else if (!selectedPackage) {
      setError('لطفاً یکی از بسته‌های پیشنهادی را انتخاب کنید');
      return;
    }

    setLoading(true);
    try {
      // Send coins and toman amount to backend
      const data = await apiCall(API_ENDPOINTS.WALLET.ADD_MONEY, {
        method: 'POST',
        body: JSON.stringify({ 
          coins: parseInt(coins),
          amount: selectedPackage.toman 
        }),
      });

      if (data.success) {
        // Check if payment_url is provided - redirect to payment gateway
        if (data.payment_url) {
          // Redirect to SEP payment gateway
          window.location.href = data.payment_url;
          // Keep loading state since we're redirecting
          return;
        } else {
          // If no payment_url, show error
          setError('خطا در دریافت لینک پرداخت');
        }
      } else {
        setError(data.message || 'خطا در ایجاد درخواست پرداخت');
      }
    } catch (err) {
      setError(err.message || 'خطا در ارتباط با سرور');
    } finally {
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
          <div className="preset-amounts">
            <span>بسته‌های پیشنهادی:</span>
            <div className="preset-buttons" style={{ maxHeight: '400px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
              {coinPackages.map((pkg, index) => (
                <button
                  key={pkg.isTest ? 'test-5' : `pkg-${pkg.coins}-${index}`}
                  type="button"
                  className={`preset-button ${coins === pkg.coins.toString() ? 'selected' : ''}`}
                  onClick={() => setCoins(pkg.coins.toString())}
                  disabled={loading}
                  style={{
                    backgroundColor: coins === pkg.coins.toString() ? '#007bff' : '',
                    color: coins === pkg.coins.toString() ? '#fff' : '',
                    border: pkg.isTest ? '2px solid #ff9800' : '1px solid #ddd'
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {pkg.coins.toLocaleString('fa-IR')} سکه
                    {pkg.isTest && <span style={{ fontSize: '12px', color: '#ff9800', marginRight: '5px' }}>(تست)</span>}
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>
                    {pkg.toman.toLocaleString('fa-IR')} تومان
                  </div>
                </button>
              ))}
            </div>
          </div>

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
