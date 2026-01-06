import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/sailing.css';

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        {/* Hero */}
        <div className="styles_heroContainer">
          <div className="styles_innerWidthWrapper">
            <div className="styles_heroTitleContainer" style={{ maxWidth: '50%' }}>
              <div className="styles_breadcrumbsContainer">
                <a href="/" className="styles_breadcrumb">
                  خانه
                </a>
                <span className="styles_breadcrumb">&nbsp;/&nbsp;</span>
                <span className="styles_breadcrumb styles_bold">تماس با ما</span>
              </div>
              <h1 className="styles_heroTitle">با ما در تماس باشید</h1>
            </div>
            <div className="styles_heroImageContainer">
              <div className="styles_heroImageWrapper">
                <img
                  alt="تصویر قهرمان تماس با ما"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/contact-hero-image.webp"
                />
              </div>
            </div>
            <div className="styles_heroIconWrapper">
              <div className="styles_heroIconContainer">
                <img
                  alt="آیکون پس‌زمینه قهرمان"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/hero-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                برای ارتباط با تیم ویکیلا، از طریق راه‌های زیر با ما در تماس باشید:
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <section className="about_contentSection">
          <div className="about_sectionContent" style={{ flexDirection: 'column', gap: '40px' }}>
            {/* Phone Number */}
            <div className="contact_infoContainer">
              <div className="contact_infoIconContainer">
                <img
                  src="/assets/company/phone-blue.svg"
                  alt="تلفن"
                  className="contact_infoIcon"
                  width="32"
                  height="32"
                />
              </div>
              <div className="contact_infoTextContainer">
                <h3 className="contact_infoTitle">شماره تلفن گویا</h3>
                <p className="contact_infoDescription contact_phoneNumber">۰۲۱۸۲۸۰۱۴۸۰</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact_infoContainer">
              <div className="contact_infoIconContainer">
                <img
                  src="/assets/company/email-blue.svg"
                  alt="ایمیل"
                  className="contact_infoIcon"
                  width="32"
                  height="32"
                />
              </div>
              <div className="contact_infoTextContainer">
                <h3 className="contact_infoTitle">ایمیل</h3>
                <p className="contact_infoDescription">lian@mail.weekilaw.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact_infoContainer">
              <div className="contact_infoIconContainer">
                <img
                  src="/assets/sign-up/map-pin-blue.svg"
                  alt="آدرس"
                  className="contact_infoIcon"
                  width="32"
                  height="32"
                />
              </div>
              <div className="contact_infoTextContainer">
                <h3 className="contact_infoTitle">آدرس شرکت</h3>
                <p className="contact_infoDescription">
                  تهران سعادت آباد خ علامه جنوبی خ ۳۸ غربی پ ۲۵ واحد ۱<br />
                  کد پستی: ۱۹۹۷۹۱۵۱۱۱
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Need help card */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_needHelpCardContainer">
              <div className="styles_container">
                <div className="styles_card">
                  <div className="styles_textWrapper">
                    <div className="styles_title">نیاز به کمک حقوقی دارید؟</div>
                    <div className="styles_description">سؤال حقوقی خود را از ویکیلا بپرسید تا پاسخ‌های سریع و رایگان دریافت کنید!</div>
                  </div>
                  <div className="styles_imageWrapper">
                    <a
                      href="/chat?newCase=true"
                      className="styles_buttonWrapper styles_startCaseButton"
                      style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
                    >
                      <div className="styles_buttonText">همین حالا شروع کنید</div>
                      <div className="styles_buttonArrow">
                        <div className="styles_arrowIconWrapperHover">
                          <img
                            alt="arrow-right"
                            loading="lazy"
                            width="16"
                            height="16"
                            className="styles_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/ai-tech/arrow-right-blue.svg"
                          />
                        </div>
                        <div className="styles_arrowIconWrapper">
                          <img
                            alt="arrow-right-white"
                            loading="lazy"
                            width="16"
                            height="16"
                            className="styles_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/ai-tech/arrow-right-white.svg"
                          />
                        </div>
                      </div>
                    </a>
                    <div className="styles_backgroundColour"></div>
                    <div className="styles_backgroundSquare" style={{ backgroundColor: '#F0EFEC' }}></div>
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

export default ContactUs;
