import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountModal from './AccountModal.jsx';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const areasOfLaw = [
    { title: "Commercial law", description: "Business transactions and agreements.", slug: "commercial-law" },
    { title: "Criminal law", description: "Addressing crime and sentencing.", slug: "criminal-law" },
    { title: "Employment law", description: "Fairness for employers and employees.", slug: "employment-law" },
    { title: "Estate and probate law", description: "Managing and distributing assets.", slug: "estate-and-probate-law" },
    { title: "Family law", description: "Separation, divorce, and settlements.", slug: "family-law" },
    { title: "Immigration law", description: "Visas, residency, and sponsorships.", slug: "immigration-law" },
    { title: "Litigation", description: "Matters involving the courts.", slug: "litigation" },
    { title: "Personal injury law", description: "Been injured? Help is available.", slug: "personal-injury-law" },
    { title: "Property law", description: "Settlements and property disputes.", slug: "property-law" },
  ];

  const aboutItems = [
    { title: "Our AI technology", description: "Harnesses the power of advanced AI.", to: "/en-us/about/ai-technology" },
    { title: "Our legal network", description: "Specialist lawyers across all areas of law.", to: "/en-us/about/legal-network" },
    { title: "Company", description: "Our values and structure.", to: "/en-us/about/company" },
    { title: "Careers", description: "Opportunities with LawConnect.", to: "/en-us/about/careers" },
    { title: "Sailing", description: "About the Sydney to Hobart supermaxi.", to: "/en-us/about/sailing" },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleAccountClick = () => {
    setActiveDropdown(null);
    setShowAccountModal(true);
  };

  const handleAccountKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAccountClick();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      // Header shrinks when scrolled down, returns to normal at top
      setIsScrolled(scrollPosition > 10);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="layout_menuHeightWrapper__39a3A">
        <div className="styles-module__desktopMenuContainer___Ovbm4" id="MENU_HEADER_ID">
          <div
            className={`styles-module__floatingContainer___IzC6E ${isScrolled ? 'styles-module__shrink___bkBlT' : ''}`}
            id="FLOATING_CONTAINER_ID"
          >
            <div className="styles-module__menuContentContainer___5ogcm">
              <Link to="/" className="styles-module__logoContainer___oxG02">
                <img
                  alt="logo"
                  width="0"
                  height="20"
                  className="styles-module__logo___zZoOh"
                  src="/assets/logo-icon.svg"
                />
              </Link>
              <div className="styles-module__menuLinksContainer___pFhdD">
                <Link
                  to="/chat"
                  className={`styles-module__gradientButton___9sybz ${isScrolled ? 'styles-module__isScrolled___6-ubi' : ''}`}
                >
                  <div className="styles-module__gradientButtonLabel___ukAYj">Chat now</div>
                </Link>
                <div className="styles-module__spacer___p9YIU"></div>

                {/* Areas of law dropdown */}
                <div
                  className="styles-module__menuItemWrapper___UE4Cc"
                  onMouseEnter={() => toggleDropdown('areas')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer___-SLrf">
                    <div className="styles-module__labelContainer___1IyZN">
                      <span className="styles-module__labelTitle___COCKH" title="Areas of law">
                        Areas of law
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon___3CAyY">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'areas' && (
                    <div className="styles-module__childContainer___I131v styles-module__menuItemDropdown___exhI6">
                      <div className="styles-module__innerWrapper___mir35 styles-module__subMenuContainer___disY3">
                        <div className="styles-module__dropdownGrid___g7NT4">
                          {areasOfLaw.map((area, index) => (
                            <Link key={index} className="styles-module__menuDropdownItem___RuGGa styles-module__offsetDropdownItemRow___8wigK" to={`/en-us/${area.slug}`}>
                              <div className="styles-module__menuDropdownItemTitle___Z7Iua">{area.title}</div>
                              <div className="styles-module__menuDropdownItemDescription___oDMyr">{area.description}</div>
                            </Link>
                          ))}
                        </div>
                        <div className="styles-module__dropdownImageWrapper___IkHdh">
                          <div className="styles-module__areaOfLawImageContainer___-8zLz">
                            <img
                              alt="active-item-image"
                              className="styles-module__areaOfLawImage___X9yyo styles-module__defaultImage___-nQpJ"
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
                  className="styles-module__menuItemWrapper___UE4Cc"
                  onMouseEnter={() => toggleDropdown('about')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer___-SLrf">
                    <div className="styles-module__labelContainer___1IyZN">
                      <span className="styles-module__labelTitle___COCKH" title="About">About</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon___3CAyY">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'about' && (
                    <div className="styles-module__childContainer___I131v styles-module__menuItemDropdown___exhI6">
                      <div className="styles-module__innerWrapper___mir35 styles-module__subMenuContainer___disY3">
                        <div className="styles-module__dropdownGrid___g7NT4">
                          {aboutItems.map((item, index) => {
                            const isInternal = !!item.to;
                            if (isInternal) {
                              return (
                                <Link key={index} className="styles-module__menuDropdownItem___RuGGa styles-module__offsetDropdownItemRow___8wigK" to={item.to}>
                                  <div className="styles-module__menuDropdownItemTitle___Z7Iua">{item.title}</div>
                                  <div className="styles-module__menuDropdownItemDescription___oDMyr">{item.description}</div>
                                </Link>
                              );
                            }
                            return (
                              <a key={index} className="styles-module__menuDropdownItem___RuGGa styles-module__offsetDropdownItemRow___8wigK" href={item.href}>
                                <div className="styles-module__menuDropdownItemTitle___Z7Iua">{item.title}</div>
                                <div className="styles-module__menuDropdownItemDescription___oDMyr">{item.description}</div>
                              </a>
                            );
                          })}
                        </div>
                        <div className="styles-module__dropdownImageWrapper___IkHdh">
                          <div className="styles-module__areaOfLawImageContainer___-8zLz">
                            <img
                              alt="active-item-image"
                              className="styles-module__areaOfLawImage___X9yyo styles-module__defaultImage___-nQpJ"
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
                  className="styles-module__menuItemWrapper___UE4Cc styles-module__buttonWrapper___t3J64"
                  onMouseEnter={() => toggleDropdown('lawyers')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <div className="styles-module__menuItemContainer___-SLrf">
                    <div className="styles-module__labelContainer___1IyZN">
                      <span className="styles-module__labelTitle___COCKH" title="For lawyers">For lawyers</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon___3CAyY">
                        <g id="icon/chevron down">
                          <path id="Union" d="M12.6467 5.14644C12.7372 5.05596 12.8622 5 13.0002 5C13.2764 5 13.5002 5.22386 13.5002 5.5C13.5002 5.64045 13.4423 5.76737 13.3491 5.85819L8.35844 10.8489C8.26761 10.9421 8.14069 11 8.00024 11C7.8598 11 7.73287 10.9421 7.64205 10.8489L2.65139 5.85819C2.55815 5.76737 2.50024 5.64045 2.50024 5.5C2.50024 5.22386 2.7241 5 3.00024 5C3.13831 5 3.26331 5.05596 3.35379 5.14644L8.00024 9.79283L12.6467 5.14644Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === 'lawyers' && (
                    <div className="styles-module__childContainer___I131v styles-module__hoverMenu___Ix9kX">
                      <Link to="/en-us/for-lawyers/legal-network" className="styles-module__menuItem___uDn4w">
                        <span className="styles-module__menuItemText___7pErb">Our legal network</span>
                      </Link>
                      <Link to="/en-us/for-lawyers/sign-up" className="styles-module__menuItem___uDn4w">
                        <span className="styles-module__menuItemText___7pErb">Sign up</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Account */}
                <div
                  className="styles-module__menuItemWrapper___UE4Cc styles-module__accountLinkWrapper___JvtAZ"
                  role="button"
                  tabIndex={0}
                  onClick={handleAccountClick}
                  onKeyDown={handleAccountKeyDown}
                >
                  <div className="styles-module__menuItemContainer___-SLrf">
                    <div className="styles-module__labelContainer___1IyZN">
                      <div
                        className="styles-module__userImageContainer___7kyEE"
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
                          className="styles-module__userImage___SWgN0"
                          width="24"
                          height="24"
                          src="/assets/account-profile.svg"
                        />
                      </div>
                      <span className="styles-module__labelTitle___COCKH styles-module__accountLabelTitle___v7JLs" title="Account">
                        Account
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333" xmlns="http://www.w3.org/2000/svg" className="styles-module__chevronIcon___3CAyY styles-module__chevronIcon___ML5cZ styles-module__noRotate___cNiDN">
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
    </>
  );
};

export default Header;
