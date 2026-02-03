import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/legalNetwork.css';

const LegalNetwork = () => {
  const lawyerCards = [
    { name: 'Lilit Chakman', firm: 'Miltons Lawyers', specialization: 'Commercial law', image: '/assets/legal-network/miltons-lawyers-lilit-chakman.jpg' },
    { name: 'Kayte Lewis', firm: 'Voice Lawyers', specialization: 'Employment law', image: '/assets/legal-network/voice-lawyers-kayte-lewis.jpg' },
    { name: 'David Lechem', firm: 'AGEIS', specialization: 'املاک و وصیت‌نامه', image: '/assets/legal-network/ageis-david-lechem.jpg' },
    { name: 'Tash Nolan', firm: 'Nolan Lawyers', specialization: 'Family law', image: '/assets/legal-network/nolan-lawyers-tash-nolan.jpg' },
    { name: 'Saurabh Smar', firm: 'Northam Lawyers', specialization: 'Immigration', image: '/assets/legal-network/northam-lawyers-saurabh-smar.jpg' },
    { name: 'Thomas Bassil', firm: 'Finn Roache', specialization: 'Litigation', image: '/assets/legal-network/finn-roache-thomas-bassil.jpg' },
  ];

  const advantages = [
    { image: '/assets/legal-network/legal-professionals.webp', description: 'ارتباط با متخصصان حقوقی واجد شرایط با تخصص اثبات شده' },
    { image: '/assets/legal-network/specialised-knowledge.webp', description: 'دانش تخصصی در زمینه‌های مختلف حقوقی' },
    { image: '/assets/legal-network/geographic-coverage.webp', description: 'پوشش جغرافیایی گسترده، تضمین می‌کند که وکیلی در محل مورد نیاز شما وجود داشته باشد' },
    { image: '/assets/legal-network/document-sharing.webp', description: 'اشتراک‌گذاری یکپارچه اسناد با تیم حقوقی شما' },
    { image: '/assets/legal-network/consistent-communication.webp', description: 'ارتباط مداوم از طریق پلتفرم امن ما' },
  ];

  return (
    <PageLayout>
      <div className="layout_content">
        <div className="legal-network-content_pageGapWrapper">
          {/* Hero */}
          <div className="page-header_helpTitleContainer legal-network-content_heroClass">
            <div className="page-header_widthWrapper">
              <div className="page-header_innerWidthWrapper legal-network-content_heroInnerClassName">
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem">
                    <a href="/about">درباره</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem">
                    {' / '}
                    <a href="/about/legal-network">شبکه حقوقی ما</a>
                  </span>
                </div>
                <h1 className="page-header_title">شبکه وکلای مورد اعتماد ما</h1>
                <div className="page-header_heroIconContainer">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    loading="lazy"
                    className="page-header_heroIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="legal-network-content_introContainer">
            <div className="legal-network-content_widthWrapper">
              <div className="legal-network-content_innerWidthWrapper legal-network-content_introInnerWidthWrapper">
                <div className="intro_introHeaderContainer">
                  <h2 className="intro_introHeader">اتصال شما با وکلای مورد اعتماد برای مشاوره تخصصی</h2>
                </div>
                <div className="intro_introLawyersImageContainer">
                  <div className="intro_introImageContainer">
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage intro_desktop"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-desktop.webp"
                    />
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage intro_tablet"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-tablet.webp"
                    />
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage intro_mobile"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-mobile.webp"
                    />
                  </div>
                </div>
                <div className="intro_introDescription">
                  Weekilaw افتخار می‌کند که به کاربران خود دسترسی به شبکه‌ای از متخصصان حقوقی واجد شرایط ارائه می‌دهد. هنگامی که چالش‌های حقوقی پیش می‌آید، شما شایسته راهنمایی حرفه‌ای از وکلای با تجربه‌ای هستید که نیازهای خاص شما را درک می‌کنند.
                </div>
              </div>
            </div>
          </div>

          {/* Legal practitioners */}
          <div className="legal-practitioners_legalPractitionersContainer">
            <div className="legal-practitioners_headerContainer">
              <h2 className="legal-practitioners_headerTitle">به هزاران متخصص در شبکه ما بپیوندید</h2>
            </div>
            <div className="stacked-card_stackedCardWrapper">
              <div className="stacked-card_container legal-practitioners_noMargin">
                <div className="stacked-card_lawyerImageWrapper">
                  <img
                    alt="Lawyer"
                    loading="lazy"
                    className="stacked-card_lawyerImage legal-practitioners_lawyerImage"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/logo.webp"
                  />
                </div>
                <div className="stacked-card_textPosition legal-practitioners_textPosition">
                  <h1 className="stacked-card_textContainer legal-practitioners_textContainer">
                    <div className="legal-practitioners_commitmentCard">۳۰,۰۰۰+ متخصص حقوقی</div>
                  </h1>
                </div>
              </div>
            </div>

            <div className="legal-practitioners_lawyerCarouselContainer">
              <div className="lawyer-carousel_lawyerCarouselContainer">
                <div className="lawyer-carousel_carouselContainerWrapper">
                  <div className="lawyer-carousel_carouselContainer">
                    <div className="rfm-marquee-container" style={{ '--width': '100%', '--transform': 'none', '--pause-on-hover': 'running' }}>
                      <div className="rfm-marquee" style={{ '--play': 'running', '--direction': 'normal', '--duration': '40s', '--delay': '0s', '--iteration-count': 'infinite', '--min-width': '100%' }}>
                        <div className="rfm-initial-child-container">
                          {lawyerCards.concat(lawyerCards).map((card, idx) => (
                            <div className="rfm-child" key={`${card.name}-${idx}`} style={{ '--transform': 'none' }}>
                              <div className="lawyer-carousel_lawyerCard">
                                <div className="lawyer-carousel_profileImageContainer">
                                  <img
                                    alt={card.name}
                                    loading="lazy"
                                    className="lawyer-carousel_profileImage"
                                    src={card.image}
                                    style={{ color: 'transparent' }}
                                  />
                                </div>
                                <div className="lawyer-carousel_lawyerInfoContainer">
                                  <h3 className="lawyer-carousel_lawyerName">{card.name}</h3>
                                  <p className="lawyer-carousel_firmName">{card.firm}</p>
                                </div>
                                <p className="lawyer-carousel_specialisation">{card.specialization}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lawyer-carousel_buttonContainer">
                  <a className="button_buttonContainer lawyer-carousel_button" href="https://app.weekilaw.com" target="_blank" rel="noopener noreferrer">
                    <div className="button_buttonText lawyer-carousel_buttonText">به شبکه ما بپیوندید</div>
                    <div className="button_buttonArrow lawyer-carousel_buttonArrow">
                      <div className="button_arrowIconWrapperHover">
                        <img
                          alt="arrow-right-white"
                          loading="lazy"
                          width="16"
                          height="16"
                          className="button_arrowIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/legal-network/arrow-right-blue.svg"
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
                          src="/assets/legal-network/arrow-right-blue.svg"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* World map */}
          <div className="world-map_worldMapSection">
            <div className="world-map_mapContainer">
              <div>
                <picture>
                  <source srcSet="/assets/legal-network/world-map-desktop.webp" media="(min-width: 1185px)" className="world-map_worldMapImage" />
                  <source srcSet="/assets/legal-network/world-map-desktop.webp" className="world-map_worldMapImage" />
                  <img src="/assets/legal-network/world-map-desktop.webp" alt="Lawyers" className="world-map_worldMapImage" />
                </picture>
              </div>
              <div className="world-map_descriptionContainer">
                <div className="world-map_description">
                  ما به مردم کمک می‌کنیم تا به اطلاعات حقوقی مربوطه در سراسر جهان دسترسی پیدا کنند،<br />
                  و اتصالات وکلا را در استرالیا و انگلستان تسهیل می‌کنیم، با مناطق بیشتری که به زودی می‌آید.
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="legal-network-content_howItWorksContainer">
            <div className="how-it-works_container">
              <div className="how-it-works_container">
                <div className="how-it-works_stepsWrapper">
                  <div className="how-it-works_titleContainer how-it-works_titleContainer">
                    <h2 className="how-it-works_title how-it-works_title">چگونه یافتن کمک حقوقی را آسان‌تر می‌کنیم</h2>
                    <p className="how-it-works_description how-it-works_description">
                      Weekilaw به شما دسترسی به وکلای مورد اعتماد با تجربه و دانش محلی برای کمک به موضوع حقوقی شما می‌دهد. این فرآیند ساده است:
                    </p>
                  </div>
                  <div className="how-it-works_stepsContainer">
                    {[
                      {
                        title: 'وضعیت خود را توصیف کنید',
                        desc: "با شرح مسئله حقوقی خود شروع کنید، می‌توانید چیزها را با کلمات خودتان توضیح دهید، بدون نگرانی از اصطلاحات حقوقی. هر چه که تجربه می‌کنید، Weekilaw اینجا است تا کمک کند.",
                        desktop: '/assets/legal-network/how-it-works-step1-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step1-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step1-mobile.webp',
                      },
                      {
                        title: 'اطلاعات هوش مصنوعی شخصی‌سازی شده دریافت کنید',
                        desc: "Weekilaw اطلاعات واضح و عملی و مراحل بعدی را بر اساس وضعیت شما ارائه می‌دهد. شما راهنمایی آسان‌فهمی دریافت خواهید کرد تا در مورد گزینه‌های خود و آنچه باید در ادامه انجام دهید، اعتماد به نفس بیشتری داشته باشید.",
                        desktop: '/assets/legal-network/how-it-works-step2-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step2-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step2-mobile.webp',
                      },
                      {
                        title: 'با وکیل ارتباط برقرار کنید',
                        desc: "اگر وضعیت شما نیاز به مشاوره حقوقی تخصصی دارد، می‌توانیم شما را با وکیلی مورد اعتماد از شبکه خود متصل کنیم. شما می‌توانید به سرعت و به راحتی کمک حرفه‌ای دریافت کنید، بنابراین می‌توانید در هر مرحله از راه کاملاً حمایت شده احساس کنید.",
                        desktop: '/assets/legal-network/how-it-works-step3-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step3-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step3-mobile.webp',
                      },
                    ].map((item, idx) => (
                      <div className={`how-it-works_step ${idx === 1 ? 'how-it-works_step2' : ''}`} key={item.title}>
                        <div className="how-it-works_imageWrapper">
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage how-it-works_desktop" style={{ color: 'transparent' }} src={item.desktop} />
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage how-it-works_tablet" style={{ color: 'transparent' }} src={item.tablet} />
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage how-it-works_mobile" style={{ color: 'transparent' }} src={item.mobile} />
                        </div>
                        <div className="how-it-works_stepContent">
                          <h3 className="how-it-works_stepTitle">{item.title}</h3>
                          <p className="how-it-works_stepDescription">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="how-it-works_disclaimer">
                اگر تصمیم به مشاوره با وکیلی متصل بگیرید، آنها هزینه‌های خود را از قبل توضیح خواهند داد.<br />
                هر توافقی بین شما و وکیل است، نه Weekilaw
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="legal-network-content_advantagesContainer">
            <div className="advantages_widthWrapper">
              <div className="advantages_carouselContainer">
                <div className="advantages_titleContainer">
                  <h2 className="advantages_title">مزیت شبکه ما</h2>
                </div>
                <div className="advantages_descriptionContainer">
                  <p className="advantages_description">کاربران Weekilaw از موارد زیر بهره‌مند می‌شوند:</p>
                </div>
                <div className="styles-module__container advantages_carouselWrapper">
                  <div className="styles-module__cardsContainer">
                    <div className="styles-module__cards advantages_cardsContainer" style={{ gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))' }}>
                      {advantages.map((adv) => (
                        <div className="advantages_gridItem" key={adv.description}>
                          <div className="advantages_categoryImageContainer">
                            <img alt="advantage" loading="lazy" className="advantages_categoryImage" src={adv.image} style={{ color: 'transparent' }} />
                          </div>
                          <div className="advantages_categoryDescription" dangerouslySetInnerHTML={{ __html: `<b>${adv.description.split('.')[0]}</b>${adv.description.includes(' with ') ? adv.description.slice(adv.description.indexOf(' with ')) : ''}` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="styles-module__actionBar advantages_actionBarWrapper">
                    <div className="styles-module__scrollBar">
                      <div className="styles-module__scrolledPosition" style={{ width: '50%', left: '0%' }}></div>
                    </div>
                    <div className="styles-module__actionButtonContainer advantages_arrowButtonContainer">
                      <button className="styles-module__actionButton" disabled>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                          <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                        </svg>
                      </button>
                      <button className="styles-module__actionButton">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                          <path d="M7.64644 3.35355C7.55596 3.26306 7.5 3.13807 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.14045 2.5 8.26737 2.55791 8.35819 2.65115L13.3489 7.64181C13.4421 7.73263 13.5 7.85955 13.5 8C13.5 8.14045 13.4421 8.26737 13.3489 8.35819L8.35819 13.3489C8.26737 13.4421 8.14045 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.8619 7.55596 12.7369 7.64644 12.6465L11.7928 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H11.7928L7.64644 3.35355Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join section */}
          <div className="legal-network-content_joinContainer">
            <div className="join_container">
              <div className="join_backgroundContainer">
                <div className="join_backgroundImage">
                  <img
                    alt="پس‌زمینه شبکه حقوقی"
                    loading="lazy"
                    className="join_bgImage"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/legal-network-bg-desktop.webp"
                  />
                  <div className="join_logoIconWrapper">
                    <img
                      alt="آیکون لوگو"
                      loading="lazy"
                      className="join_logoIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/logo-icon.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="join_cardWrapper">
                <div className="join-network-card_cardContainer">
                  <div className="join-network-card_topSection">
                    <div className="join-network-card_topContent">
                      <div className="join-network-card_leftContent">
                        <div className="join-network-card_titleWrapper">
                          <h2 className="join-network-card_title">به شبکه وکلای ما بپیوندید</h2>
                        </div>
                        <div>
                          <img
                            alt="Weekilaw"
                            loading="lazy"
                            className="join-network-card_logo"
                            style={{ color: 'transparent' }}
                            src="/assets/legal-network/logo-full-white.png"
                          />
                        </div>
                      </div>
                      <div className="join-network-card_phoneImageWrapper">
                        <picture>
                          <source srcSet="/assets/legal-network/join-network-lawyer.webp" className="join-network-card_phoneImage" />
                          <img src="/assets/legal-network/join-network-lawyer.webp" alt="Legal Network Background" className="join-network-card_phoneImage" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="join-network-card_bottomSection">
                    <div
                      className="join-network-card_description"
                      dangerouslySetInnerHTML={{
                        __html:
                          'آیا شما یک متخصص حقوقی هستید که به دنبال ایجاد کسب‌وکار جدید هستید؟<br><br>به شبکه ما بپیوندید و مستقیماً با مشتریانی که به تخصص خاص شما نیاز دارند ارتباط برقرار کنید. فعالیت خود را گسترش دهید و روابط مشتری ارزشمند را از طریق سیستم تولید سرنخ ساده‌سازی شده ما بسازید.',
                      }}
                    />
                    <a className="button_buttonContainer join-network-card_buttonContainer" href="https://app.weekilaw.com" target="_blank" rel="noopener noreferrer">
                      <div className="button_buttonText join-network-card_buttonText">همین حالا ثبت نام کنید</div>
                      <div className="button_buttonArrow">
                        <div className="button_arrowIconWrapperHover">
                          <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                        </div>
                        <div className="button_arrowIconWrapper">
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need help CTA */}
          <div className="legal-network-content_widthWrapper">
            <div className="legal-network-content_innerWidthWrapper">
              <div className="legal-network-content_needHelpCardContainer">
                <div className="styles_container">
                  <div className="styles_card">
                    <div className="styles_textWrapper">
                      <div className="styles_title">کمک به یک مسئله نیاز دارید؟</div>
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
                            <img alt="arrow-right" loading="lazy" width="16" height="16" className="styles_arrowIcon" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                          </div>
                          <div className="styles_arrowIconWrapper">
                            <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="styles_arrowIcon" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-white.svg" />
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

export default LegalNetwork;


