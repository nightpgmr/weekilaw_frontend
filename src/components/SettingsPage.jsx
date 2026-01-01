import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [emailPreferences, setEmailPreferences] = useState({
    functional: true,
    marketing: true
  });

  // Load user profile data on component mount
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const isAuthenticated = localStorage.getItem('is_authenticated') === 'true';
        if (!isAuthenticated) {
          navigate('/auth/sign-in');
          return;
        }

        const response = await fetch('https://panel.weekila.com/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include session cookies
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.user) {
            setFormData({
              firstName: data.user.first_name || '',
              lastName: data.user.last_name || '',
              email: data.user.email || '',
              phone: data.user.phone || ''
            });
          }
        } else if (response.status === 401) {
          // Authentication failed, redirect to sign-in
          localStorage.removeItem('is_authenticated');
          sessionStorage.clear();
          navigate('/auth/sign-in');
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        // For network errors, keep empty form but don't redirect
      }
    };

    loadProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailPreferenceChange = (preference) => {
    setEmailPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  const handleSave = async () => {
    try {
      const isAuthenticated = localStorage.getItem('is_authenticated') === 'true';
      if (!isAuthenticated) {
        alert('لطفا ابتدا وارد شوید');
        navigate('/auth/sign-in');
        return;
      }

      const response = await fetch('https://panel.weekila.com/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include session cookies
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
        }),
      });

      if (response.status === 401 || response.status === 302 || response.redirected) {
        // Authentication failed, just show error and continue
        alert('خطا در احراز هویت. لطفا دوباره وارد شوید.');
        return;
      }

      // Check if response is HTML (redirect page) instead of JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        // Authentication failed, just show error and continue
        alert('خطا در احراز هویت. لطفا دوباره وارد شوید.');
        return;
      }

      const data = await response.json();

      if (data.success) {
        alert('پروفایل با موفقیت بروزرسانی شد');
        // Update local form data if needed
      } else {
        alert('خطا در بروزرسانی پروفایل: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('خطا در اتصال به سرور');
    }
  };

  const handleSignOut = () => {
    // Clear authentication data
    localStorage.removeItem('auth_token');
    localStorage.removeItem('is_authenticated');
    sessionStorage.clear();

    // Redirect to main page
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    // Confirm deletion
    const confirmDelete = window.confirm(
      'آیا مطمئن هستید که می‌خواهید حساب کاربری خود را حذف کنید؟ این عمل قابل برگرداندن نیست.'
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const isAuthenticated = localStorage.getItem('is_authenticated') === 'true';
      if (!isAuthenticated) {
        alert('لطفا ابتدا وارد شوید');
        navigate('/auth/sign-in');
        return;
      }

      const response = await fetch('https://panel.weekila.com/api/user/account', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include session cookies
      });

      if (response.status === 401 || response.status === 302 || response.redirected) {
        // Authentication failed, just show error and continue
        alert('خطا در احراز هویت. لطفا دوباره وارد شوید.');
        return;
      }

      // Check if response is HTML (redirect page) instead of JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        // Authentication failed, just show error and continue
        alert('خطا در احراز هویت. لطفا دوباره وارد شوید.');
        return;
      }

      const data = await response.json();

      if (data.success) {
        alert('حساب کاربری با موفقیت حذف شد');
        // Clear local storage and redirect
        localStorage.removeItem('is_authenticated');
        sessionStorage.clear();
        navigate('/');
      } else {
        alert('خطا در حذف حساب: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('خطا در اتصال به سرور');
    }
  };



  return (
    <PageLayout>
      <div className="settings-page" dir="rtl">
        {/* Header Section - Copied from AccountPage */}
        <div className="_accountHeader_19xmy_73">
          <div className="_background_19xmy_87">
            <div className="_backgroundWidthWrapper_19xmy_102">
              <div className="_backgroundImage_19xmy_111">
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.1">
                    <path d="M120 240C186.274 240 240 186.274 240 120H180C180 153.137 153.137 180 120 180C86.8629 180 60 153.137 60 120C60 86.863 86.8629 60 120 60V0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z" fill="url(#paint0_linear_88_1910)"></path>
                    <path d="M200 80C222.091 80 240 62.0914 240 40C240 17.9087 222.091 0 200 0C177.909 0 160 17.9087 160 40C160 62.0914 177.909 80 200 80Z" fill="url(#paint1_linear_88_1910)"></path>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_88_1910" x1="-2.32039e-06" y1="240" x2="311.437" y2="-71.4375" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ADB5B9"></stop>
                      <stop offset="1" stopColor="#F5F5F3"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_88_1910" x1="-2.32039e-06" y1="240" x2="311.437" y2="-71.4375" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ADB5B9"></stop>
                      <stop offset="1" stopColor="#F5F5F3"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="_content_19xmy_172">
            <div className="_profilePicture_19xmy_187">
              <div className="_profileAvatar_19xmy_187">
                {formData.firstName.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="_name_19xmy_213">سلام، {formData.firstName}</div>
            <div className="_userContact_19xmy_220">{formData.email}</div>
          </div>
          <div className="_headerContainer_ky9b5_238">
            <div className="chat-back_button" onClick={() => navigate(-1)} aria-label="بازگشت">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9167 4.16667 6.25 10l6.6667 5.8333"
                  stroke="#0e5fe3"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="_contentWrapper_1dsgd_73">
          <div className="_innerWrapper_1dsgd_103 undefined">
            <div className="_accountContentCard_rxr7g_73">
              <div className="_formSection_ky9b5_105">
                <div className="_innerSection_ky9b5_181">
                  <div className="_title_ky9b5_92">جزئیات</div>
                  <div className="_inputGrid_ky9b5_123">
                    <label className="_inputContainer_ky9b5_142">
                      <div className="_inputLabel_ky9b5_147">نام</div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label className="_inputContainer_ky9b5_142">
                      <div className="_inputLabel_ky9b5_147">نام خانوادگی</div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="_actionButtonContainer_ky9b5_400">
                    <div className="_button_16eqb_73 _actionButton_ky9b5_400" onClick={handleSave}>
                      <div className="_label_16eqb_93">ذخیره</div>
                      <div className="_icon_16eqb_114">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="_arrowRight_16eqb_136">
                          <path d="M7.64644 3.35355C7.55596 3.26306 7.5 3.13807 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.14045 2.5 8.26737 2.55791 8.35819 3.65115L13.3489 7.64181C13.4421 7.73263 13.5 7.85955 13.5 8C13.5 8.14045 13.4421 8.26737 13.3489 8.35819L8.35819 13.3489C8.26737 13.4421 8.14069 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.8619 7.55596 12.7369 7.64644 12.6465L11.7928 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H11.7928L7.64644 3.35355Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="_section_ky9b5_73 _withBorder_ky9b5_89">
                <div className="_title_ky9b5_92">ترجیحات ایمیل</div>
                <div className="_emailPreferencesContainer_ky9b5_526">
                  <div className="_emailPreferencesDescription_ky9b5_569">ایمیل‌های گزارش و ارتباطات عملکردی ارسال می‌کنیم. همچنین ممکن است ایمیل‌های بازاریابی را به پایگاه کاربران خود توزیع کنیم. می‌توانید ترجیحات خود را در اینجا تنظیم کنید.</div>
                  <div className="_emailPreferencesWrapper_ky9b5_561">
                    <div className="styles-module__onOffInputContainer___u4YYL _emailPreferencesInput_ky9b5_566">
                      <div className="styles-module__onOffInputTitle___aanop">ایمیل‌های عملکردی</div>
                      <div className="styles-module__onOffInputValue___Sg9a-">{emailPreferences.functional ? 'روشن' : 'خاموش'}</div>
                      <div className={`styles-module__switchButton___NHGRe ${emailPreferences.functional ? 'styles-module__on___erMrQ' : ''}`} onClick={() => handleEmailPreferenceChange('functional')}>
                        <div className={`styles-module__switchButtonCircle___rU-H4 ${emailPreferences.functional ? 'styles-module__on___erMrQ' : ''}`}></div>
                      </div>
                    </div>
                    <div className="styles-module__onOffInputContainer___u4YYL _emailPreferencesInput_ky9b5_566">
                      <div className="styles-module__onOffInputTitle___aanop">ایمیل‌های بازاریابی</div>
                      <div className="styles-module__onOffInputValue___Sg9a-">{emailPreferences.marketing ? 'روشن' : 'خاموش'}</div>
                      <div className={`styles-module__switchButton___NHGRe ${emailPreferences.marketing ? 'styles-module__on___erMrQ' : ''}`} onClick={() => handleEmailPreferenceChange('marketing')}>
                        <div className={`styles-module__switchButtonCircle___rU-H4 ${emailPreferences.marketing ? 'styles-module__on___erMrQ' : ''}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="_section_ky9b5_73 _deleteSection_ky9b5_608">
                <div className="_title_ky9b5_92">حذف حساب</div>
                <div className="_deleteContainer_ky9b5_296">
                  <div>ما درک می‌کنیم که می‌خواهید مسائل خصوصی بمانند. اگر دیگر نمی‌خواهید از LawConnect برای اطلاعات حقوقی استفاده کنید، تشویق می‌شوید حساب خود را حذف کنید.<br /><br />تمام مطالب پرونده موجود را از تمام سرورها حذف خواهیم کرد. این عمل قابل برگرداندن نخواهد بود.</div>
                  <div className="_actionButtonContainer_ky9b5_400">
                    <div className="_button_16eqb_73 _deleteButton_ky9b5_342" onClick={handleDeleteAccount}>
                      <div className="_label_16eqb_93">حذف</div>
                      <div className="_icon_16eqb_114">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#666666" xmlns="http://www.w3.org/2000/svg" className="_deleteIcon_ky9b5_380">
                          <path d="M5.5 5.50049V11.5C5.5 11.7761 5.72386 12 6 12C6.27614 12 6.5 11.7761 6.5 11.5V5.5C6.5 5.22386 6.27614 5 6 5C5.72386 5 5.5 5.22435 5.5 5.50049Z"></path>
                          <path d="M8 12C8.27614 12 8.5 11.7761 8.5 11.5V5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V11.5C7.5 11.7761 7.72386 12 8 12Z"></path>
                          <path d="M10.5 11.5C10.5 11.7761 10.2761 12 10 12C9.72386 12 9.5 11.7761 9.5 11.5V5.5C9.5 5.22386 9.72386 5 10 5C10.2761 5 10.5 5.22386 10.5 5.5V11.5Z"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.13378 2H2C1.72386 2 1.5 2.22386 1.5 2.5C1.5 2.77614 1.72386 3 2 3H2.56118L3.89083 13.194C3.98828 13.9411 4.6248 14.5 5.37823 14.5H10.6222C11.3756 14.5 12.0121 13.9411 12.1096 13.194L13.4392 3H14C14.2761 3 14.5 2.77614 14.5 2.5C14.5 2.22386 14.2761 2 14 2H10.8662C10.6933 1.7011 10.3701 1.5 10 1.5H6C5.62986 1.5 5.30669 1.7011 5.13378 2ZM3.56965 3L4.88243 13.0646C4.91491 13.3137 5.12709 13.5 5.37823 13.5H10.6222C10.8733 13.5 11.0855 13.3137 11.118 13.0646L12.4307 3H3.56965Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="_deleteDivider_ky9b5_617"></div>

              <div className="_footer_ky9b5_388">
                <div className="_actionButtonContainer_ky9b5_400">
                  <div className="_button_16eqb_73 _actionButton_ky9b5_400" onClick={handleSignOut}>
                    <div className="_label_16eqb_93">خروج از حساب</div>
                    <div className="_icon_16eqb_114">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3.75024C2 3.33603 2.33579 3.00024 2.75 3.00024H13.25C13.6642 3.00024 14 3.33603 14 3.75024V9.00024C14 9.41446 13.6642 9.75024 13.25 9.75024C12.8358 9.75024 12.5 9.41446 12.5 9.00024V4.50024H3.5V19.5002H12.5V15.0002C12.5 14.586 12.8358 14.2502 13.25 14.2502C13.6642 14.2502 14 14.586 14 15.0002V20.2502C14 20.6645 13.6642 21.0002 13.25 21.0002H2.75C2.33579 21.0002 2 20.6645 2 20.2502V3.75024Z" fill="#0E5FE3"></path>
                        <path d="M17.75 6.75024C17.3358 6.75024 17 7.08603 17 7.50024C17 7.70735 17.0839 7.89484 17.2197 8.03056L20.4392 11.2502H7.25C6.83579 11.2502 6.5 11.586 6.5 12.0002C6.5 12.4145 6.83579 12.7502 7.25 12.7502H20.4392L17.2196 15.9699C17.0839 16.1056 17 16.2931 17 16.5002C17 16.9145 17.3358 17.2502 17.75 17.2502C17.9607 17.2502 18.151 17.1634 18.2873 17.0235L22.7733 12.5375C22.9131 12.4013 23 12.2109 23 12.0002C23 11.7896 22.9131 11.5992 22.7733 11.463L18.2873 6.97695C18.151 6.8371 17.9607 6.75024 17.75 6.75024Z" fill="#0E5FE3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
