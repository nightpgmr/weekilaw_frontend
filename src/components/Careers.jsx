import React from 'react';
import '../styles/careersCombined.css';

const Careers = () => {
  return (
    <main className="layout_main__DUFC2">
      <div className="layout_content__yRzeE">
        {/* Hero */}
        <div className="styles_heroContainer__UZwt9 ">
          <div className="styles_innerWidthWrapper__0gwbe ">
            <div className="styles_heroTitleContainer__1Qy7e">
              <div className="styles_breadcrumbsContainer__0nnvA">
                <a href="/en-us/about" className="styles_breadcrumb__bUxCv ">
                  About
                </a>
                <span className="styles_breadcrumb__bUxCv ">&nbsp;/&nbsp;</span>
                <span className="styles_breadcrumb__bUxCv styles_bold__6vlb9">Careers</span>
              </div>
              <h1 className="styles_heroTitle__UvSCa ">A rewarding place to work and grow</h1>
            </div>
            <div className="styles_heroImageContainer__UAyJ2 ">
              <div className="styles_heroImageWrapper__Ebftn">
                <img
                  alt="Hero"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage__AcMlf"
                  style={{ color: 'transparent' }}
                  src="/assets/careers/careers-hero-image.webp"
                />
              </div>
            </div>
            <div className="styles_heroIconWrapper__gVuzX">
              <div className="styles_heroIconContainer__Abc26">
                <img
                  alt="Hero BG Icon"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroIcon__boJGi "
                  style={{ color: 'transparent' }}
                  src="/assets/careers/hero-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro copy */}
        <div className="styles_widthWrapper___ai2G">
          <div className="styles_innerWidthWrapper__y0QMQ">
            <div className="styles_contentTextWrapper__8OHSu">
              <div className="styles_descriptionText__d3D8J">
                At LawConnect, we’re shaping the future of legal tech. We offer a collaborative, innovative, and
                flexible work environment where you can make a real impact. Grow with us as we set new standards in
                legal AI and improve access to justice.
                <br />
                <br />
                Expect meaningful work, a dynamic team, and great perks to keep you motivated. If you’re passionate about
                technology and making a difference, we’d love to hear from you.
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="styles_imageWidthWrapper__UM_DK">
          <div>
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/careers/careers-image-1.webp" />
              <source media="(min-width: 769px)" srcSet="/assets/careers/careers-image-1.webp" />
              <img
                alt="Careers"
                loading="lazy"
                width="0"
                height="0"
                className="styles_careersImage__lsk3x"
                style={{ color: 'transparent', width: '100%', height: 'auto' }}
                src="/assets/careers/careers-image-1.webp"
              />
            </picture>
          </div>
        </div>

        {/* Closing copy + CTA */}
        <div className="styles_widthWrapper___ai2G">
          <div className="styles_innerWidthWrapper__y0QMQ">
            <div className="styles_contentTextWrapper__8OHSu">
              <div className="styles_descriptionText__d3D8J">
                We’re always looking for passionate people who believe in the power of AI and legal technology. If you
                don’t see a perfect fit but think you can make an impact, send us your resume—we’re always open to great
                talent.
              </div>
            </div>
            <div className="styles_buttonContainer__peX6q">
              <a className="button_buttonContainer__gCB6U " href="https://lawconnect.com/en-us/contact-us?topic=careers">
                <div className="button_buttonText__1_evT styles_buttonText__W9nuv">Contact us</div>
                <div className="button_buttonArrow__75UxD ">
                  <div className="button_arrowIconWrapperHover__E_U1V ">
                    <img
                      alt="arrow-right-white"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon__EQvnO"
                      style={{ color: 'transparent' }}
                      src="/assets/careers/arrow-right-blue.svg"
                    />
                  </div>
                  <div className="button_arrowIconWrapper__ftquI ">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon__EQvnO"
                      style={{ color: 'transparent' }}
                      src="/assets/careers/arrow-right-blue.svg"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;

