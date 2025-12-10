import React, { useState, useEffect, useRef } from 'react';
import PageLayout from './PageLayout.jsx';

const MainContent = () => {
  const [heroStep, setHeroStep] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showFixedChat, setShowFixedChat] = useState(false);
  const [isAtLastSection, setIsAtLastSection] = useState(false);
  const chatInputRef = useRef(null);
  const lastSectionRef = useRef(null);

  const heroTitles = [
    "Ask your question. Find your lawyer.",
    "Get AI legal info for free.",
    "Connect with lawyers you can trust."
  ];

  const areasOfLaw = [
    { name: "Commercial law", href: "https://lawconnect.com/en-us/commercial-law", image: "/assets/commercial-law-us.webp" },
    { name: "Criminal law", href: "https://lawconnect.com/en-us/criminal-law", image: "/assets/criminal-law.webp" },
    { name: "Employment law", href: "https://lawconnect.com/en-us/employment-law", image: "/assets/employment-law.webp" },
    { name: "Estate and probate law", href: "https://lawconnect.com/en-us/estate-and-probate-law", image: "/assets/estate-and-probate-law.webp" },
    { name: "Family law", href: "https://lawconnect.com/en-us/family-law", image: "/assets/family-law.webp" },
    { name: "Immigration law", href: "https://lawconnect.com/en-us/immigration-law", image: "/assets/immigration-law.webp" },
    { name: "Litigation", href: "https://lawconnect.com/en-us/litigation", image: "/assets/litigation-law.webp" },
    { name: "Personal injury law", href: "https://lawconnect.com/en-us/personal-injury-law", image: "/assets/personal-injury-law.webp" },
    { name: "Property law", href: "https://lawconnect.com/en-us/property-law", image: "/assets/property-law.webp" },
  ];

  const faqItems = [
    {
      question: "What is LawConnect and how does it work?",
      answer: "LawConnect is a free online platform using AI to help people navigate legal issues. It's designed to be simple and accessible, giving users instant, personalised legal information. After interacting with our AI legal assistant, users can connect with a specialised lawyer for further support."
    },
    {
      question: "Is LawConnect a replacement for legal advice?",
      answer: "LawConnect is not a substitute for professional legal advice. While it provides fast, helpful legal information, it's intended as a starting point, especially if you're unsure where to begin or need a relevant lawyer."
    },
    {
      question: "Can I talk to a real lawyer through LawConnect?",
      answer: "Yes, LawConnect offers the option to connect with a qualified lawyer if you need further support. After chatting with our AI assistant, you can request to speak with a legal professional who understands your issue."
    },
    {
      question: "Is it free to use LawConnect's AI legal assistant?",
      answer: "Yes, it's completely free to use LawConnect's AI assistant. You can ask questions and receive helpful legal information without any cost. If you decide to speak with a lawyer through the platform at a later stage, there may be fees depending on the lawyer's services."
    },
    {
      question: "What kinds of legal issues can I get help with?",
      answer: "LawConnect can help with various legal issues you might be facing, including family matters, employment problems, consumer rights, rental disputes, debt, traffic fines, business issues, and wills or estates. It's designed to give you a clear overview of your rights and options for common legal situations."
    },
    {
      question: "What's the next step after using LawConnect?",
      answer: "Once you've chatted with LawConnect's legal AI assistant to understand your issue, you can either take action using the report provided or connect with a relevant lawyer for more in-depth assistance. The goal is to give you the confidence and support to move forward, whether you resolve the issue yourself or decide to seek professional legal advice."
    }
  ];

  const siteCards = [
    {
      href: "https://lawconnect.com/en-us/about/sailing",
      image: "/assets/about-sailing.webp",
      title: "Back to Back: How LawConnect Conquered The Hobart",
      description: "Set sail on an unforgettable journey in our latest behind the scenes series of our supermaxi.",
      linkText: "LawConnect sailing"
    },
    {
      href: "https://lawconnect.com/en-us/about/ai-technology",
      image: "/assets/about-technology.webp",
      title: "Our AI technology",
      description: "LawConnect harnesses the power of advanced AI to provide free tailored legal information.",
      linkText: "Our AI technology"
    },
    {
      href: "https://lawconnect.com/en-us/about/legal-network",
      image: "/assets/about-network.webp",
      title: "Our network of trusted lawyers",
      description: "We are proud to offer our users access to a network of qualified legal professionals.",
      linkText: "Our legal network"
    },
    {
      href: "https://lawconnect.com/en-us/about/company",
      image: "/assets/about-company.webp",
      title: "Making legal help accessible to everyone",
      description: "We're dedicated to helping everyone find the legal resources they need.",
      linkText: "Our company"
    },
    {
      href: "https://lawconnect.com/en-us/about/careers",
      image: "/assets/about-careers.webp",
      title: "LawConnect careers can take you anywhere",
      description: "We have a diverse range of positions available across multiple locations.",
      linkText: "Careers"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-rotate hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroStep((prevStep) => (prevStep + 1) % heroTitles.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [heroTitles.length]);

  // Track chat input visibility for fixed bottom chat and last section position
  useEffect(() => {
    const handleScroll = () => {
      if (chatInputRef.current) {
        const rect = chatInputRef.current.getBoundingClientRect();
        // Show fixed chat when original is scrolled above viewport (top is above viewport)
        // Hide when original is visible again (top is within viewport)
        setShowFixedChat(rect.top < -100);
      }

      // Check if we're at the last section
      if (lastSectionRef.current) {
        const lastSectionRect = lastSectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // If last section is visible in viewport (bottom is near or past viewport bottom)
        setIsAtLastSection(lastSectionRect.bottom <= viewportHeight + 100);
      }
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
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <PageLayout>
      <div className="layout_content__yRzeE">
        {/* Hero Section */}
        <div className="hero_heroContainer__CJl7a">
          <div className="hero_innerWidthWrapper__JaG2D">
            <img 
              alt="Hero Blue Circle" 
              loading="lazy" 
              width="0" 
              height="0" 
              className="hero_heroBlueCircle__9Q9Hd" 
              src="/assets/hero-blue-circle.svg" 
            />
            <div className="hero_heroContentWrapper__P8EOq">
              <div className="hero_heroTitleWrapper__yP7__">
                {heroTitles.map((title, index) => (
                  <h2 
                    key={index}
                    className={`hero_heroTitle__ETTpw ${index === 2 ? 'hero_short__10VZ2' : ''} ${index === heroStep ? 'hero_active__vpAMc' : 'hero_deactive__Xucyz'}`}
                  >
                    {title}
                  </h2>
                ))}
              </div>
            </div>
            <div className="hero_stepperContainer__gcrwK">
              {[0, 1, 2].map((step) => (
                <div 
                  key={step}
                  className={`hero_stepperStep__otuH7 ${step === heroStep ? 'hero_active__vpAMc' : ''}`}
                  onClick={() => setHeroStep(step)}
                />
              ))}
            </div>
            <div className="hero_heroImageContainer__xiPzN">
              <div className="hero_heroImageWrapper__tmeC0">
                {[1, 2, 3].map((imageNum, index) => (
                <img 
                    key={index}
                    alt={`Hero Image ${imageNum}`}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? undefined : "lazy"}
                  width="0" 
                  height="0" 
                    className={`hero_heroImage__nVizP ${index === heroStep ? 'hero_active__vpAMc' : 'hero_deactive__Xucyz'}`}
                    src={`/assets/header-hero-${imageNum}-1x.webp`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input - Positioned at bottom edge center of hero section (half in hero, half in content) */}
        <div className="chat_doubleChatInputWrapper__CMH7r" ref={chatInputRef}>
          <div className="chat_outerWrapper__tQJCI">
            <div className="style-module__chatInputContainer___6z7-o styles-module__outerWrapper___fOgj7">
              <div className="style-module__shinyBorderContainer___S56O-">
                <div className="style-module__chatInput___eRGXK styles-module__inputWrapper___kh9as" id="chat-input">
                  <input className="style-module__fileInput___JIo-7" multiple type="file" />
                  <img 
                    className="style-module__preTextIcon___jd5co" 
                    src="/assets/spark-gray.svg" 
                    alt="spark" 
                  />
                  <div className="style-module__actions___HoJ1V">
                    <button className="style-module__sendButton___uDqXf" id="send-button" aria-label="send-button">
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
                      id="double-input-static" 
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

        {/* Content Section */}
        <div className="content_contentContainer__mvGPe">
          <div className="content_sectionContainer__3Q6bj">
            <div className="content_innerWidthWrapper__NAGw5">
              <div className="content_descriptionHeader__ad9mQ">
                <h2 className="content_subTitle__dwX6E">
                  Answers to your legal questions. Connections to lawyers who can help.
                </h2>
                <div className="content_bodyText__cGBqf">
                  Describe your situation, answer a few quick questions, and get a free, tailored 
                  AI report outlining your rights and next steps. Everything you share is 
                  protected and stored securely. Ready for expert guidance? Connect with a 
                  qualified lawyer who understands your issue.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards Section */}
        <div className="content-card_widthWrapper__a7rr5">
          <div className="content-card_largerInnerWidthWrapper__GFZ3Y content-card_cardStackContainer__3nOCk">
            {/* Card 1: Understand your legal options */}
            <div className="content-card_cardStack__6u_SU">
              <div className="content-card_cardStackHeaderContainer__sdp_e">
                <div className="content-card_iconTitleContainer__TCkIc">
                  <div className="content-card_cardStackHeader__Qg2Bn">Understand your legal options</div>
                  <img 
                    alt="Understand your legal options" 
                    loading="lazy" 
                    width="64" 
                    height="64" 
                    className="content-card_cardStackHeaderIcon__Vjk8W" 
                    src="/assets/spark-animated-midnight.svg" 
                  />
                </div>
                <a className="button_buttonContainer__gCB6U content-card_stackButtonContainer__Af7iq" href="https://lawconnect.com/chat">
                  <div className="button_buttonText__1_evT content-card_stackButtonText__cPfQ7">Ask a question</div>
                  <div className="button_buttonArrow__75UxD content-card_stackButtonArrow__0s_Bb">
                    <div className="button_arrowIconWrapperHover__E_U1V">
                      <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-blue.svg" />
                    </div>
                    <div className="button_arrowIconWrapper__ftquI">
                      <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-white.svg" />
                    </div>
                  </div>
                </a>
                <picture className="content-card_pictureWrapper__ZOFIp">
                  <source media="(max-width: 769px)" srcSet="/assets/phone-4-mobile.webp 1x" type="image/webp" />
                  <img 
                    alt="home-content-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-card_stackHeaderImage__qVAzQ" 
                    src="/assets/phone-4-desktop.webp" 
                  />
                </picture>
              </div>
              <div className="content-card_cardStackDescription__ziptp">
                <span>
                  Ask about any legal matter and get instant AI answers without the legal 
                  jargon. From understanding your rights to exploring your options, our AI
                  legal assistant breaks down complex legal matters into simple, 
                  actionable information.
                </span>
              </div>
            </div>

            {/* Card 2: Get help from a trusted lawyer */}
            <div className="content-card_cardStack__6u_SU">
              <div className="content-card_cardStackHeaderContainer__sdp_e">
                <div className="content-card_iconTitleContainer__TCkIc">
                  <div className="content-card_cardStackHeader__Qg2Bn">Get help from a trusted lawyer</div>
                  <img 
                    alt="Get help from a trusted lawyer" 
                    loading="lazy" 
                    width="64" 
                    height="64" 
                    className="content-card_cardStackHeaderIcon__Vjk8W" 
                    src="/assets/message-animated.svg" 
                  />
                </div>
                <div className="content-card_notAvailableContainer__hpBQ6">
                  <div>Not available in this location.</div>
                  <div className="content-card_learnWhy__IDAi_">Learn why.</div>
                </div>
                <picture className="content-card_pictureWrapper__ZOFIp">
                  <source media="(max-width: 769px)" srcSet="/assets/phone-hero-mobile.webp 1x" type="image/webp" />
                  <img 
                    alt="home-content-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-card_stackHeaderImage__qVAzQ" 
                    src="/assets/phone-hero-desktop.webp" 
                  />
                </picture>
              </div>
              <div className="content-card_cardStackDescription__ziptp">
                <span>
                  Finding the right lawyer can make all the difference. We'll help you connect 
                  with trusted professionals who understand your needs and know how to get
                  the best outcome for your legal matter.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Row: Take Control */}
        <div className="content-row_contentContainer__JLCTZ content-row_takeControlContainer__DofyK">
          <div className="content-row_sectionContainer__4F7fr">
            <div className="content-row_innerWidthWrapper__0ohYG content-row_takeControlWrapper__d6rsF">
              <div className="content-row_descriptionHeader__pni4b">
                <h2 className="content-row_subTitle__LhMNP">Take control of your legal journey</h2>
                <div className="content-row_bodyText__gG4m9 content-row_maxWidth__pNiBZ">
                  Buying a house? Drafting a will? Handling a divorce? Legal issues can be daunting, but getting help doesn't have to be. 
                  Chat with our AI for instant legal answers, or connect with a lawyer who can help.
                </div>
              </div>
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
              <div className="content-row_takeControlImageContainer__hjnDh">
                <img 
                  alt="floating-phone" 
                  loading="lazy" 
                  width="0" 
                  height="0" 
                  className="content-row_takeControlImage__2nvTT" 
                  src="/assets/save-floating-phone-chat.webp" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Row: Security */}
        <div className="content-row_contentContainer__JLCTZ content-row_securityContainer__WpG1K">
          <div className="content-row_sectionContainer__4F7fr">
            <div className="content-row_innerWidthWrapper__0ohYG content-row_securityWrapper__8_Vjh">
              <div className="content-row_descriptionHeader__pni4b">
                <h2 className="content-row_subTitle__LhMNP">Your security and privacy is our priority</h2>
                <div className="content-row_bodyText__gG4m9">
                  We understand the importance of feeling secure when seeking legal assistance.<br />
                  Protecting your personal information is fundamental to our services.
                </div>
              </div>
              <div className="content-row_contentRowContainer__2ICmV">
                <div className="content-row_securityRow__VMLMD">
                  <img 
                    alt="security-icon-0" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon__rNIAv" 
                    src="/assets/padlock-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader__7QujH">Secure logins</div>
                  <div className="content-row_securityRowBody__rYm4L">
                    Our seamless login process protects your personal information, ensuring a safe experience every time you connect with us.
                  </div>
                </div>
                <div className="content-row_securityRow__VMLMD">
                  <img 
                    alt="security-icon-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon__rNIAv" 
                    src="/assets/storage-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader__7QujH">Safeguarding data</div>
                  <div className="content-row_securityRowBody__rYm4L">
                    Your data is encrypted and secure, maintaining your privacy. It's stored in a
                    secure database that adheres to leading security protocols.
                  </div>
                </div>
                <div className="content-row_securityRow__VMLMD">
                  <img 
                    alt="security-icon-2" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon__rNIAv" 
                    src="/assets/shield-tick-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader__7QujH">Advanced security</div>
                  <div className="content-row_securityRowBody__rYm4L">
                    We utilize advanced encryption from Amazon Web Services (AWS) to safeguard information and monitor for threats.
                  </div>
                </div>
              </div>
              <img 
                alt="floating-phone" 
                loading="lazy" 
                width="0" 
                height="0" 
                className="content-row_securityBGImage__NoQk1" 
                src="/assets/shield-tick.svg" 
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="content_statsContainer__6Sg_a">
          <div className="content_statsContainerInner__3uZGV">
            <div className="stats_statsContainer__ARf5n stats_small__WmZKU">
              <div className="stats_statsWrapper__B7_50">
                <img 
                  alt="Stats Circle" 
                  loading="lazy" 
                  width="1000" 
                  height="1000" 
                  className="stats_statsCircle__T8q86" 
                  src="/assets/about-stats-circle.svg" 
                />
                <img 
                  alt="Stats Icon" 
                  loading="lazy" 
                  width="360" 
                  height="360" 
                  className="stats_statsLogoIcon__QOCRu" 
                  src="/assets/logo-icon.svg" 
                />
                <div className="stats_statsCard__4mxAD">
                  <img alt="User" loading="lazy" width="40" height="40" className="stats_statsIcon__MuhV6" src="/assets/user-white.svg" />
                  <div className="stats_statsTitle__9PBki" style={{'--number': '94344', '--transition-duration': '1000ms'}}>94,344</div>
                  <div className="stats_statsDescription__TYaKC">Unique user accounts</div>
                </div>
                <div className="stats_statsCard__4mxAD">
                  <img alt="Briefcase" loading="lazy" width="40" height="40" className="stats_statsIcon__MuhV6" src="/assets/briefcase-white.svg" />
                  <div className="stats_statsTitle__9PBki" style={{'--number': '125437', '--transition-duration': '1000ms'}}>125,437</div>
                  <div className="stats_statsDescription__TYaKC">Cases created</div>
                </div>
                <div className="stats_statsCard__4mxAD">
                  <img alt="Chat Tick" loading="lazy" width="40" height="40" className="stats_statsIcon__MuhV6" src="/assets/chat-tick-white.svg" />
                  <div className="stats_statsTitle__9PBki" style={{'--number': '677360', '--transition-duration': '1000ms'}}>677,360</div>
                  <div className="stats_statsDescription__TYaKC">Answers provided</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge/Areas of Law Carousel */}
        <div className="knowledge_knowledgeContainer__mivM6">
          <div className="knowledge_innerWidthWrapper__3ZGKb">
            <div className="knowledge_knowledgeHeaderContainer__HaSk_">
              <h2 className="knowledge_subTitle__Cjs28">Explore real cases</h2>
              <div className="knowledge_bodyText__K2CGK">
                Explore different areas of law and see real-life examples of how people have started their legal journey with LawConnect.
              </div>
            </div>
            <div>
              <div className="styles-module__container___UTp91">
                <div className="styles-module__cardsContainer___5LjEc">
                  <div className="styles-module__cards___cdHPc knowledge_carouselWidthContainer__yYhNk" style={{gap: '0px 40px', gridAutoColumns: 'minmax(208px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(208px, 1fr))'}}>
                    {areasOfLaw.map((area, index) => (
                      <a key={index} href={area.href} className="knowledge_carouselCardContainer__LgSgU">
                        <img 
                          alt={`Image of ${area.name}`} 
                          loading="lazy" 
                          width="165" 
                          height="165" 
                          className="knowledge_cardImage__gX5jH" 
                          src={area.image} 
                        />
                        <h3 className="knowledge_cardTitle__NqvM4">{area.name}</h3>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="styles-module__actionBar___ZrZ2f knowledge_carouselActionBar__V7EJ4">
                  <div className="styles-module__scrollBar___U38pA">
                    <div className="styles-module__scrolledPosition___xWpkI" style={{width: '20%', left: '0%'}}></div>
                  </div>
                  <div className="styles-module__actionButtonContainer___OG46l knowledge_carouselArrowButtonContainer__TGsKS">
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
            <div className="knowledge_knowledgeButtonContainer__kCW9K">
              <a className="button_buttonContainer__gCB6U knowledge_knowledgeButton__0D2ki" href="https://lawconnect.com/en-us/library">
                <div className="button_buttonText__1_evT knowledge_knowledgeButtonText__BDOMY">Areas of law</div>
                <div className="button_buttonArrow__75UxD knowledge_knowledgeButtonArrow__tphRG">
                  <div className="button_arrowIconWrapperHover__E_U1V">
                    <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-blue.svg" />
                  </div>
                  <div className="button_arrowIconWrapper__ftquI">
                    <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-midnight.svg" />
                  </div>
                </div>
              </a>
            </div>
            <img 
              alt="knowledge-background" 
              loading="lazy" 
              width="0" 
              height="0" 
              className="knowledge_knowledgeBackgroundIcon__8mSeE" 
              src="/assets/logo-icon.svg" 
            />
          </div>
        </div>

        {/* Site Cards Section */}
        <div className="site_widthContainer__6QarF">
          <div className="site_innerWidthWrapper__LjTLe">
            <div className="styles-module__container___UTp91">
              <div className="styles-module__cardsContainer___5LjEc">
                <div className="styles-module__cards___cdHPc site_carouselWidthContainer__Mx5bO" style={{gap: '0px 40px', gridAutoColumns: 'minmax(373px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(373px, 1fr))'}}>
                  {siteCards.map((card, index) => (
                    <a key={index} href={card.href} className="site_websiteCard__QWpwa">
                      <div className="site_websiteCardImageContainer__bviF2">
                        <img 
                          alt={`website-card-image-${card.title}`} 
                          loading="lazy" 
                          width="0" 
                          height="0" 
                          className="site_websiteCardImage__5rcp8" 
                          src={card.image} 
                        />
                      </div>
                      <div className="site_cardTitle__N7kT5">{card.title}</div>
                      <div className="site_cardDescription__PxJkS">{card.description}</div>
                      <div className="site_cardLinkContainer__Ytgon">
                        <div className="site_cardLink__dKa8s">{card.linkText}</div>
                        <div className="site_cardLinkIconContainer__Hsrz5">
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="site_cardLinkIcon__xxKNC" src="/assets/arrow-right-blue.svg" />
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="site_cardLinkIconHover__neG1Y" src="/assets/arrow-right-midnight.svg" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="styles-module__actionBar___ZrZ2f">
                <div className="styles-module__scrollBar___U38pA">
                  <div className="styles-module__scrolledPosition___xWpkI" style={{width: '33.3333%', left: '0%'}}></div>
                </div>
                <div className="styles-module__actionButtonContainer___OG46l">
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

        {/* Help/FAQ Section */}
        <div className="help_widthContainer__Ux2L2">
          <div className="help_innerWidthWrapper__Y6_Zv">
            <div className="help_helpContainer__5U0hm">
              <div className="help_helpDropdownContainer__YgkjH">
                <div className="help_helpTitle__mtBiS">Frequently asked questions</div>
                <div className="dropdown_dropDownImageWrapper__v07FL">
                  <div className="dropdown_dropDownContainer__jo4Sg">
                    {faqItems.map((faq, index) => (
                      <div key={index} className={`dropdown_dropDownItem__7lFRG ${openFaqIndex === index ? 'dropdown_open__s2Jye' : ''}`}>
                        <div 
                          className="dropdown_dropDownItemTitle__SxA7w"
                          onClick={() => toggleFaq(index)}
                        >
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
                        <div className={`dropdown_dropDownItemContent__pH0Gj ${openFaqIndex === index ? 'dropdown_open__s2Jye' : ''}`}>
                          <div>{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <picture>
                    <source srcSet="/assets/help-floating-mobile.webp 1x" media="(max-width: 769px)" />
                    <img 
                      alt="help-floating" 
                      loading="lazy" 
                      width="16" 
                      height="16" 
                      className="dropdown_helpFloatingImage__OC4Ko" 
                      src="/assets/help-floating-desktop.webp" 
                    />
                  </picture>
                </div>
              </div>
              <div className="help_helpButtonContainer__X_kYB">
                <a className="button_buttonContainer__gCB6U help_helpButton__HiwNe" href="https://lawconnect.com/en-us/faqs">
                  <div className="button_buttonText__1_evT help_helpButtonText__08lB_">FAQs</div>
                  <div className="button_buttonArrow__75UxD help_helpButtonArrow__5pOwR">
                    <div className="button_arrowIconWrapperHover__E_U1V">
                      <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-blue.svg" />
                    </div>
                    <div className="button_arrowIconWrapper__ftquI">
                      <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon__EQvnO" src="/assets/arrow-right-midnight.svg" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section - Last Section */}
        <div className="content_contentContainer__mvGPe" ref={lastSectionRef}>
          <div className="content_sectionContainer__3Q6bj">
            <div className="content_innerWidthWrapper__NAGw5">
              <div className="content_disclaimerTextWrapper__nzDYX">
                <div className="content_disclaimer__g7PBu">
                  <b>Disclaimer</b>: The content provided on this website is for informational purposes only
                  and should not be relied upon as a substitute for legal advice. 
                  Recipients are advised to consult with qualified legal counsel before 
                  implementing any recommendations herein. LawConnect shall not be liable 
                  for actions taken based on this information.
                </div>
                <div className="content_disclaimer__g7PBu content_disclaimerLawyer__a5M1a">
                  * Please note that if you choose to engage with a lawyer, they may charge fees for their services.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section - New Section at Last Position */}
        <div className="content_contentContainer__mvGPe">
          <div className="content_sectionContainer__3Q6bj">
            <div className="chat_doubleChatInputWrapper__CMH7r">
              <div className="chat_outerWrapper__tQJCI">
                <div className="style-module__chatInputContainer___6z7-o styles-module__outerWrapper___fOgj7">
                  <div className="style-module__shinyBorderContainer___S56O-">
                    <div className="style-module__chatInput___eRGXK styles-module__inputWrapper___kh9as" id="chat-input-last-section">
                      <input className="style-module__fileInput___JIo-7" multiple type="file" />
                      <img 
                        className="style-module__preTextIcon___jd5co" 
                        src="/assets/spark-gray.svg" 
                        alt="spark" 
                      />
                      <div className="style-module__actions___HoJ1V">
                        <button className="style-module__sendButton___uDqXf" id="send-button-last-section" aria-label="send-button">
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
                          id="double-input-last-section" 
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
    </PageLayout>
  );
};

export default MainContent;
