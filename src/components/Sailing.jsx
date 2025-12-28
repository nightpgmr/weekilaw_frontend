import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/sailing.css';

const Sailing = () => {
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
                <span className="styles_breadcrumb styles_bold">درباره ویکیلا</span>
              </div>
              <h1 className="styles_heroTitle ">ویکیلا؛ پیشگام عدالت هوشمند در ایران</h1>
            </div>
            <div className="styles_heroImageContainer ">
              <div className="styles_heroImageWrapper">
                <img
                  alt="تصویر قهرمان ۱"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/sailing/sailing-hero-image.webp"
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
                  className="styles_heroIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/sailing/hero-icon.svg"
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

        {/* Stacked card banner */}
        <div className="styles_imageWidthWrapper">
          <div className="styles_stackedCardWrapper" style={{ '--text-height': '440px', '--card-image-height': '440px' }}>
            <div className="styles_container styles_stackedCardContainer">
              <img
                alt="Lawyer"
                loading="lazy"
                width="0"
                height="0"
                className="styles_lawyerImage styles_useAnimation styles_startAnimation"
                style={{ color: 'transparent' }}
                src="/assets/sailing/sailing-bg-1.webp"
              />
              <div className="styles_textPostiion styles_useAnimation styles_startAnimation">
                <h1 className="styles_textContainer styles_textContainer">
                  <div className="styles_sailingBG1Container">
                    <div className="styles_back2backWreathContainer">
                      <div className="styles_wreathContainer">
                        <img
                          alt="Wreath Icon"
                          loading="lazy"
                          width="0"
                          height="0"
                          className="styles_sailingBG1Icon"
                          style={{ color: 'transparent' }}
                          src="/assets/sailing/wreath.svg"
                        />
                        <div className="styles_wreathText">2023</div>
                      </div>
                      <div className="styles_wreathContainer">
                        <img
                          alt="Wreath Icon"
                          loading="lazy"
                          width="0"
                          height="0"
                          className="styles_sailingBG1Icon"
                          style={{ color: 'transparent' }}
                          src="/assets/sailing/wreath.svg"
                        />
                        <div className="styles_wreathText">2024</div>
                      </div>
                    </div>
                    <div className="styles_sailingBG1Description">افتخارات ویکیلا</div>
                  </div>
                  <img
                    alt="Stacked BG Icon"
                    loading="lazy"
                    width="0"
                    height="0"
                    className="styles_stackedBGIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/sailing/hero-icon.svg"
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Story + CTA */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_headerDescriptionContainer">
              <div className="styles_headerTitle">افتخارات ویکیلا</div>
              <div
                className="styles_headerDescription"
                dangerouslySetInnerHTML={{
                  __html:
                    'ویکیلا به‌عنوان یکی از پیشگامان فناوری حقوقی کشور، موفق شده است:<br><br>• هزاران کاربر را در مسیر صحیح قانونی هدایت کند<br>• در کاهش اطاله دادرسی نقش مؤثر داشته باشد<br>• دسترسی به دانش حقوقی را برای عموم مردم ساده و رایگان کند<br>• فرهنگ مراجعه آگاهانه حقوقی را توسعه دهد',
                }}
              />
              <a className="styles_watchLink" href="https://www.youtube.com/@asklawconnect" target="_blank" rel="noreferrer">
                <span>مجموعه را همین حالا ببینید</span>
                <div className="styles_watchArrowIconContainer">
                  <img
                    alt="آیکون فلش راست"
                    loading="lazy"
                    width="0"
                    height="0"
                    className="styles_watchArrowIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/sailing/arrow-right-blue.svg"
                  />
                  <img
                    alt="آیکون فلش راست"
                    loading="lazy"
                    width="0"
                    height="0"
                    className="styles_watchArrowIconHover"
                    style={{ color: 'transparent' }}
                    src="/assets/sailing/arrow-right-midnight.svg"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Livestream */}
        <div className="styles_imageWidthWrapper">
          <div className="styles_livestreamContainer">
            <div className="styles_livestream">
              <iframe
                src="https://www.youtube.com/embed/W2hn4AFZM6A?si=HnB_BWrA1oW8xSJq&list=PL-Y0_sMgjCadwQTAjXF95E-1m3Svx3A3i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Outro copy */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                <strong>تعهد ما به عدالت</strong><br /><br />
                ویکیلا متعهد است:<br /><br />
                • محرمانگی اطلاعات حقوقی کاربران را حفظ کند<br />
                • از ارائه اطلاعات نادرست یا گمراه‌کننده پرهیز کند<br />
                • مسیر قانونی را شفاف و قابل فهم برای عموم مردم ارائه دهد<br />
                • هیچ‌گاه منافع تجاری را بر عدالت مقدم نداند
              </div>
            </div>
          </div>
        </div>

        {/* Need help card */}
        <div className="styles_widthWrapper">
          <div className="styles_container">
            <div className="styles_card">
              <div className="styles_textWrapper">
                <div className="styles_title">ویکیلا یک برند ملی است</div>
                <div className="styles_description">همان‌گونه که برندهای بزرگ ملی پرچم کیفیت و اعتماد کشور خود هستند،<br />ویکیلا نیز خود را پرچم‌دار عدالت هوشمند و دسترسی عمومی به حقوق قانونی مردم ایران می‌داند.</div>
              </div>
              <div className="styles_imageWrapper">
                <a
                  href="/chat"
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
                        src="/assets/sailing/arrow-right-blue.svg"
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
                        src="/assets/sailing/arrow-right-white.svg"
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
    </PageLayout>
  );
};

export default Sailing;

