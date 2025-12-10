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
      <div className="layout_content">
        {/* Hero Section */}
        <div className="hero_heroContainer">
          <div className="hero_innerWidthWrapper">
            <img 
              alt="Hero Blue Circle" 
              loading="lazy" 
              width="0" 
              height="0" 
              className="hero_heroBlueCircle" 
              src="/assets/hero-blue-circle.svg" 
            />
            <div className="hero_heroContentWrapper">
              <div className="hero_heroTitleWrapper">
                {heroTitles.map((title, index) => (
                  <h2 
                    key={index}
                    className={`hero_heroTitle ${index === 2 ? 'hero_short' : ''} ${index === heroStep ? 'hero_active' : 'hero_deactive'}`}
                  >
                    {title}
                  </h2>
                ))}
              </div>
            </div>
            <div className="hero_stepperContainer">
              {[0, 1, 2].map((step) => (
                <div 
                  key={step}
                  className={`hero_stepperStep ${step === heroStep ? 'hero_active' : ''}`}
                  onClick={() => setHeroStep(step)}
                />
              ))}
            </div>
            <div className="hero_heroImageContainer">
              <div className="hero_heroImageWrapper">
                {[1, 2, 3].map((imageNum, index) => (
                <img 
                    key={index}
                    alt={`Hero Image ${imageNum}`}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? undefined : "lazy"}
                  width="0" 
                  height="0" 
                    className={`hero_heroImage ${index === heroStep ? 'hero_active' : 'hero_deactive'}`}
                    src={`/assets/header-hero-${imageNum}-1x.webp`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input - Positioned at bottom edge center of hero section (half in hero, half in content) */}
        <div className="chat_doubleChatInputWrapper" ref={chatInputRef}>
          <div className="chat_outerWrapper">
            <div className="style-module__chatInputContainer styles-module__outerWrapper">
              <div className="style-module__shinyBorderContainer">
                <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input">
                  <input className="style-module__fileInput" multiple type="file" />
                  <img 
                    className="style-module__preTextIcon" 
                    src="/assets/spark-gray.svg" 
                    alt="spark" 
                  />
                  <div className="style-module__actions">
                    <button className="style-module__sendButton" id="send-button" aria-label="send-button">
                      <div className="style-module__sendArrowImageWrapper">
                        <div className="style-module__sendArrowWrapperHover">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                            <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="style-module__sendArrowWrapper">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                            <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="style-module__inputs style-module__noFiles">
                    <textarea 
                      id="double-input-static" 
                      className="style-module__textareaInput style-module__withPreTextIcon" 
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
        <div className="content_contentContainer">
          <div className="content_sectionContainer">
            <div className="content_innerWidthWrapper">
              <div className="content_descriptionHeader">
                <h2 className="content_subTitle">
                  Answers to your legal questions. Connections to lawyers who can help.
                </h2>
                <div className="content_bodyText">
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
        <div className="content-card_widthWrapper">
          <div className="content-card_largerInnerWidthWrapper content-card_cardStackContainer">
            {/* Card 1: Understand your legal options */}
            <div className="content-card_cardStack">
              <div className="content-card_cardStackHeaderContainer">
                <div className="content-card_iconTitleContainer">
                  <div className="content-card_cardStackHeader">Understand your legal options</div>
                  <img 
                    alt="Understand your legal options" 
                    loading="lazy" 
                    width="64" 
                    height="64" 
                    className="content-card_cardStackHeaderIcon" 
                    src="/assets/spark-animated-midnight.svg" 
                  />
                </div>
                <a className="button_buttonContainer content-card_stackButtonContainer" href="https://lawconnect.com/chat">
                  <div className="button_buttonText content-card_stackButtonText">Ask a question</div>
                  <div className="button_buttonArrow content-card_stackButtonArrow">
                    <div className="button_arrowIconWrapperHover">
                      <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-blue.svg" />
                    </div>
                    <div className="button_arrowIconWrapper">
                      <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-white.svg" />
                    </div>
                  </div>
                </a>
                <picture className="content-card_pictureWrapper">
                  <source media="(max-width: 769px)" srcSet="/assets/phone-4-mobile.webp 1x" type="image/webp" />
                  <img 
                    alt="home-content-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-card_stackHeaderImage" 
                    src="/assets/phone-4-desktop.webp" 
                  />
                </picture>
              </div>
              <div className="content-card_cardStackDescription">
                <span>
                  Ask about any legal matter and get instant AI answers without the legal 
                  jargon. From understanding your rights to exploring your options, our AI
                  legal assistant breaks down complex legal matters into simple, 
                  actionable information.
                </span>
              </div>
            </div>

            {/* Card 2: Get help from a trusted lawyer */}
            <div className="content-card_cardStack">
              <div className="content-card_cardStackHeaderContainer">
                <div className="content-card_iconTitleContainer">
                  <div className="content-card_cardStackHeader">Get help from a trusted lawyer</div>
                  <img 
                    alt="Get help from a trusted lawyer" 
                    loading="lazy" 
                    width="64" 
                    height="64" 
                    className="content-card_cardStackHeaderIcon" 
                    src="/assets/message-animated.svg" 
                  />
                </div>
                <div className="content-card_notAvailableContainer">
                  <div>Not available in this location.</div>
                  <div className="content-card_learnWhy">Learn why.</div>
                </div>
                <picture className="content-card_pictureWrapper">
                  <source media="(max-width: 769px)" srcSet="/assets/phone-hero-mobile.webp 1x" type="image/webp" />
                  <img 
                    alt="home-content-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-card_stackHeaderImage" 
                    src="/assets/phone-hero-desktop.webp" 
                  />
                </picture>
              </div>
              <div className="content-card_cardStackDescription">
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
        <div className="content-row_contentContainer content-row_takeControlContainer">
          <div className="content-row_sectionContainer">
            <div className="content-row_innerWidthWrapper content-row_takeControlWrapper">
              <div className="content-row_descriptionHeader">
                <h2 className="content-row_subTitle">Take control of your legal journey</h2>
                <div className="content-row_bodyText content-row_maxWidth">
                  Buying a house? Drafting a will? Handling a divorce? Legal issues can be daunting, but getting help doesn't have to be. 
                  Chat with our AI for instant legal answers, or connect with a lawyer who can help.
                </div>
              </div>
              <div className="content-row_contentRowContainer">
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">Ask any legal question</div>
                  <div className="content-row_contentRowBody">Get tailored AI answers instantly from our no-cost AI assistant, available 24/7.</div>
                </div>
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">Find the right lawyer</div>
                  <div className="content-row_contentRowBody">Connect with an experienced lawyer who handles cases like yours and get a clear cost estimate before you proceed.*</div>
                </div>
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">Resolve your legal issue</div>
                  <div className="content-row_contentRowBody">Tackle your legal matter with the right information and expert support tailored to your situation.</div>
                </div>
              </div>
              <div className="content-row_takeControlImageContainer">
                <img 
                  alt="floating-phone" 
                  loading="lazy" 
                  width="0" 
                  height="0" 
                  className="content-row_takeControlImage" 
                  src="/assets/save-floating-phone-chat.webp" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Row: Security */}
        <div className="content-row_contentContainer content-row_securityContainer">
          <div className="content-row_sectionContainer">
            <div className="content-row_innerWidthWrapper content-row_securityWrapper">
              <div className="content-row_descriptionHeader">
                <h2 className="content-row_subTitle">Your security and privacy is our priority</h2>
                <div className="content-row_bodyText">
                  We understand the importance of feeling secure when seeking legal assistance.<br />
                  Protecting your personal information is fundamental to our services.
                </div>
              </div>
              <div className="content-row_contentRowContainer">
                <div className="content-row_securityRow">
                  <img 
                    alt="security-icon-0" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon" 
                    src="/assets/padlock-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader">Secure logins</div>
                  <div className="content-row_securityRowBody">
                    Our seamless login process protects your personal information, ensuring a safe experience every time you connect with us.
                  </div>
                </div>
                <div className="content-row_securityRow">
                  <img 
                    alt="security-icon-1" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon" 
                    src="/assets/storage-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader">Safeguarding data</div>
                  <div className="content-row_securityRowBody">
                    Your data is encrypted and secure, maintaining your privacy. It's stored in a
                    secure database that adheres to leading security protocols.
                  </div>
                </div>
                <div className="content-row_securityRow">
                  <img 
                    alt="security-icon-2" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    className="content-row_securityRowIcon" 
                    src="/assets/shield-tick-midnight.svg" 
                  />
                  <div className="content-row_securityRowHeader">Advanced security</div>
                  <div className="content-row_securityRowBody">
                    We utilize advanced encryption from Amazon Web Services (AWS) to safeguard information and monitor for threats.
                  </div>
                </div>
              </div>
              <img 
                alt="floating-phone" 
                loading="lazy" 
                width="0" 
                height="0" 
                className="content-row_securityBGImage" 
                src="/assets/shield-tick.svg" 
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="content_statsContainer">
          <div className="content_statsContainerInner">
            <div className="stats_statsContainer stats_small">
              <div className="stats_statsWrapper">
                <img 
                  alt="Stats Circle" 
                  loading="lazy" 
                  width="1000" 
                  height="1000" 
                  className="stats_statsCircle" 
                  src="/assets/about-stats-circle.svg" 
                />
                <img 
                  alt="Stats Icon" 
                  loading="lazy" 
                  width="360" 
                  height="360" 
                  className="stats_statsLogoIcon" 
                  src="/assets/logo-icon.svg" 
                />
                <div className="stats_statsCard">
                  <img alt="User" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/user-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '94344', '--transition-duration': '1000ms'}}>94,344</div>
                  <div className="stats_statsDescription">Unique user accounts</div>
                </div>
                <div className="stats_statsCard">
                  <img alt="Briefcase" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/briefcase-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '125437', '--transition-duration': '1000ms'}}>125,437</div>
                  <div className="stats_statsDescription">Cases created</div>
                </div>
                <div className="stats_statsCard">
                  <img alt="Chat Tick" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/chat-tick-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '677360', '--transition-duration': '1000ms'}}>677,360</div>
                  <div className="stats_statsDescription">Answers provided</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge/Areas of Law Carousel */}
        <div className="knowledge_knowledgeContainer">
          <div className="knowledge_innerWidthWrapper">
            <div className="knowledge_knowledgeHeaderContainer">
              <h2 className="knowledge_subTitle">Explore real cases</h2>
              <div className="knowledge_bodyText">
                Explore different areas of law and see real-life examples of how people have started their legal journey with LawConnect.
              </div>
            </div>
            <div>
              <div className="styles-module__container">
                <div className="styles-module__cardsContainer">
                  <div className="styles-module__cards knowledge_carouselWidthContainer" style={{gap: '0px 40px', gridAutoColumns: 'minmax(208px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(208px, 1fr))'}}>
                    {areasOfLaw.map((area, index) => (
                      <a key={index} href={area.href} className="knowledge_carouselCardContainer">
                        <img 
                          alt={`Image of ${area.name}`} 
                          loading="lazy" 
                          width="165" 
                          height="165" 
                          className="knowledge_cardImage" 
                          src={area.image} 
                        />
                        <h3 className="knowledge_cardTitle">{area.name}</h3>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="styles-module__actionBar knowledge_carouselActionBar">
                  <div className="styles-module__scrollBar">
                    <div className="styles-module__scrolledPosition" style={{width: '20%', left: '0%'}}></div>
                  </div>
                  <div className="styles-module__actionButtonContainer knowledge_carouselArrowButtonContainer">
                    <button className="styles-module__actionButton" disabled>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                        <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                      </svg>
                    </button>
                    <button className="styles-module__actionButton">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                        <path d="M7.64644 3.35355C7.55596 3.26306 7.5 3.13807 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.14045 2.5 8.26737 2.55791 8.35819 2.65115L13.3489 7.64181C13.4421 7.73263 13.5 7.85955 13.5 8C13.5 8.14045 13.4421 8.26737 13.3489 8.35819L8.35819 13.3489C8.26737 13.4421 8.14045 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.8619 7.55596 12.7369 7.64644 12.6465L11.7928 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H11.7928L7.64644 3.35355Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="knowledge_knowledgeButtonContainer">
              <a className="button_buttonContainer knowledge_knowledgeButton" href="https://lawconnect.com/en-us/library">
                <div className="button_buttonText knowledge_knowledgeButtonText">Areas of law</div>
                <div className="button_buttonArrow knowledge_knowledgeButtonArrow">
                  <div className="button_arrowIconWrapperHover">
                    <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-blue.svg" />
                  </div>
                  <div className="button_arrowIconWrapper">
                    <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-midnight.svg" />
                  </div>
                </div>
              </a>
            </div>
            <img 
              alt="knowledge-background" 
              loading="lazy" 
              width="0" 
              height="0" 
              className="knowledge_knowledgeBackgroundIcon" 
              src="/assets/logo-icon.svg" 
            />
          </div>
        </div>

        {/* Site Cards Section */}
        <div className="site_widthContainer">
          <div className="site_innerWidthWrapper">
            <div className="styles-module__container">
              <div className="styles-module__cardsContainer">
                <div className="styles-module__cards site_carouselWidthContainer" style={{gap: '0px 40px', gridAutoColumns: 'minmax(373px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(373px, 1fr))'}}>
                  {siteCards.map((card, index) => (
                    <a key={index} href={card.href} className="site_websiteCard">
                      <div className="site_websiteCardImageContainer">
                        <img 
                          alt={`website-card-image-${card.title}`} 
                          loading="lazy" 
                          width="0" 
                          height="0" 
                          className="site_websiteCardImage" 
                          src={card.image} 
                        />
                      </div>
                      <div className="site_cardTitle">{card.title}</div>
                      <div className="site_cardDescription">{card.description}</div>
                      <div className="site_cardLinkContainer">
                        <div className="site_cardLink">{card.linkText}</div>
                        <div className="site_cardLinkIconContainer">
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="site_cardLinkIcon" src="/assets/arrow-right-blue.svg" />
                          <img alt="arrow-right" loading="lazy" width="16" height="16" className="site_cardLinkIconHover" src="/assets/arrow-right-midnight.svg" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="styles-module__actionBar">
                <div className="styles-module__scrollBar">
                  <div className="styles-module__scrolledPosition" style={{width: '33.3333%', left: '0%'}}></div>
                </div>
                <div className="styles-module__actionButtonContainer">
                  <button className="styles-module__actionButton" disabled>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                      <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                    </svg>
                  </button>
                  <button className="styles-module__actionButton">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                      <path d="M7.64644 3.35355C7.55596 3.26306 7.5 3.13807 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.14045 2.5 8.26737 2.55791 8.35819 2.65115L13.3489 7.64181C13.4421 7.73263 13.5 7.85955 13.5 8C13.5 8.14045 13.4421 8.26737 13.3489 8.35819L8.35819 13.3489C8.26737 13.4421 8.14045 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.8619 7.55596 12.7369 7.64644 12.6465L11.7928 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H11.7928L7.64644 3.35355Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help/FAQ Section */}
        <div className="help_widthContainer">
          <div className="help_innerWidthWrapper">
            <div className="help_helpContainer">
              <div className="help_helpDropdownContainer">
                <div className="help_helpTitle">Frequently asked questions</div>
                <div className="dropdown_dropDownImageWrapper">
                  <div className="dropdown_dropDownContainer">
                    {faqItems.map((faq, index) => (
                      <div key={index} className={`dropdown_dropDownItem ${openFaqIndex === index ? 'dropdown_open' : ''}`}>
                        <div 
                          className="dropdown_dropDownItemTitle"
                          onClick={() => toggleFaq(index)}
                        >
                          <div className="dropdown_dropDownItemTitleText">{faq.question}</div>
                          <img 
                            alt="arrow-down" 
                            loading="lazy" 
                            width="16" 
                            height="16" 
                            className={`dropdown_dropDownItemTitleIcon ${openFaqIndex === index ? 'dropdown_rotated' : ''}`}
                            src="/assets/chevron-down-6.svg" 
                          />
                        </div>
                        <div className={`dropdown_dropDownItemContent ${openFaqIndex === index ? 'dropdown_open' : ''}`}>
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
                      className="dropdown_helpFloatingImage" 
                      src="/assets/help-floating-desktop.webp" 
                    />
                  </picture>
                </div>
              </div>
              <div className="help_helpButtonContainer">
                <a className="button_buttonContainer help_helpButton" href="https://lawconnect.com/en-us/faqs">
                  <div className="button_buttonText help_helpButtonText">FAQs</div>
                  <div className="button_buttonArrow help_helpButtonArrow">
                    <div className="button_arrowIconWrapperHover">
                      <img alt="arrow-right-white" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-blue.svg" />
                    </div>
                    <div className="button_arrowIconWrapper">
                      <img alt="arrow-right" loading="lazy" width="16" height="16" className="button_arrowIcon" src="/assets/arrow-right-midnight.svg" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section - Last Section */}
        <div className="content_contentContainer" ref={lastSectionRef}>
          <div className="content_sectionContainer">
            <div className="content_innerWidthWrapper">
              <div className="content_disclaimerTextWrapper">
                <div className="content_disclaimer">
                  <b>Disclaimer</b>: The content provided on this website is for informational purposes only
                  and should not be relied upon as a substitute for legal advice. 
                  Recipients are advised to consult with qualified legal counsel before 
                  implementing any recommendations herein. LawConnect shall not be liable 
                  for actions taken based on this information.
                </div>
                <div className="content_disclaimer content_disclaimerLawyer">
                  * Please note that if you choose to engage with a lawyer, they may charge fees for their services.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section - New Section at Last Position */}
        <div className="content_contentContainer">
          <div className="content_sectionContainer">
            <div className="chat_doubleChatInputWrapper">
              <div className="chat_outerWrapper">
                <div className="style-module__chatInputContainer styles-module__outerWrapper">
                  <div className="style-module__shinyBorderContainer">
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img 
                        className="style-module__preTextIcon" 
                        src="/assets/spark-gray.svg" 
                        alt="spark" 
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" id="send-button-last-section" aria-label="send-button">
                          <div className="style-module__sendArrowImageWrapper">
                            <div className="style-module__sendArrowWrapperHover">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                                <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                            <div className="style-module__sendArrowWrapper">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="style-module__sendArrow">
                                <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="#0E5FE3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="style-module__inputs style-module__noFiles">
                        <textarea 
                          id="double-input-last-section" 
                          className="style-module__textareaInput style-module__withPreTextIcon" 
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
