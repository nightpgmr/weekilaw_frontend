import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import '../styles/signUp.css';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone', 'otp', 'details'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [lastErrorTime, setLastErrorTime] = useState(null);

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const clearMessages = () => {
    setError('');
    setMessage('');
  };

  const handleError = (error, context = '') => {
    console.error(`SignUp Error ${context}:`, error);
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
      const data = await apiCall(API_ENDPOINTS.AUTH.PHONE.SEND_REGISTER_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone }),
      });

      if (data.success) {
        setMessage(data.message);
        setStep('otp');
        setCountdown(300); // 5 minutes

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

        // In development mode, show the OTP code for testing
        if (data.dev_otp) {
          setMessage(`${data.message} (برای تست: ${data.dev_otp})`);
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

    if (otp.length !== 4) {
      setError('کد تایید باید 4 رقم باشد');
      return;
    }

    if (!name.trim()) {
      setError('نام و نام خانوادگی را وارد کنید');
      return;
    }

    setLoading(true);

    try {
      clearMessages();
      const data = await apiCall(API_ENDPOINTS.AUTH.PHONE.COMPLETE_REGISTRATION, {
        method: 'POST',
        body: JSON.stringify({ phone, otp, name: name.trim() }),
      });

      if (data.success) {
        setMessage('ثبت نام با موفقیت انجام شد');
        // Store authentication state and token
        localStorage.setItem('is_authenticated', 'true');
        if (data.token) {
          localStorage.setItem('auth_token', data.token);
        }
        // Store user data
        if (data.user) {
          localStorage.setItem('user_data', JSON.stringify(data.user));
        } else {
          // Fallback: create basic user object
          const userData = {
            id: null,
            name: name.trim(),
            first_name: null,
            last_name: null,
            email: null,
            phone: phone
          };
          localStorage.setItem('user_data', JSON.stringify(userData));
        }
        // Redirect to account page
        setTimeout(() => {
          navigate('/account');
        }, 1000);
      } else {
        setError(data.message || 'کد تایید اشتباه است');
      }
    } catch (err) {
      handleError(err, 'Complete Registration');
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
      const data = await apiCall(API_ENDPOINTS.AUTH.PHONE.RESEND_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone, type: 'register' }),
      });

      if (data.success) {
        setMessage('کد جدید ارسال شد');
        setCountdown(300);

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // In development mode, show the OTP code for testing
        if (data.dev_otp) {
          setMessage(`کد جدید ارسال شد (برای تست: ${data.dev_otp})`);
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

  const handleGoogleLogin = async () => {
    try {
      clearMessages();
      const data = await apiCall(API_ENDPOINTS.AUTH.GOOGLE.URL);

      if (data.success) {
        window.location.href = data.auth_url;
      } else {
        setError('خطا در دریافت لینک گوگل');
      }
    } catch (err) {
      handleError(err, 'Google Login');
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
              ایجاد حساب کاربری
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

          <div className="kinde-layout-widget" data-kinde-layout-widget="true" data-page-title="Sign up | Weekilaw">
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
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="1234"
                    autoFocus
                    required
                    maxLength="4"
                  />
                </div>

                  <div className="kinde-form-field kinde-form-field-variant-select-text">
                    <label className="kinde-control-label" htmlFor="name">
                    نام و نام خانوادگی
                  </label>
                  <input
                      className="kinde-control-select-text"
                      id="name"
                      name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="نام و نام خانوادگی"
                    required
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
                      {loading ? 'در حال تایید...' : 'تایید و ثبت نام'}
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

              <p className="kinde-choice-separator" data-kinde-choice-separator="true">
                یا
              </p>

              <div style={{ textAlign: 'center' }}>
            <button
                  className="kinde-button kinde-button-variant-secondary"
                  type="button"
              onClick={handleGoogleLogin}
                  style={{ width: '100%', marginBottom: '15px' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                      style={{ width: '20px', height: '20px' }}
              >
                <path
                  fill="#4285F4"
                  d="M30.363 16.337c0-.987-.088-1.925-.238-2.837H16v5.637h8.087c-.362 1.85-1.424 3.413-3 4.476v3.75h4.826c2.825-2.613 4.45-6.463 4.45-11.026"
                />
                <path
                  fill="#34A853"
                  d="M16 31c4.05 0 7.438-1.35 9.913-3.637l-4.826-3.75c-1.35.9-3.062 1.45-5.087 1.45-3.912 0-7.225-2.638-8.413-6.2H2.612v3.862C5.075 27.625 10.137 31 16 31"
                />
                <path
                  fill="#FBBC05"
                  d="M7.588 18.863A8.7 8.7 0 0 1 7.112 16c0-1 .175-1.963.476-2.863V9.275H2.612a14.83 14.83 0 0 0 0 13.45z"
                />
                <path
                  fill="#EA4335"
                  d="M16 6.938c2.212 0 4.188.762 5.75 2.25l4.275-4.276C23.438 2.487 20.05 1 16 1 10.137 1 5.075 4.375 2.612 9.275l4.975 3.862c1.188-3.562 4.5-6.2 8.413-6.2Z"
                />
              </svg>
              ادامه با گوگل
                  </span>
            </button>
              </div>

              <p className="kinde-fallback-action" data-kinde-fallback-action="true">
                <span data-kinde-fallback-action-helper-text="true">حساب کاربری دارید؟ </span>
                <a
                  className="kinde-text-link kinde-text-link-is-inline"
                  data-kinde-text-link="true"
                  data-kinde-text-link-is-inline="true"
                  href="/auth/sign-in"
                >
                  وارد شوید
                </a>
              </p>
            </div>
          </div>
        </article>
      </PageLayout>
      </div>
  );
};

export default SignUp;