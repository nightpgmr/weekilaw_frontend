import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/signUp.css';

const SignUp = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        {/* Hero header */}
        <div className="styles_pageGapWrapper">
          <div className="page-header_helpTitleContainer styles_heroClass">
            <div className="page-header_widthWrapper">
              <div className="page-header_innerWidthWrapper styles_heroInnerClassName">
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClassName">
                    <a href="/en-us/for-lawyers/legal-network">For lawyers</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClassName">
                    &nbsp;/&nbsp;
                    <a href="/en-us/for-lawyers/sign-up">Sign up</a>
                  </span>
                </div>
                <h1 className="page-header_title styles_headerClassName">
                  Connect with clients who need your help
                </h1>
                <div className="page-header_heroIconContainer">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    className="page-header_heroIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/sign-up/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intro cards + form */}
          <div className="styles_widthWrapper">
            <div className="styles_innerWidthWrapper">
              <div className="styles_container">
                <div className="styles_introContainer">
                  <div className="register-intro_container">
                    <h2 className="register-intro_title">Looking to win more clients?</h2>
                    <p className="register-intro_description">
                      Join a trusted network of legal professionals and start receiving inquiries from people who need
                      help in your area of expertise. Strengthen your online presence and make it easier for clients to
                      find and choose your firm.
                    </p>
                    <div className="register-intro_cardsContainer">
                      <div className="register-intro_card">
                        <div className="register-intro_iconWrapper">
                          <img
                            alt="users icon"
                            className="register-intro_cardIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/users-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle">Receive quality leads</h3>
                          <p className="register-intro_cardDescription">
                            Attract clients who are actively looking for legal help in your practice areas.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_card">
                        <div className="register-intro_iconWrapper">
                          <img
                            alt="map pin icon"
                            className="register-intro_cardIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/map-pin-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle">Boost your online presence</h3>
                          <p className="register-intro_cardDescription">
                            Get a LawConnect profile that showcases your firm and helps clients reach out with
                            confidence.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_card">
                        <div className="register-intro_iconWrapper">
                          <img
                            alt="plus icon"
                            className="register-intro_cardIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/plus-blue.svg"
                          />
                        </div>
                        <div>
                          <h3 className="register-intro_cardTitle">Strengthen your reputation</h3>
                          <p className="register-intro_cardDescription">
                            Be part of a trusted legal network and grow your practice with the right opportunities.
                          </p>
                        </div>
                      </div>

                      <div className="register-intro_freeTrialContainer">
                        <button className="register-intro_freeTrialButton">
                          <span className="register-intro_freeTrialText">Learn about our free trial</span>
                          <div className="register-intro_freeTrialArrow">
                            <img
                              alt="arrow down"
                              className="register-intro_freeTrialArrowIcon"
                              style={{ color: 'transparent' }}
                              src="/assets/sign-up/arrow-down-blue.svg"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="register-interest-form" className="styles_formContainer">
                  <div className="register-interest-form_container">
                    <div className="register-interest-form_cardWrapper">
                      <div className="register-form-card_cardContainer">
                        <div className="register-form-card_formSection">
                          <h2 className="register-form-card_title">Inquire today to join LawConnect</h2>
                          <form className="register-form-card_form">
                            <div className="register-form-card_formRow">
                              <div className="register-form-card_inputGroup">
                                <label htmlFor="name" className="register-form-card_label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  autoComplete="off"
                                  className="register-form-card_input"
                                  required
                                  name="name"
                                />
                              </div>
                              <div className="register-form-card_inputGroup">
                                <label htmlFor="firmName" className="register-form-card_label">
                                  Firm name
                                </label>
                                <input
                                  type="text"
                                  id="firmName"
                                  autoComplete="off"
                                  className="register-form-card_input"
                                  required
                                  name="firmName"
                                />
                              </div>
                            </div>
                            <div className="register-form-card_formRow">
                              <div className="register-form-card_inputGroup">
                                <label htmlFor="email" className="register-form-card_label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  autoComplete="off"
                                  className="register-form-card_input"
                                  required
                                  name="email"
                                />
                              </div>
                              <div className="register-form-card_inputGroup">
                                <label htmlFor="phone" className="register-form-card_label">
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  autoComplete="off"
                                  className="register-form-card_input"
                                  required
                                  name="phone"
                                />
                              </div>
                            </div>
                            <div className="register-form-card_inputGroup">
                              <label htmlFor="comments" className="register-form-card_label">
                                Comments
                              </label>
                              <textarea
                                id="comments"
                                name="comments"
                                className="register-form-card_textarea"
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                          <div className="button_buttonContainer" aria-disabled="false">
                            <div className="button_buttonText register-form-card_buttonText">Sign up now</div>
                            <div className="button_buttonArrow">
                              <div className="button_arrowIconWrapperHover">
                                <img
                                  alt="arrow-right-white"
                                  width="16"
                                  height="16"
                                  className="button_arrowIcon"
                                  style={{ color: 'transparent' }}
                                  src="/assets/sign-up/arrow-right-blue.svg"
                                />
                              </div>
                              <div className="button_arrowIconWrapper">
                                <img
                                  alt="arrow-right"
                                  width="16"
                                  height="16"
                                  className="button_arrowIcon"
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
          <div id="get-started" className="styles_getStartedContainer">
            <div className="get-started_container">
              <div className="get-started_backgroundContainer">
                <div className="get-started_backgroundImage">
                  <img
                    alt="Register Interest Background"
                    className="get-started_bgImage"
                    style={{ color: 'transparent' }}
                    src="/assets/sign-up/legal-network-bg-desktop.webp"
                  />
                </div>
              </div>
              <div className="get-started_getStartedWrapper">
                <div className="get-started_getStartedContainer">
                  <h2 className="get-started_getStartedTitle">Get started with LawConnect for free</h2>
                  <div className="get-started_getStartedDescription">
                    See how LawConnect helps you grow your client base with our free trial
                  </div>
                  <div className="get-started_getStartedStepsContainer">
                    <div className="get-started_step">
                      <div className="get-started_iconWrapper">
                        <img
                          alt="tools icon"
                          className="get-started_stepIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/tools-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription">Complimentary profile setup for your firm</div>
                    </div>
                    <div className="get-started_step">
                      <div className="get-started_iconWrapper">
                        <img
                          alt="5x icon"
                          className="get-started_stepIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/5x-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription">Receive your first 5 inquiries at no cost</div>
                    </div>
                    <div className="get-started_step">
                      <div className="get-started_iconWrapper">
                        <img
                          alt="access cards icon"
                          className="get-started_stepIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/sign-up/access-cards-blue.svg"
                        />
                      </div>
                      <div className="get-started_stepDescription">100 lead credits to get started</div>
                    </div>
                  </div>
                  <div className="get-started_buttonContainer">
                    <div className="button_buttonContainer get-started_signUpButtonContainer">
                      <div className="button_buttonText get-started_buttonText">Sign up now</div>
                      <div className="button_buttonArrow get-started_buttonArrow">
                        <div className="button_arrowIconWrapperHover get-started_buttonArrowIcon">
                          <img
                            alt="arrow-right-white"
                            width="16"
                            height="16"
                            className="button_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-white.svg"
                          />
                        </div>
                        <div className="button_arrowIconWrapper get-started_buttonArrowIcon">
                          <img
                            alt="arrow-right"
                            width="16"
                            height="16"
                            className="button_arrowIcon"
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
          <div className="legal-practitioners_legalPractitionersContainer">
            <div className="legal-practitioners_headerContainer">
              <h2 className="legal-practitioners_headerTitle">Join thousands of professionals in our network</h2>
            </div>
            <div className="legal-practitioners_lawyerCarouselContainer">
              <div className="lawyer-carousel_lawyerCarouselContainer">
                <div className="lawyer-carousel_carouselContainerWrapper">
                  <div
                    className="rfm-marquee-container lawyer-carousel_carouselContainer"
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
                            <div className="lawyer-carousel_lawyerCard">
                              <div className="lawyer-carousel_profileImageContainer">
                                <img
                                  alt={lawyer.name}
                                  className="lawyer-carousel_profileImage"
                                  style={{ color: 'transparent' }}
                                  src={`/assets/sign-up/${lawyer.img}`}
                                />
                              </div>
                              <div className="lawyer-carousel_lawyerInfoContainer">
                                <h3 className="lawyer-carousel_lawyerName">{lawyer.name}</h3>
                                <p className="lawyer-carousel_firmName">{lawyer.firm}</p>
                              </div>
                              <p className="lawyer-carousel_specialisation">{lawyer.area}</p>
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
          <div className="styles_widthWrapper">
            <div className="styles_innerWidthWrapper">
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
                            width="16"
                            height="16"
                            className="styles_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-blue.svg"
                          />
                        </div>
                        <div className="styles_arrowIconWrapper">
                          <img
                            alt="arrow-right-white"
                            width="16"
                            height="16"
                            className="styles_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/sign-up/arrow-right-white.svg"
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

export default SignUp;

