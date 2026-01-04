import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';

const Library = () => {
  const navigate = useNavigate();

  const areasOfLaw = [
    {
      title: 'حقوق بازرگانی',
      description: 'حقوق بازرگانی چارچوب قانونی برای معاملات و توافقات تجاری را پوشش می‌دهد.',
      href: '/en-us/commercial-law',
      image: '/assets/commercial-law.webp'
    },
    {
      title: 'حقوق کیفری',
      description: 'حفظ عدالت، حمایت از افراد و جامعه، و درک حقوق خود.',
      href: '/en-us/criminal-law',
      image: '/assets/criminal-law.webp'
    },
    {
      title: 'حقوق کار',
      description: 'رفتار منصفانه برای کارفرمایان و کارمندان.',
      href: '/en-us/employment-law',
      image: '/assets/employment-law.webp'
    },
    {
      title: 'حقوق ارث و املاک',
      description: 'درک برنامه‌ریزی ارث و فرآیندهای املاک.',
      href: '/en-us/estate-and-probate-law',
      image: '/assets/estate-and-probate-law.webp'
    },
    {
      title: 'حقوق خانواده',
      description: 'ناوبری حقوق خانواده در ایالات متحده می‌تواند پیچیده و چالش‌برانگیز باشد.',
      href: '/en-us/family-law',
      image: '/assets/family-law.webp'
    },
    {
      title: 'حقوق مهاجرت',
      description: 'ناوبری خانواده، حمایت، ویزا، درخواست‌ها و اقامت.',
      href: '/en-us/immigration-law',
      image: '/assets/immigration-law.webp'
    },
    {
      title: 'دادرسی',
      description: 'دادرسی حل اختلافات از طریق دادگاه‌ها و مراحل قانونی است.',
      href: '/en-us/litigation',
      image: '/assets/litigation.webp'
    },
    {
      title: 'حقوق جراحت شخصی',
      description: 'اقدامات پیشگیرانه برای جلوگیری از اختلافات یا آماده‌سازی برای اقدام.',
      href: '/en-us/personal-injury-law',
      image: '/assets/personal-injury-law.webp'
    },
    {
      title: 'حقوق املاک',
      description: 'حقوق املاک حقوق استفاده و مالکیت زمین و ساختمان‌ها و نحوه انتقال آن‌ها را پوشش می‌دهد',
      href: '/en-us/property-law',
      image: '/assets/property-law.webp'
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
                    <a href="/en-us/library">کتابخانه</a>
                  </span>
                </div>

                {/* Title */}
                <h1 className="library-header_title styles_areaOfLawMaxWidth styles_libraryHeaderClass">
                  کتابخانه
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
                    <p>کمک به افرادی مانند شما برای ناوبری در قوانین</p>
                  </div>
                  <div className="content_subtitle">
                    <p>اطلاعات، بینش‌ها و مطالعات موردی توسط زمینه‌های رایج حقوقی. دسته‌ها را برای زمینه مورد علاقه خود مرور کنید.</p>
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
                <div className="styles_container__PsSny">
                  <div className="styles_gridContainer__9WHkz">
                      {areasOfLaw.map((area, index) => (
                      <a key={index} href={area.href} className="styles_gridItem__itRkj">
                        <div className="styles_categoryImageContainer__u4ZXH">
                          <img
                            alt={area.title}
                            loading="lazy"
                            width="300"
                            height="180"
                            decoding="async"
                            data-nimg="1"
                            className="styles_categoryImage__IQyPW"
                            style={{color: 'transparent'}}
                            src={area.image}
                          />
                        </div>
                        <div className="styles_cardContent">
                          <div className="styles_categoryTitle__u3rz3">{area.title}</div>
                          <div className="styles_categoryDescription__urWjy">{area.description}</div>
                          <div className="styles_categoryActionContainer__oLxLT">
                            <span className="styles_categoryActionText__wYDIY">{area.title}</span>
                            <div className="styles_categoryArrowContainer__kIrkB">
                              <img
                                alt="arrow-right"
                                loading="lazy"
                            width="16"
                            height="16"
                                decoding="async"
                                data-nimg="1"
                                style={{color: 'transparent'}}
                                src="/assets/arrow-right-blue.svg"
                          />
                            </div>
                          </div>
                        </div>
                        </a>
                      ))}
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
