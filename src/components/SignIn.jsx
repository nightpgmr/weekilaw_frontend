import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signIn.css';
import PageLayout from './PageLayout.jsx';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';

function SignIn() {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone', 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [lastErrorTime, setLastErrorTime] = useState(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const clearMessages = () => {
    setError('');
    setMessage('');
  };

  const handleError = (error, context = '') => {
    console.error(`SignIn Error ${context}:`, error);
    setLastErrorTime(Date.now());

    // Provide user-friendly error messages
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      setError('خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.');
    } else if (error.message.includes('timeout')) {
      setError('زمان ارسال پیام به پایان رسید. لطفا دوباره تلاش کنید.');
    } else if (error.message.includes('500')) {
      setError('سرویس پیامک موقتاً در دسترس نیست. لطفا بعداً تلاش کنید.');
    } else if (error.message.includes('401') || error.message.includes('403')) {
      setError('خطا در تنظیمات سرویس. لطفا با پشتیبانی تماس بگیرید.');
    } else {
      setError(error.message || 'خطای نامشخص رخ داده است');
    }

    setRetryCount(prev => prev + 1);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!validatePhone(phone)) {
      setError('شماره موبایل باید با 09 شروع شود و 11 رقم باشد');
      return;
    }

    setLoading(true);

    try {
      clearMessages();
      // Use new API endpoint
      const data = await apiCall(API_ENDPOINTS.AUTH.SEND_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone }),
      });

      if (data.success) {
        setMessage(data.message);
        setStep('otp');
        // Use expires_in from response, default to 120 seconds (2 minutes)
        setCountdown(data.expires_in || 120);

        // Start countdown timer
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // Show OTP code if provided (for development/testing)
        if (data.code) {
          setMessage(`${data.message} (برای تست: ${data.code})`);
        }

        setRetryCount(0); // Reset retry count on success
      } else {
        setError(data.message || 'خطا در ارسال کد تایید');
      }
    } catch (err) {
      handleError(err, 'Send OTP');
    } finally {
      setLoading(false);
    }
  };


  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (otp.length < 4 || otp.length > 6) {
      setError('کد تایید باید 5 رقم باشد');
      return;
    }

    setLoading(true);

    try {
      clearMessages();
      // Use new API endpoint
      const data = await apiCall(API_ENDPOINTS.AUTH.VERIFY_OTP, {
        method: 'POST',
        body: JSON.stringify({ 
          phone, 
          otp_code: otp,
          user_type: 'regular' // Default user type
        }),
      });

      if (data.success) {
        // Check if registration completion is required
        // Check if message contains the registration completion text
        const registrationKeywords = ['ادامه ثبت‌نام لازم است', 'ثبت‌نام لازم است', 'complete registration'];
        const needsRegistration = data.message && registrationKeywords.some(keyword => 
          data.message.includes(keyword)
        );
        
        if (needsRegistration) {
          // Show registration modal instead of redirecting
          setShowRegistrationModal(true);
          setMessage('');
        } else {
          setMessage('ورود با موفقیت انجام شد');
          
          // Store authentication state
          localStorage.setItem('is_authenticated', 'true');
          
          // Store tokens (new API uses access_token and refresh_token)
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('auth_token', data.access_token); // Keep for backward compatibility
          } else if (data.token) {
            // Also support legacy token format
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('access_token', data.token); // Store as access_token too
          }
          
          if (data.refresh_token) {
            localStorage.setItem('refresh_token', data.refresh_token);
          }
          
          // Store user data
          if (data.user) {
            localStorage.setItem('user_data', JSON.stringify(data.user));
          }
          
          // Verify token was stored before redirect
          const storedToken = localStorage.getItem('access_token') || localStorage.getItem('auth_token');
          if (!storedToken) {
            setError('خطا در ذخیره اطلاعات احراز هویت. لطفاً دوباره تلاش کنید.');
            return;
          }
          
          // Redirect to account page
          setTimeout(() => {
            navigate('/account');
          }, 1000);
        }
      } else {
        setError(data.message || 'کد تایید اشتباه است');
      }
    } catch (err) {
      handleError(err, 'Verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError('');
    setMessage('');
    setLoading(true);

    try {
      clearMessages();
      // Use new API endpoint (same as send-otp)
      const data = await apiCall(API_ENDPOINTS.AUTH.SEND_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone }),
      });

      if (data.success) {
        setMessage('کد جدید ارسال شد');
        setCountdown(data.expires_in || 120);

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // Show OTP code if provided (for development/testing)
        if (data.code) {
          setMessage(`کد جدید ارسال شد (برای تست: ${data.code})`);
        }
      } else {
        setError(data.message || 'خطا در ارسال کد جدید');
      }
    } catch (err) {
      handleError(err, 'Resend OTP');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="kinde-layout-page kinde-layout-page-alignment-center"
      data-kinde-layout-page="true"
      data-kinde-layout-page-alignment="center"
    >
      <PageLayout className="kinde-layout-page-main" data-kinde-layout-page-main="true">
        <article className="kinde-layout-page-card" data-kinde-layout-page-card="true">
          <header className="kinde-layout-page-card-header" data-kinde-layout-page-card-header="true">
            <div className="kinde-layout-page-branding" data-kinde-layout-page-branding="true">
              <a
                className="kinde-layout-page-logo"
                data-kinde-layout-page-logo="true"
                href="/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/assets/logo.png" alt="Visit Weekilaw" />
              </a>
            </div>
            <h1
              className="kinde-heading kinde-heading-variant-large"
              data-kinde-heading="true"
              data-kinde-heading-variant="large"
            >
              خوش آمدید
            </h1>
            <div className="kinde-layout-page-description" data-kinde-layout-page-description="true">
              <p>
                {step === 'phone'
                  ? 'شماره موبایل خود را وارد کنید تا کد تایید برای شما ارسال شود.'
                  : 'کد تایید ارسال شده را وارد کنید.'
                }
              </p>
            </div>
          </header>

          <div className="kinde-layout-widget" data-kinde-layout-widget="true" data-page-title="Sign in | Weekilaw">
            <div className="kinde-layout-widget-content" data-kinde-layout-widget-content="true">

              {error && (
                <div className="error-message" style={{
                  color: '#dc3545',
                  backgroundColor: '#f8d7da',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {error}
                </div>
              )}

              {message && (
                <div className="success-message" style={{
                  color: '#155724',
                  backgroundColor: '#d4edda',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {message}
                </div>
              )}

              {step === 'phone' ? (
                <form className="kinde-form" data-kinde-form="true" onSubmit={handleSendOTP}>
                  <div className="kinde-form-field kinde-form-field-variant-select-text">
                    <label className="kinde-control-label" htmlFor="phone">
                      شماره موبایل
                    </label>
                    <input
                      className="kinde-control-select-text"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09123456789"
                      autoFocus
                      required
                    />
                  </div>
                  <button
                    className="kinde-button kinde-button-variant-primary"
                    type="submit"
                    disabled={loading}
                  >
                    <span className="kinde-button-text">
                      {loading ? 'در حال ارسال...' : 'ارسال کد تایید'}
                    </span>
                  </button>
                </form>
              ) : (
                <form className="kinde-form" data-kinde-form="true" onSubmit={handleVerifyOTP}>
                  <div className="kinde-form-field kinde-form-field-variant-select-text">
                    <label className="kinde-control-label" htmlFor="otp">
                      کد تایید
                    </label>
                    <input
                      className="kinde-control-select-text"
                      id="otp"
                      name="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="کد تایید"
                      autoFocus
                      required
                      maxLength="6"
                    />
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    {countdown > 0 ? (
                      <span style={{ color: '#6c757d', fontSize: '14px' }}>
                        ارسال مجدد کد تا {formatTime(countdown)}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        disabled={loading}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#007bff',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        ارسال مجدد کد
                      </button>
                    )}
                  </div>

                  <button
                    className="kinde-button kinde-button-variant-primary"
                    type="submit"
                    disabled={loading}
                  >
                    <span className="kinde-button-text">
                      {loading ? 'در حال تایید...' : 'تایید و ورود'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    style={{
                      width: '100%',
                      marginTop: '10px',
                      background: 'none',
                      border: 'none',
                      color: '#6c757d',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    تغییر شماره موبایل
                  </button>
                </form>
              )}

              <p className="kinde-fallback-action" data-kinde-fallback-action="true">
                <span data-kinde-fallback-action-helper-text="true">حساب کاربری ندارید؟ </span>
                <a
                  className="kinde-text-link kinde-text-link-is-inline"
                  data-kinde-text-link="true"
                  data-kinde-text-link-is-inline="true"
                  href="https://app.weekilaw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ایجاد کنید
                </a>
              </p>
            </div>
          </div>
        </article>
      </PageLayout>

      {/* Registration Completion Modal */}
      {showRegistrationModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px'
          }}
          onClick={() => setShowRegistrationModal(false)}
        >
          <div 
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '30px',
              maxWidth: '500px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{
              marginBottom: '20px',
              color: '#333',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              کد تایید تایید شد
            </h2>
            <p style={{
              marginBottom: '30px',
              color: '#666',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              کد تایید شد - ادامه ثبت‌نام لازم است
            </p>
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://app.weekilaw.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  display: 'inline-block',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                تکمیل ثبت‌نام
              </a>
              <button
                onClick={() => setShowRegistrationModal(false)}
                style={{
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;

