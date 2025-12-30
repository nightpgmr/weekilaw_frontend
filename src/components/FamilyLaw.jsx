import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';

const FamilyLaw = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [heroStep, setHeroStep] = useState(0);
  const [showFixedChat, setShowFixedChat] = useState(false);
  const [isAtLastSection, setIsAtLastSection] = useState(false);
  const chatInputRef = useRef(null);
  const lastSectionRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  // Chat input states
  const [chatInput, setChatInput] = useState('');
  const [lastSectionChatInput, setLastSectionChatInput] = useState('');

  // Carousel state
  const [carouselScrollPosition, setCarouselScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  // Site cards carousel state
  const [siteCardsScrollPosition, setSiteCardsScrollPosition] = useState(0);
  const siteCardsRef = useRef(null);
  const [percentageCards, setPercentageCards] = useState(0);

  // Static content for Family Law
  const breadcrumbLabel = 'حقوق خانواده';
  const breadcrumbHref = '/en-us/family-law';
  const heroTitle = 'مشاوره هوشمند رایگان در زمینه حقوق خانواده';
  const introText = "به کمک دستیار هوش مصنوعی ویکیلا، پاسخ رایگان به پرسش‌های خود درباره‌ی طلاق، حضانت، نفقه و سایر موضوعات مربوط به حقوق خانواده دریافت کنید. با راهنمایی شفاف و قابل‌فهم ما، تصمیم‌های آگاهانه‌تری درباره‌ پرونده‌های خانوادگی بگیرید. همراه هوشمند شما در حل مسائل خانوادگی موضوعاتی مانند طلاق، حضانت فرزند، توافق مالی، یا خشونت خانگی می‌تواند فشار روانی زیادی به همراه داشته باشد. ویکیلا با بهره‌گیری از هوش مصنوعی و دانش حقوقی به‌روز، اطلاعات دقیق و قابل استناد ارائه می‌دهد تا احساس کنترل بیشتری بر شرایطتان داشته باشید — کاملاً رایگان. این سامانه بر پایه‌ی اصول تثبیت‌شده‌ی حقوق خانواده طراحی شده و به شما کمک می‌کند حقوق، مسئولیت‌ها و گزینه‌های خود را بهتر بشناسید.";
  const moreInfoText = 'خلاصه‌ای از قوانین خانواده در ایران';
  const moreInfoHref = '/en-us/family-law/summary';
  const introImage = '/assets/intro-family.webp';
  const subcategoriesTitle = 'چه مسائل حقوق خانواده می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند';
  const subcategoriesDescription = 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل حقوق خانواده کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:';
  const subCategories = [
    {
      title: 'طلاق و جدایی',
      image: '/assets/default-area-of-law.webp',
      description: 'اگر به فکر طلاق یا جدایی قانونی هستید، دستیار ویکیلا شرایط طرح دادخواست طلاق برای زن و مرد، مراحل قانونی از ثبت دادخواست تا صدور حکم، تقسیم دارایی‌ها، مهریه، نفقه و اجرت‌المثل، و حضانت فرزندان پس از طلاق را توضیح می‌دهد.'
    },
    {
      title: 'حضانت فرزند و برنامه‌ریزی تربیتی',
      image: '/assets/default-area-of-law.webp',
      description: 'اگر قصد تنظیم توافق حضانت یا تغییر در شرایط قبلی را دارید، ویکیلا تفاوت حضانت، ولایت و ملاقات، معیارهای دادگاه در تعیین صلاحیت والدین، و چگونگی حفظ منافع فرزند در روند تصمیم‌گیری را توضیح می‌دهد.'
    },
    {
      title: 'نفقه و حمایت مالی از فرزند',
      image: '/assets/default-area-of-law.webp',
      description: 'ویکیلا به‌صورت واضح توضیح می‌دهد چگونه میزان نفقه بر اساس درآمد و نیاز تعیین می‌شود، در چه شرایطی می‌توان نفقه را افزایش یا کاهش داد، و چه مراحلی برای الزام پرداخت یا پیگیری مطالبات وجود دارد.'
    },
    {
      title: 'توافقات پیش از ازدواج و پس از ازدواج',
      image: '/assets/default-area-of-law.webp',
      description: 'اگر قصد ازدواج دارید یا ازدواج کرده‌اید و می‌خواهید امور مالی یا تعهدات را شفاف‌تر تعریف کنید، دستیار هوشمند ویکیلا توافق‌نامه‌های پیش از ازدواج، توافقات پس از ازدواج، و شرایط قانونی و زمان مناسب مشورت با وکیل را توضیح می‌دهد.'
    },
    {
      title: 'خشونت خانگی و دستورهای حمایتی',
      image: '/assets/default-area-of-law.webp',
      description: 'در صورت تجربه خشونت یا نیاز به حمایت فوری، ویکیلا روند درخواست دستور منع تماس یا خروج از منزل، نهادهای حمایتی و پناهگاه‌های قانونی، و حقوق قربانیان خشونت و اقدامات فوری برای امنیت را توضیح می‌دهد.'
    },
    {
      title: 'فرزندخواندگی و حقوق والدین',
      image: '/assets/default-area-of-law.webp',
      description: 'اگر قصد سرپرستی کودک را دارید یا درگیر مسائل حقوقی مربوط به والدین هستید، ویکیلا مراحل قانونی فرزندخواندگی در ایران، شرایط لازم برای متقاضیان، و حقوق والدین در موارد استثنایی را روشن می‌کند.'
    }
  ];
  const whyUseTitle = 'چرا از ویکیلا برای کمک در امور خانوادگی استفاده کنید';
  const whyUseDescription = "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط دشوار خانوادگی، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از موقعیت خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.";
  const whyUseSections = [
    {
      title: "بر اساس قوانین و آیین‌نامه‌های معتبر ایران",
      image: '/assets/legal-knowledge.webp',
      description: "اطلاعات ارائه‌شده مطابق آخرین مصوبات قانونی و اصول معتبر حقوقی کشور بوده و برای عموم قابل فهم است. با اینکه شرایط هر استان ممکن است جزئی تفاوت‌هایی داشته باشد، ما تلاش می‌کنیم راهنمایی کلی و قابل اتکا ارائه دهیم."
    },
    {
      title: 'دسترسی آسان و رایگان به اطلاعات حقوقی',
      image: '/assets/always-ready.webp',
      description: 'بدون نیاز به جست‌وجوی طولانی یا اصطلاحات پیچیده حقوقی، کافی است وضعیت خود را توضیح دهید تا دستیار هوشمند، اطلاعات مرتبط را به زبان ساده در اختیار شما قرار دهد. این اطلاعات به شما کمک می‌کند تصمیمات آگاهانه‌تری اتخاذ کنید.'
    },
    {
      title: "اطلاعات به زبان ساده و قابل درک",
      image: '/assets/personalised-legal-information.webp',
      description: 'پاسخ‌های بدون اصطلاحات پیچیده حقوقی که به راحتی قابل درک هستند. گفتگوها به‌صورت امن و محرمانه انجام می‌شود و اطلاعات شما بدون رضایتتان ذخیره یا منتشر نمی‌شود.'
    }
  ];
  const howItWorksTitle = 'آماده‌اید شروع کنید؟';
  const howItWorksDescription = "هر سؤالی درباره‌ی طلاق، حضانت، نفقه یا سایر امور خانوادگی دارید — هم‌اکنون از دستیار هوش مصنوعی ویکیلا بپرسید و پاسخ شفاف و رایگان دریافت کنید. ویکیلا – همراه مطمئن شما در مسیر آرام و آگاه خانوادگی.";
  const howItWorksSteps = [
    {
      title: 'سؤال خود را مطرح کنید',
      image: '/assets/how-it-works-step1-desktop.webp',
      description: "هر سؤالی درباره‌ی طلاق، حضانت، نفقه یا سایر امور خانوادگی دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
    },
    {
      title: 'پاسخ هوشمند دریافت کنید',
      image: '/assets/how-it-works-step2-desktop.webp',
      description: "دستیار هوشمند ویکیلا بر اساس قوانین ایران به شما پاسخ می‌دهد و اطلاعات کاربردی، شفاف و قابل اتکا ارائه می‌دهد."
    },
    {
      title: 'تصمیم آگاهانه بگیرید',
      image: '/assets/how-it-works-step3-v2-desktop.webp',
      description: "با اطلاعات دریافتی، وضعیت خود را بهتر درک کنید، گزینه‌هایتان را بسنجید و با اطمینان تصمیم بگیرید."
    }
  ];
  const faqTitle = 'سؤالات متداول درباره حقوق خانواده';
  const faqItems = [
    {
      question: 'آیا استفاده از ویکیلا رایگان است؟',
      answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه حقوق خانواده کاملاً رایگان است.'
    },
    {
      question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
      answer: 'می‌توانید درباره طلاق، حضانت فرزند، نفقه، خشونت خانگی، فرزندخواندگی و سایر مسائل مرتبط با حقوق خانواده بپرسید.'
    },
    {
      question: 'آیا این اطلاعات جایگزین مشاوره حقوقی است؟',
      answer: 'خیر. اطلاعات ارائه‌شده صرفاً جنبه آگاهی‌بخشی دارد و جایگزین مشاوره تخصصی و رسمی حقوقی نیست.'
    },
    {
      question: 'آیا اطلاعات من محرمانه می‌ماند؟',
      answer: 'بله. تمامی گفتگوها به‌صورت امن و محرمانه نگهداری می‌شوند و اطلاعات شما بدون رضایتتان ذخیره یا منتشر نمی‌شود.'
    },
    {
      question: 'آیا همیشه نیاز به وکیل دارم؟',
      answer: 'نه همیشه. در بسیاری از موارد، آگاهی اولیه می‌تواند مسیر تصمیم‌گیری را روشن کند، اما برای مسائل پیچیده، مشاوره وکیل ضروری است.'
    },
    {
      question: 'آیا ویکیلا همیشه در دسترس است؟',
      answer: 'بله. دستیار حقوقی به‌صورت ۲۴ ساعته در دسترس است.'
    }
  ];
  const helpTitle = 'کمک به یک مسئله خانوادگی نیاز دارید؟';
  const helpDescription = 'هر سؤالی درباره‌ی طلاق، حضانت، نفقه یا سایر امور خانوادگی دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید';

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    const trimmed = chatInput.trim();
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
  const scrollCarousel = useCallback((direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

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

  // Auto-rotate hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroStep((prevStep) => (prevStep + 1) % 3); // 3 static slides
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
        {/* Library Header Section */}
        <div className="styles_libraryHeaderWrapper">
          <div className="library-header_libraryTitleContainer">
            <div className="library-header_widthWrapper">
              <div className="library-header_innerWidthWrapper styles_libraryHeaderInnerClass">
                {/* Breadcrumb */}
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem">
                    <a href="/en-us/library">Areas of law</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem">
                    {' / '}
                    <a href={breadcrumbHref}>{breadcrumbLabel}</a>
                  </span>
                </div>

                {/* Title */}
                <h1 className="library-header_title styles_areaOfLawMaxWidth styles_libraryHeaderClass">
                  {heroTitle}
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

          {/* Chat Input - Inside library header wrapper */}
          <div className="styles_inputWrapper">
          <div className="chat_doubleChatInputWrapper">
            <div className="chat_outerWrapper">
              <form onSubmit={handleChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                <div className="style-module__shinyBorderContainer">
                  <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-family-law">
                    <input className="style-module__fileInput" multiple type="file" />
                    <img
                      className="style-module__preTextIcon"
                      src="/assets/spark-gray.svg"
                      alt="spark"
                    />
                    <div className="style-module__actions">
                      <button className="style-module__sendButton" type="submit" id="send-button-family-law" aria-label="send-button" disabled={!chatInput.trim()}>
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
                        id="double-input-family-law"
                        className="style-module__textareaInput style-module__withPreTextIcon"
                        rows="1"
                        placeholder="سؤال حقوقی خود را بپرسید"
                        style={{height: '72px'}}
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleChatSubmit(e);
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

        {/* Quick Points Section */}
        <div className="category_libraryGapWrapper category_quickPointsNoTopGap__xyz">
          <div className="landing-page_container">
            <div className="styles_heroContainer">
              <div className="styles_featureCards">
                <div className="styles_featureCard styles_featureCardTwo">
                  <div className="styles_iconWrapper">
                    <img
                      src="/assets/shield-tick.svg"
                      alt="shield"
                      className="styles_icon"
                      width="24"
                      height="24"
                    />
                  </div>
                  <p className="styles_featureText">
                    پاسخ‌های رایگان هوش مصنوعی دریافت کنید
                  </p>
                </div>
                <div className="styles_featureCard styles_featureCardTwo">
                  <div className="styles_iconWrapper">
                    <img
                      src="/assets/lightning-blue.svg"
                      alt="lightning"
                      className="styles_icon"
                      width="24"
                      height="24"
                    />
                  </div>
                  <p className="styles_featureText">
                    تصمیمات آگاهانه بگیرید
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
                className="styles_heroImageBackground"
                style={{color:'transparent'}}
              />
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="category_libraryGapWrapper">
          <div className="content_contentContainer">
            <div className="content_sectionContainer">
              <div className="content_innerWidthWrapper">
                <div className="content_descriptionHeader">
                  <div className="content_bodyText content_maxWidth">
                    <p>{introText}</p>
                  </div>
                  {/* MORE INFO Section */}
                  <div className="intro_moreInfoContainer">
                    <div className="intro_moreInfo">
                      <div className="intro_moreInfoIconContainer">
                        <img
                          src="/assets/light-bulb.svg"
                          alt="info"
                          className="intro_infoIcon"
                          width="24"
                          height="24"
                        />
                      </div>
                      <div className="intro_moreInfoText">MORE INFO</div>
                    </div>
                    <div className="intro_moreInfoLinkContainer">
                      <a href={moreInfoHref} className="intro_categoryActionContainer">
                        <span className="intro_categoryActionText">{moreInfoText}</span>
                        <div className="intro_categoryArrowContainer">
                          <img
                            src="/assets/arrow-right-blue.svg"
                            alt="arrow"
                            className="intro_categoryArrow"
                            width="16"
                            height="16"
                          />
                          <img
                            src="/assets/arrow-right-midnight.svg"
                            alt="arrow hover"
                            className="intro_categoryArrowHover"
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
                  alt="FamilyLaw intro image"
                  loading="lazy"
                  width="0"
                  height="0"
                  decoding="async"
                  className="intro_image"
                  style={{color: 'transparent', transform: 'scaleX(-1)', marginRight: '70%'}}
                    src={introImage}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Categories Section */}
        <div className="category_libraryGapWrapper">
          <div className="subcategories_widthWrapper">
            <div className="subcategories_carouselContainer">
              <div className="subcategories_titleContainer">
                <h2 className="subcategories_title">
                  {subcategoriesTitle}
                </h2>
              </div>
              <div className="subcategories_descriptionContainer">
                <p className="subcategories_description">{subcategoriesDescription}</p>
              </div>
              <div className="styles-module__container subcategories_carouselWrapper">
                <div className="styles-module__cardsContainer">
                  <div
                    ref={carouselRef}
                    className="styles-module__cards subcategories_cardsContainer"
                    style={{gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))'}}
                    onScroll={handleCarouselScroll}
                  >
                    {subCategories.map((category, index) => (
                      <a key={index} href={category.href}  className="subcategories_gridItem subcategories_notClickable">
                        <div className="subcategories_categoryImageContainer">
                          <img
                            src={category.image}
                            alt={category.title}
                            loading="lazy"
                            width="0"
                            height="0"
                            className="subcategories_categoryImage"
                            style={{color: 'transparent'}}
                          />
                        </div>
                        <div className="subcategories_categoryTitle">{category.title}</div>
                        <div className="subcategories_categoryDescription">
                          <p>
                            <span style={{color: '#333333'}}>{category.description}</span>
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="styles-module__actionBar subcategories_actionBarWrapper">
                  <div className="styles-module__scrollBar">
                    <div className="styles-module__scrolledPosition" style={{width: '25%', right: '%'}}></div>
                  </div>
                  <div className="styles-module__actionButtonContainer subcategories_arrowButtonContainer" style={{direction: 'ltr'}}>
                    <button className="styles-module__actionButton" onClick={() => scrollCarousel('left')}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#777777" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon" style={{transform: 'scaleX(-1)'}}>
                        <path d="M12.5303 5.03032C12.6661 4.8946 12.75 4.7071 12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.7893 3.75 11.5989 3.83686 11.4627 3.97672L3.97672 11.4627C3.83686 11.5989 3.75 11.7893 3.75 12C3.75 12.2107 3.83686 12.4011 3.97672 12.5373L11.4627 20.0233C11.599 20.1631 11.7893 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.2929 12.6661 19.1054 12.5303 18.9697L6.31075 12.75H19.5C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25H6.31075L12.5303 5.03032Z"></path>
                      </svg>
                    </button>
                    <button className="styles-module__actionButton" onClick={() => scrollCarousel('right')}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#0E5FE3" xmlns="http://www.w3.org/2000/svg" className="styles-module__actionIcon" style={{transform: 'scaleX(-1)'}}>
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
        <div className="category_libraryGapWrapper">
          <div className="why-use_widthWrapper">
            <div className="why-use_carouselContainer">
            <div className="why-use_titleContainer">
              <h2 className="why-use_title">{whyUseTitle}</h2>
            </div>
            <div className="why-use_descriptionContainer">
              <p className="why-use_description">
                <span style={{color: '#191919'}}>
                  {whyUseDescription}
                </span>
              </p>
            </div>
            <div className="styles-module__container why-use_carouselWrapper">
              <div className="styles-module__cardsContainer">
                <div
                  className="styles-module__cards why-use_cardsContainer"
                  style={{gap: '0px 40px', gridAutoColumns: 'minmax(270px, 1fr)', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))'}}
                >
                  {whyUseSections.map((section, index) => (
                    <div key={index} className="why-use_gridItem">
                      <div className="why-use_categoryImageContainer">
                        <img
                          src={section.image}
                          alt={section.title}
                          loading="lazy"
                          width="0"
                          height="0"
                          className="why-use_categoryImage"
                          style={{color: 'transparent'}}
                        />
                      </div>
                      <div className="why-use_categoryTitle">{section.title}</div>
                      <div className="why-use_categoryDescription">
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
        <div className="category_libraryGapWrapper">
          {/* How It Works Steps */}
          <div className="how-it-works_container how-it-works_noBackgroundLine">
            <div className="how-it-works_container">
              <div className="how-it-works_stepsWrapper">
                <div className="how-it-works_titleContainer">
                  <h2 className="how-it-works_title">{howItWorksTitle}</h2>
                  <p className="how-it-works_description">
                    <span style={{color: '#191919'}}>
                      {howItWorksDescription}
                    </span>
                  </p>
                </div>
                <div className="how-it-works_stepsContainer">
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className={`how-it-works_step ${index === 1 ? 'how-it-works_step2 how-it-works_step2' : ''} ${index === 2 ? 'how-it-works_step3' : ''}`}>
                      <div className="how-it-works_imageWrapper">
                        <img
                          alt={step.title}
                          loading="lazy"
                          width="0"
                          height="0"
                          className="how-it-works_stepImage how-it-works_desktop"
                          style={{color: 'transparent'}}
                          src={step.image}
                        />
                        <img
                          alt={step.title}
                          loading="lazy"
                          width="0"
                          height="0"
                          className="how-it-works_stepImage how-it-works_tablet"
                          style={{color: 'transparent'}}
                          src={step.image.replace('step1-desktop', 'step1-tablet').replace('step2-desktop', 'step2-tablet').replace('step3-v2-desktop', 'step3-v2-tablet')}
                        />
                        <img
                          alt={step.title}
                          loading="lazy"
                          width="0"
                          height="0"
                          className="how-it-works_stepImage how-it-works_mobile"
                          style={{color: 'transparent'}}
                          src={step.image.replace('step1-desktop', 'step1-mobile').replace('step2-desktop', 'step2-mobile').replace('step3-v2-desktop', 'step3-v2-mobile')}
                        />
                      </div>
                      <div className="how-it-works_stepContent">
                        <h3 className="how-it-works_stepTitle">{step.title}</h3>
                        <p className="how-it-works_stepDescription">
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
        <div className="landing-page_widthWrapper">
          <div className="landing-page_innerWidthWrapper">
            <div className="faq-content_faqContainer">
              <div className="faq-content_faqTitleContainer">
                <h2 className="faq-content_faqTitle">{faqTitle}</h2>
              </div>
              <div className="dropdown_dropDownImageWrapper">
                <div className="dropdown_dropDownContainer">
                  {faqItems.map((faq, index) => (
                    <div key={index} className={`dropdown_dropDownItem ${openFaqIndex === index ? 'dropdown_open' : ''}`}>
                      <div className="dropdown_dropDownItemTitle" onClick={() => toggleFaq(index)}>
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
                      <div className={`dropdown_dropDownItemContent ${openFaqIndex === index ? 'dropdown_open' : ''} faq-content_dropDownContent`}>
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
                  className="dropdown_helpFloatingImage"
                  style={{color: 'transparent'}}
                  src="/assets/help-floating-desktop.webp"
                />
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
                  <div className="styles_title">{helpTitle}</div>
                  <div className="styles_description">{helpDescription}</div>
                </div>
                <div className="styles_imageWrapper">
                  <a
                    href="/chat"
                    className="styles_buttonWrapper styles_startCaseButton"
                    style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}
                  >
                    <div className="styles_buttonText">همین حالا شروع کنید</div>
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

        {/* Chat Section - Footer */}
        <div className="content_contentContainer">
          <div className="content_sectionContainer">
            <div className="chat_doubleChatInputWrapper">
              <div className="chat_outerWrapper">
                <form onSubmit={handleLastSectionChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                  <div className="style-module__shinyBorderContainer">
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-family-law-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-family-law-last-section" aria-label="send-button" disabled={!lastSectionChatInput.trim()}>
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
                          id="double-input-family-law-last-section"
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

export default FamilyLaw;
