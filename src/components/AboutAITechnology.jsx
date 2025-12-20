import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/aiTech.css';

const AboutAITechnology = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        <div className="styles_pageGapWrapper">
          <div className="page-header_helpTitleContainer styles_heroClass">
            <div className="page-header_widthWrapper">
              <div className="page-header_innerWidthWrapper styles_heroInnerClassName">
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClass">
                    <a href="/en-us/about">درباره</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClass">
                    &nbsp;/&nbsp;
                    <a href="/en-us/about/ai-technology">فناوری هوش مصنوعی ما</a>
                  </span>
                </div>
                <h1 className="page-header_title styles_headerClass">قدرت هوش مصنوعی پیشرفته را به کار می‌گیرد</h1>
                <div className="page-header_heroIconContainer">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    loading="lazy"
                    className="page-header_heroIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="styles_introContainer">
            <div className="styles_widthWrapper">
              <div className="styles_innerWidthWrapper">
                <div className="intro_introBackgroundContainer">
                  <img
                    alt="AI Technology Background"
                    loading="lazy"
                    className="intro_introBackgroundImage"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/background-ai-tech.webp"
                  />
                </div>
                <div className="intro_introDescription">
                  دستیار حقوقی هوش مصنوعی ما پاسخ‌های آسان‌فهم و شخصی‌سازی شده‌ای به سؤالات حقوقی شما ارائه می‌دهد.
                  اگر نیاز به مشاوره حرفه‌ای دارید، Weekilaw پیدا کردن وکیل مناسب را ساده می‌کند.
                </div>

                <div className="intro_triCardStackContainer">
                  <div className="intro_triCardStackContainerInner">
                    <div
                      className="triple-highlight_cardStackContainer triple-highlight_noBackground"
                      style={{ '--card-shared-height': '296px' }}
                    >
                      <div className="triple-highlight_itemCardContainer intro_itemCardClassName">
                        <img
                          alt="triple-highlight-Quality Data-0"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/stair-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">داده‌های باکیفیت</div>
                        <div className="triple-highlight_itemCardDescription intro_itemCardDescriptionClassName">
                          هوش مصنوعی ما بر روی هزاران مسئله حقوقی عمومی و قوانین محلی مربوطه آموزش دیده است.
                          این سیستم برای ارائه اطلاعات مفید و مرتبط طراحی شده تا بتوانید وضعیت خود را بهتر درک کنید.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer intro_mainItemCardClassName">
                        <img
                          alt="triple-highlight-Intelligent Processing-1"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/light-bulb-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">پردازش هوشمند</div>
                        <div className="triple-highlight_itemCardDescription intro_mainItemCardDescriptionClassName">
                          هوش مصنوعی ما از پاسخ‌های چت و پرسشنامه شما استفاده می‌کند تا بینش‌های واضح و مرتبط ارائه دهد. اگر تصمیم به دریافت مشاوره حرفه‌ای بگیرید، Weekilaw پیدا کردن وکیل مناسب را آسان می‌کند.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer intro_itemCardClassName">
                        <img
                          alt="triple-highlight-Simple to Use-2"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/message-circle.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">ساده در استفاده</div>
                        <div className="triple-highlight_itemCardDescription intro_itemCardDescriptionClassName">
                          در خانه یا در حین حرکت، هوش مصنوعی ما سؤالات پیگیری ساده‌ای می‌پرسد تا مسئله شما را درک کند و گزارشی شخصی‌سازی شده ارائه می‌دهد تا به شما کمک کند مراحل بعدی خود را هدایت کنید.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="styles_needLawyerContainer">
            <div className="need-lawyer-card_wrapperContainer">
              <div className="need-lawyer-card_widthWrapper">
                <div className="need-lawyer-card_contentContainer need-lawyer-card_left">
                  <div className="need-lawyer-card_imageWrapper">
                    <img
                      alt="need-a-lawyer-image"
                      loading="lazy"
                      className="need-lawyer-card_image"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/need-a-lawyer-desktop.webp"
                    />
                  </div>
                  <div className="need-lawyer-card_imagePositionWrapper">
                    <div className="need-lawyer-card_imageTextContainer">
                      <div className="need-lawyer-card_imageTextHeader">کمک به شما برای یافتن وکیل مناسب</div>
                      <div className="need-lawyer-card_imageTextDescription">
                        ما به شما کمک می‌کنیم تا متخصص حقوقی مناسب را از شبکه گسترده وکلای ما پیدا کنید و اتصال با وکیلی که برای موقعیت شما مناسب است را آسان می‌کنیم.
                      </div>
                      <div className="need-lawyer-card_imageTextButton">
                        <a className="button_buttonContainer need-lawyer-card_buttonContainer" href="/en-us/about/legal-network">
                          <div className="button_buttonText need-lawyer-card_buttonText">شبکه حقوقی ما</div>
                          <div className="button_buttonArrow">
                            <div className="button_arrowIconWrapperHover">
                              <img
                                alt="arrow-right-white"
                                loading="lazy"
                                width="16"
                                height="16"
                                className="button_arrowIcon"
                                style={{ color: 'transparent' }}
                                src="/assets/ai-tech/arrow-right-blue.svg"
                              />
                            </div>
                            <div className="button_arrowIconWrapper">
                              <img
                                alt="arrow-right"
                                loading="lazy"
                                width="16"
                                height="16"
                                className="button_arrowIcon"
                                style={{ color: 'transparent' }}
                                src="/assets/ai-tech/arrow-right-blue.svg"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="need-lawyer-card_imageWrapper">
                    <img
                      alt="need-a-lawyer-image"
                      loading="lazy"
                      className="need-lawyer-card_image"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/need-a-lawyer-desktop.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="styles_statsContainer">
            <div className="styles_statsContainerInner">
              <div className="stats_statsContainer">
                <div className="stats_statsWrapper">
                  <img
                    alt="Stats Circle"
                    loading="lazy"
                    className="stats_statsCircle"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/about-stats-circle.svg"
                  />
                  <img
                    alt="Stats Icon"
                    loading="lazy"
                    className="stats_statsLogoIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/logo-icon.png"
                  />
                  <div className="stats_statsCard">
                    <img
                      alt="User"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/user-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">حساب‌های کاربری منحصر به فرد</div>
                  </div>
                  <div className="stats_statsCard">
                    <img
                      alt="Briefcase"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/briefcase-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">پرونده‌های ایجاد شده</div>
                  </div>
                  <div className="stats_statsCard">
                    <img
                      alt="Chat Tick"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/chat-tick-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">پاسخ‌های ارائه شده</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="styles_fileAnalysisContainer">
            <div className="styles_widthWrapper">
              <div className="styles_innerWidthWrapper">
                <div className="file-analysis_fileHeader">
                  هوش مصنوعی ما می‌تواند فایل‌ها را تحلیل کند و اسنادی تولید کند که می‌توانید از آنها برای تصمیم‌گیری آگاهانه استفاده کنید
                </div>
                <div className="file-analysis_triCardStackContainer">
                  <div className="file-analysis_triCardStackContainerInner">
                    <div
                      className="triple-highlight_cardStackContainer triple-highlight_noBackground"
                      style={{ '--card-shared-height': '272px' }}
                    >
                      <div className="triple-highlight_itemCardContainer file-analysis_itemCardClassName">
                        <img
                          alt="triple-highlight-File analysis-0"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/attachment-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">تحلیل فایل</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_itemCardDescriptionClassName">
                          هوش مصنوعی ما می‌تواند فایل‌های آپلود شده در موتور چت را تفسیر کند. این می‌تواند به کوتاه کردن فرآیند چت کمک کند یا به سادگی زمینه‌ای برای حمایت از پرونده شما اضافه کند.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer file-analysis_mainItemCardClassName">
                        <img
                          alt="triple-highlight-Deeper insights-1"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/search-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">بینش‌های عمیق‌تر</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_mainItemCardDescriptionClassName">
                          با ساختن بر روی گزارش استاندارد، ما یک گزارش تفصیلی با بینش‌های عمیق‌تر تولید می‌کنیم. این شامل پاسخ‌های مفصل‌تر، اقدامات کلیدی، استراتژی‌های مختلف و تحلیل ریسک است.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer file-analysis_itemCardClassName">
                        <img
                          alt="triple-highlight-Standard report-2"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/file-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">گزارش استاندارد</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_itemCardDescriptionClassName">
                          کاربران هنگامی که پرونده‌ای ایجاد می‌کنند، گزارشی دریافت می‌کنند. این شامل خلاصه‌ای، پاسخ‌های سفارشی به سؤالات آنها و مجموعه‌ای از مراحل بعدی احتمالی است.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

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
      </div>
    </PageLayout>
  );
};

export default AboutAITechnology;


