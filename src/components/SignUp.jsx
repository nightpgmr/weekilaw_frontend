import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import '../styles/signUp.css';

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

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phoneNumber);
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
      const response = await fetch('https://panel.weekila.com/api/auth/phone/send-register-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

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
      } else {
        setError(data.message || 'خطا در ارسال کد تایید');
      }
    } catch (err) {
      console.error('Network error:', err);
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.');
      } else {
        setError('خطا در ارتباط با سرور');
      }
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
      const response = await fetch('https://panel.weekila.com/api/auth/phone/complete-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, otp, name: name.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('ثبت نام با موفقیت انجام شد');
        // Store authentication state (session-based auth)
        localStorage.setItem('is_authenticated', 'true');
        // Redirect to account page
        setTimeout(() => {
          navigate('/account');
        }, 1000);
      } else {
        setError(data.message || 'کد تایید اشتباه است');
      }
    } catch (err) {
      console.error('Network error:', err);
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.');
      } else {
        setError('خطا در ارتباط با سرور');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('https://panel.weekila.com/api/auth/phone/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, type: 'register' }),
      });

      const data = await response.json();

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
      } else {
        setError(data.message || 'خطا در ارسال کد جدید');
      }
    } catch (err) {
      console.error('Network error:', err);
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.');
      } else {
        setError('خطا در ارتباط با سرور');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/google/url');
      const data = await response.json();

      if (data.success) {
        window.location.href = data.auth_url;
      } else {
        setError('خطا در دریافت لینک گوگل');
      }
    } catch (err) {
      console.error('Network error:', err);
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.');
      } else {
        setError('خطا در ارتباط با سرور');
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <PageLayout>
      <div className="layout_content" style={{ backgroundColor: '#f7f9fb', minHeight: '100vh', padding: '20px 0' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>

            {/* Logo */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <a href="/">
                <img src="/assets/logo.png" alt="Weekilaw" style={{ height: '40px' }} />
              </a>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '10px',
              color: '#1a202c'
            }}>
              ایجاد حساب کاربری
            </h1>

            {/* Description */}
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '30px',
              fontSize: '14px'
            }}>
              {step === 'phone'
                ? 'شماره موبایل خود را وارد کنید تا کد تایید برای شما ارسال شود.'
                : step === 'otp'
                ? 'کد تایید ارسال شده را وارد کنید.'
                : 'اطلاعات خود را تکمیل کنید.'
              }
            </p>

            {/* Error Message */}
            {error && (
              <div style={{
                color: '#dc3545',
                backgroundColor: '#f8d7da',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            {/* Success Message */}
            {message && (
              <div style={{
                color: '#155724',
                backgroundColor: '#d4edda',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '14px'
              }}>
                {message}
              </div>
            )}

            {/* Phone Step */}
            {step === 'phone' && (
              <form onSubmit={handleSendOTP}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    شماره موبایل
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09123456789"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '16px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    autoFocus
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: loading ? '#9ca3af' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginBottom: '20px'
                  }}
                >
                  {loading ? 'در حال ارسال...' : 'ارسال کد تایید'}
                </button>
              </form>
            )}

            {/* OTP Step */}
            {step === 'otp' && (
              <form onSubmit={handleVerifyOTP}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    کد تایید (4 رقم)
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="1234"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '16px',
                      textAlign: 'center',
                      letterSpacing: '0.5em',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    autoFocus
                    required
                    maxLength="4"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="نام و نام خانوادگی"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '16px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    required
                  />
                </div>

                {/* Countdown/Resend */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  {countdown > 0 ? (
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>
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
                        color: '#3b82f6',
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
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: loading ? '#9ca3af' : '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginBottom: '10px'
                  }}
                >
                  {loading ? 'در حال ثبت نام...' : 'تایید و ثبت نام'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'none',
                    border: 'none',
                    color: '#6b7280',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  تغییر شماره موبایل
                </button>
              </form>
            )}

            {/* Google Login */}
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>یا</span>
            </div>

            <button
              onClick={handleGoogleLogin}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </button>

            {/* Sign In Link */}
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#6b7280', fontSize: '14px' }}>
                حساب کاربری دارید؟{' '}
                <a
                  href="/sign-in"
                  style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  وارد شوید
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;