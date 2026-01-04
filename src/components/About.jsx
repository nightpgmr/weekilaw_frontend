import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/sailing.css';

const About = () => {
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
                <span className="styles_breadcrumb styles_bold">درباره ویکیلا</span>
              </div>
              <h1 className="styles_heroTitle">ویکیلا؛ پیشگام عدالت هوشمند در ایران</h1>
            </div>
            <div className="styles_heroImageContainer">
              <div className="styles_heroImageWrapper">
                <img
                  alt="تصویر قهرمان درباره"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/about-hero-image.webp"
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

        {/* Intro copy */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                ویکیلا تنها یک سامانه‌ی پاسخ‌گویی حقوقی نیست؛<br /> <br />
                بلکه یک حرکت ملی برای دسترسی سریع، دقیق و عادلانه به خدمات حقوقی در سراسر کشور است.<br /> <br />
                ما با استفاده از فناوری هوش مصنوعی حقوقی، در مسیر ایجاد عدالت هوشمند، شفافیت قانونی و توانمندسازی مردم ایران قدم برداشته‌ایم.
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section - Image Left, Text Right */}
        <section className="about_contentSection about_technologySection">
          <div className="about_sectionContent">
            <div className="about_sectionTextContainer">
              <h2 className="about_sectionTitle">
                فناوری هوش مصنوعی ما
              </h2>
              <p className="about_sectionDescription">
                فناوری پیشرفتهٔ ما با استفاده از یادگیری ماشین و پردازش زبان طبیعی، پاسخ‌های حقوقی دقیقی ارائه می‌دهد که توسط وکلای متخصص بررسی و تأیید می‌شوند.
              </p>
              <a href="/en-us/about/ai-technology" className="about_sectionLink">
                <span>درباره فناوری هوش مصنوعی</span>
                <img src="/assets/arrow-right-blue.svg" alt="arrow" className="about_arrowIcon" />
              </a>
            </div>
            <div className="about_sectionImageContainer">
              <img
                src="/assets/about-technology.webp"
                alt="AI Technology"
                className="about_sectionImage"
              />
            </div>
          </div>
        </section>

        {/* Network Section - Image Right, Text Left */}
        <section className="about_contentSection about_networkSection">
          <div className="about_sectionContent">
            <div className="about_sectionTextContainer">
              <h2 className="about_sectionTitle">
                شبکهٔ حقوقی ما
              </h2>
              <p className="about_sectionDescription">
                ما با هزاران وکیل در سراسر ایالات متحده همکاری می‌کنیم تا اطمینان حاصل کنیم که مشتریان ما بهترین کمک حقوقی ممکن را دریافت کنند.
              </p>
              <a href="/en-us/about/legal-network" className="about_sectionLink">
                <span>درباره شبکه حقوقی</span>
                <img src="/assets/arrow-right-blue.svg" alt="arrow" className="about_arrowIcon" />
              </a>
            </div>
            <div className="about_sectionImageContainer">
              <img
                src="/assets/about-network.webp"
                alt="Legal Network"
                className="about_sectionImage"
              />
            </div>
          </div>
        </section>

        {/* Company Mission Card */}
        <div className="company-card_companyCardWrapper__fqa4N">
          <div className="company-card_mobileImageContainer__uV3Rc">
            <div className="company-card_christianImageContainer__1GDXH">
              <img
                alt="about-christian"
                loading="lazy"
                width="508"
                height="636"
                decoding="async"
                data-nimg="1"
                className="company-card_christianImage__rW6zw"
                style={{ color: 'transparent' }}
                src="/assets/about-cb-hero.webp"
              />
            </div>
            <div className="company-card_logoContainer__Sa9Xc">
              <img
                alt="logo-icon"
                loading="lazy"
                width="180"
                height="180"
                decoding="async"
                data-nimg="1"
                className="company-card_logoIcon__dUeBm"
                style={{ color: 'transparent' }}
                src="/assets/logo-icon.svg"
              />
            </div>
          </div>
          <div className="company-card_companyCardContentPadding__vAB5p">
            <div className="company-card_companyCardContentWrapper__o8vKc">
              <div className="company-card_companyCardContent___5zw1">
                <img
                  alt="Double Quotes Left"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="company-card_doubleQuotesIconLeft__CAwZj"
                  style={{ color: 'transparent' }}
                  src="/assets/double-quotes-white.svg"
                />
                مأموریت ما این است که همه را با ابزارها و اطلاعات مناسبی که برای شروع با اطمینان مسیر حقوقی خود نیاز دارند، تجهیز کنیم، بنابراین هیچ‌کس بدون حمایت نماند.
                <img
                  alt="Double Quotes Right"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="company-card_doubleQuotesIconRight__2ubaE"
                  style={{ color: 'transparent' }}
                  src="/assets/double-quotes-down-white.svg"
                />
              </div>
              <a className="button_buttonContainer__gCB6U company-card_buttonContainer__cJHyU" href="/en-us/about/company">
                <div className="button_buttonText__1_evT company-card_buttonText__kQ9Yo">شرکت ما</div>
                <div className="button_buttonArrow__75UxD company-card_buttonArrow__ORgAZ">
                  <div className="button_arrowIconWrapperHover__E_U1V">
                    <img
                      alt="arrow-right-white"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="button_arrowIcon__EQvnO"
                      style={{ color: 'transparent' }}
                      src="/assets/arrow-right-white.svg"
                    />
                  </div>
                  <div className="button_arrowIconWrapper__ftquI">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="button_arrowIcon__EQvnO"
                      style={{ color: 'transparent' }}
                      src="/assets/arrow-right-white.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sailing Section - Image Left, Text Right */}
        <section className="about_contentSection about_sailingSection">
          <div className="about_sectionContent">
            <div className="about_sectionTextContainer">
              <h2 className="about_sectionTitle">
                ماجراجویی ما
              </h2>
              <p className="about_sectionDescription">
                تیم LawConnect از افرادی تشکیل شده است که به دنبال نوآوری در صنعت حقوقی هستند و می‌خواهند دسترسی به عدالت را برای همه ممکن سازند.
              </p>
              <a href="/en-us/about/sailing" className="about_sectionLink">
                <span>درباره ماجراجویی ما</span>
                <img src="/assets/arrow-right-blue.svg" alt="arrow" className="about_arrowIcon" />
              </a>
            </div>
            <div className="about_sectionImageContainer">
              <img
                src="/assets/about-sailing.webp"
                alt="Our Journey"
                className="about_sectionImage"
              />
            </div>
          </div>
        </section>

        {/* Careers Section - Image Right, Text Left */}
        <section className="about_contentSection about_careersSection">
          <div className="about_sectionContent">
            <div className="about_sectionTextContainer">
              <h2 className="about_sectionTitle">
                فرصت‌های شغلی
              </h2>
              <p className="about_sectionDescription">
                به تیم ما بپیوندید و در ایجاد آیندهٔ دسترسی به عدالت حقوقی نقش داشته باشید. ما همیشه به دنبال استعدادهای جدید هستیم.
              </p>
              <a href="/careers" className="about_sectionLink">
                <span>مشاهدهٔ فرصت‌های شغلی</span>
                <img src="/assets/arrow-right-blue.svg" alt="arrow" className="about_arrowIcon" />
              </a>
            </div>
            <div className="about_sectionImageContainer">
              <img
                src="/assets/about-careers.webp"
                alt="Careers"
                className="about_sectionImage"
              />
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
                    <div className="styles_title">نیاز به کمک دارید؟</div>
                    <div className="styles_description">سؤال حقوقی خود را از Weekilaw بپرسید تا پاسخ‌های سریع و رایگان دریافت کنید!</div>
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

export default About;