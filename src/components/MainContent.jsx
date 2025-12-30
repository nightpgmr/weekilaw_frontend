import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';

const MainContent = () => {
  const navigate = useNavigate();
  const [heroStep, setHeroStep] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showFixedChat, setShowFixedChat] = useState(false);
  const [isAtLastSection, setIsAtLastSection] = useState(false);
  const chatInputRef = useRef(null);
  const lastSectionRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  // Chat input states
  const [heroChatInput, setHeroChatInput] = useState('');
  const [lastSectionChatInput, setLastSectionChatInput] = useState('');

  // Carousel state
  const [carouselScrollPosition, setCarouselScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const heroTitles = [
    "سوال خود را بپرسید. وکیل خود را پیدا کنید.",
    "اطلاعات حقوقی AI را رایگان دریافت کنید.",
    "با وکلای قابل اعتماد ارتباط برقرار کنید."
  ];

  const areasOfLaw = [
    { name: "حقوق بازرگانی", href: "/en-us/commercial-law", image: "/assets/commercial-law.webp" },
    { name: "حقوق کیفری", href: "/en-us/criminal-law", image: "/assets/criminal-law.webp" },
    { name: "حقوق کار", href: "/en-us/employment-law", image: "/assets/employment-law.webp" },
    { name: "حقوق ارث و املاک", href: "/en-us/estate-and-probate-law", image: "/assets/estate-and-probate-law.webp" },
    { name: "حقوق خانواده", href: "/en-us/family-law", image: "/assets/family-law.webp" },
    { name: "حقوق مهاجرت", href: "/en-us/immigration-law", image: "/assets/immigration-law.webp" },
    { name: "دادرسی", href: "/en-us/litigation", image: "/assets/litigation.webp" },
    { name: "حقوق جراحت شخصی", href: "/en-us/personal-injury-law", image: "/assets/personal-injury-law.webp" },
    { name: "حقوق املاک", href: "/en-us/property-law", image: "/assets/property-law.webp" },
  ];

  const faqItems = [
    {
      question: "Weekilaw چیست و چگونه کار می‌کند؟",
      answer: "Weekilaw یک پلتفرم آنلاین رایگان است که از AI برای کمک به مردم در جهت‌یابی مسائل حقوقی استفاده می‌کند. این پلتفرم برای سادگی و دسترسی طراحی شده و به کاربران اطلاعات حقوقی شخصی‌سازی شده فوری ارائه می‌دهد. پس از تعامل با دستیار حقوقی AI ما، کاربران می‌توانند با یک وکیل متخصص برای حمایت بیشتر ارتباط برقرار کنند."
    },
    {
      question: "آیا Weekilaw جایگزین مشاوره حقوقی است؟",
      answer: "Weekilaw جایگزین مشاوره حرفه‌ای حقوقی نیست. در حالی که اطلاعات حقوقی سریع و مفید ارائه می‌دهد، اما به عنوان نقطه شروع طراحی شده، به ویژه اگر مطمئن نیستید از کجا شروع کنید یا نیاز به وکیل مربوطه دارید."
    },
    {
      question: "آیا می‌توانم از طریق Weekilaw با یک وکیل واقعی صحبت کنم؟",
      answer: "بله، Weekilaw گزینه ارتباط با یک وکیل واجد شرایط را ارائه می‌دهد اگر نیاز به حمایت بیشتر داشته باشید. پس از چت با دستیار AI حقوقی ما، می‌توانید درخواست صحبت با یک متخصص حقوقی که مسئله شما را درک می‌کند، داشته باشید."
    },
    {
      question: "استفاده از دستیار حقوقی AI Weekilaw رایگان است؟",
      answer: "بله، استفاده از دستیار AI Weekilaw کاملاً رایگان است. می‌توانید سؤال بپرسید و اطلاعات حقوقی مفید دریافت کنید بدون هیچ هزینه‌ای. اگر تصمیم بگیرید در مرحله بعدی از طریق پلتفرم با یک وکیل صحبت کنید، ممکن است بسته به خدمات وکیل هزینه‌هایی وجود داشته باشد."
    },
    {
      question: "چه نوع مسائل حقوقی می‌توانم کمک بگیرم؟",
      answer: "Weekilaw می‌تواند در مسائل حقوقی مختلفی که ممکن است با آنها مواجه شوید کمک کند، از جمله امور خانواده، مشکلات شغلی، حقوق مصرف‌کننده، اختلافات اجاره، بدهی، جریمه‌های رانندگی، مسائل کسب‌وکار، و وصیت‌نامه یا املاک. این پلتفرم برای ارائه نمای کلی از حقوق و گزینه‌های شما برای موقعیت‌های حقوقی رایج طراحی شده است."
    },
    {
      question: "مرحله بعدی پس از استفاده از Weekilaw چیست؟",
      answer: "پس از چت با دستیار حقوقی AI Weekilaw برای درک مسئله خود، می‌توانید یا با استفاده از گزارش ارائه شده اقدام کنید یا با یک وکیل برای کمک عمیق‌تر ارتباط برقرار کنید. هدف این است که اعتماد و حمایت لازم را به شما بدهیم تا پیش بروید، چه مسئله را خودتان حل کنید یا تصمیم بگیرید مشاوره حقوقی حرفه‌ای بگیرید."
    }
  ];

  const siteCards = [
    {
      href: "/en-us/about/sailing",
      image: "/assets/about-sailing.webp",
      title: "ویکیلا؛ پیشگام عدالت هوشمند در ایران",
      description: "ویکیلا تنها یک سامانه‌ی پاسخ‌گویی حقوقی نیست؛ بلکه یک حرکت ملی برای دسترسی سریع، دقیق و عادلانه به خدمات حقوقی در سراسر کشور است.",
      linkText: "درباره ویکیلا"
    },
    {
      href: "/en-us/about/ai-technology",
      image: "/assets/about-technology.webp",
      title: "فناوری AI ما",
      description: "Weekilaw از قدرت AI پیشرفته برای ارائه اطلاعات حقوقی سفارشی رایگان استفاده می‌کند.",
      linkText: "فناوری AI ما"
    },
    {
      href: "/en-us/about/legal-network",
      image: "/assets/about-network.webp",
      title: "شبکه وکلای مورد اعتماد ما",
      description: "ما افتخار می‌کنیم که به کاربران خود دسترسی به شبکه‌ای از متخصصان حقوقی واجد شرایط ارائه می‌دهیم.",
      linkText: "شبکه حقوقی ما"
    },
    {
      href: "/en-us/about/company",
      image: "/assets/about-company.webp",
      title: "کمک حقوقی را برای همه قابل دسترس کردن",
      description: "ما متعهد هستیم که به همه کمک کنیم منابع حقوقی مورد نیاز خود را پیدا کنند.",
      linkText: "شرکت ما"
    },
    {
      href: "/en-us/about/careers",
      image: "/assets/about-careers.webp",
      title: "مشاغل Weekilaw می‌توانند شما را به هر جایی ببرند",
      description: "ما طیف متنوعی از موقعیت‌ها را در چندین مکان در دسترس داریم.",
      linkText: "مشاغل"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleHeroChatSubmit = (event) => {
    event.preventDefault();
    const trimmed = heroChatInput.trim();
    if (trimmed) {
      navigate('/chat', { state: { initialPrompt: trimmed } });
    }
  };

  const handleLastSectionChatSubmit = (event) => {
    event.preventDefault();
    const trimmed = lastSectionChatInput.trim();
    if (trimmed) {
      navigate('/chat', { state: { initialPrompt: trimmed } });
    }
  };

  // Carousel scroll function with RTL support
  const scrollCarousel = useCallback((direction, targetPosition = null) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    if (direction === 'position' && targetPosition !== null) {
      // Scroll to specific position (for dots navigation)
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = (targetPosition / 100) * maxScroll;
      container.scrollTo({
        left: -targetScroll,
        behavior: 'smooth'
      });
    } else if (direction === 'left') {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else if (direction === 'right') {

    const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: -maxScroll,
        behavior: 'smooth'
      });
    }

    // Update scroll position
    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      let percentage = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
      setPercentage((percentage * -1) < 50 ? 0 : 80);

      setCarouselScrollPosition(Math.min(100, Math.max(0, percentage)));
    }, 500);
  }, []);

  // Update progress bar on manual scroll
  const handleCarouselScroll = useCallback(() => {
    if (!carouselRef.current) return;
  
    const container = carouselRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    let percentage = 0;
  
    if (maxScroll > 0) {
      percentage = (currentScroll / maxScroll) * 100;
      setPercentage((percentage * -1) < 50 ? 0 : 80);
      if (percentage > 99) percentage = 100;
      if (percentage < 0.1) percentage = 0;
    }
  
    setCarouselScrollPosition(Math.max(0, Math.min(100, percentage)));
  }, []);


    // Add these state variables after the existing carousel state
  const [siteCardsScrollPosition, setSiteCardsScrollPosition] = useState(0);
  const siteCardsRef = useRef(null);
  const [percentageCards, setPercentageCards] = useState(0);

  // Add this scroll function after the existing scrollCarousel function
  const scrollSiteCards = useCallback((direction) => {
    if (!siteCardsRef.current) return;

    const container = siteCardsRef.current;
      
    if (direction === 'left') {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else if (direction === 'right') {
      
    const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: -maxScroll,
        behavior: 'smooth'
      });
    }

    // Update scroll position
    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      let percentage = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
      setPercentageCards((percentage * -1) < 50 ? 0 : 77);;
      setSiteCardsScrollPosition(Math.min(100, Math.max(0, percentage)));
    }, 500);
  }, []);

  // Add this scroll handler after the existing handleCarouselScroll
  const handleSiteCardsScroll = useCallback(() => {
    if (!siteCardsRef.current) return;

    const container = siteCardsRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    let percentage = 0;

    if (maxScroll > 0) {
      percentage = (currentScroll / maxScroll) * 100;
      setPercentageCards((percentage * -1) < 50 ? 0 : 77);
      if (percentage > 99) percentage = 100;
      if (percentage < 0.1) percentage = 0;
    }

    setSiteCardsScrollPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

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
              alt="دایره آبی قهرمان" 
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
                    alt={`تصویر قهرمان ${imageNum}`}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? undefined : "lazy"}
                  width="0"
                  height="0"
                    className={`hero_heroImage hero_heroImage${imageNum} ${index === heroStep ? 'hero_active' : 'hero_deactive'}`}
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
            <form onSubmit={handleHeroChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
              <div className="style-module__shinyBorderContainer">
                <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input">
                  <input className="style-module__fileInput" multiple type="file" />
                  <img
                    className="style-module__preTextIcon"
                    src="/assets/spark-gray.svg"
                    alt="spark"
                  />
                  <div className="style-module__actions">
                    <button className="style-module__sendButton" type="submit" id="send-button" aria-label="send-button" disabled={!heroChatInput.trim()}>
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
                      placeholder="سؤال حقوقی خود را بپرسید"
                      style={{height: '72px'}}
                      value={heroChatInput}
                      onChange={(e) => setHeroChatInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleHeroChatSubmit(e);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Content Section */}
        <div className="content_contentContainer">
          <div className="content_sectionContainer">
            <div className="content_innerWidthWrapper">
              <div className="content_descriptionHeader">
                <h2 className="content_subTitle">
                  پاسخ به سؤالات حقوقی شما. ارتباط با وکلایی که می‌توانند کمک کنند.
                </h2>
                <div className="content_bodyText">
                  وضعیت خود را توصیف کنید، به چند سؤال سریع پاسخ دهید، و یک گزارش AI رایگان و سفارشی دریافت کنید که حقوق و مراحل بعدی شما را شرح می‌دهد. همه چیزهایی که به اشتراک می‌گذارید محافظت شده و به طور ایمن ذخیره می‌شود. آماده راهنمایی تخصصی هستید؟ با یک وکیل واجد شرایط که مسئله شما را درک می‌کند، ارتباط برقرار کنید.
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
                  <div className="content-card_cardStackHeader">دریافت راهنمای حقوقی هوشمند</div>
                  <img
                    alt="دریافت راهنمای حقوقی هوشمند"
                    loading="lazy"
                    width="64"
                    height="64"
                    className="content-card_cardStackHeaderIcon"
                    src="/assets/spark-animated-midnight.svg"
                  />
                </div>
                <a className="button_buttonContainer content-card_stackButtonContainer" href="/chat">
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
                <div className="content-card_warningNote">⚠️ پاسخ‌ها جنبه راهنمایی عمومی دارد و جایگزین مشاوره وکالتی نیست</div>
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
                  در مورد هر مسئله حقوقی سؤال کنید و پاسخ‌های AI فوری دریافت کنید بدون اصطلاحات حقوقی. از درک حقوق خود تا بررسی گزینه‌های خود، دستیار حقوقی AI ما مسائل حقوقی پیچیده را به اطلاعات ساده و عملی تبدیل می‌کند.
                </span>
              </div>
            </div>

            {/* Card 2: Get help from a trusted lawyer */}
            <div className="content-card_cardStack">
              <div className="content-card_cardStackHeaderContainer">
                <div className="content-card_iconTitleContainer">
                  <div className="content-card_cardStackHeader">در صورت نیاز، وکیل متخصص را پیدا کنید</div>
                  <img
                    alt="در صورت نیاز، وکیل متخصص را پیدا کنید"
                    loading="lazy"
                    width="64"
                    height="64"
                    className="content-card_cardStackHeaderIcon"
                    src="/assets/message-animated.svg"
                  />
                </div>
                <div className="content-card_notAvailableContainer">
                  <div>در این مکان در دسترس نیست.</div>
                  <div className="content-card_learnWhy">بدانید چرا.</div>
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
                  یافتن وکیل مناسب می‌تواند همه چیز را تغییر دهد. ما به شما کمک می‌کنیم تا با متخصصان مورد اعتماد که نیازهای شما را درک می‌کنند و می‌دانند چگونه بهترین نتیجه را برای مسئله حقوقی شما به دست آورند، ارتباط برقرار کنید.
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
                <h2 className="content-row_subTitle">کنترل سفر حقوقی خود را به دست بگیرید</h2>
                <div className="content-row_bodyText content-row_maxWidth">
                  خانه می‌خرید؟ وصیت‌نامه می‌نویسید؟ طلاق را مدیریت می‌کنید؟ مسائل حقوقی می‌توانند دلهره‌آور باشند، اما گرفتن کمک نباید سخت باشد. با AI ما چت کنید تا پاسخ‌های حقوقی فوری دریافت کنید، یا با یک وکیل که می‌تواند کمک کند، ارتباط برقرار کنید.
                </div>
              </div>
              <div className="content-row_contentRowContainer">
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">هر سؤال حقوقی بپرسید</div>
                  <div className="content-row_contentRowBody">پاسخ‌های AI سفارشی را فوراً از دستیار AI بدون هزینه ما دریافت کنید، 24/7 در دسترس است.</div>
                </div>
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">وکیل مناسب را پیدا کنید</div>
                  <div className="content-row_contentRowBody">با یک وکیل با تجربه که موارد مشابه شما را مدیریت می‌کند، ارتباط برقرار کنید و قبل از ادامه، برآورد هزینه واضحی دریافت کنید.*</div>
                </div>
                <div className="content-row_contentRow">
                  <div className="content-row_contentRowHeader">مسئله حقوقی خود را حل کنید</div>
                  <div className="content-row_contentRowBody">با اطلاعات صحیح و حمایت تخصصی که به وضعیت شما متناسب است، مسئله حقوقی خود را حل کنید.</div>
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
                <h2 className="content-row_subTitle">امنیت و حریم خصوصی شما اولویت ماست</h2>
                <div className="content-row_bodyText">
                  ما اهمیت احساس امنیت هنگام جستجوی کمک حقوقی را درک می‌کنیم.<br />
                  محافظت از اطلاعات شخصی شما پایه خدمات ما است.
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
                  <div className="content-row_securityRowHeader">ورود امن</div>
                  <div className="content-row_securityRowBody">
                    فرآیند ورود无缝 ما از اطلاعات شخصی شما محافظت می‌کند و تجربه‌ای امن را هر بار که با ما ارتباط برقرار می‌کنید، تضمین می‌کند.
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
                  <div className="content-row_securityRowHeader">محافظت از داده‌ها</div>
                  <div className="content-row_securityRowBody">
                    داده‌های شما رمزگذاری شده و امن است و حریم خصوصی شما را حفظ می‌کند. در یک پایگاه داده امن که از پروتکل‌های امنیتی پیشرو پیروی می‌کند، ذخیره می‌شود.
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
                  <div className="content-row_securityRowHeader">امنیت پیشرفته</div>
                  <div className="content-row_securityRowBody">
                    ما از رمزگذاری پیشرفته خدمات وب آمازون (AWS) برای محافظت از اطلاعات و نظارت بر تهدیدات استفاده می‌کنیم.
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
                  src="/assets/logo-icon.png" 
                />
                <div className="stats_statsCard">
                  <img alt="User" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/user-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '0', '--transition-duration': '1000ms'}}></div>
                  <div className="stats_statsDescription">حساب‌های کاربری منحصر به فرد</div>
                </div>
                <div className="stats_statsCard">
                  <img alt="Briefcase" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/briefcase-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '0', '--transition-duration': '1000ms'}}></div>
                  <div className="stats_statsDescription">مورد ایجاد شده</div>
                </div>
                <div className="stats_statsCard">
                  <img alt="Chat Tick" loading="lazy" width="40" height="40" className="stats_statsIcon" src="/assets/chat-tick-white.svg" />
                  <div className="stats_statsTitle" style={{'--number': '0', '--transition-duration': '1000ms'}}></div>
                  <div className="stats_statsDescription">پاسخ‌های ارائه شده</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge/Areas of Law Carousel */}
        <div className="knowledge_knowledgeContainer">
          <div className="knowledge_innerWidthWrapper">
            <div className="knowledge_knowledgeHeaderContainer">
              <h2 className="knowledge_subTitle">موردهای واقعی را بررسی کنید</h2>
              <div className="knowledge_bodyText">
                حوزه‌های مختلف حقوق را بررسی کنید و نمونه‌های واقعی از نحوه شروع سفر حقوقی مردم با Weekilaw را ببینید.
              </div>
            </div>
            <div>
              <div className="styles-module__container">
                <div className="styles-module__cardsContainer">
                  <div
                    ref={carouselRef}
                    className="styles-module__cards knowledge_carouselWidthContainer"
                    style={{
                      gap: '0px 40px',
                      gridAutoColumns: 'minmax(268px, 1fr)',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(268px, 1fr))',
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      minHeight: '100px'
                    }}
                    onScroll={handleCarouselScroll}
                  >
                    {areasOfLaw.map((area, index) => (
                      <a key={index} href={area.href} className="knowledge_carouselCardContainer">
                        <img 
                          alt={`تصویر ${area.name}`} 
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
                  {/* Desktop/Tablet Progress Bar */}
                  <div className="styles-module__scrollBar knowledge_desktopProgressBar">
                    <div className="styles-module__scrolledPosition" style={{width: '20%', right: `${percentage}%`}}></div>
                  </div>
                  {/* Mobile Dots Navigation */}
                  <div className="knowledge_mobileDotsContainer">
                    {[0, 1, 2, 3, 4].map((dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`knowledge_dotButton ${Math.floor(percentage / 20) === dotIndex ? 'knowledge_dotActive' : ''}`}
                        onClick={() => {
                          const targetScroll = (dotIndex * 20) / 100;
                          scrollCarousel('position', targetScroll);
                        }}
                      />
                    ))}
                  </div>
                  <div className="styles-module__actionButtonContainer knowledge_carouselArrowButtonContainer" style={{direction: 'ltr'}}>
                  <button 
                      className="styles-module__actionButton" 
                      onClick={() => {
                        scrollCarousel('left');
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                        <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                      </svg>
                    </button>
                    <button 
                      className="styles-module__actionButton" 
                      onClick={() => {
                        scrollCarousel('right');
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                        <path d="M7.64644 3.35355C7.55596 3.26306 7.5 3.13807 7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C8.14045 2.5 8.26737 2.55791 8.35819 2.65115L13.3489 7.64181C13.4421 7.73263 13.5 7.85955 13.5 8C13.5 8.14045 13.4421 8.26737 13.3489 8.35819L8.35819 13.3489C8.26737 13.4421 8.14045 13.5 8 13.5C7.72386 13.5 7.5 13.2761 7.5 13C7.5 12.8619 7.55596 12.7369 7.64644 12.6465L11.7928 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H11.7928L7.64644 3.35355Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="knowledge_knowledgeButtonContainer">
              <a className="button_buttonContainer knowledge_knowledgeButton" href="/en-us/library">
                <div className="button_buttonText knowledge_knowledgeButtonText">حوزه‌های حقوق</div>
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
              src="/assets/logo-icon.png"
            />
          </div>
        </div>

        {/* Site Cards Section */}
        <div className="site_widthContainer">
          <div className="site_innerWidthWrapper">
            <div className="styles-module__container">
              <div className="styles-module__cardsContainer">
                  <div
                    ref={siteCardsRef}
                    className="styles-module__cards site_carouselWidthContainer"
                    style={{
                      gap: '0px 40px',
                      gridAutoColumns: 'minmax(373px, 1fr)',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(373px, 1fr))',
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      minHeight: '500px'
                    }}
                    onScroll={handleSiteCardsScroll}
                  >
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
                  <div className="styles-module__scrolledPosition" style={{width: '33.3333%', right: `${percentageCards}%`}}></div>
                </div>
                <div className="styles-module__actionButtonContainer" style={{direction: 'ltr'}}>
                  <button className="styles-module__actionButton"  onClick={() => scrollSiteCards('left')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon">
                      <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                    </svg>
                  </button>
                  <button className="styles-module__actionButton" onClick={() => scrollSiteCards('right')}>
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
                <div className="help_helpTitle">سؤالات متداول</div>
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
                <a className="button_buttonContainer help_helpButton" href="/en-us/faqs">
                  <div className="button_buttonText help_helpButtonText">سؤالات متداول</div>
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
                  <b>سلب مسئولیت</b>: محتوای ارائه شده در این وب‌سایت فقط برای اهداف اطلاع‌رسانی است و نباید به عنوان جایگزین مشاوره حقوقی قابل اعتماد باشد. گیرندگان توصیه می‌شوند قبل از اجرای هر گونه توصیه‌ای در اینجا، با مشاور حقوقی واجد شرایط مشورت کنند. Weekilaw مسئولیت اقدامات انجام شده بر اساس این اطلاعات را نخواهد داشت.
                </div>
                <div className="content_disclaimer content_disclaimerLawyer">
                  * لطفاً توجه داشته باشید که اگر تصمیم بگیرید با یک وکیل همکاری کنید، ممکن است هزینه‌هایی برای خدمات آنها دریافت شود.
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
                <form onSubmit={handleLastSectionChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                  <div className="style-module__shinyBorderContainer">
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-last-section" aria-label="send-button" disabled={!lastSectionChatInput.trim()}>
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
                          placeholder="سؤال حقوقی خود را بپرسید"
                          style={{height: '72px'}}
                          value={lastSectionChatInput}
                          onChange={(e) => setLastSectionChatInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleLastSectionChatSubmit(e);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default MainContent;
