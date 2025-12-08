import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { areasOfLawContent, defaultAreaSlug } from '../data/areas';

const EstateProbate = () => {
  const { areaSlug } = useParams();
  const area = areasOfLawContent[areaSlug] || areasOfLawContent[defaultAreaSlug];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const {
    breadcrumbLabel,
    breadcrumbHref,
    heroTitle,
    introText,
    moreInfoText,
    moreInfoHref,
    introImage,
    subCategories,
    subcategoriesTitle,
    subcategoriesDescription,
    whyUseTitle,
    whyUseDescription,
    whyUseSections,
    howItWorksTitle,
    howItWorksDescription,
    howItWorksSteps,
    faqTitle,
    faqItems,
    helpTitle,
    helpDescription,
  } = area;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="layout_main__DUFC2">
      <div className="layout_content__yRzeE">
        {/* Library Header Section */}
        <div className="styles_libraryHeaderWrapper__de8tg">
          <div className="library-header_libraryTitleContainer__spqZI">
            <div className="library-header_widthWrapper__8Vg_N">
              <div className="library-header_innerWidthWrapper__d_X1F styles_libraryHeaderInnerClass__rjS01">
                {/* Breadcrumb */}
                <div className="breadcrumb_breadcrumbContainer__WxR4l">
                  <span className="breadcrumb_breadcrumbItem__YvWT0">
                    <a href="/en-us/library">Areas of law</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem__YvWT0">
                    {' / '}
                    <a href={breadcrumbHref}>{breadcrumbLabel}</a>
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="library-header_title__Bu5PO styles_areaOfLawMaxWidth__xDtQf styles_libraryHeaderClass__qWzo_">
                  {heroTitle}
                </h1>
                
                {/* Hero Icon */}
                <div className="library-header_heroIconContainer__ZSjKT">
                  <img 
                    width="260" 
                    height="260" 
                    src="/assets/hero-icon.svg" 
                    alt="hero-icon" 
                    className="library-header_heroIcon__2SR5U" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input - Inside library header wrapper */}
          <div className="styles_inputWrapper__fIYp6">
          <div className="chat_doubleChatInputWrapper__CMH7r">
            <div className="chat_outerWrapper__tQJCI">
              <div className="style-module__chatInputContainer___6z7-o styles-module__outerWrapper___fOgj7">
                <div className="style-module__shinyBorderContainer___S56O-">
                  <div className="style-module__chatInput___eRGXK styles-module__inputWrapper___kh9as" id="chat-input-estate">
                    <input className="style-module__fileInput___JIo-7" multiple type="file" />
                    <img 
                      className="style-module__preTextIcon___jd5co" 
                      src="/assets/spark-gray.svg" 
                      alt="spark" 
                    />
                    <div className="style-module__actions___HoJ1V">
                      <button className="style-module__sendButton___uDqXf" id="send-button-estate" aria-label="send-button">
                        <div className="style-module__sendArrowImageWrapper___uFHTa">
                          <div className="style-module__sendArrowWrapperHover___emgh3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow___pxG7G">
                              <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <div className="style-module__sendArrowWrapper___Sb07B">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow___pxG7G">
                              <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="style-module__inputs___yi0Q5 style-module__noFiles___90hgV">
                      <textarea 
                        id="double-input-estate" 
                        className="style-module__textareaInput___mZP78 style-module__withPreTextIcon___L-Ypa" 
                        rows="1" 
                        placeholder="Ask your legal question"
                        style={{height: '72px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Quick Points Section */}
        <div className="category_libraryGapWrapper__u5QQx category_quickPointsNoTopGap__xyz">
          <div className="landing-page_container__RRN5k">
            <div className="styles_heroContainer__OgZ6p">
              <div className="styles_featureCards__fVwD5">
                <div className="styles_featureCard__BypG1 styles_featureCardTwo__HuPew">
                  <div className="styles_iconWrapper__rIStC">
                    <img 
                      src="/assets/shield-tick.svg" 
                      alt="shield" 
                      className="styles_icon__3foz7"
                      width="24"
                      height="24"
                    />
                  </div>
                  <p className="styles_featureText__KqIcI">
                    Get free AI answers
                  </p>
                </div>
                <div className="styles_featureCard__BypG1 styles_featureCardTwo__HuPew">
                  <div className="styles_iconWrapper__rIStC">
                    <img 
                      src="/assets/lightning-blue.svg" 
                      alt="lightning" 
                      className="styles_icon__3foz7"
                      width="24"
                      height="24"
                    />
                  </div>
                  <p className="styles_featureText__KqIcI">
                    Make informed decisions
                  </p>
                </div>
              </div>
              <img 
                src="/assets/quick-points-bg-desktop.webp" 
                alt="hero-card-background" 
                loading="eager" 
                width="0" 
                height="0" 
                decoding="async" 
                data-nimg="1" 
                className="styles_heroImageBackground__cjqcg" 
                style={{color:'transparent'}} 
              />
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="category_libraryGapWrapper__u5QQx">
          <div className="content_contentContainer__mvGPe">
            <div className="content_sectionContainer__3Q6bj">
              <div className="content_innerWidthWrapper__NAGw5">
                <div className="content_descriptionHeader__ad9mQ">
                  <div className="content_bodyText__cGBqf content_maxWidth__2fxBh">
                    <p>{introText}</p>
                  </div>
                  {/* MORE INFO Section */}
                  <div className="intro_moreInfoContainer__aY8_y">
                    <div className="intro_moreInfo__VrXyH">
                      <div className="intro_moreInfoIconContainer__22zOV">
                        <img 
                          src="/assets/light-bulb.svg" 
                          alt="info" 
                          className="intro_infoIcon__AE5zx"
                          width="24"
                          height="24"
                        />
                      </div>
                      <div className="intro_moreInfoText__Z07V6">MORE INFO</div>
                    </div>
                    <div className="intro_moreInfoLinkContainer__Cx8VX">
                      <a href={moreInfoHref} className="intro_categoryActionContainer__3wC42">
                        <span className="intro_categoryActionText___Ckxx">{moreInfoText}</span>
                        <div className="intro_categoryArrowContainer__7h1sZ">
                          <img 
                            src="/assets/arrow-right-blue.svg" 
                            alt="arrow" 
                            className="intro_categoryArrow__apPLJ"
                            width="16"
                            height="16"
                          />
                          <img 
                            src="/assets/arrow-right-midnight.svg" 
                            alt="arrow hover" 
                            className="intro_categoryArrowHover__Kh4nh"
                            width="16"
                            height="16"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Intro Image */}
                <img 
                  alt="Estate and probate intro image" 
                  loading="lazy" 
                  width="0" 
                  height="0" 
                  decoding="async" 
                  className="intro_image__LtIHk" 
                  style={{color: 'transparent'}} 
                    src={introImage}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Categories Section */}
        <div className="category_libraryGapWrapper__u5QQx">
          <div className="subcategories_widthWrapper__R57Cc">
            <div className="subcategories_carouselContainer__0opfD">
              <div className="subcategories_titleContainer__q3uqT">
                <h2 className="subcategories_title__PgiX3">
                  {subcategoriesTitle}
                </h2>
              </div>
              <div className="subcategories_descriptionContainer__IVhG4">
                <p className="subcategories_description__0nHbS">{subcategoriesDescription}</p>
              </div>
              <div className="styles-module__container___UTp91 subcategories_carouselWrapper__PVbzb">
                <div className="styles-module__cardsContainer___5LjEc">
                  <div 
                    className="styles-module__cards___cdHPc subcategories_cardsContainer__1VbkX"
                    style={{gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))'}}
                  >
                    {subCategories.map((category, index) => (
                      <div key={index} className="subcategories_gridItem___CRz_ subcategories_notClickable__ZmndR">
                        <div className="subcategories_categoryImageContainer__crJkO">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            loading="lazy"
                            width="0"
                            height="0"
                            className="subcategories_categoryImage__7XSLY"
                            style={{color: 'transparent'}}
                          />
                        </div>
                        <div className="subcategories_categoryTitle__fkk3i">{category.title}</div>
                        <div className="subcategories_categoryDescription__ZPIod">
                          <p>
                            <span style={{color: '#333333'}}>{category.description}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="styles-module__actionBar___ZrZ2f subcategories_actionBarWrapper__7ioqg">
                  <div className="styles-module__scrollBar___U38pA">
                    <div className="styles-module__scrolledPosition___xWpkI" style={{width: '25%', left: '0%'}}></div>
                  </div>
                  <div className="styles-module__actionButtonContainer___OG46l subcategories_arrowButtonContainer__uD9nD">
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

        {/* Why Use AI Section */}
        <div className="category_libraryGapWrapper__u5QQx">
          <div className="why-use_widthWrapper__EkKMI">
            <div className="why-use_carouselContainer__IRMng">
            <div className="why-use_titleContainer__OEO_W">
              <h2 className="why-use_title__ODdwy">{whyUseTitle}</h2>
            </div>
            <div className="why-use_descriptionContainer__BGSf_">
              <p className="why-use_description__EyjEk">
                <span style={{color: '#191919'}}>
                  {whyUseDescription}
                </span>
              </p>
            </div>
            <div className="styles-module__container___UTp91 why-use_carouselWrapper__mSri4">
              <div className="styles-module__cardsContainer___5LjEc">
                <div 
                  className="styles-module__cards___cdHPc why-use_cardsContainer__nYh6H"
                  style={{gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))'}}
                >
                  {whyUseSections.map((section, index) => (
                    <div key={index} className="why-use_gridItem__TtOQ4">
                      <div className="why-use_categoryImageContainer__s7iTw">
                        <img 
                          src={section.image} 
                          alt={section.title}
                          loading="lazy"
                          width="0"
                          height="0"
                          className="why-use_categoryImage__333U6"
                          style={{color: 'transparent'}}
                        />
                      </div>
                      <div className="why-use_categoryTitle__etFgj">{section.title}</div>
                      <div className="why-use_categoryDescription__LEx3r">
                        <p>
                          <span style={{color: '#333333'}}>{section.description}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How It Works Section */}
        <div className="category_libraryGapWrapper__u5QQx">
          {/* How It Works Steps */}
          <div className="how-it-works_container__qoozy how-it-works_noBackgroundLine__gqWYE">
            <div className="how-it-works_container__of4_F">
              <div className="how-it-works_stepsWrapper__EUaDV">
                <div className="how-it-works_titleContainer__AfLNN">
                  <h2 className="how-it-works_title___Fro9">{howItWorksTitle}</h2>
                  <p className="how-it-works_description__hDe10">
                    <span style={{color: '#191919'}}>
                      {howItWorksDescription}
                    </span>
                  </p>
                </div>
                <div className="how-it-works_stepsContainer__DSnE_">
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className={`how-it-works_step__jFwrJ ${index === 1 ? 'how-it-works_step2__nv2n9 how-it-works_step2__11D_W' : ''} ${index === 2 ? 'how-it-works_step3__sFfe0' : ''}`}>
                      <div className="how-it-works_imageWrapper__izb3y">
                        <img 
                          alt={step.title} 
                          loading="lazy" 
                          width="0" 
                          height="0" 
                          className="how-it-works_stepImage__Lff2G how-it-works_desktop__kRSLk"
                          style={{color: 'transparent'}} 
                          src={step.image}
                        />
                        <img 
                          alt={step.title} 
                          loading="lazy" 
                          width="0" 
                          height="0" 
                          className="how-it-works_stepImage__Lff2G how-it-works_tablet__MM4MR"
                          style={{color: 'transparent'}} 
                          src={step.image.replace('step1-desktop', 'step1-tablet').replace('step2-desktop', 'step2-tablet').replace('step3-v2-desktop', 'step3-v2-tablet')}
                        />
                        <img 
                          alt={step.title} 
                          loading="lazy" 
                          width="0" 
                          height="0" 
                          className="how-it-works_stepImage__Lff2G how-it-works_mobile__VUq45"
                          style={{color: 'transparent'}} 
                          src={step.image.replace('step1-desktop', 'step1-mobile').replace('step2-desktop', 'step2-mobile').replace('step3-v2-desktop', 'step3-v2-mobile')}
                        />
                      </div>
                      <div className="how-it-works_stepContent__VUEk_">
                        <h3 className="how-it-works_stepTitle__oniny">{step.title}</h3>
                        <p className="how-it-works_stepDescription__WZf71">
                          <span style={{color: '#333333'}}>{step.description}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="landing-page_widthWrapper__v0jFV">
          <div className="landing-page_innerWidthWrapper__VGDzH">
            <div className="faq-content_faqContainer__4GgG5">
              <div className="faq-content_faqTitleContainer___Gx5Q">
                <h2 className="faq-content_faqTitle__uh_gX">{faqTitle}</h2>
              </div>
              <div className="dropdown_dropDownImageWrapper__v07FL">
                <div className="dropdown_dropDownContainer__jo4Sg">
                  {faqItems.map((faq, index) => (
                    <div key={index} className={`dropdown_dropDownItem__7lFRG ${openFaqIndex === index ? 'dropdown_open__s2Jye' : ''}`}>
                      <div className="dropdown_dropDownItemTitle__SxA7w" onClick={() => toggleFaq(index)}>
                        <div className="dropdown_dropDownItemTitleText__gtTrF">{faq.question}</div>
                        <img 
                          alt="arrow-down" 
                          loading="lazy" 
                          width="16" 
                          height="16" 
                          className={`dropdown_dropDownItemTitleIcon__vfy8N ${openFaqIndex === index ? 'dropdown_rotated__twdBC' : ''}`}
                          src="/assets/chevron-down-6.svg"
                        />
                      </div>
                      <div className={`dropdown_dropDownItemContent__pH0Gj ${openFaqIndex === index ? 'dropdown_open__s2Jye' : ''} faq-content_dropDownContent__ZLW2s`}>
                        <div>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <img 
                  alt="help-floating" 
                  loading="lazy" 
                  width="0" 
                  height="0" 
                  className="dropdown_helpFloatingImage__OC4Ko" 
                  style={{color: 'transparent'}} 
                  src="/assets/help-floating-desktop.webp"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="landing-page_widthWrapper__v0jFV">
          <div className="landing-page_innerWidthWrapper__VGDzH">
            <div className="styles_container__F5erF">
              <div className="styles_card__G5i6M">
                <div className="styles_textWrapper__yJ7QI">
                  <div className="styles_title__qe9MP">{helpTitle}</div>
                  <div className="styles_description__gONZv">{helpDescription}</div>
                </div>
                <div className="styles_imageWrapper__xawbg">
                  <a 
                    href="/chat" 
                    className="styles_buttonWrapper__XXBD1 styles_startCaseButton__9iUyN"
                    style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}
                  >
                    <div className="styles_buttonText___POD5">Start now</div>
                    <div className="styles_buttonArrow__iKFSw">
                      <div className="styles_arrowIconWrapperHover__hrNLa">
                        <img 
                          alt="arrow-right" 
                          loading="lazy" 
                          width="16" 
                          height="16" 
                          className="styles_arrowIcon__Sfck8" 
                          src="/assets/arrow-right-blue.svg"
                        />
                      </div>
                      <div className="styles_arrowIconWrapper__QocWn">
                        <img 
                          alt="arrow-right-white" 
                          loading="lazy" 
                          width="16" 
                          height="16" 
                          className="styles_arrowIcon__Sfck8" 
                          src="/assets/arrow-right-white.svg"
                        />
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

        {/* Disclaimer Section */}
        <div className="landing-page_widthWrapper__v0jFV">
          <div className="landing-page_innerWidthWrapper__VGDzH">
            <div className="disclaimer_disclaimerTextWrapper__ttZjZ">
              <div className="disclaimer_disclaimer__L9Ot5">
                <b>Disclaimer</b>: The content provided on this website is for informational purposes only
                and should not be relied upon as a substitute for legal advice. 
                Recipients are advised to consult with qualified legal counsel before 
                implementing any recommendations herein. LawConnect shall not be liable 
                for actions taken based on this information.
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Chat Section - Footer */}
        <div className="content_contentContainer__mvGPe">
          <div className="content_sectionContainer__3Q6bj">
            <div className="chat_doubleChatInputWrapper__CMH7r">
              <div className="chat_outerWrapper__tQJCI">
                <div className="style-module__chatInputContainer___6z7-o styles-module__outerWrapper___fOgj7">
                  <div className="style-module__shinyBorderContainer___S56O-">
                    <div className="style-module__chatInput___eRGXK styles-module__inputWrapper___kh9as" id="chat-input-estate-last-section">
                      <input className="style-module__fileInput___JIo-7" multiple type="file" />
                      <img
                        className="style-module__preTextIcon___jd5co"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions___HoJ1V">
                        <button className="style-module__sendButton___uDqXf" id="send-button-estate-last-section" aria-label="send-button">
                          <div className="style-module__sendArrowImageWrapper___uFHTa">
                            <div className="style-module__sendArrowWrapperHover___emgh3">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow___pxG7G">
                                <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                            <div className="style-module__sendArrowWrapper___Sb07B">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow___pxG7G">
                                <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="style-module__inputs___yi0Q5 style-module__noFiles___90hgV">
                        <textarea
                          id="double-input-estate-last-section"
                          className="style-module__textareaInput___mZP78 style-module__withPreTextIcon___L-Ypa"
                          rows="1"
                          placeholder="Ask your legal question"
                          style={{height: '72px'}}
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
    </main>
  );
};

export default EstateProbate;

