import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/careers.css';

const Careers = () => {
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
                <span className="styles_breadcrumb styles_bold">Careers</span>
              </div>
              <h1 className="styles_heroTitle ">A rewarding place to work and grow</h1>
            </div>
            <div className="styles_heroImageContainer ">
              <div className="styles_heroImageWrapper">
                <img
                  alt="Hero"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/careers/careers-hero-image.webp"
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
                  src="/assets/careers/hero-icon.svg"
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
        <div className="styles_imageWidthWrapper">
          <div>
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/careers/careers-image-1.webp" />
              <source media="(min-width: 769px)" srcSet="/assets/careers/careers-image-1.webp" />
              <img
                alt="Careers"
                loading="lazy"
                width="0"
                height="0"
                className="styles_careersImage"
                style={{ color: 'transparent', width: '100%', height: 'auto' }}
                src="/assets/careers/careers-image-1.webp"
              />
            </picture>
          </div>
        </div>

        {/* Closing copy + CTA */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                We’re always looking for passionate people who believe in the power of AI and legal technology. If you
                don’t see a perfect fit but think you can make an impact, send us your resume—we’re always open to great
                talent.
              </div>
            </div>
            <div className="styles_buttonContainer">
              <a className="button_buttonContainer " href="/en-us/about/company">
                <div className="button_buttonText styles_buttonText">Contact us</div>
                <div className="button_buttonArrow ">
                  <div className="button_arrowIconWrapperHover ">
                    <img
                      alt="arrow-right-white"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/careers/arrow-right-blue.svg"
                    />
                  </div>
                  <div className="button_arrowIconWrapper ">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="button_arrowIcon"
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
    </PageLayout>
  );
};

export default Careers;

