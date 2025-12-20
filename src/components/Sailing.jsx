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
                <span className="styles_breadcrumb styles_bold">قایق‌رانی</span>
              </div>
              <h1 className="styles_heroTitle ">قایق سوپر ماکسی Weekilaw</h1>
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
                قایق سوپر ماکسی Weekilaw به عنوان یکی از رقبای برتر در مسابقه قایق‌رانی Rolex Sydney Hobart، یکی از معتبرترین رویدادهای قایق‌رانی جهان، ظاهر شده است. <br /> <br />
                پس از کسب پیروزی‌های تاریخی متوالی در سال‌های 2023 و 2024، این قایق 100 فوتی که متعلق به کریستیان بک است و توسط او هدایت می‌شود، بر موفقیت‌های پیاپی خود می‌افزاید و تعهد بک به بهبود دسترسی به عدالت را منعکس می‌کند.
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
                    <div className="styles_sailingBG1Description">برنده متوالی افتخارات خط سیدنی به هوبارت.</div>
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
              <div className="styles_headerTitle">متوالی: چگونه Weekilaw هوبارت را فتح کرد</div>
              <div
                className="styles_headerDescription"
                dangerouslySetInnerHTML={{
                  __html:
                    'در جدیدترین مجموعه ما، سفری فراموش‌نشدنی را آغاز کنید که شما را پشت صحنه قایق سوپر ماکسی Weekilaw می‌برد - از آغاز اولیه آن تا پیروزی‌های متوالی افتخارات خط سیدنی به هوبارت در سال‌های 2023 و 2024.<br> <br>بینش‌های انحصاری از خدمه دریافت کنید زیرا آنها پیروزی‌ها، چالش‌ها و اراده محکم را که Weekilaw را به پیروزی رساند، بازگو می‌کنند. این داستانی از تعهد، نوآوری و قایقی است که برای رفتن تا انتها ساخته شده.',
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
                سوپر ماکسی به عنوان سفیر شناور نوآوری عمل می‌کند و تعهد Weekilaw به پیش بردن مرزها هم روی آب و هم بیرون از آن را برجسته می‌کند.
                <br /> <br />
                ادامه سنت افتخارآمیز، هر سال کریستیان بک چند کارمند را به کشتی دعوت می‌کند تا مسابقه را از نزدیک همراه با قایقرانان مشهور جهانی مانند تونی موتر و کریس نیکلسون تجربه کنند.
                <br /> <br />
                این فرصت فرهنگی از همکاری و رشد شخصی را پرورش می‌دهد - که تعهد Weekilaw به غلبه بر چالش‌ها و دستیابی به برتری را منعکس می‌کند.
              </div>
            </div>
          </div>
        </div>

        {/* Need help card */}
        <div className="styles_widthWrapper">
          <div className="styles_container">
            <div className="styles_card">
              <div className="styles_textWrapper">
                <div className="styles_title">کمک به یک مسئله نیاز دارید؟</div>
                <div className="styles_description">سؤال حقوقی خود را از Weekilaw بپرسید تا پاسخ‌های سریع و رایگان دریافت کنید!</div>
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

