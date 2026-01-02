import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountModal from './AccountModal.jsx';

const Header = ({ scrollElement }) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setIsScrolled(scrollTop > 10);
  }, []);

  const areasOfLaw = [
    { title: "حقوق تجاری", description: "معاملات و قراردادهای تجاری.", slug: "commercial-law" },
    { title: "حقوق کیفری", description: "بررسی جرم و صدور حکم.", slug: "criminal-law" },
    { title: "حقوق کار", description: "عدالت برای کارفرمایان و کارمندان.", slug: "employment-law" },
    { title: "حقوق املاک و وصیت‌نامه", description: "مدیریت و توزیع دارایی‌ها.", slug: "estate-and-probate-law" },
    { title: "حقوق خانواده", description: "جدایی، طلاق و تسویه حساب.", slug: "family-law" },
    { title: "حقوق مهاجرت", description: "ویزا، اقامت و حمایت.", slug: "immigration-law" },
    { title: "دادخواهی", description: "امور مربوط به دادگاه‌ها.", slug: "litigation" },
    { title: "حقوق جراحات شخصی", description: "آسیب دیدید؟ کمک در دسترس است.", slug: "personal-injury-law" },
    { title: "حقوق املاک", description: "تسویه حساب و اختلافات املاک.", slug: "property-law" },
  ];

  const aboutItems = [
    { title: "فناوری هوش مصنوعی ما", description: "قدرت هوش مصنوعی پیشرفته را به کار می‌گیرد.", to: "/en-us/about/ai-technology" },
    { title: "شبکه حقوقی ما", description: "وکلای متخصص در تمام زمینه‌های حقوقی.", to: "/en-us/about/legal-network" },
    { title: "شرکت", description: "ارزش‌ها و ساختار ما.", to: "/en-us/about/company" },
    { title: "فرصت‌های شغلی", description: "فرصت‌ها با Weekilaw.", to: "/en-us/about/careers" },
    { title: "قایق‌رانی", description: "درباره سوپر ماکسی سیدنی به هوبارت.", to: "/en-us/about/sailing" },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleAccountClick = () => {
    setActiveDropdown(null);

    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('is_authenticated') === 'true' ||
                           sessionStorage.getItem('is_authenticated') === 'true';

    if (isAuthenticated) {
      // If logged in, go directly to account page
      navigate('/account');
    } else {
      // If not logged in, show the modal
      setShowAccountModal(true);
    }
  };

  const handleAccountKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAccountClick();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileSubMenu(null);
  };

  const handleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSubMenu(null);
  };

  useEffect(() => {
    // Listen for scroll events on the body element (where scrolling actually happens)
    const scrollHandler = () => {
      handleScroll();
    };

    document.body.addEventListener('scroll', scrollHandler, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      document.body.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Mobile Menu */}
      <div className="styles-module__mobileMenuWrapper">
        <div className="styles-module__mobileMenuContainer">
          <div className="styles-module__menuIconContainer" onClick={toggleMobileMenu}>
            <div className="styles-module__iconWrapper">
              <svg
                className={`styles-module__menuIcon styles-module__defaultIcon styles-module__burgerIcon ${isMobileMenuOpen ? 'styles-module__hidden' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                className={`styles-module__menuIcon styles-module__activeIcon styles-module__closeIcon ${!isMobileMenuOpen ? 'styles-module__hidden' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18M6 6L18 18" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Link to="/" className="styles-module__logoContainer" onClick={closeMobileMenu}>
            <img
              alt="logo"
              className="styles-module__logo"
              src="/assets/logo-icon.png"
            />
          </Link>
          <Link to="/chat" className="styles-module__mobileChatButton" onClick={closeMobileMenu}>
            <div className="styles-module__mobileChatButtonLabel">چت کنید</div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Modal Overlay */}
      <div className={`styles-module__menuModalOverlay ${isMobileMenuOpen ? 'styles-module__menuModalOverlayOpen' : ''}`}>
        <div className="styles-module__menuModalContent">
          <div className="styles-module__menuLinksContainer">
            {/* Chat Button */}
            <div
              className="styles-module__mainMenuLink styles-module__gradientText"
              onClick={() => { closeMobileMenu(); setShowHelpModal(true); }}
            >
              <span className="styles-module__gradientTextContent">کمک بگیرید</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>

            {/* Areas of Law */}
            <div className="styles-module__mainMenuLink" onClick={() => handleMobileSubMenu('areas')}>
              <span>زمینه‌های حقوقی</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>
            {mobileSubMenu === 'areas' && (
              <div className="styles-module__menuLinksContainer styles-module__subCategories">
                {areasOfLaw.map((area, index) => (
                  <Link
                    key={index}
                    to={`/en-us/${area.slug}`}
                    className="styles-module__subMenuLink"
                    onClick={closeMobileMenu}
                  >
                    <span>{area.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                      <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
                    </svg>
                  </Link>
                ))}
              </div>
            )}

            {/* About */}
            <div className="styles-module__mainMenuLink" onClick={() => handleMobileSubMenu('about')}>
              <span>درباره</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>
            {mobileSubMenu === 'about' && (
              <div className="styles-module__menuLinksContainer styles-module__subCategories">
                {aboutItems.map((item, index) => {
                  const isInternal = !!item.to;
                  if (isInternal) {
                    return (
                      <Link
                        key={index}
                        to={item.to}
                        className="styles-module__subMenuLink"
                        onClick={closeMobileMenu}
                      >
                        <span>{item.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                          <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
                        </svg>
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="styles-module__subMenuLink"
                      onClick={closeMobileMenu}
                    >
                      <span>{item.title}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                        <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
                      </svg>
                    </a>
                  );
                })}
              </div>
            )}

            {/* For Lawyers */}
            <div className="styles-module__mainMenuLink" onClick={() => handleMobileSubMenu('lawyers')}>
              <span>برای وکلا</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>
            {mobileSubMenu === 'lawyers' && (
              <div className="styles-module__menuLinksContainer styles-module__subCategories">
                <Link
                  to="/en-us/about/legal-network"
                  className="styles-module__subMenuLink"
                  onClick={closeMobileMenu}
                >
                  <span>شبکه حقوقی ما</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                    <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
                  </svg>
                </Link>
                <Link
                  to="/en-us/for-lawyers/sign-up"
                  className="styles-module__subMenuLink"
                  onClick={closeMobileMenu}
                >
                  <span>ثبت نام</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                    <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
                  </svg>
                </Link>
              </div>
            )}

            {/* Account */}
            <div className="styles-module__mainMenuLink" onClick={() => { closeMobileMenu(); handleAccountClick(); }}>
              <span>حساب کاربری</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>

            {/* Footer Links Section */}
            <Link
              to="/en-us/insights"
              className="styles-module__mainMenuLink styles-module__footerLinkSpacing"
              onClick={closeMobileMenu}
            >
              <span>بینش‌ها</span>
            </Link>
            <Link
              to="/faqs"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>سؤالات متداول</span>
            </Link>
            <Link
              to="/en-us/about/ai-technology"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>فناوری هوش مصنوعی ما</span>
            </Link>
            <Link
              to="/en-us/about/company"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>شرکت</span>
            </Link>
            <Link
              to="/en-us/contact-us"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>تماس با ما</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="layout_menuHeightWrapper">
        <div className="styles-module__desktopMenuContainer" id="MENU_HEADER_ID">
          <div
            className={`styles-module__floatingContainer ${isScrolled ? 'styles-module__shrink' : ''}`}
            id="FLOATING_CONTAINER_ID"
          >
            <div className="styles-module__menuContentContainer">
              <Link to="/" className="styles-module__logoContainer">
                <img
                  alt="logo"
                  width="0"
                  height="20"
                  className="styles-module__logo"
                  src="/assets/logo-icon.png"
                />
              </Link>
              <div className="styles-module__menuLinksContainer">
                <Link
                  to="/chat"
                  className={`styles-module__gradientButton ${isScrolled ? 'styles-module__isScrolled' : ''}`}
                >
                  <div className="styles-module__gradientButtonLabel">چت کنید</div>
                </Link>
                <div className="styles-module__spacer"></div>

                {/* Areas of law dropdown */}
                <div
                  className="styles-module__menuItemWrapper"
                  onMouseEnter={() => toggleDropdown('areas')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer">
                    <div className="styles-module__labelContainer">
                      <span className="styles-module__labelTitle" title="زمینه‌های حقوقی">
                        زمینه‌های حقوقی
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'areas' && (
                    <div className="styles-module__childContainer styles-module__menuItemDropdown">
                      <div className="styles-module__innerWrapper styles-module__subMenuContainer">
                        <div className="styles-module__dropdownGrid">
                          {areasOfLaw.map((area, index) => (
                            <Link key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to={`/en-us/${area.slug}`}>
                              <div className="styles-module__menuDropdownItemTitle">{area.title}</div>
                              <div className="styles-module__menuDropdownItemDescription">{area.description}</div>
                            </Link>
                          ))}
                        </div>
                        <div className="styles-module__dropdownImageWrapper">
                          <div className="styles-module__areaOfLawImageContainer">
                            <img
                              alt="active-item-image"
                              className="styles-module__areaOfLawImage styles-module__defaultImage"
                              src="/assets/default-area-of-law.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* About dropdown */}
                <div
                  className="styles-module__menuItemWrapper"
                  onMouseEnter={() => toggleDropdown('about')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer">
                    <div className="styles-module__labelContainer">
                      <span className="styles-module__labelTitle" title="درباره">درباره</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'about' && (
                    <div className="styles-module__childContainer styles-module__menuItemDropdown">
                      <div className="styles-module__innerWrapper styles-module__subMenuContainer">
                        <div className="styles-module__dropdownGrid">
                          {aboutItems.map((item, index) => {
                            const isInternal = !!item.to;
                            if (isInternal) {
                              return (
                                <Link key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to={item.to}>
                                  <div className="styles-module__menuDropdownItemTitle">{item.title}</div>
                                  <div className="styles-module__menuDropdownItemDescription">{item.description}</div>
                                </Link>
                              );
                            }
                            return (
                              <a key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" href={item.href}>
                                <div className="styles-module__menuDropdownItemTitle">{item.title}</div>
                                <div className="styles-module__menuDropdownItemDescription">{item.description}</div>
                              </a>
                            );
                          })}
                        </div>
                        <div className="styles-module__dropdownImageWrapper">
                          <div className="styles-module__areaOfLawImageContainer">
                            <img
                              alt="active-item-image"
                              className="styles-module__areaOfLawImage styles-module__defaultImage"
                              src="/assets/default-area-of-law.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* For lawyers */}
                <div
                  className="styles-module__menuItemWrapper styles-module__buttonWrapper"
                  onMouseEnter={() => toggleDropdown('lawyers')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer">
                    <div className="styles-module__labelContainer">
                      <span className="styles-module__labelTitle" title="برای وکلا">برای وکلا</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'lawyers' && (
                    <div className="styles-module__childContainer styles-module__hoverMenu">
                      <Link to="/en-us/about/legal-network" className="styles-module__menuItem">
                        <span className="styles-module__menuItemText">شبکه حقوقی ما</span>
                      </Link>
                      <Link to="/en-us/for-lawyers/sign-up" className="styles-module__menuItem">
                        <span className="styles-module__menuItemText">ثبت نام</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Account */}
                <div
                  className="styles-module__menuItemWrapper styles-module__accountLinkWrapper"
                  role="button"
                  tabIndex={0}
                  onClick={handleAccountClick}
                  onKeyDown={handleAccountKeyDown}
                >
                  <div className="styles-module__menuItemContainer">
                    <div className="styles-module__labelContainer">
                      <div
                        className="styles-module__userImageContainer"
                        style={{
                          width: '28px',
                          height: '28px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          alt="user"
                          className="styles-module__userImage"
                          width="24"
                          height="24"
                          src="/assets/account-profile.svg"
                        />
                      </div>
                      <span className="styles-module__labelTitle styles-module__accountLabelTitle" title="حساب کاربری">
                        حساب کاربری
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon styles-module__chevronIcon styles-module__noRotate">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountModal open={showAccountModal} onClose={() => setShowAccountModal(false)} />

      {/* Help Modal */}
      {showHelpModal && (
        <div className="styles-module__helpModalOverlay">
          <div className="styles-module__helpModalContent">
            <div className="styles-module__closeWrapper">
              <button
                className="styles-module__helpModalCloseButton"
                onClick={() => setShowHelpModal(false)}
                aria-label="Close help modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__closeButton styles-module__activeIcon">
                  <path d="M19.5 3.75C19.9142 3.75 20.25 4.08579 20.25 4.5C20.25 4.70708 20.1661 4.89456 20.0304 5.03028L13.0607 12L20.0304 18.9696C20.1661 19.1054 20.25 19.2929 20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.2894 20.25 19.099 20.1632 18.9628 20.0233L12.0001 13.0606L5.03039 20.0303C4.89466 20.166 4.70713 20.25 4.5 20.25C4.08579 20.25 3.75 19.9142 3.75 19.5C3.75 19.2912 3.83535 19.1023 3.97308 18.9663L10.9394 12L3.97671 5.03727C3.83685 4.90104 3.75 4.71066 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.70711 3.75 4.89462 3.83395 5.03034 3.96968L12.0001 10.9393L18.9663 3.97308C19.1023 3.83535 19.2912 3.75 19.5 3.75Z" fill="#333333"></path>
                </svg>
              </button>
            </div>
            <div className="styles-module__modalContent">
              <div className="styles-module__getHelpCardsContainerMobile">
                <div className="styles-module__getHelpCardMobile">
                  <div className="styles-module__getHelpCardContentMobile">
                    <h3 className="styles-module__getHelpCardTitleMobile">دریافت راهنمای حقوقی هوشمند</h3>
                    <div className="styles-module__getHelpCardCtaWrapper">
                      <a className="button_buttonContainer content-card_stackButtonContainer" href="/chat" style={{marginTop: "-30px"}}>
                        <div className="button_buttonText content-card_stackButtonText">یک سؤال بپرسید</div>
                        <div className="button_buttonArrow content-card_stackButtonArrow">
                          <div className="button_arrowIconWrapperHover">
                            <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-blue.svg" />
                          </div>
                          <div className="button_arrowIconWrapper">
                            <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-white.svg" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div style={{marginLeft: "-50px", marginRight: "90px", marginBottom: "-30px", fontSize: "12px"}}>⚠️ پاسخ‌ها جنبه راهنمایی عمومی دارد و جایگزین مشاوره وکالتی نیست</div>
                  </div>
                  <img alt="Get AI legal answers" className="styles-module__getHelpCardImageMobile" src="/assets/phone-4-mobile.webp" />
                </div>
                <div className="styles-module__getHelpCardMobile">
                  <div className="styles-module__getHelpCardContentMobile">
                    <h3 className="styles-module__getHelpCardTitleMobile">در صورت نیاز، وکیل متخصص را پیدا کنید</h3>
                    <div className="styles-module__getHelpCardCtaWrapper">
                      <a className="button_buttonContainer content-card_stackButtonContainer" href="/chat" style={{marginTop: "-30px"}}>
                        <div className="button_buttonText content-card_stackButtonText">یک سؤال بپرسید</div>
                        <div className="button_buttonArrow content-card_stackButtonArrow">
                          <div className="button_arrowIconWrapperHover">
                            <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-blue.svg" />
                          </div>
                          <div className="button_arrowIconWrapper">
                            <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-white.svg" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img alt="Find the right lawyer" className="styles-module__getHelpCardImageMobile" src="/assets/phone-hero-mobile.webp" />
                </div>
              </div>
              <div className="styles-module__mobileBGIcon"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
