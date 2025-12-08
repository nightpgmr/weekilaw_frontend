import React from 'react';
import '../styles/signUpCombined.css';

const SignUp = () => {
  return (
    <main className="layout_main__DUFC2">
      <div className="layout_content__yRzeE">
        {/* Hero header */}
        <div className="styles_pageGapWrapper__yI_nf">
          <div className="page-header_helpTitleContainer__NpuGb styles_heroClass__vWuli">
            <div className="page-header_widthWrapper__4MKzc">
              <div className="page-header_innerWidthWrapper__GMUNJ styles_heroInnerClassName__5NRET">
                <div className="breadcrumb_breadcrumbContainer__WxR4l">
                  <span className="breadcrumb_breadcrumbItem__YvWT0 styles_breadcrumbClassName__YmUDs">
                    <a href="/en-us/for-lawyers/legal-network">For lawyers</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem__YvWT0 styles_breadcrumbClassName__YmUDs">
                    &nbsp;/&nbsp;
                    <a href="/en-us/for-lawyers/sign-up">Sign up</a>
                  </span>
                </div>
                <h1 className="page-header_title__ApYOt styles_headerClassName__xMGim">
                  Connect with clients who need your help
                </h1>
                <div className="page-header_heroIconContainer__zF2JD">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    className="page-header_heroIcon__eA6Mc"
                    style={{ color: 'transparent' }}
                    src="/assets/sign-up/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intro cards + form */}
          <div className="styles_widthWrapper__B3BNJ">
            <div className="styles_innerWidthWrapper__bdp3F">
              <div className="styles_container__qEkCe">
                <div className="styles_introContainer__jQzjV">
                  <div className="register-intro_container__0P_lH">
                    <h2 className="register-intro_title__5HHSP">Looking to win more clients?</h2>
                    <p className="register-intro_description__sF9zU">
                      Join a trusted network of legal professionals and start receiving inquiries from people who need
                      help in your area of expertise. Strengthen your online presence and make it easier for clients to
                      find and choose your firm.
                    </p>
                    <div className="register-intro_cardsContainer__Vc7yL">
                      <div className="register-intro_card__EU8V3">
                        <div className="register-intro_iconWrapper__Yd_GV">
                          <img
                            alt="users icon"
                            className="register-intro_cardIcon__IYir9"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/users-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle__xNsmJ">Receive quality leads</h3>
                          <p className="register-intro_cardDescription__z4n9B">
                            Attract clients who are actively looking for legal help in your practice areas.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_card__EU8V3">
                        <div className="register-intro_iconWrapper__Yd_GV">
                          <img
                            alt="map pin icon"
                            className="register-intro_cardIcon__IYir9"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/map-pin-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle__xNsmJ">Boost your online presence</h3>
                          <p className="register-intro_cardDescription__z4n9B">
                            Get a LawConnect profile that showcases your firm and helps clients reach out with
                            confidence.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_card__EU8V3">
                        <div className="register-intro_iconWrapper__Yd_GV">
                          <img
                            alt="plus icon"
                            className="register-intro_cardIcon__IYir9"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/plus-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle__xNsmJ">Strengthen your reputation</h3>
                          <p className="register-intro_cardDescription__z4n9B">
                            Be part of a trusted legal network and grow your practice with the right opportunities.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_freeTrialContainer__CRXS8">
                        <button className="register-intro_freeTrialButton__F1Ctf">
                          <span className="register-intro_freeTrialText__IIl0T">Learn about our free trial</span>
                          <div className="register-intro_freeTrialArrow__gzNRl">
                            <img
                              alt="arrow down"
                              className="register-intro_freeTrialArrowIcon__4v8kU"
                              style={{ color: 'transparent' }}
                              src="/assets/sign-up/arrow-down-blue.svg"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="register-interest-form" className="styles_formContainer__Yo9gM">
                  <div className="register-interest-form_container__fVqYa">
                    <div className="register-interest-form_cardWrapper__D2rPh">
                      <div className="register-form-card_cardContainer__AI1qw">
                        <div className="register-form-card_formSection__hr_96">
                          <h2 className="register-form-card_title__MW2tW">Inquire today to join LawConnect</h2>
                          <form className="register-form-card_form__RTsLc">
                            <div className="register-form-card_formRow__LGvQ7">
                              <div className="register-form-card_inputGroup__97_iP">
                                <label htmlFor="name" className="register-form-card_label__84OKT">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  autoComplete="off"
                                  className="register-form-card_input__gd1D9"
                                  required
                                  name="name"
                                />
                              </div>
                              <div className="register-form-card_inputGroup__97_iP">
                                <label htmlFor="firmName" className="register-form-card_label__84OKT">
                                  Firm name
                                </label>
                                <input
                                  type="text"
                                  id="firmName"
                                  autoComplete="off"
                                  className="register-form-card_input__gd1D9"
                                  required
                                  name="firmName"
                                />
                              </div>
                            </div>
                            <div className="register-form-card_formRow__LGvQ7">
                              <div className="register-form-card_inputGroup__97_iP">
                                <label htmlFor="email" className="register-form-card_label__84OKT">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  autoComplete="off"
                                  className="register-form-card_input__gd1D9"
                                  required
                                  name="email"
                                />
                              </div>
                              <div className="register-form-card_inputGroup__97_iP">
                                <label htmlFor="phone" className="register-form-card_label__84OKT">
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  autoComplete="off"
                                  className="register-form-card_input__gd1D9"
                                  required
                                  name="phone"
                                />
                              </div>
                            </div>
                            <div className="register-form-card_inputGroup__97_iP">
                              <label htmlFor="comments" className="register-form-card_label__84OKT">
                                Comments
                              </label>
                              <textarea
                                id="comments"
                                name="comments"
                                className="register-form-card_textarea__EkuXJ"
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                          <div className="button_buttonContainer__gCB6U" aria-disabled="false">
                            <div className="button_buttonText__1_evT register-form-card_buttonText__kmmZN">Sign up now</div>
                            <div className="button_buttonArrow__75UxD">
                              <div className="button_arrowIconWrapperHover__E_U1V">
                                <img
                                  alt="arrow-right-white"
                                  width="16"
                                  height="16"
                                  className="button_arrowIcon__EQvnO"
                                  style={{ color: 'transparent' }}
                                  src="/assets/sign-up/arrow-right-blue.svg"
                                />
                              </div>
                              <div className="button_arrowIconWrapper__ftquI">
                                <img
                                  alt="arrow-right"
                                  width="16"
                                  height="16"
                                  className="button_arrowIcon__EQvnO"
                                  style={{ color: 'transparent' }}
                                  src="/assets/sign-up/arrow-right-blue.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get started section */}
          <div id="get-started" className="styles_getStartedContainer__Ay_Fp">
            <div className="get-started_container__AntU7">
              <div className="get-started_backgroundContainer__zFryf">
                <div className="get-started_backgroundImage__C2ukg">
                  <img
                    alt="Register Interest Background"
                    className="get-started_bgImage__3BjvS"
                    style={{ color: 'transparent' }}
                    src="/assets/sign-up/legal-network-bg-desktop.webp"
                  />
                </div>
              </div>
              <div className="get-started_getStartedWrapper__AH55w">
                <div className="get-started_getStartedContainer__APYFt">
                  <h2 className="get-started_getStartedTitle__Qv6u1">Get started with LawConnect for free</h2>
                  <div className="get-started_getStartedDescription__O6haz">
                    See how LawConnect helps you grow your client base with our free trial
                  </div>
                  <div className="get-started_getStartedStepsContainer__1GMR1">
                    <div className="get-started_step__m_shK">
                      <div className="get-started_iconWrapper__yU_Ve">
                        <img
                          alt="tools icon"
                          className="get-started_stepIcon__A5FVM"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/tools-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription__pPl2_">Complimentary profile setup for your firm</div>
                    </div>
                    <div className="get-started_step__m_shK">
                      <div className="get-started_iconWrapper__yU_Ve">
                        <img
                          alt="5x icon"
                          className="get-started_stepIcon__A5FVM"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/5x-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription__pPl2_">Receive your first 5 inquiries at no cost</div>
                    </div>
                    <div className="get-started_step__m_shK">
                      <div className="get-started_iconWrapper__yU_Ve">
                        <img
                          alt="access cards icon"
                          className="get-started_stepIcon__A5FVM"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/access-cards-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription__pPl2_">100 lead credits to get started</div>
                    </div>
                  </div>
                  <div className="get-started_buttonContainer__v30lY">
                    <div className="button_buttonContainer__gCB6U get-started_signUpButtonContainer__jJT2v">
                      <div className="button_buttonText__1_evT get-started_buttonText__yiGB9">Sign up now</div>
                      <div className="button_buttonArrow__75UxD get-started_buttonArrow__513sE">
                        <div className="button_arrowIconWrapperHover__E_U1V get-started_buttonArrowIcon__XnP6I">
                          <img
                            alt="arrow-right-white"
                            width="16"
                            height="16"
                            className="button_arrowIcon__EQvnO"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-white.svg"
                          />
                        </div>
                        <div className="button_arrowIconWrapper__ftquI get-started_buttonArrowIcon__XnP6I">
                          <img
                            alt="arrow-right"
                            width="16"
                            height="16"
                            className="button_arrowIcon__EQvnO"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-white.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lawyer carousel */}
          <div className="legal-practitioners_legalPractitionersContainer__VTE3o">
            <div className="legal-practitioners_headerContainer__WyLLv">
              <h2 className="legal-practitioners_headerTitle__UvOB2">Join thousands of professionals in our network</h2>
            </div>
            <div className="legal-practitioners_lawyerCarouselContainer__Pkmi7">
              <div className="lawyer-carousel_lawyerCarouselContainer__kCHox">
                <div className="lawyer-carousel_carouselContainerWrapper__PGpWP">
                  <div
                    className="rfm-marquee-container lawyer-carousel_carouselContainer__W_uge"
                    style={{
                      '--pause-on-hover': 'paused',
                      '--pause-on-click': 'paused',
                      '--width': '100%',
                      '--transform': 'none',
                    }}
                  >
                    <div
                      className="rfm-marquee"
                      style={{
                        '--play': 'running',
                        '--direction': 'normal',
                        '--duration': '86.4s',
                        '--delay': '0s',
                        '--iteration-count': 'infinite',
                        '--min-width': '100%',
                      }}
                    >
                      <div className="rfm-initial-child-container">
                        {[
                          { name: 'Lilit Chakman', firm: 'Miltons Lawyers', img: 'miltons-lawyers-lilit-chakman.jpg', area: 'Commercial law' },
                          { name: 'Kayte Lewis', firm: 'Voice Lawyers', img: 'voice-lawyers-kayte-lewis.jpg', area: 'Employment law' },
                          { name: 'David Lechem', firm: 'AGEIS', img: 'ageis-david-lechem.jpg', area: 'Estate and probate' },
                          { name: 'Tash Nolan', firm: 'Nolan Lawyers', img: 'nolan-lawyers-tash-nolan.jpg', area: 'Family law' },
                          { name: 'Saurabh Smar', firm: 'Northam Lawyers', img: 'northam-lawyers-saurabh-smar.jpg', area: 'Immigration' },
                          { name: 'Thomas Bassil', firm: 'Finn Roache', img: 'finn-roache-thomas-bassil.jpg', area: 'Litigation' },
                        ].map((lawyer, idx) => (
                          <div className="rfm-child" style={{ '--transform': 'none' }} key={`lawyer-1-${idx}`}>
                            <div className="lawyer-carousel_lawyerCard__5P1QR">
                              <div className="lawyer-carousel_profileImageContainer__ZdwmE">
                                <img
                                  alt={lawyer.name}
                                  className="lawyer-carousel_profileImage__r5O34"
                                  style={{ color: 'transparent' }}
                                  src={`/assets/sign-up/${lawyer.img}`}
                                />
                              </div>
                              <div className="lawyer-carousel_lawyerInfoContainer__gBpwn">
                                <h3 className="lawyer-carousel_lawyerName__PQL4e">{lawyer.name}</h3>
                                <p className="lawyer-carousel_firmName__N2Yty">{lawyer.firm}</p>
                              </div>
                              <p className="lawyer-carousel_specialisation__fuTUk">{lawyer.area}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need help card */}
          <div className="styles_widthWrapper__B3BNJ">
            <div className="styles_innerWidthWrapper__bdp3F">
              <div className="styles_container__F5erF">
                <div className="styles_card__G5i6M">
                  <div className="styles_textWrapper__yJ7QI">
                    <div className="styles_title__qe9MP">Need help with an issue?</div>
                    <div className="styles_description__gONZv">Ask LawConnect your legal question for quick, free answers!</div>
                  </div>
                  <div className="styles_imageWrapper__xawbg">
                    <a
                      href="https://lawconnect.com/chat?newCase=true"
                      className="styles_buttonWrapper__XXBD1 styles_startCaseButton__9iUyN"
                      style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
                    >
                      <div className="styles_buttonText___POD5">Start now</div>
                      <div className="styles_buttonArrow__iKFSw">
                        <div className="styles_arrowIconWrapperHover__hrNLa">
                          <img
                            alt="arrow-right"
                            width="16"
                            height="16"
                            className="styles_arrowIcon__Sfck8"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-blue.svg"
                          />
                        </div>
                        <div className="styles_arrowIconWrapper__QocWn">
                          <img
                            alt="arrow-right-white"
                            width="16"
                            height="16"
                            className="styles_arrowIcon__Sfck8"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-white.svg"
                          />
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
    </main>
  );
};

export default SignUp;

