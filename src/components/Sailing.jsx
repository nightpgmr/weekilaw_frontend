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
                  About
                </a>
                <span className="styles_breadcrumb ">&nbsp;/&nbsp;</span>
                <span className="styles_breadcrumb styles_bold">Sailing</span>
              </div>
              <h1 className="styles_heroTitle ">The LawConnect supermaxi</h1>
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
                  src="/assets/sailing/sailing-hero-image.webp"
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
                The LawConnect supermaxi has emerged as a top contender in the Rolex Sydney Hobart Yacht Race, one of the
                world’s most prestigious sailing events. <br /> <br />
                After claiming historic back-to-back line honors wins in both 2023 and 2024, the 100ft yacht—owned and
                skippered by Christian Beck—continues to build on its consecutive successes, reflecting Beck's unwavering
                commitment to improving access to justice.
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
                    <div className="styles_sailingBG1Description">Back-to-back Sydney to Hobart line honors winner.</div>
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
              <div className="styles_headerTitle">Back to back: How LawConnect conquered The Hobart</div>
              <div
                className="styles_headerDescription"
                dangerouslySetInnerHTML={{
                  __html:
                    'Set sail on an unforgettable journey in our latest series, which takes you behind the scenes of the LawConnect supermaxi—from its early beginnings to its triumphant back-to-back Sydney to Hobart line honors victories in 2023 and 2024.<br> <br>Get exclusive insights from the crew as they recount the triumphs, challenges, and unwavering determination that propelled LawConnect to victory. This is a story of dedication, innovation, and a boat built to go the distance.',
                }}
              />
              <a className="styles_watchLink" href="https://www.youtube.com/@asklawconnect" target="_blank" rel="noreferrer">
                <span>Watch the series now</span>
                <div className="styles_watchArrowIconContainer">
                  <img
                    alt="Arrow Right Icon"
                    loading="lazy"
                    width="0"
                    height="0"
                    className="styles_watchArrowIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/sailing/arrow-right-blue.svg"
                  />
                  <img
                    alt="Arrow Right Icon"
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
                The supermaxi serves as a floating ambassador for innovation, highlighting LawConnect's dedication to pushing
                boundaries both on and off the water.
                <br /> <br />
                Continuing a proud tradition, each year Christian Beck invites a few employees aboard to experience the race
                firsthand alongside world-renowned sailors like Tony Mutter and Chris Nicholson.
                <br /> <br />
                This opportunity fosters a culture of collaboration and personal growth—reflecting LawConnect's unwavering
                commitment to overcoming challenges and achieving excellence.
              </div>
            </div>
          </div>
        </div>

        {/* Need help card */}
        <div className="styles_widthWrapper">
          <div className="styles_container">
            <div className="styles_card">
              <div className="styles_textWrapper">
                <div className="styles_title">Need help with an issue?</div>
                <div className="styles_description">Ask LawConnect your legal question for quick, free answers!</div>
              </div>
              <div className="styles_imageWrapper">
                <a
                  href="https://lawconnect.com/chat?newCase=true"
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

