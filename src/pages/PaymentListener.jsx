import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';
import '../styles/PaymentListener.css';

/**
 * Payment Listener Page
 * 
 * This page receives POST data from payment gateway via backend route and forwards to verify endpoint.
 * NO VALIDATION OR PROCESSING - just forwards data as-is.
 * 
 * Flow:
 * 1. Gateway POSTs to backend route /api/payment/listener
 * 2. Backend receives POST, encodes body as base64, redirects to this React page with bodyData param
 * 3. This page decodes bodyData from URL and extracts link
 * 4. POSTs link and body to /api/payment/verify endpoint WITHOUT any validation or changes
 * 5. Displays message and redirects using link returned from verify route
 */
const PaymentListener = () => {
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('در حال بررسی پرداخت...');
  const [redirectLink, setRedirectLink] = useState('/account');

  useEffect(() => {
    // Get the full URL with query params (from backend redirect after gateway POST)
    const fullUrl = window.location.href;
    const urlObj = new URL(fullUrl);
    // Keep the full URL including query params
    let link = `${urlObj.origin}${urlObj.pathname}${urlObj.search}`;

    const urlParams = new URLSearchParams(window.location.search);
    const verifyUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/payment/verify`;

    // Get payment data from POST body (sent by gateway via backend redirect)
    // The backend encodes the body data in the URL as 'bodyData' param
    let bodyData = {};

    // First, try to get encoded body data from URL (from backend redirect)
    const encodedBodyData = urlParams.get('bodyData');
    
    if (encodedBodyData) {
      try {
        // Decode base64
        const decodedString = atob(decodeURIComponent(encodedBodyData));
        bodyData = JSON.parse(decodedString);
        console.log('Payment Listener - Decoded bodyData:', bodyData);
      } catch (e) {
        console.error('Error decoding bodyData:', e);
      }
    }

    // Extract success from bodyData if it exists there (from gateway)
    let successParam = urlParams.get('success');
    if (!successParam && bodyData.success) {
      successParam = bodyData.success;
    }
    
    // If success is in bodyData, ensure it's in the link for backend
    if (successParam && !link.includes('success=')) {
      const separator = link.includes('?') ? '&' : '?';
      link = `${link}${separator}success=${successParam}`;
    }

    // If no encoded data, try to get individual params (fallback)
    if (Object.keys(bodyData).length === 0) {
      for (const [key, value] of urlParams.entries()) {
        // Skip the success and bodyData params
        if (key !== 'success' && key !== 'bodyData') {
          try {
            // Try to parse as JSON if it looks like JSON
            if (value.startsWith('{') || value.startsWith('[')) {
              bodyData[key] = JSON.parse(value);
            } else {
              bodyData[key] = value;
            }
          } catch {
            bodyData[key] = value;
          }
        }
      }
    }

    console.log('Payment Listener - Forwarding to verify route');
    console.log('Link:', link);
    console.log('Body:', bodyData);

    // Forward to verify route - NO VALIDATION, NO PROCESSING
    const forwardToVerify = async () => {
      try {
        setStatus('processing');
        setMessage('در حال بررسی پرداخت...');

        // POST link and body to verify route - exactly as received from gateway
        const response = await fetch(verifyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            link: link,
            body: bodyData, // All gateway POST data, unchanged
          }),
        });

        const result = await response.json();

        console.log('Verify Route Response:', result);

        // Verify route returns: {message: "", link: ""}
        // Display message and redirect using link - NO VALIDATION, just display and redirect
        setMessage(result.message || 'در حال بررسی...');
        setRedirectLink(result.link || '/account');

        // Determine status based on message content (for UI display only)
        const isSuccess = result.message && result.message.includes('موفق');
        if (isSuccess) {
          setStatus('success');
        } else if (result.message && (result.message.includes('ناموفق') || result.message.includes('لغو') || result.message.includes('خطا'))) {
          setStatus('error');
        } else {
          setStatus('processing');
        }

        // Redirect after 2 seconds using link from verify route
        // Add payment status to URL so account page/modal can react
        setTimeout(() => {
          const redirectLink = result.link || '/account';
          const separator = redirectLink.includes('?') ? '&' : '?';
          const statusParam = isSuccess ? 'payment=success' : 'payment=failed';
          const finalLink = `${redirectLink}${separator}${statusParam}`;
          
          // Store payment result in sessionStorage for modal to read
          if (isSuccess) {
            sessionStorage.setItem('paymentResult', JSON.stringify({
              success: true,
              message: result.message,
              timestamp: Date.now(),
            }));
          } else {
            sessionStorage.setItem('paymentResult', JSON.stringify({
              success: false,
              message: result.message,
              timestamp: Date.now(),
            }));
          }
          
          window.location.href = finalLink;
        }, 2000);

      } catch (error) {
        console.error('Error forwarding to verify route:', error);
        setStatus('error');
        setMessage('خطا در ارتباط با سرور');
        setRedirectLink('/account');

        setTimeout(() => {
          // Store error in sessionStorage
          sessionStorage.setItem('paymentResult', JSON.stringify({
            success: false,
            message: 'خطا در ارتباط با سرور',
            timestamp: Date.now(),
          }));
          
          window.location.href = '/account?payment=error';
        }, 3000);
      }
    };

    // Start forwarding immediately
    forwardToVerify();
  }, []);

  return (
    <div className="payment-listener-page" dir="rtl">
      <div className="payment-listener-container">
        <div className="payment-listener-content">
          {status === 'processing' && (
            <>
              <div className="spinner"></div>
              <h1>در حال بررسی پرداخت</h1>
              <p>{message}</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="success-icon">✅</div>
              <h1>پرداخت موفق</h1>
              <p>{message}</p>
              <p className="redirect-info">در حال انتقال به صفحه حساب کاربری...</p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="error-icon">❌</div>
              <h1>پرداخت ناموفق</h1>
              <p>{message}</p>
              <button 
                className="redirect-button"
                onClick={() => window.location.href = redirectLink}
              >
                بازگشت به حساب کاربری
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentListener;
