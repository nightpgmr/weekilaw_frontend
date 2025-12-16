import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/careers.css';

const Careers = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        {/* Hero */}
        <div className="styles_heroContainer ">
          <div className="styles_innerWidthWrapper ">
            <div className="styles_heroTitleContainer">
              <div className="styles_breadcrumbsContainer">
                <a href="/en-us/about" className="styles_breadcrumb ">
                  درباره
                </a>
                <span className="styles_breadcrumb ">&nbsp;/&nbsp;</span>
                <span className="styles_breadcrumb styles_bold">فرصت‌های شغلی</span>
              </div>
              <h1 className="styles_heroTitle ">مکانی ارزشمند برای کار و رشد</h1>
            </div>
            <div className="styles_heroImageContainer ">
              <div className="styles_heroImageWrapper">
                <img
                  alt="Hero"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/careers/careers-hero-image.webp"
                />
              </div>
            </div>
            <div className="styles_heroIconWrapper">
              <div className="styles_heroIconContainer">
                <img
                  alt="Hero BG Icon"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/careers/hero-icon.svg"
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
                در LawConnect، ما آینده فناوری حقوقی را شکل می‌دهیم. ما محیط کاری همکاری‌آمیز، نوآورانه و انعطاف‌پذیر ارائه می‌دهیم که در آن می‌توانید تأثیر واقعی داشته باشید. با ما رشد کنید زیرا استانداردهای جدیدی در هوش مصنوعی حقوقی تعیین می‌کنیم و دسترسی به عدالت را بهبود می‌بخشیم.
                <br />
                <br />
                انتظار کار معنادار، تیم پویا و مزایای عالی برای حفظ انگیزه شما داشته باشید. اگر به فناوری و ایجاد تفاوت علاقه‌مند هستید، دوست داریم از شما بشنویم.
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="styles_imageWidthWrapper">
          <div>
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/careers/careers-image-1.webp" />
              <source media="(min-width: 769px)" srcSet="/assets/careers/careers-image-1.webp" />
              <img
                alt="Careers"
                loading="lazy"
                width="0"
                height="0"
                className="styles_careersImage"
                style={{ color: 'transparent', width: '100%', height: 'auto' }}
                src="/assets/careers/careers-image-1.webp"
              />
            </picture>
          </div>
        </div>

        {/* Closing copy + CTA */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                ما همیشه به دنبال افرادی پرشوق هستیم که به قدرت هوش مصنوعی و فناوری حقوقی اعتقاد دارند. اگر تناسبی کامل نمی‌بینید اما فکر می‌کنید می‌توانید تأثیرگذار باشید، رزومه خود را برای ما ارسال کنید - ما همیشه به استعدادهای عالی باز هستیم.
              </div>
            </div>
            <div className="styles_buttonContainer">
              <a className="button_buttonContainer " href="/en-us/about/company">
                <div className="button_buttonText styles_buttonText">تماس با ما</div>
                <div className="button_buttonArrow ">
                  <div className="button_arrowIconWrapperHover ">
                    <img
                      alt="arrow-right-white"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/careers/arrow-right-blue.svg"
                    />
                  </div>
                  <div className="button_arrowIconWrapper ">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/careers/arrow-right-blue.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;

