import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/company.css';

const Company = () => {
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
                <span className="styles_breadcrumb styles_bold">شرکت</span>
              </div>
              <h1 className="styles_heroTitle ">تبدیل دسترسی به عدالت</h1>
            </div>
            <div className="styles_heroImageContainer ">
              <div className="styles_heroImageWrapper">
                <img
                  alt="Hero Image 1"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/company/about-hero-image.webp"
                />
              </div>
              <div className="styles_heroImageIconContainer">
                <img
                  alt="Logo Icon"
                  loading="lazy"
                  width="80"
                  height="80"
                  className="styles_heroIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/company/logo-icon.svg"
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
                  src="/assets/company/hero-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_missionStatementContainer">
              <div className="styles_missionStatement">
                <img
                  alt="Double Quotes Left"
                  loading="lazy"
                  width="24"
                  height="24"
                  className="styles_doubleQuotesIconLeft"
                  style={{ color: 'transparent' }}
                  src="/assets/company/double-quotes.svg"
                />
                مأموریت ما این است که همه را با ابزارها و اطلاعات مناسبی که برای شروع سفر حقوقی خود با اطمینان نیاز دارند، مجهز کنیم، بنابراین هیچ‌کس بدون حمایت رها نشود.
                <img
                  alt="Double Quotes Right"
                  loading="lazy"
                  width="24"
                  height="24"
                  className="styles_doubleQuotesIconRight"
                  style={{ color: 'transparent' }}
                  src="/assets/company/double-quotes-down.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stacked card */}
        <div className="styles_stackedCardWrapper" style={{ '--text-height': '440px', '--card-image-height': '440px' }}>
          <div className="styles_container styles_noMargin">
            <img
              alt="Lawyer"
              loading="lazy"
              width="0"
              height="0"
              className="styles_lawyerImage styles_useAnimation styles_startAnimation"
              style={{ color: 'transparent' }}
              src="/assets/company/about-christian.webp"
            />
            <div className="styles_textPostiion styles_useAnimation styles_startAnimation">
              <h1 className="styles_textContainer ">
                <div>ما متعهد هستیم که به همه کمک کنیم منابع حقوقی مورد نیاز خود را پیدا کنند.</div>
                <img
                  alt="Stacked BG Icon"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_stackedBGIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/company/hero-icon.svg"
                />
              </h1>
            </div>
          </div>
        </div>

        {/* Purpose text */}
        <div className="styles_innerWidthWrapper">
          <div className="styles_purposeText">
            LawConnect توسط کارآفرین فناوری حقوقی کریستیان بک تأسیس شده و شکاف بین افراد عادی که با چالش‌های حقوقی مواجه هستند و وکلایی که می‌توانند کمک کنند را پر می‌کند.
            <br />
            <br />
            با ارائه پاسخ‌های مبتنی بر هوش مصنوعی به سؤالات حقوقی شما و ارائه گزینه صحبت مستقیم با وکیل هنگامی که نیاز به کمک بیشتر دارید، اطمینان می‌دهیم که هیچ‌کس بدون حمایت رها نشود. مأموریت ما توانمندسازی شما با منابع حقوقی قابل دسترس و اطمینان از اینکه عدالت یک حق اساسی برای همه باقی می‌ماند.
          </div>
        </div>

        {/* Stats */}
        <div className="styles_largerInnerWidthWrapper styles_noMargin">
          <div className="stats_statsContainer ">
            <div className="stats_statsWrapper">
              <img
                alt="Stats Circle"
                loading="lazy"
                width="1000"
                height="1000"
                className="stats_statsCircle"
                style={{ color: 'transparent' }}
                src="/assets/company/about-stats-circle.svg"
              />
              <img
                alt="Stats Icon"
                loading="lazy"
                width="360"
                height="360"
                className="stats_statsLogoIcon"
                style={{ color: 'transparent' }}
                src="/assets/company/logo-icon.svg"
              />
              <div className="stats_statsCard">
                <img
                  alt="User"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="stats_statsIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/company/user-white.svg"
                />
                <div className="stats_statsTitle" style={{ '--number': 94903, '--transition-duration': '1000ms' }}></div>
                <div className="stats_statsDescription">Unique user accounts</div>
              </div>
              <div className="stats_statsCard">
                <img
                  alt="Briefcase"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="stats_statsIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/company/briefcase-white.svg"
                />
                <div className="stats_statsTitle" style={{ '--number': 126332, '--transition-duration': '1000ms' }}></div>
                <div className="stats_statsDescription">Cases created</div>
              </div>
              <div className="stats_statsCard">
                <img
                  alt="Chat Tick"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="stats_statsIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/company/chat-tick-white.svg"
                />
                <div className="stats_statsTitle" style={{ '--number': 682193, '--transition-duration': '1000ms' }}></div>
                <div className="stats_statsDescription">Answers provided</div>
              </div>
            </div>
          </div>
        </div>

        {/* Empowering highlights */}
        <div className="styles_largerInnerWidthWrapper">
          <div className="styles_legalInsightsContainer">
            <div className="styles_subTitle">Empowering your path to justice</div>
            <div className="triple-highlight_cardStackContainer   " style={{ '--card-shared-height': '248px' }}>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Accessible-0"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/phone-blue.svg"
                />
                <div className="triple-highlight_itemCardTitle ">قابل دسترسی</div>
                <div className="triple-highlight_itemCardDescription ">
                  ما اطمینان می‌دهیم که اطلاعات حقوقی جامع به صورت رایگان برای همه در دسترس است و به افراد امکان می‌دهد تا به طور مؤثر به سؤالات حقوقی خود پاسخ دهند.
                </div>
              </div>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Transformative-1"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/stair-blue.svg"
                />
                <div className="triple-highlight_itemCardTitle ">تحول‌آفرین</div>
                <div className="triple-highlight_itemCardDescription ">
                  با اتصال افراد به وکلای با تجربه، شکاف بین کسانی که به دنبال کمک هستند و متخصصان را پر می‌کنیم و متعهد هستیم که عدالت را به یک حق اساسی تبدیل کنیم.
                </div>
              </div>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Empowering-2"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/lightning-blue.svg"
                />
                <div className="triple-highlight_itemCardTitle ">Empowering</div>
                <div className="triple-highlight_itemCardDescription ">
                  Our user-friendly interfaces enable users to navigate complex issues and make informed legal decisions.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage image */}
        <div className="styles_largerInnerWidthWrapper styles_noMargin">
          <div className="styles_usageContainer">
            <img
              alt="usage"
              loading="lazy"
              width="100"
              height="100"
              className="styles_usageImage"
              style={{ color: 'transparent' }}
              src="/assets/company/about-usage.webp"
            />
          </div>
        </div>

        {/* Foundation highlights */}
        <div className="styles_foundationContainer">
          <div className="styles_foundationContainerInner">
            <div className="styles_subTitle">
              چه چیزی مأموریت ما را برای کمک به مردم عادی در برداشتن اولین قدم به سوی حمایت حقوقی هدایت می‌کند
            </div>
            <div className="triple-highlight_cardStackContainer   " style={{ '--card-shared-height': '248px' }}>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Innovation-0"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/spark-blue.svg"
                />
                <div className="triple-highlight_itemCardTitle ">نوآوری</div>
                <div className="triple-highlight_itemCardDescription ">
                  ما از فناوری پیشرفته هوش مصنوعی استفاده می‌کنیم تا نحوه یافتن و دسترسی مردم به اطلاعات حقوقی را متحول کنیم.
                </div>
              </div>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Inclusivity-1"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/users-blue.svg"
                />
                <div className="triple-highlight_itemCardTitle ">شمول</div>
                <div className="triple-highlight_itemCardDescription ">
                  ما با ارائه اطلاعات به موقع، شخصی‌سازی شده و دسترسی آسان به وکلا، موانع حمایت حقوقی را برمی‌داریم و اطمینان می‌دهیم که همه، صرف نظر از پیشینه یا شرایط خود، می‌توانند کمک مورد نیاز خود را دریافت کنند.
                </div>
              </div>
              <div className="triple-highlight_itemCardContainer ">
                <img
                  alt="triple-highlight-Quality-2"
                  loading="lazy"
                  width="100"
                  height="100"
                  className="triple-highlight_itemCardIcon "
                  style={{ color: 'transparent' }}
                  src="/assets/company/shield-tick.svg"
                />
                <div className="triple-highlight_itemCardTitle ">کیفیت</div>
                <div className="triple-highlight_itemCardDescription ">
                  ما اطمینان می‌دهیم که دستیار هوش مصنوعی ما اطلاعات مرتبط، به روز و جامع ارائه می‌دهد، با مسیر واضحی برای اتصال به وکیل برای راهنمایی شخصی‌سازی شده‌تر.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Need help */}
        <div className="styles_container">
          <div className="styles_card">
            <div className="styles_textWrapper">
              <div className="styles_title">Need help with an issue?</div>
              <div className="styles_description">Ask LawConnect your legal question for quick, free answers!</div>
            </div>
            <div className="styles_imageWrapper">
              <a
                href="/chat"
                className="styles_buttonWrapper styles_startCaseButton"
                style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
              >
                <div className="styles_buttonText">Start now</div>
                <div className="styles_buttonArrow">
                  <div className="styles_arrowIconWrapperHover">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="styles_arrowIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/company/arrow-right-blue.svg"
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
                      src="/assets/company/arrow-right-white.svg"
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
    </PageLayout>
  );
};

export default Company;

