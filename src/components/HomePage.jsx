import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="layout_main__DUFC2">
        <div className="layout_menuHeightWrapper__39a3A">
          {/* Hero Section */}
          <div className="hero_heroContainer__xiPzN">
            <div className="hero_heroContent__tmeC0">
              <h1 id="hero-title-1-0" className="hero_heroTitle__ETTpw hero_main__vpAMc">
                Find your lawyer.
              </h1>
              <h2 id="hero-title-2-0" className="hero_heroTitle__ETTpw">
                Get AI legal info for free.
              </h2>
              <h2 id="hero-title-3-0" className="hero_heroTitle__ETTpw hero_short__10VZ2">
                Connect with lawyers you can trust.
              </h2>
            </div>

            <div className="hero_stepperContainer__gcrwK">
              <div className="hero_stepperStep__otuH7 hero_active__vpAMc"></div>
              <div className="hero_stepperStep__otuH7"></div>
              <div className="hero_stepperStep__otuH7"></div>
            </div>

            <div className="hero_heroImageContainer__xiPzN">
              <div className="hero_heroImageWrapper__tmeC0">
                <img
                  alt="Hero Image 1"
                  fetchpriority="high"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="hero_heroImage__nVizP"
                  style={{color: 'transparent'}}
                  src="/assets/header-hero-1-1x.webp"
                />
                <img
                  alt="Hero Image 2"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="hero_heroImage__nVizP"
                  style={{color: 'transparent'}}
                  src="/assets/header-hero-2-1x.webp"
                />
                <img
                  alt="Hero Image 3"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="hero_heroImage__nVizP"
                  style={{color: 'transparent'}}
                  src="/assets/header-hero-3-1x.webp"
                />
              </div>
            </div>

            <div className="hero_heroDescription__gcrwK">
              Chat with our AI for instant legal answers, or connect with a lawyer who can help.
            </div>
          </div>

          {/* Content Rows */}
          <div className="content-row_contentRowContainer__2ICmV">
            <div className="content-row_contentRow__hiOAx">
              <div className="content-row_contentRowHeader__N10_A">Ask any legal question</div>
              <div className="content-row_contentRowBody__2dvR9">Get tailored AI answers instantly from our no-cost AI assistant, available 24/7.</div>
            </div>
            <div className="content-row_contentRow__hiOAx">
              <div className="content-row_contentRowHeader__N10_A">Find the right lawyer</div>
              <div className="content-row_contentRowBody__2dvR9">Connect with an experienced lawyer who handles cases like yours and get a clear cost estimate before you proceed.*</div>
            </div>
            <div className="content-row_contentRow__hiOAx">
              <div className="content-row_contentRowHeader__N10_A">Resolve your legal issue</div>
              <div className="content-row_contentRowBody__2dvR9">Tackle your legal matter with the right information and expert support tailored to your situation.</div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="styles_pageGapWrapper__cVbbl">
            <div className="library-header_libraryTitleContainer__spqZI">
              <div className="library-header_widthWrapper__8Vg_N">
                <div className="library-header_innerWidthWrapper__d_X1F">
                  <div className="breadcrumb_breadcrumbContainer__WxR4l">
                    <span className="breadcrumb_breadcrumbItem__YvWT0">
                      <a href="/">Home</a>
                    </span>
                  </div>
                  <h1 className="library-header_title__Bu5PO">Welcome to WeekiLaw - Your AI Legal Assistant</h1>
                  <div className="library-header_heroIconContainer__ZSjKT">
                    <img
                      alt="hero-icon"
                      loading="lazy"
                      width="260"
                      height="260"
                      decoding="async"
                      className="library-header_heroIcon__2SR5U"
                      style={{color: 'transparent'}}
                      src="/assets/spark-animated-midnight.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="styles_widthWrapper__vLFZ6">
              <div className="styles_innerWidthWrapper__pnToS">
                {/* Areas of Law Section */}
                <div className="styles_faqSection__0DVLn">
                  <h2 className="styles_sectionTitle__abDb2">Areas of Law We Cover</h2>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/family-law.webp" alt="Family Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Family Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/criminal-law.webp" alt="Criminal Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Criminal Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/personal-injury-law.webp" alt="Personal Injury Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Personal Injury Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/employment-law.webp" alt="Employment Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Employment Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/commercial-law-us.webp" alt="Commercial Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Commercial Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/immigration-law.webp" alt="Immigration Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Immigration Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/property-law.webp" alt="Property Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Property Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/litigation-law.webp" alt="Litigation Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Litigation Law</h3>
                    </div>
                    <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                      <img src="/assets/estate-and-probate-law.webp" alt="Estate and Probate Law" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
                      <h3 style={{marginTop: '10px', fontSize: '16px'}}>Estate and Probate Law</h3>
                    </div>
                  </div>
                </div>

                {/* Need Help Card */}
                <div className="styles_needHelpCardContainer__5MfnH">
                  <div className="styles_container__F5erF undefined">
                    <div className="styles_card__G5i6M">
                      <div className="styles_textWrapper__yJ7QI">
                        <div className="styles_title__qe9MP">Need help with a legal issue?</div>
                        <div className="styles_description__gONZv">Chat with our AI for instant legal answers or connect with a lawyer!</div>
                      </div>
                      <div className="styles_imageWrapper__xawbg">
                        <a href="/chat?newCase=true" className="styles_buttonWrapper__XXBD1 styles_startCaseButton__9iUyN undefined" style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}>
                          <div className="styles_buttonText___POD5 undefined">Start chatting</div>
                          <div className="styles_buttonArrow__iKFSw undefined">
                            <div className="styles_arrowIconWrapperHover__hrNLa undefined">
                              <img alt="arrow-right" loading="lazy" width="16" height="16" decoding="async" className="styles_arrowIcon__Sfck8 undefined" style={{color: 'transparent'}} src="/assets/arrow-right-blue.svg"/>
                            </div>
                            <div className="styles_arrowIconWrapper__QocWn undefined">
                              <img alt="arrow-right-white" loading="lazy" width="16" height="16" decoding="async" className="styles_arrowIcon__Sfck8 undefined" style={{color: 'transparent'}} src="/assets/arrow-right-white.svg"/>
                            </div>
                          </div>
                        </a>
                        <div className="styles_backgroundColour__Fh9I5"></div>
                        <div className="styles_backgroundSquare__8l6wS" style={{backgroundColor: '#F0EFEC'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
