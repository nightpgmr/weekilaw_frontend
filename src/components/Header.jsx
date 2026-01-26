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
  const [showAreasModal, setShowAreasModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showLawyersModal, setShowLawyersModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('is_authenticated') === 'true' ||
                        sessionStorage.getItem('is_authenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();

    // Listen for storage changes (in case auth status changes in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'is_authenticated') {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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
    { title: "فناوری هوش مصنوعی ما", description: "قدرت هوش مصنوعی پیشرفته را به کار می‌گیرد.", to: "/about/ai-technology" },
    { title: "شبکه حقوقی ما", description: "وکلای متخصص در تمام زمینه‌های حقوقی.", to: "/about/legal-network" },
    { title: "شرکت", description: "ارزش‌ها و ساختار ما.", to: "/about/company" },
    { title: "فرصت‌های شغلی", description: "فرصت‌ها با Weekilaw.", to: "/about/careers" },
    { title: "قایق‌رانی", description: "درباره سوپر ماکسی سیدنی به هوبارت.", to: "/about/sailing" },
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

  const handleLogout = () => {
    localStorage.removeItem('is_authenticated');
    sessionStorage.removeItem('is_authenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileSubMenu(null);
    setShowAreasModal(false);
    setShowAboutModal(false);
    setShowLawyersModal(false);
  };

  const handleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSubMenu(null);
    setShowAreasModal(false);
    setShowAboutModal(false);
    setShowLawyersModal(false);
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

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('is_authenticated') === 'true' ||
                        sessionStorage.getItem('is_authenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

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
            <div className="styles-module__mainMenuLink" onClick={() => setShowAreasModal(true)}>
              <span>زمینه‌های حقوقی</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>

            {/* About */}
            <div className="styles-module__mainMenuLink" onClick={() => setShowAboutModal(true)}>
              <span>درباره</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>

            {/* For Lawyers */}
            <div className="styles-module__mainMenuLink" onClick={() => setShowLawyersModal(true)}>
              <span>برای وکلا</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>
            <div className="styles-module__mainMenuLink" onClick={() => { closeMobileMenu(); handleAccountClick(); }}>
              <span>حساب کاربری</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__menuChevron">
                <path d="M15.0303 7.71966C15.1661 7.58394 15.3536 7.5 15.5607 7.5C15.9749 7.5 16.3107 7.83579 16.3107 8.25C16.3107 8.46067 16.2238 8.65105 16.084 8.78729L8.59798 16.2733C8.46174 16.4131 8.27136 16.5 8.06067 16.5C7.85003 16.5 7.65965 16.4131 7.52341 16.2733L0.0373535 8.78728C-0.102509 8.65105 -0.189453 8.46067 -0.189453 8.25C-0.189453 7.83579 0.146336 7.5 0.56067 7.5C0.767766 7.5 0.955266 7.58394 1.09098 7.71966L8.06067 14.6892L15.0303 7.71966Z" fill="currentColor" transform="rotate(90 8 8)"/>
              </svg>
            </div>

            {/* Footer Links Section */}
            {/* <Link
              to="/insights"
              className="styles-module__mainMenuLink styles-module__footerLinkSpacing"
              onClick={closeMobileMenu}
            >
              <span>بینش‌ها</span>
            </Link> */}
            <Link
              to="/faqs"
              className="styles-module__mainMenuLink  styles-module__footerLinkSpacing"
              onClick={closeMobileMenu}
            >
              <span>سؤالات متداول</span>
            </Link>
            <Link
              to="/about/ai-technology"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>فناوری هوش مصنوعی ما</span>
            </Link>
            <Link
              to="/about/company"
              className="styles-module__mainMenuLink"
              onClick={closeMobileMenu}
            >
              <span>شرکت</span>
            </Link>
            <Link
              to="/contact-us"
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
                            <Link key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to={`/${area.slug}`}>
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
                      <Link to="/about/legal-network" className="styles-module__menuItem">
                        <span className="styles-module__menuItemText">شبکه حقوقی ما</span>
                      </Link>
                      <Link to="/for-lawyers/sign-up" className="styles-module__menuItem">
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
                  onMouseEnter={() => isAuthenticated && setActiveDropdown('account')}
                  onMouseLeave={() => setActiveDropdown(null)}
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
                      {isAuthenticated && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon">
                          <g id="icon/chevron down">
                            <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                          </g>
                        </svg>
                      )}
                    </div>
                  </div>
                  {isAuthenticated && activeDropdown === 'account' && (
                    <div className="styles-module__childContainer styles-module__hoverMenu">
                      <div className="styles-module__menuItem" onClick={(e) => { e.stopPropagation(); navigate('/account'); setActiveDropdown(null); }}>
                        <span className="styles-module__menuItemText">چت های من</span>
                      </div>
                      <div className="styles-module__menuItem" onClick={(e) => { e.stopPropagation(); navigate('/settings'); setActiveDropdown(null); }}>
                        <span className="styles-module__menuItemText">تنظیمات</span>
                      </div>
                      <div className="styles-module__menuItem" onClick={(e) => { e.stopPropagation(); handleLogout(); setActiveDropdown(null); }}>
                        <span className="styles-module__menuItemText">خروج</span>
                      </div>
                    </div>
                  )}
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

      {/* Areas Menu Modal */}
      {showAreasModal && (
        <div className="styles-module__areasMenuModal styles-module__subMenuContainer">
          <div className="styles-module__closeWrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__closeButton styles-module__activeIcon" onClick={() => setShowAreasModal(false)}>
              <path d="M19.5 3.75C19.9142 3.75 20.25 4.08579 20.25 4.5C20.25 4.70708 20.1661 4.89456 20.0304 5.03028L13.0607 12L20.0304 18.9696C20.1661 19.1054 20.25 19.2929 20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.2894 20.25 19.099 20.1632 18.9628 20.0233L12.0001 13.0606L5.03039 20.0303C4.89466 20.166 4.70713 20.25 4.5 20.25C4.08579 20.25 3.75 19.9142 3.75 19.5C3.75 19.2912 3.83535 19.1023 3.97308 18.9663L10.9394 12L3.97671 5.03727C3.83685 4.90104 3.75 4.71066 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.70711 3.75 4.89462 3.83395 5.03034 3.96968L12.0001 10.9393L18.9663 3.97308C19.1023 3.83535 19.2912 3.75 19.5 3.75Z" fill="#333333"></path>
            </svg>
          </div>
          <div className="styles-module__modalContent">
            <Link to="/library" className="styles-module__headingContainer" onClick={() => setShowAreasModal(false)}>
              <div className="styles-module__mainMenuLink styles-module__pageTitle">Areas of law</div>
            </Link>
            <div className="styles-module__areasList">
              {areasOfLaw.map((area, index) => (
                <Link key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to={`/${area.slug}`} onClick={() => setShowAreasModal(false)}>
                  <div className="styles-module__menuDropdownItemTitleWrapper">
                    <div className="styles-module__menuDropdownItemTitle">{area.title}</div>
                  </div>
                  <div className="styles-module__menuDropdownItemDescription">{area.description}</div>
                </Link>
              ))}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none" className="styles-module__mobileBGIcon">
              <g opacity="0.05" clipPath="url(#clip0_128_55)">
                <path d="M120 240C186.274 240 240 186.274 240 120H180C180 153.137 153.137 180 120 180C86.8629 180 60 153.137 60 120C60 86.863 86.8629 60 120 60V0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z" fill="#0E5FE3"></path>
                <path d="M200 80C222.091 80 240 62.0914 240 40C240 17.9086 222.091 0 200 0C177.909 0 160 17.9086 160 40C160 62.0914 177.909 80 200 80Z" fill="#0E5FE3"></path>
              </g>
              <defs>
                <clipPath id="clip0_128_55">
                  <rect width="240" height="240" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* About Menu Modal */}
      {showAboutModal && (
        <div className="styles-module__areasMenuModal styles-module__subMenuContainer">
          <div className="styles-module__closeWrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__closeButton styles-module__activeIcon" onClick={() => setShowAboutModal(false)}>
              <path d="M19.5 3.75C19.9142 3.75 20.25 4.08579 20.25 4.5C20.25 4.70708 20.1661 4.89456 20.0304 5.03028L13.0607 12L20.0304 18.9696C20.1661 19.1054 20.25 19.2929 20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.2894 20.25 19.099 20.1632 18.9628 20.0233L12.0001 13.0606L5.03039 20.0303C4.89466 20.166 4.70713 20.25 4.5 20.25C4.08579 20.25 3.75 19.9142 3.75 19.5C3.75 19.2912 3.83535 19.1023 3.97308 18.9663L10.9394 12L3.97671 5.03727C3.83685 4.90104 3.75 4.71066 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.70711 3.75 4.89462 3.83395 5.03034 3.96968L12.0001 10.9393L18.9663 3.97308C19.1023 3.83535 19.2912 3.75 19.5 3.75Z" fill="#333333"></path>
            </svg>
          </div>
          <div className="styles-module__modalContent">
            <div className="styles-module__areasList">
              {aboutItems.map((area, index) => (
                <Link key={index} className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to={area.to} onClick={() => setShowAboutModal(false)}>
                  <div className="styles-module__menuDropdownItemTitleWrapper">
                    <div className="styles-module__menuDropdownItemTitle">{area.title}</div>
                  </div>
                  <div className="styles-module__menuDropdownItemDescription">{area.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lawyers Menu Modal */}
      {showLawyersModal && (
        <div className="styles-module__areasMenuModal styles-module__subMenuContainer">
          <div className="styles-module__closeWrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles-module__closeButton styles-module__activeIcon" onClick={() => setShowLawyersModal(false)}>
              <path d="M19.5 3.75C19.9142 3.75 20.25 4.08579 20.25 4.5C20.25 4.70708 20.1661 4.89456 20.0304 5.03028L13.0607 12L20.0304 18.9696C20.1661 19.1054 20.25 19.2929 20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.2894 20.25 19.099 20.1632 18.9628 20.0233L12.0001 13.0606L5.03039 20.0303C4.89466 20.166 4.70713 20.25 4.5 20.25C4.08579 20.25 3.75 19.9142 3.75 19.5C3.75 19.2912 3.83535 19.1023 3.97308 18.9663L10.9394 12L3.97671 5.03727C3.83685 4.90104 3.75 4.71066 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.70711 3.75 4.89462 3.83395 5.03034 3.96968L12.0001 10.9393L18.9663 3.97308C19.1023 3.83535 19.2912 3.75 19.5 3.75Z" fill="#333333"></path>
            </svg>
          </div>
          <div className="styles-module__modalContent">
            <div className="styles-module__areasList">
              <Link className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to="/about/legal-network" onClick={() => setShowLawyersModal(false)}>
                <div className="styles-module__menuDropdownItemTitleWrapper">
                  <div className="styles-module__menuDropdownItemTitle">شبکه حقوقی ما</div>
                </div>
                <div className="styles-module__menuDropdownItemDescription">وکلای متخصص در تمام زمینه‌های حقوقی.</div>
              </Link>
              <Link className="styles-module__menuDropdownItem styles-module__offsetDropdownItemRow" to="/for-lawyers/sign-up" onClick={() => setShowLawyersModal(false)}>
                <div className="styles-module__menuDropdownItemTitleWrapper">
                  <div className="styles-module__menuDropdownItemTitle">ثبت نام</div>
                </div>
                <div className="styles-module__menuDropdownItemDescription">فرصت‌ها با Weekilaw.</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
