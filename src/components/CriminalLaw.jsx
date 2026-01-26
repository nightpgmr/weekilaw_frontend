import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import SummaryModal from './SummaryModal.jsx';
import { areasOfLawContent as areas } from '../data/areas.js';

const CriminalLaw = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Static content for Criminal Law
  const breadcrumbLabel = 'حقوق کیفری';
  const breadcrumbHref = '/criminal-law';
  const heroTitle = 'دریافت اطلاعات فوری حقوق کیفری از دستیار هوش مصنوعی ما';
  const introText = `<p>آیا با اتهامات کیفری یا مسائل حقوقی مواجه هستید؟
دستیار هوش مصنوعی ویکیلا می‌تواند:<br>
 • اطلاعات فوری و دقیق در مورد قوانین کیفری ایران به شما بدهد<br>
 • توضیحاتی ساده و قابل‌فهم در مورد حقوق شما ارائه کند<br>
 • اطلاعاتی در مورد فرآیندهای دادگاهی و چگونگی دفاع قانونی به شما بدهد<br>
<br>
ما به شما کمک می‌کنیم تا مسائل پیچیده کیفری را به اطلاعات کاربردی و قابل‌اعتماد تبدیل کنید،
تا بتوانید با اعتماد به نفس بیشتری برای قدم‌های بعدی خود تصمیم بگیرید</p>`;
  const moreInfoText = 'اطلاعات بیشتر درباره حقوق کیفری ایران';
  const moreInfoHref = '/criminal-law/summary';
  const introImage = '/assets/intro-criminal.webp';

  const areaData = areas['criminal-law'];
  const modalContent = areaData.modalContent;
  const subcategoriesTitle = 'دستیار هوشمند ویکیلا  چه کمکی در امور کیفری به شما می‌کند؟';
  const subcategoriesDescription = 'ویکیلا  طیف گسترده‌ای از خدمات حقوق کیفری را از طریق دستیار هوشمند خود ارائه می‌دهد. در ادامه، بخشی از این قابلیت‌ها را می‌بینید';
  const subCategories = [
    {
      title: 'اطلاعات پایه حقوق کیفری',
      image: '/assets/criminal-law/1.webp',
      description: `<p>توضیح شفاف و قابل فهم درباره جرایم، مجازات‌ها، مسئولیت کیفری، و حقوق قانونی اشخاص طبق قوانین کیفری ایران.<br>
این بخش به شما کمک می‌کند درک درستی از موضوع پرونده، نوع جرم و آثار حقوقی آن داشته باشید؛ حتی بدون دانش حقوقی قبلی.</p>`
    },
    {
      title: 'درک دقیق اتهام و وضعیت پرونده',
      image: '/assets/criminal-law/2.webp',
      description: `<p>متوجه شوید اتهام مطرح‌شده دقیقاً به چه معناست، چه پیامدهای قانونی می‌تواند داشته باشد و چه عواملی بر روند رسیدگی و تصمیم مرجع قضایی اثر می‌گذارند.<br>
چه با اتهامات کیفری سبک یا سنگین مواجه باشید و چه در جایگاه متهم، شاکی یا مطلع قرار داشته باشید، دستیار هوشمند ویکیلا به شما کمک می‌کند تصویر روشنی از وضعیت حقوقی خود داشته باشید.</p>`
    },
    {
      title: 'راهنمای مراحل رسیدگی قضایی',
      image: '/assets/criminal-law/3.webp',
      description: `<p>با آگاهی مرحله‌به‌مرحله از روند رسیدگی کیفری، مسیر پرونده خود را بهتر مدیریت کنید.<br>
از آشنایی با جلسات دادسرا و دادگاه، نحوه احضار و حضور در مرجع قضایی، تا آمادگی برای تفهیم اتهام، تحقیقات مقدماتی، رسیدگی دادگاه و صدور رأی، دستیار هوشمند ویکیلا  شما را همراهی می‌کند</p>`
    },
    {
      title: 'آشنایی با قرارهای تأمین و آزادی متهم',
      image: '/assets/criminal-law/4.webp',
      description: `<p>شرایط قرارهای تأمین کیفری از جمله کفالت، وثیقه و سایر تضمین‌های قانونی را بشناسید، از تعهدات خود آگاه شوید و بدانید در صورت نقض شرایط یا نیاز به تغییر قرار چه پیامدهایی در انتظار شماست.<br>
دستیار هوشمند ویکیلا  به شما کمک می‌کند تصمیمات قضایی مرتبط با آزادی یا بازداشت را بهتر درک کنید و مسیر قانونی مناسب را بشناسید.</p>`
    },
    {
      title: 'تعدیل و کاهش احکام کیفری',
      image: '/assets/criminal-law/5.webp',
      description: 'راهنمایی در مورد فرآیندهای تعدیل حکم، کاهش مجازات‌ها، آزادی مشروط و داستان‌های واقعی از افرادی که موفق به کاهش احکام خود شده‌اند.'
    }
  ];
  const whyUseTitle = 'چرا ویکیلا  انتخاب هوشمندانه در پرونده‌های کیفری است؟';
  const whyUseDescription = `<p>ویکیلا مسیر دسترسی به اطلاعات حقوق کیفری را ساده و قابل‌فهم می‌کند.
دستیار هوشمند حقوقی ویکیلا بدون  ایجاد فشار یا قضاوت، به شما کمک می‌کند پیش از هر تصمیم مهم، از وضعیت حقوقی خود آگاه شوید.<br>
<br>
چه با اتهام کیفری مواجه باشید، چه دغدغه قرار تأمین، بازداشت، دادسرا یا روند دادگاه داشته باشید، پاسخ‌ها متناسب با شرایط پرونده شما ارائه می‌شود.
برخلاف جست‌وجوهای پراکنده و منابع پیچیده حقوقی، ویکیلا  اطلاعات شفاف، کاربردی و قابل اتکا را دقیقاً زمانی در اختیار شما می‌گذارد که بیش از هر زمان به شفافیت و آرامش تصمیم‌گیری نیاز دارید</p>`;
  const whyUseSections = [
    {
      title: 'پشتیبانی‌شده با منابع معتبر حقوقی ایران',
      image: '/assets/criminal-law/8.webp',
      description: `<p>ویکیلا  بر پایه منابع معتبر، قوانین لازم‌الاجرا و رویه‌های حقوقی ایران فعالیت می‌کند.<br>
پاسخ‌ها صرفاً اطلاعات عمومی یا محتوای کلی نیستند، بلکه بر اساس قوانین موضوعه، آیین دادرسی، آراء و رویه‌های شناخته‌شده قضایی و دانش تخصصی حقوقی ارائه می‌شوند.<br>
<br>
این رویکرد به شما کمک می‌کند در مسائل کیفری، درک دقیق‌تری از وضعیت حقوقی خود داشته باشید و تصمیم‌های آگاهانه‌تری در چارچوب نظام حقوقی ایران اتخاذ کنید.</p>`
    },
    {
      title: 'دسترسی فوری به پاسخ‌های هوشمند حقوقی، هر زمان که نیاز دارید',
      image: '/assets/criminal-law/9.webp',
      description: `<p>با ویکیلا  پاسخ‌های حقوقی متناسب با سؤال و شرایط پرونده شما را بدون نیاز به تعیین وقت، انتظار طولانی یا هزینه‌های پیش‌بینی‌نشده دریافت کنید.<br>
دستیار هوشمند حقوقی ویکیلا  در هر زمان، اطلاعات شفاف و کاربردی را در اختیار شما قرار می‌دهد تا بتوانید با آرامش و آگاهی تصمیم بگیرید</p>`,
    },
    {
      title: 'دسترسی دائمی به پشتیبانی هوشمند حقوقی',
      image: '/assets/criminal-law/10.webp',
      description: `<p>ویکیلا به‌صورت ۲۴ ساعته و بدون وقفه در دسترس است؛<br>
مناسب برای مواقعی که سؤال حقوقی شما فوری است، خارج از ساعات اداری مطرح می‌شود یا نیاز دارید در شرایط پرتنش، پاسخ قابل اتکا دریافت کنید.<br>
دستیار هوشمند ویکیلا  در هر زمان، همراه شماست.</p>`,
    },
    {
      title: 'امنیت و محرمانگی اطلاعات شما',
      image: '/assets/criminal-law/11.webp',
      description: `<p>ویکیلا  اطلاعات شما را به‌صورت امن، محرمانه و ناشناس نگهداری می‌کند
تا بتوانید بدون نگرانی از قضاوت، افشا یا پیامدهای ناخواسته،
گزینه‌های حقوقی خود را بررسی و آگاهانه تصمیم‌گیری کنید.</p>`,
    }
  ];
  const howItWorksTitle = 'ویکیلا  چگونه در پرونده‌های کیفری به شما کمک می‌کند؟';
  const howItWorksDescription = `<p>شروع کار بسیار ساده است.<br>
شما همواره کنترل کامل اطلاعاتی که وارد می‌کنید و نوع راهنمایی‌ای که دریافت می‌کنید را در اختیار دارید</p>`;
  const howItWorksSteps = [
    {
      title: 'شرح مسئله حقوقی شما',
      image: '/assets/how-it-works-step1-desktop.webp',
      description: `<p>از همین‌جا شروع کنید.<br>
کافی‌ست با زبان ساده و بدون اصطلاحات حقوقی توضیح دهید چه اتفاقی افتاده است.<br>
فرقی نمی‌کند با یک اتهام کیفری روبه‌رو هستید، برای مراجعه به مرجع قضایی نگرانی دارید یا فقط از حقوق قانونی خود مطمئن نیستید؛<br>
دستیار هوشمند ویکیلا به دقت به توضیحات شما گوش می‌دهد و متناسب با شرایطتان راهنمایی دقیق ارائه می‌کند.</p>`
    },
    {
      title: 'قوانین مؤثر پرونده شما به زبان ساده',
      image: '/assets/how-it-works-step2-desktop.webp',
      description: `<p>قوانین مهمی مانند قانون مجازات اسلامی، قوانین آیین دادرسی، قوانین خاص کیفری و اصول قانون اساسی، چارچوب جرایم و مجازات‌ها را در ایران تعیین می‌کنند.<br>
ویکیلا  این قوانین را به زبان ساده و قابل فهم توضیح می‌دهد تا بدون سردرگمی، از حقوق، تکالیف و گزینه‌های قانونی پیشِ روی خود آگاه شوید.</p>`
    },
    {
      title: 'گزارش حقوقی اختصاصی شما، بلافاصله',
      image: '/assets/how-it-works-step3-v2-desktop.webp',
      description: `<p>پس از پایان گفت‌وگو با دستیار هوشمند حقوقی ویکیلا ، یک گزارش حقوقی شخصی‌سازی‌شده متناسب با وضعیت شما تهیه می‌شود.<br>
این گزارش شامل جمع‌بندی حقوقی، تحلیل وضعیت، ریسک‌های احتمالی و مسیرهای قانونی پیشِ رو است تا بتوانید با دید روشن‌تری تصمیم بگیرید.</p>`
    }
  ];
  const faqTitle = 'پرسش‌های متداول دستیار هوشمند حقوق کیفری ویکیلا';
  const faqItems = [
    { question: 'آیا دستیار هوشمند ویکیلا مشاوره حقوقی واقعی ارائه می‌دهد؟', answer: `<p>ویکیلا جایگزین وکیل نیست، اما اطلاعات حقوقی دقیق، تحلیلی و مبتنی بر قوانین ایران ارائه می‌دهد تا قبل از هر اقدام، آگاهانه تصمیم بگیرید. در صورت نیاز، امکان ارتباط با وکیل نیز فراهم است.</p>` },
    { question: 'آیا استفاده از ویکیلا  کاملاً رایگان است؟', answer: `<p>بله. دسترسی اولیه به دستیار هوشمند و دریافت اطلاعات حقوقی پایه رایگان است. برخی خدمات تخصصی ممکن است مشمول شرایط جداگانه باشند.</p>` },
    { question: 'اطلاعات ارائه‌شده توسط ویکیلا  چقدر قابل اعتماد است؟', answer: `<p>پاسخ‌ها بر اساس قوانین کیفری ایران، آیین دادرسی کیفری، رویه‌های قضایی و تحلیل کارشناسان خبره تهیه می‌شوند و از منابع عمومی و غیرمعتبر استفاده نمی‌شود.</p>` },
    { question: 'آیا گفت‌وگوی من با ویکیلا محرمانه است؟', answer: `<p>بله. کلیه گفت‌وگوها محرمانه بوده و امکان استفاده ناشناس نیز وجود دارد. حفظ حریم خصوصی کاربران یکی از اصول اصلی ویکیلا  است.</p>` },
    { question: 'اگر هنوز قصد اقدام قانونی ندارم، می‌توانم از ویکیلا  استفاده کنم؟', answer: `<p>کاملاً. ویکیلا  برای آگاهی، بررسی گزینه‌ها و تصمیم‌گیری قبل از هر اقدام حقوقی طراحی شده است.
</p>` },
    { question: ' آیا ویکیلا  خارج از ساعات اداری هم در دسترس است؟', answer: `<p>بله. دستیار هوشمند ویکیلا به‌صورت ۲۴ ساعته و در تمام روزهای هفته در دسترس شماست.</p>` },
    { question: 'اگر بازداشت شوم، ویکیلا چگونه به من کمک می‌کند؟', answer: `<p>ویکیلا  حقوق قانونی شما، مراحل قانونی پس از بازداشت، نحوه برخورد با ضابطان قضایی و گزینه‌های پیش‌رو را به‌صورت شفاف توضیح می‌دهد.</p>` },
    { question: 'پس از تفهیم اتهام، ویکیلا چه کمکی می‌کند؟', answer: `<p>به شما کمک می‌کند بدانید:<br>
 • اتهام چیست<br>
 • چه اقداماتی فوراً باید انجام شود<br>
 • چه تصمیم‌هایی می‌تواند به نفع یا ضرر شما باشد</p>` },
    { question: 'آیا می‌توانم برای دفاع شخصی از راهنمایی ویکیلا  استفاده کنم؟', answer: `<p>بله. ویکیلا  مسیرهای قانونی، حقوق شما و الزامات دفاع را توضیح می‌دهد، اما در پرونده‌های حساس توصیه می‌شود از وکیل استفاده شود.</p>` },
    { question: 'ویکیلا  چگونه حقوق من را در بازرسی‌ها و تفتیش‌ها توضیح می‌دهد؟', answer: `<p>حقوق شما در تفتیش، شرایط قانونی ورود، حدود اختیارات ضابطان و موارد قابل اعتراض به زبان ساده توضیح داده می‌شود.</p>` },
    { question: 'آیا ویکیلا  تأثیر سابقه کیفری بر آینده شغلی و اجتماعی را توضیح می‌دهد؟', answer: `<p>بله. آثار قانونی و اجتماعی سابقه کیفری، محدودیت‌ها و راهکارهای قانونی مرتبط به‌طور شفاف بررسی می‌شود.</p>` },
    { question: 'ویکیلا  چگونه در آماده‌سازی دفاع مؤثر کمک می‌کند؟', answer: `<p>با شناسایی مسیرهای دفاع، نقاط حساس پرونده، گزینه‌های قانونی و امکان ارتباط با وکیل یا کارشناس خبره.</p>` },
  ];
  const helpTitle = 'نیاز به راهنمایی در یک پرونده کیفری دارید؟';
  const helpDescription = 'با مطرح‌کردن پرسش حقوقی، اطلاعات اولیه، حقوق قانونی و گزینه‌های پیش روی خود را در پرونده‌های کیفری دریافت کنید.';

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
                  <a href="/library">حوزه‌های حقوقی</a>
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
                  <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-criminal">
                    <input className="style-module__fileInput" multiple type="file" />
                    <img
                      className="style-module__preTextIcon"
                      src="/assets/spark-gray.svg"
                      alt="spark"
                    />
                    <div className="style-module__actions">
                      <button className="style-module__sendButton" type="submit" id="send-button-criminal" aria-label="send-button" disabled={!chatInput.trim()}>
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
                        id="double-input-criminal"
                        className="style-module__textareaInput style-module__withPreTextIcon"
                        rows="1"
                        placeholder="سؤال حقوقی خود را اینجا بنویسید"
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
                  دریافت پاسخ فوری به سؤالات حقوق کیفری شما از دستیار هوش مصنوعی ما
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
                  آیا با اتهام یا مسائل حقوقی کیفری روبه‌رو هستید؟
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
                  <div className="content_bodyText content_maxWidth" dangerouslySetInnerHTML={{ __html: introText }} />
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
                      <div className="intro_moreInfoText">اطلاعات بیشتر</div>
                    </div>
                    <div className="intro_moreInfoLinkContainer">
                      <a onClick={() => setIsModalOpen(true)} className="intro_categoryActionContainer" style={{cursor: 'pointer'}}>
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
                  alt="Criminal law intro image"
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
                            <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: category.description }} />
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="styles-module__actionBar subcategories_actionBarWrapper">
                  <div className="styles-module__scrollBar">
                    <div className="styles-module__scrolledPosition" style={{width: '25%', right: `${percentage}%`}}></div>
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

        {/* Need Help Section */}
        <div className="landing-page_widthWrapper">
          <div className="landing-page_innerWidthWrapper">
            <div className="styles_container">
              <div className="styles_card" style={{ maxWidth: '100%' }}>
                <div className="styles_textWrapper">
                  <div className="styles_title" style={{ textAlign: 'start' }}>{helpTitle}</div>
                  <div className="styles_description" style={{ textAlign: 'start' }}>{helpDescription}</div>
                </div>
                <div className="styles_imageWrapper">
                  <a
                    href="/chat"
                    className="styles_buttonWrapper styles_startCaseButton"
                    style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}
                  >
                    <div className="styles_buttonText">سؤال حقوقی خود را مطرح کنید</div>
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

        {/* Why Use AI Section */}
        <div className="category_libraryGapWrapper">
          <div className="why-use_widthWrapper">
            <div className="why-use_carouselContainer">
            <div className="why-use_titleContainer">
              <h2 className="why-use_title">{whyUseTitle}</h2>
            </div>
            <div className="why-use_descriptionContainer">
              <p className="why-use_description">
                <span style={{color: '#191919'}} dangerouslySetInnerHTML={{ __html: whyUseDescription }} />
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
                    <span style={{color: '#191919'}} dangerouslySetInnerHTML={{ __html: howItWorksDescription }}/>
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
                          <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: step.description }}/>
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
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
              <div className="styles_card" style={{ maxWidth: '100%' }}>
                <div className="styles_textWrapper">
                  <div className="styles_title" style={{ textAlign: 'start' }}>{helpTitle}</div>
                  <div className="styles_description" style={{ textAlign: 'start' }}>{helpDescription}</div>
                </div>
                <div className="styles_imageWrapper">
                  <a
                    href="/chat"
                    className="styles_buttonWrapper styles_startCaseButton"
                    style={{'--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)'}}
                  >
                    <div className="styles_buttonText">سؤال حقوقی خود را مطرح کنید</div>
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
              محتوای ارائه‌شده در ویکیلا  صرفاً جنبه اطلاع‌رسانی حقوقی دارد و جایگزین مشاوره تخصصی وکیل یا کارشناس رسمی نیست.
کاربران پیش از هر اقدام حقوقی یا قضایی، باید با وکیل دادگستری یا مرجع ذی‌صلاح مشورت نمایند.
ویکیلا  مسئولیتی در قبال تصمیمات اتخاذشده بر اساس این اطلاعات نخواهد داشت.
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
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-criminal-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-criminal-last-section" aria-label="send-button" disabled={!lastSectionChatInput.trim()}>
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
                          id="double-input-criminal-last-section"
                          className="style-module__textareaInput style-module__withPreTextIcon"
                          rows="1"
                          placeholder="سؤال حقوقی خود را اینجا بنویسید"
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
      <SummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </PageLayout>
  );
};

export default CriminalLaw;

