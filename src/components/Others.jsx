import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';

const Library = () => {
  const navigate = useNavigate();

  const areasOfLaw = [
    {
      title: 'Commercial law',
      description: 'Commercial law covers the legal framework for business transactions and agreements.',
      href: '/commercial-law'
    },
    {
      title: 'Criminal law',
      description: 'Uphold justice, protect individuals and society, and understand your rights.',
      href: '/criminal-law'
    },
    {
      title: 'Employment law',
      description: 'Fair treatment for both employers and employees.',
      href: '/employment-law'
    },
    {
      title: 'Estate and probate law',
      description: 'Understanding estate planning and probate processes.',
      href: '/estate-and-probate-law'
    },
    {
      title: 'Family law',
      description: 'Navigating family law in the United States can be complex and challenging.',
      href: '/family-law'
    },
    {
      title: 'Immigration law',
      description: 'Navigating family, sponsorships, visas, applications, and residency.',
      href: '/immigration-law'
    },
    {
      title: 'Litigation',
      description: 'Litigation is resolving disputes through courts and legal proceedings.',
      href: '/litigation'
    },
    {
      title: 'Personal injury law',
      description: 'Proactive measures to prevent disputes or prepare for action.',
      href: '/personal-injury-law'
    },
    {
      title: 'Property law',
      description: 'Property law covers the rights to use and own land and buildings and how they can be transferred',
      href: '/property-law'
    }
  ];

  return (
    <PageLayout>
      <div className="layout_content">
        {/* Library Header Section */}
        <div className="styles_libraryHeaderWrapper">
          <div className="library-header_libraryTitleContainer">
            <div className="library-header_widthWrapper">
              <div className="library-header_innerWidthWrapper styles_libraryHeaderInnerClass">
                {/* Breadcrumb */}
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem">
                    <a href="/library">Library</a>
                  </span>
                </div>

                {/* Title */}
                <h1 className="library-header_title styles_areaOfLawMaxWidth styles_libraryHeaderClass">
                  Library
                </h1>

                {/* Hero Icon */}
                <div className="library-header_heroIconContainer">
                  <img
                    width="260"
                    height="260"
                    src="/assets/hero-icon.svg"
                    alt="hero-icon"
                    className="library-header_heroIcon"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Areas of Law Section */}
        <div className="category_libraryGapWrapper">
          <div className="content_contentContainer">
            <div className="content_sectionContainer">
              <div className="content_innerWidthWrapper">
                <div className="content_descriptionHeader">
                  <div className="content_bodyText content_maxWidth">
                    <p>Helping people just like you navigate the law</p>
                  </div>
                  <div className="content_subtitle">
                    <p>Information, insights, and case studies by common areas of law. Browse the categories for your area of interest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="category_libraryGapWrapper">
          <div className="content_contentContainer">
            <div className="content_sectionContainer">
              <div className="content_innerWidthWrapper">
                <div className="styles-module__container">
                  <div className="styles-module__cardsContainer">
                    <div
                      className="styles-module__cards areas-law_cardsContainer"
                      style={{
                        gap: '20px 0px',
                        gridAutoColumns: '1fr',
                        gridTemplateColumns: '1fr'
                      }}
                    >
                      {areasOfLaw.map((area, index) => (
                        <a key={index} href={area.href} className="areas-law_areaLink">
                          {area.title} {area.description} {area.title}
                          <img
                            src="/assets/arrow-right-blue.svg"
                            alt="arrow-right"
                            className="areas-law_arrowIcon"
                            width="16"
                            height="16"
                          />
                          <img
                            src="/assets/arrow-right-midnight.svg"
                            alt="arrow-right hover"
                            className="areas-law_arrowIconHover"
                            width="16"
                            height="16"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="landing-page_widthWrapper">
          <div className="landing-page_innerWidthWrapper">
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
                    style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}
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
                          src="/assets/arrow-right-blue.svg"
                        />
                      </div>
                      <div className="styles_arrowIconWrapper">
                        <img
                          alt="arrow-right-white"
                          loading="lazy"
                          width="16"
                          height="16"
                          className="styles_arrowIcon"
                          src="/assets/arrow-right-white.svg"
                        />
                      </div>
                    </div>
                  </a>
                  <div className="styles_backgroundColour"></div>
                  <div className="styles_backgroundSquare" style={{backgroundColor: '#F0EFEC'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="landing-page_widthWrapper">
          <div className="landing-page_innerWidthWrapper">
            <div className="disclaimer_disclaimerTextWrapper">
              <div className="disclaimer_disclaimer">
                <b>سلب مسئولیت</b>: محتوای ارائه شده در این وب‌سایت فقط برای اهداف اطلاعاتی است و نباید به عنوان جایگزین مشاوره حقوقی مورد اعتماد قرار گیرد. به گیرندگان توصیه می‌شود قبل از اجرای هر گونه توصیه‌ای در اینجا، با مشاور حقوقی واجد شرایط مشورت کنند. Weekilaw مسئولیت اقدامات انجام شده بر اساس این اطلاعات را نخواهد داشت.
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Library;
