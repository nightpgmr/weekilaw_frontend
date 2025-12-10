import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/legalNetwork.css';

const LegalNetwork = () => {
  const lawyerCards = [
    { name: 'Lilit Chakman', firm: 'Miltons Lawyers', specialization: 'Commercial law', image: '/assets/legal-network/miltons-lawyers-lilit-chakman.jpg' },
    { name: 'Kayte Lewis', firm: 'Voice Lawyers', specialization: 'Employment law', image: '/assets/legal-network/voice-lawyers-kayte-lewis.jpg' },
    { name: 'David Lechem', firm: 'AGEIS', specialization: 'Estate and probate', image: '/assets/legal-network/ageis-david-lechem.jpg' },
    { name: 'Tash Nolan', firm: 'Nolan Lawyers', specialization: 'Family law', image: '/assets/legal-network/nolan-lawyers-tash-nolan.jpg' },
    { name: 'Saurabh Smar', firm: 'Northam Lawyers', specialization: 'Immigration', image: '/assets/legal-network/northam-lawyers-saurabh-smar.jpg' },
    { name: 'Thomas Bassil', firm: 'Finn Roache', specialization: 'Litigation', image: '/assets/legal-network/finn-roache-thomas-bassil.jpg' },
  ];

  const advantages = [
    { image: '/assets/legal-network/legal-professionals.webp', description: 'Connections to qualified legal professionals with proven expertise' },
    { image: '/assets/legal-network/specialised-knowledge.webp', description: 'Specialized knowledge across diverse practice areas' },
    { image: '/assets/legal-network/geographic-coverage.webp', description: 'Broad geographic coverage, ensuring there is a lawyer in the location you need' },
    { image: '/assets/legal-network/document-sharing.webp', description: 'Seamless document sharing with your legal team' },
    { image: '/assets/legal-network/consistent-communication.webp', description: 'Consistent communication through our secure platform' },
  ];

  return (
    <PageLayout>
      <div className="layout_content__yRzeE">
        <div className="legal-network-content_pageGapWrapper__xxEgN">
          {/* Hero */}
          <div className="page-header_helpTitleContainer__NpuGb legal-network-content_heroClass__j_3lW">
            <div className="page-header_widthWrapper__4MKzc">
              <div className="page-header_innerWidthWrapper__GMUNJ legal-network-content_heroInnerClassName__v2lTC">
                <div className="breadcrumb_breadcrumbContainer__WxR4l">
                  <span className="breadcrumb_breadcrumbItem__YvWT0">
                    <a href="/en-us/about">About</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem__YvWT0">
                    {' / '}
                    <a href="/en-us/about/legal-network">Our legal network</a>
                  </span>
                </div>
                <h1 className="page-header_title__ApYOt">Our network of trusted lawyers</h1>
                <div className="page-header_heroIconContainer__zF2JD">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    loading="lazy"
                    className="page-header_heroIcon__eA6Mc"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="legal-network-content_introContainer__BiVIn">
            <div className="legal-network-content_widthWrapper__kECOM">
              <div className="legal-network-content_innerWidthWrapper__pWqRG legal-network-content_introInnerWidthWrapper__geSWZ">
                <div className="intro_introHeaderContainer__0_NlD">
                  <h2 className="intro_introHeader__4N4Zl">Connecting you with trusted lawyers for expert advice</h2>
                </div>
                <div className="intro_introLawyersImageContainer__Nzmbm">
                  <div className="intro_introImageContainer__tmNTs">
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage__fNh18 intro_desktop__KdLVP"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-desktop.webp"
                    />
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage__fNh18 intro_tablet__pzIvw"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-tablet.webp"
                    />
                    <img
                      alt="intro-image"
                      loading="lazy"
                      className="intro_introImage__fNh18 intro_mobile__2VY_4"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/legal-professionals-mobile.webp"
                    />
                  </div>
                </div>
                <div className="intro_introDescription__F_Yhm">
                  LawConnect is proud to offer our users access to a network of qualified legal professionals. When legal
                  challenges arise, you deserve professional guidance from experienced lawyers who understand your specific needs.
                </div>
              </div>
            </div>
          </div>

          {/* Legal practitioners */}
          <div className="legal-practitioners_legalPractitionersContainer__2oSbQ">
            <div className="legal-practitioners_headerContainer__5LAE3">
              <h2 className="legal-practitioners_headerTitle__nehI7">Join thousands of professionals in our network</h2>
            </div>
            <div className="stacked-card_stackedCardWrapper__J_qwH">
              <div className="stacked-card_container__5UUnf legal-practitioners_noMargin__DI7Ih">
                <div className="stacked-card_lawyerImageWrapper__tyiPv">
                  <img
                    alt="Lawyer"
                    loading="lazy"
                    className="stacked-card_lawyerImage__yeM4Y legal-practitioners_lawyerImage__Y85k_"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/logo.webp"
                  />
                </div>
                <div className="stacked-card_textPosition__Ky8WH legal-practitioners_textPosition__Bw6lN">
                  <h1 className="stacked-card_textContainer__42GGn legal-practitioners_textContainer__sJ7PF">
                    <div className="legal-practitioners_commitmentCard__NLeq5">30,000+ legal practitioners</div>
                  </h1>
                </div>
              </div>
            </div>

            <div className="legal-practitioners_lawyerCarouselContainer__P5nij">
              <div className="lawyer-carousel_lawyerCarouselContainer__kCHox">
                <div className="lawyer-carousel_carouselContainerWrapper__PGpWP">
                  <div className="lawyer-carousel_carouselContainer__W_uge">
                    <div className="rfm-marquee-container" style={{ '--width': '100%', '--transform': 'none', '--pause-on-hover': 'running' }}>
                      <div className="rfm-marquee" style={{ '--play': 'running', '--direction': 'normal', '--duration': '40s', '--delay': '0s', '--iteration-count': 'infinite', '--min-width': '100%' }}>
                        <div className="rfm-initial-child-container">
                          {lawyerCards.concat(lawyerCards).map((card, idx) => (
                            <div className="rfm-child" key={`${card.name}-${idx}`} style={{ '--transform': 'none' }}>
                              <div className="lawyer-carousel_lawyerCard__5P1QR">
                                <div className="lawyer-carousel_profileImageContainer__ZdwmE">
                                  <img
                                    alt={card.name}
                                    loading="lazy"
                                    className="lawyer-carousel_profileImage__r5O34"
                                    src={card.image}
                                    style={{ color: 'transparent' }}
                                  />
                                </div>
                                <div className="lawyer-carousel_lawyerInfoContainer__gBpwn">
                                  <h3 className="lawyer-carousel_lawyerName__PQL4e">{card.name}</h3>
                                  <p className="lawyer-carousel_firmName__N2Yty">{card.firm}</p>
                                </div>
                                <p className="lawyer-carousel_specialisation__fuTUk">{card.specialization}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lawyer-carousel_buttonContainer__4TVHJ">
                  <a className="button_buttonContainer__gCB6U lawyer-carousel_button__3B63S" href="/en-us/for-lawyers/sign-up">
                    <div className="button_buttonText__1_evT lawyer-carousel_buttonText__Ua_lv">Join our network</div>
                    <div className="button_buttonArrow__75UxD lawyer-carousel_buttonArrow__8ZIKf">
                      <div className="button_arrowIconWrapperHover__E_U1V">
                        <img
                          alt="arrow-right-white"
                          loading="lazy"
                          width="16"
                          height="16"
                          className="button_arrowIcon__EQvnO"
                          style={{ color: 'transparent' }}
                          src="/assets/legal-network/arrow-right-blue.svg"
                        />
                      </div>
                      <div className="button_arrowIconWrapper__ftquI">
                        <img
                          alt="arrow-right"
                          loading="lazy"
                          width="16"
                          height="16"
                          className="button_arrowIcon__EQvnO"
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
          <div className="world-map_worldMapSection__RSd7A">
            <div className="world-map_mapContainer__9spUy">
              <div>
                <picture>
                  <source srcSet="/assets/legal-network/world-map-desktop.webp" media="(min-width: 1185px)" className="world-map_worldMapImage__Jzr_P" />
                  <source srcSet="/assets/legal-network/world-map-desktop.webp" className="world-map_worldMapImage__Jzr_P" />
                  <img src="/assets/legal-network/world-map-desktop.webp" alt="Lawyers" className="world-map_worldMapImage__Jzr_P" />
                </picture>
              </div>
              <div className="world-map_descriptionContainer__BTqgV">
                <div className="world-map_description__vpYgP">
                  We help people access relevant legal information worldwide,<br />
                  and facilitate lawyer connections in Australia and the UK, with more regions coming soon.
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="legal-network-content_howItWorksContainer__DIwTu">
            <div className="how-it-works_container__QKBoH">
              <div className="how-it-works_container__of4_F">
                <div className="how-it-works_stepsWrapper__EUaDV">
                  <div className="how-it-works_titleContainer__AfLNN how-it-works_titleContainer__Ufc4u">
                    <h2 className="how-it-works_title___Fro9 how-it-works_title__YvDLO">How we make finding legal help easier</h2>
                    <p className="how-it-works_description__hDe10 how-it-works_description__qLbKs">
                      LawConnect gives you access to trusted lawyers with the experience and local knowledge to help with your legal matter. The process is simple:
                    </p>
                  </div>
                  <div className="how-it-works_stepsContainer__DSnE_">
                    {[
                      {
                        title: 'Describe your situation',
                        desc: "Start by outlining your legal issue, you can explain things in your own words, without worrying about the legal jargon. Whatever you're going through LawConnect is here to help.",
                        desktop: '/assets/legal-network/how-it-works-step1-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step1-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step1-mobile.webp',
                      },
                      {
                        title: 'Get tailored AI information',
                        desc: "LawConnect provides clear, practical information and next steps based on your situation. You'll receive easy-to-understand guidance to help you feel more confident about your options and what to do next.",
                        desktop: '/assets/legal-network/how-it-works-step2-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step2-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step2-mobile.webp',
                      },
                      {
                        title: 'Connect with a lawyer',
                        desc: "If your situation requires expert legal advice, we can connect you with a trusted lawyer from our network. You’ll be able to get professional help quickly and easily, so you can feel fully supported every step of the way.",
                        desktop: '/assets/legal-network/how-it-works-step3-desktop.webp',
                        tablet: '/assets/legal-network/how-it-works-step3-tablet.webp',
                        mobile: '/assets/legal-network/how-it-works-step3-mobile.webp',
                      },
                    ].map((item, idx) => (
                      <div className={`how-it-works_step__jFwrJ ${idx === 1 ? 'how-it-works_step2__nv2n9' : ''}`} key={item.title}>
                        <div className="how-it-works_imageWrapper__izb3y">
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage__Lff2G how-it-works_desktop__kRSLk" style={{ color: 'transparent' }} src={item.desktop} />
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage__Lff2G how-it-works_tablet__MM4MR" style={{ color: 'transparent' }} src={item.tablet} />
                          <img alt={item.title} loading="lazy" className="how-it-works_stepImage__Lff2G how-it-works_mobile__VUq45" style={{ color: 'transparent' }} src={item.mobile} />
                        </div>
                        <div className="how-it-works_stepContent__VUEk_">
                          <h3 className="how-it-works_stepTitle__oniny">{item.title}</h3>
                          <p className="how-it-works_stepDescription__WZf71">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="how-it-works_disclaimer__197Nu">
                If you decide to consult a connected lawyer, they’ll explain their fees upfront.<br />
                Any agreement is between you and the lawyer, not LawConnect
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="legal-network-content_advantagesContainer__N_Q4D">
            <div className="advantages_widthWrapper__mgCvu">
              <div className="advantages_carouselContainer__Mx3vm">
                <div className="advantages_titleContainer__LrvgO">
                  <h2 className="advantages_title__YVE4v">Our network advantage</h2>
                </div>
                <div className="advantages_descriptionContainer__6FdgJ">
                  <p className="advantages_description__q_EUb">LawConnect users benefit from:</p>
                </div>
                <div className="styles-module__container___UTp91 advantages_carouselWrapper__eomiX">
                  <div className="styles-module__cardsContainer___5LjEc">
                    <div className="styles-module__cards___cdHPc advantages_cardsContainer___7_s5" style={{ gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))' }}>
                      {advantages.map((adv) => (
                        <div className="advantages_gridItem__5EkHd" key={adv.description}>
                          <div className="advantages_categoryImageContainer__kd1z5">
                            <img alt="advantage" loading="lazy" className="advantages_categoryImage__VWyuz" src={adv.image} style={{ color: 'transparent' }} />
                          </div>
                          <div className="advantages_categoryDescription__HE8Z4" dangerouslySetInnerHTML={{ __html: `<b>${adv.description.split('.')[0]}</b>${adv.description.includes(' with ') ? adv.description.slice(adv.description.indexOf(' with ')) : ''}` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="styles-module__actionBar___ZrZ2f advantages_actionBarWrapper__jor7g">
                    <div className="styles-module__scrollBar___U38pA">
                      <div className="styles-module__scrolledPosition___xWpkI" style={{ width: '50%', left: '0%' }}></div>
                    </div>
                    <div className="styles-module__actionButtonContainer___OG46l advantages_arrowButtonContainer__7jSEX">
                      <button className="styles-module__actionButton___3t8y2" disabled>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon___sIeGi">
                          <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                        </svg>
                      </button>
                      <button className="styles-module__actionButton___3t8y2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon___sIeGi">
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
          <div className="legal-network-content_joinContainer__Jm9j6">
            <div className="join_container__asFWw">
              <div className="join_backgroundContainer__g1Nd9">
                <div className="join_backgroundImage__ECsRd">
                  <img
                    alt="Legal Network Background"
                    loading="lazy"
                    className="join_bgImage__9yFDs"
                    style={{ color: 'transparent' }}
                    src="/assets/legal-network/legal-network-bg-desktop.webp"
                  />
                  <div className="join_logoIconWrapper__03yNg">
                    <img
                      alt="Logo Icon"
                      loading="lazy"
                      className="join_logoIcon__KtUn7"
                      style={{ color: 'transparent' }}
                      src="/assets/legal-network/logo-icon.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="join_cardWrapper__rN9Mx">
                <div className="join-network-card_cardContainer__1dRiI">
                  <div className="join-network-card_topSection__BlMkX">
                    <div className="join-network-card_topContent__2FdV7">
                      <div className="join-network-card_leftContent___nlna">
                        <div className="join-network-card_titleWrapper__0sxFN">
                          <h2 className="join-network-card_title__op8UE">Join our lawyer network</h2>
                        </div>
                        <div>
                          <img
                            alt="LawConnect"
                            loading="lazy"
                            className="join-network-card_logo__KMfrz"
                            style={{ color: 'transparent' }}
                            src="/assets/legal-network/logo-full-white.png"
                          />
                        </div>
                      </div>
                      <div className="join-network-card_phoneImageWrapper__0sFUc">
                        <picture>
                          <source srcSet="/assets/legal-network/join-network-lawyer.webp" className="join-network-card_phoneImage__etA6n" />
                          <img src="/assets/legal-network/join-network-lawyer.webp" alt="Legal Network Background" className="join-network-card_phoneImage__etA6n" />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="join-network-card_bottomSection__efQ7u">
                    <div
                      className="join-network-card_description__g_jBy"
                      dangerouslySetInnerHTML={{
                        __html:
                          'Are you a legal professional looking to generate new business?<br><br>Join our network and connect directly with clients seeking your specific expertise. Expand your practice and build valuable client relationships through our streamlined lead generation system.',
                      }}
                    />
                    <a className="button_buttonContainer__gCB6U join-network-card_buttonContainer___Qhab" href="/en-us/for-lawyers/sign-up">
                      <div className="button_buttonText__1_evT join-network-card_buttonText__OI3Ok">Sign up now</div>
                      <div className="button_buttonArrow__75UxD">
                        <div className="button_arrowIconWrapperHover__E_U1V">
                          <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                        </div>
                        <div className="button_arrowIconWrapper__ftquI">
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need help CTA */}
          <div className="legal-network-content_widthWrapper__kECOM">
            <div className="legal-network-content_innerWidthWrapper__pWqRG">
              <div className="legal-network-content_needHelpCardContainer__PT038">
                <div className="styles_container__F5erF">
                  <div className="styles_card__G5i6M">
                    <div className="styles_textWrapper__yJ7QI">
                      <div className="styles_title__qe9MP">Need help with an issue?</div>
                      <div className="styles_description__gONZv">Ask LawConnect your legal question for quick, free answers!</div>
                    </div>
                    <div className="styles_imageWrapper__xawbg">
                      <a
                        href="/chat?newCase=true"
                        className="styles_buttonWrapper__XXBD1 styles_startCaseButton__9iUyN"
                        style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
                      >
                        <div className="styles_buttonText___POD5">Start now</div>
                        <div className="styles_buttonArrow__iKFSw">
                          <div className="styles_arrowIconWrapperHover__hrNLa">
                            <img alt="arrow-right" loading="lazy" width="16" height="16" className="styles_arrowIcon__Sfck8" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-blue.svg" />
                          </div>
                          <div className="styles_arrowIconWrapper__QocWn">
                            <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="styles_arrowIcon__Sfck8" style={{ color: 'transparent' }} src="/assets/legal-network/arrow-right-white.svg" />
                          </div>
                        </div>
                      </a>
                      <div className="styles_backgroundColour__Fh9I5"></div>
                      <div className="styles_backgroundSquare__8l6wS" style={{ backgroundColor: '#F0EFEC' }}></div>
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


