import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import SummaryModal from './SummaryModal.jsx';
import { areasOfLawContent as areas } from '../data/areas.js';

const EstateAndProbateLaw = () => {
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
  const [estateChatInput, setEstateChatInput] = useState('');
  const [estateLastSectionChatInput, setEstateLastSectionChatInput] = useState('');

  // Carousel state
  const [carouselScrollPosition, setCarouselScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  // Static content for Estate and Probate Law
  const breadcrumbLabel = 'ارث، وصیت و امور حسبی';
  const breadcrumbHref = '/en-us/estate-and-probate-law';
  const heroTitle = 'اهنمایی رایگان هوش مصنوعی در حوزه ارث، وصیت و امور حسبی';
  const introText = `<p>آیا با مسائل مربوط به وصیت‌نامه،
تقسیم ترکه یا اختلافات ارثی مواجه هستید؟
<br><br>
خواه در حال برنامه‌ریزی برای تنظیم وصیت‌نامه خود باشید،
خواه در مقام یکی از وراث به‌دنبال اداره امور متوفی،
و خواه درگیر اختلاف در تقسیم ارث باشید،
دستیار حقوقی هوش مصنوعی ویکیلا 
اطلاعات حقوقی روشن، مستند و کاربردی
در کوتاه‌ترین زمان ممکن
به‌صورت رایگان در اختیار شما قرار می‌دهد.</p>`
  const moreInfoText = 'مروری کوتاه بر قوانین وصیت، ارث و امور ترکه در حقوق ایران';
  const moreInfoHref = '/en-us/estate-and-probate-law/summary';
  const introImage = '/assets/intro-estate-probate.webp';

  const areaData = areas['estate-and-probate-law'];
  const modalContent = areaData.modalContent;
  const subcategoriesTitle = 'اطلاعات حقوقی سریع و رایگان درباره وصیت‌نامه، ارث و امور ترکه';
  const subcategoriesDescription = `<p>دستیار حقوقی هوشمند ویکیلا برای پشتیبانی از شما در تمام موضوعات مربوط به وصیت، ارث و امور ترکه طراحی شده است.<br>
از سوالات اولیه درباره تنظیم وصیت‌نامه گرفته تا اختلافات پیچیده ارثی، ویکیلا  به شما کمک می‌کند رایج‌ترین مسائل این حوزه را بهتر درک کنید و مسیر درست حقوقی را بشناسید.</p>`;
  const subCategories = [
    {
      title: 'تنظیم یا به‌روزرسانی وصیت‌نامه',
      image: '/assets/family-property-finances.webp',
      description: `<p>در فکر نوشتن اولین وصیت‌نامه‌تان هستید یا می‌خواهید وصیت‌نامه قبلی را اصلاح کنید؟<br>
دستیار حقوقی ویکیلا  شرایط اعتبار وصیت‌نامه، حدود قانونی وصیت، نحوه تنظیم درست آن و زمان مناسب برای به‌روزرسانی وصیت‌نامه را برایتان توضیح می‌دهد.
همچنین با انواع وصیت‌نامه و پیامدهای فوت بدون وصیت‌نامه (فوت بلاوصیت) آشنا می‌شوید</p>`
    },
    {
      title: 'بررسی راهکارهای برنامه‌ریزی ارث و ترکه',
      image: '/assets/what-expert-lawyer-referral-2x.webp',
      description: `<p>آیا قصد دارید درباره نحوه انتقال اموال و تقسیم ترکه خود برنامه‌ریزی کنید؟
در این بخش با قواعد مربوط به تقسیم ترکه، حدود وصیت، مالیات بر ارث، انتقال اموال در زمان حیات و شیوه تنظیم صحیح دارایی‌ها آشنا می‌شوید.<br>
همچنین مشخص می‌شود در چه مواردی، با توجه به پیچیدگی موضوع، مراجعه به وکیل یا مشاور حقوقی ضروری خواهد بود</p>`
    },
    {
      title: 'راهنمای رایگان انحصار وراثت و رسیدگی به ترکه',
      image: '/assets/what-navigating-probate-2x.webp',
      description: `<p>در صورت فوت یکی از بستگان و لزوم پیگیری امور ترکه، دستیار حقوقی هوشمند ویکیلا  فرآیند انحصار وراثت، موارد الزام به اخذ گواهی انحصار وراثت، نحوه تقدیم دادخواست به مرجع صالح و تکالیف مدیر یا نماینده ترکه را تبیین می‌کند.<br>
همچنین تفاوت تشریفات عادی و رسمی رسیدگی به ترکه و مواعد زمانی معمول این مراحل برای شما تشریح می‌شود.</p>`
    },
    {
      title: 'راهنمای مالیات بر ارث و تکالیف مالیاتی وراث',
      image: '/assets/what-letters-admin-2x.webp',
      description: `<p>آیا درباره آثار مالیاتی انتقال اموال پس از فوت دغدغه دارید؟<br>
در این بخش، مقررات قانون مالیات‌های مستقیم در خصوص مالیات بر ارث، میزان معافیت‌ها، مواعد پرداخت و شیوه‌های قانونی کاهش بدهی مالیاتی تشریح می‌شود.<br>
همچنین موضوع هبه در زمان حیات، معافیت‌های قانونی وراث و زمان تعلق مالیات بر ارث مورد بررسی قرار می‌گیرد.</p>`
    },
    {
      title: 'راهنمای تعیین وصی، امین و اداره ترکه',
      image: '/assets/commercial-business-contract.webp',
      description: `<p>چنانچه قصد دارید برای اداره اموال خود یا اموال متوفی سازوکاری حقوقی پیش‌بینی کنید، در این بخش با شیوه‌های قانونی تعیین وصی، امین یا مدیر ترکه، آثار مالیاتی آن‌ها و حدود مسئولیت‌های قانونی ایشان آشنا می‌شوید.<br>
همچنین تبیین می‌شود در چه مواردی استفاده از این نهادهای حقوقی متناسب با شرایط شما خواهد بود.</p>`
    },
    {
      title: 'راهنمای دعاوی وصیت‌نامه و اختلافات ارثی',
      image: '/assets/what-will-disputes-2x.webp',
      description: `<p>چنانچه نسبت به وصیت‌نامه اعتراض دارید یا بین وراث در خصوص تقسیم ترکه اختلاف ایجاد شده است، دستیار حقوقی هوشمند ویکیلا جهات قانونی اعتراض به وصیت‌نامه، دعاوی وراث جامانده از ارث، اختلافات میان ذی‌نفعان و حقوق قانونی هر یک از وراث را تبیین می‌کند.<br>
همچنین مسیرهای حقوقی قابل پیگیری در صورت بروز اختلاف در امور ترکه برای شما تشریح می‌شود.</p>`
    }
  ];
  const whyUseTitle = 'دستیار حقوقی هوشمند ویکیلا  در امور وصیت‌نامه و ارث';
  const whyUseDescription = `<p>ویکیلا  با فراهم‌سازی یک گام اولیه اطمینان‌بخش برای اشخاصی که نسبت به وضعیت حقوقی خود در حوزه وصیت و ارث مردد هستند، دسترسی به اطلاعات حقوقی این حوزه را تسهیل کرده است.<br>
این سامانه با بهره‌گیری از هوش مصنوعی، اطلاعات عمومی رایگان و متناسب با شرایط کاربر ارائه می‌دهد تا پیش از تصمیم‌گیری‌های مهم در خصوص برنامه‌ریزی ارث یا رسیدگی به ترکه، درک دقیق‌تری از وضعیت خود حاصل نمایید.</p>`;
  const whyUseSections = [
    {
      title: "مبتنی بر پایگاه داده حقوقی اختصاصی ویکیلا",
      image: '/assets/legal-knowledge.webp',
      description: `<p>دستیار حقوقی هوشمند ویکیلا  مبتنی بر مجموعه‌ای جامع از قوانین موضوعه، مقررات و اصول حقوقی حاکم بر حوزه وصیت، ارث و امور ترکه در حقوق ایران توسعه یافته است.<br>
این سامانه با اتکا به آخرین اصلاحات قانونی و رویه‌های عملی مراجع قضایی، اطلاعات عمومی دقیق و قابل استنادی ارائه می‌دهد.<br>
راهنمایی‌های ارائه‌شده ناظر بر مقررات جاری کشور بوده و با این وجود، حسب مورد ممکن است جزئیات حقوقی با توجه به شرایط خاص هر پرونده یا رویه مرجع رسیدگی‌کننده متفاوت باشد.</p>`
    },
    {
      title: 'راهنمای فوری در تشخیص مسیر حقوقی و ضرورت مراجعه به وکیل',
      image: '/assets/always-ready.webp',
      description: `<p>در این بخش می‌توانید اطلاعات عمومی، شفاف و متناسب با وضعیت خود در حوزه وصیت‌نامه، انحصار وراثت، مالیات بر ارث و رسیدگی به ترکه دریافت کنید.
دستیار حقوقی هوشمند ویکیلا به‌صورت شبانه‌روزی و بدون دریافت هزینه، از نخستین طرح موضوع شما را همراهی می‌کند و در تشخیص مواردی که نیازمند اخذ مشاوره تخصصی حقوقی است یاری می‌رساند.</p>`
    },
    {
      title: "اطلاعات حقوقی به زبان ساده",
      image: '/assets/personalised-legal-information.webp',
      description: `<p>کلیه مکالمات شما در ویکیلا به‌صورت محرمانه و امن نگهداری می‌شود.
اعم از اینکه موضوع پرسش شما اعتبار وصیت‌نامه، تشریفات انحصار وراثت یا اختلافات ارثی باشد، این سامانه امکان بررسی گزینه‌های حقوقی را بدون الزام به طرح دعوا یا اقدام رسمی تا زمان آمادگی شما فراهم می‌کند.</p>`
    }
  ];
  const howItWorksTitle = 'دستیار هوشمند ویکیلا  چگونه کار می‌کند؟';
  const howItWorksDescription = `<p>ویکیلا  فرآیند دسترسی به اطلاعات حقوقی مربوط به وصیت، ارث و امور ترکه را ساده و قابل فهم می‌کند.<br>
این سامانه به‌گونه‌ای طراحی شده که هر کسی بتواند بدون استرس و پیچیدگی، با این مفاهیم حقوقی مهم ارتباط بگیرد و وضعیت حقوقی خود را بهتر درک کند.</p>`;
  const howItWorksSteps = [
    {
      title: 'وضعیت خود را توضیح دهید',
      image: '/assets/how-it-works-step1-desktop.webp',
      description: `<p>نحوه عملکرد دستیار حقوقی هوشمند ویکیلا 
<br><br>
ویکیلا  با هدف تسهیل دسترسی اشخاص به اطلاعات عمومی حقوقی در حوزه وصیت، ارث و امور ترکه طراحی شده و فرآیند آشنایی با این مفاهیم را شفاف و قابل فهم می‌سازد.
این سامانه به نحوی توسعه یافته که کاربران بتوانند بدون مواجهه با پیچیدگی‌های اصطلاحات حقوقی، وضعیت حقوقی خود را بهتر درک نمایند</p>`
    },
    {
      title: 'دریافت راهنمایی حقوقی متناسب با وضعیت کاربر',
      image: '/assets/how-it-works-step2-desktop.webp',
      description: `<p>دستیار حقوقی هوشمند ویکیلا  بر مبنای اوضاع و احوال خاص هر کاربر، اطلاعات عمومی و کاربردی ارائه می‌کند.<br>
این راهنمایی‌ها شامل تشریح مقررات مرتبط با وصیت‌نامه و انحصار وراثت، حقوق و تعهدات قانونی اشخاص، گزینه‌های قابل پیگیری و اقدامات عملی بعدی است تا کاربر بتواند تصمیم آگاهانه‌تری اتخاذ نماید</p>`
    },
    {
      title: 'دریافت گزارش حقوقی شخصی‌سازی‌شده به‌صورت فوری',
      image: '/assets/how-it-works-step3-v2-desktop.webp',
      description: `<p>پس از پایان گفت‌وگو با دستیار حقوقی هوشمند ویکیلا ، گزارشی متناسب با وضعیت حقوقی کاربر تهیه و ارائه می‌شود.<br>
این گزارش به‌صورت رایگان و فوری در اختیار کاربر قرار گرفته و امکان مراجعه مجدد به آن در هر زمان فراهم است</p>`
    }
  ];
  const faqTitle = 'پرسش‌های پرتکرار در خصوص دستیار حقوقی هوشمند ویکیلا';
  const faqItems = [
    {
      question: 'آیا دستیار هوشمند ویکیلا  مشاوره حقوقی می‌دهد؟',
      answer: `<p>دستیار حقوقی هوشمند ویکیلا صرفاً اطلاعات عمومی حقوقی در حوزه وصیت، ارث و امور ترکه ارائه می‌نماید تا کاربران بتوانند درک اولیه‌ای از وضعیت حقوقی خود پیدا کنند.<br>
این سامانه ارائه‌دهنده مشاوره تخصصی حقوقی محسوب نمی‌شود و جایگزین مراجعه به وکیل یا کارشناس رسمی دادگستری نیست.
بدیهی است ارائه نظر حقوقی اختصاصی مستلزم بررسی اسناد و اوضاع و احوال خاص هر پرونده توسط مرجع 
صلاحیت‌دار می‌باشد.</p>`
    },
    {
      question: 'آیا استفاده از ویکیلا  واقعاً رایگان است؟',
      answer: `<p>استفاده از دستیار حقوقی هوشمند سایت ویکیلا رایگان می‌باشد.
کاربران می‌توانند بدون پرداخت هرگونه وجه، نسبت به طرح تعدادی پرسش، دریافت اطلاعات عمومی حقوقی و بررسی گزینه‌های قانونی خود اقدام نمایند.</p>`
    },
    {
      question: 'اطلاعاتی که ویکیلا  می‌دهد چقدر دقیق است؟',
      answer: `<p>اطلاعاتی که ویکیلا  می‌دهد چقدر دقیق است؟<br>
اطلاعات ارائه‌شده توسط دستیار حقوقی هوشمند ویکیلا  مبتنی بر قوانین موضوعه، مقررات و اصول کلی حقوق ایران در حوزه وصیت، ارث و امور ترکه بوده و به‌صورت مستمر به‌روزرسانی می‌شود.
با این وجود، به دلیل تفاوت اوضاع و احوال هر پرونده و تنوع رویه‌های قضایی، ممکن است برخی جزئیات حقوقی در موارد خاص متفاوت اعمال شود.<br>
این سامانه صرفاً به‌منظور ارائه اطلاعات عمومی حقوقی طراحی شده و جایگزین بررسی تخصصی اسناد و شرایط خاص هر پرونده توسط وکیل یا مرجع صالح نمی‌باشد.<br>
برای اخذ نظر حقوقی قطعی و متناسب با وضعیت شخصی، مراجعه به وکیل دادگستری یا مشاور حقوقی توصیه می‌شود</p>`
    },
    {
      question: 'انحصار وراثت چیست و چگونه انجام می‌شود؟',
      answer: `<p>انحصار وراثت چیست و چگونه انجام می‌شود؟<br>
انحصار وراثت فرآیند حقوقی‌ای است که طی آن، وراث قانونی متوفی شناسایی شده و وضعیت وصیت‌نامه (در صورت وجود) مورد بررسی قرار می‌گیرد و سپس ماترک متوفی تحت نظارت مرجع صالح قانونی اداره و تقسیم می‌شود.<br>
در نظام حقوقی ایران، این فرآیند عموماً با صدور گواهی انحصار وراثت آغاز شده و شامل تعیین وراث، احراز سهم‌الارث هر یک، شناسایی دارایی‌ها، پرداخت دیون و مطالبات اشخاص ثالث و نهایتاً تقسیم ترکه میان وراث می‌باشد.<br>
<br>
لزوم طی این فرآیند و میزان پیچیدگی آن به عواملی نظیر میزان دارایی، وجود یا فقدان وصیت‌نامه، اختلاف میان وراث و نوع اموال بستگی دارد.<br>
سامانه ویکیلا می‌تواند در تشخیص ضرورت طرح درخواست انحصار وراثت و آشنایی با مراحل قانونی مرتبط، راهنمایی اولیه ارائه نماید.</p>`
    },
    {
      question: 'آیا می‌توانم بدون وکیل وصیت‌نامه تنظیم کنم؟',
      answer: `<p>بله، تنظیم وصیت‌نامه بدون حضور وکیل امکان‌پذیر است و در صورتی که مطابق مقررات قانونی تنظیم شود، دارای اعتبار حقوقی خواهد بود.<br>
در نظام حقوقی ایران، وصیت‌نامه می‌تواند به‌صورت رسمی (تنظیم‌شده در دفتر اسناد رسمی)، خودنوشت (به خط موصی با ذکر تاریخ و امضا) یا سری باشد که هر یک شرایط شکلی خاص خود را دارد.</p>`
    },
    {
      question: 'اگر کسی بدون وصیت‌نامه فوت کند چه اتفاقی می‌افتد؟',
      answer: `<p></p>`
    },
    {
      question: 'تفاوت رسیدگی رسمی و غیررسمی به ترکه چیست؟',
      answer: `<p></p>`
    },
    {
      question: 'آیا می‌توان به وصیت‌نامه اعتراض کرد؟',
      answer: `<p></p>`
    },
    {
      question: 'از کجا بفهمم نیاز به مراجعه به وکیل دارم؟',
      answer: `<p></p>`
    }
  ];
  const helpTitle = 'برای مسائل مربوط به وصیت‌نامه و ارث نیاز به راهنمایی دارید؟';
  const helpDescription = 'با پرسیدن سوال حقوقی خود درباره وصیت، ارث و انحصار وراثت شروع کنید';

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleEstateChatSubmit = (event) => {
    event.preventDefault();
    const trimmed = estateChatInput.trim();
    if (trimmed) {
      navigate('/chat', { state: { initialPrompt: trimmed } });
    }
  };

  const handleEstateLastSectionChatSubmit = (event) => {
    event.preventDefault();
    const trimmed = estateLastSectionChatInput.trim();
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
                  <a href="/en-us/library">حوزه‌های حقوقی</a>
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
              <form onSubmit={handleEstateChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                <div className="style-module__shinyBorderContainer">
                  <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-estate">
                    <input className="style-module__fileInput" multiple type="file" />
                    <img
                      className="style-module__preTextIcon"
                      src="/assets/spark-gray.svg"
                      alt="spark"
                    />
                    <div className="style-module__actions">
                      <button className="style-module__sendButton" type="submit" id="send-button-estate" aria-label="send-button" disabled={!estateChatInput.trim()}>
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
                        id="double-input-estate"
                        className="style-module__textareaInput style-module__withPreTextIcon"
                        rows="1"
                        placeholder="سؤال حقوقی خود را مطرح کنید"
                        value={estateChatInput}
                        onChange={(e) => setEstateChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleEstateChatSubmit(e);
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
                  دریافت پاسخ‌های رایگان درباره ارث، وصیت و امور حسبی
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
                  تصمیم‌گیری آگاهانه در خصوص تقسیم ترکه و حقوق وراث
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
                  alt="Estate and probate intro image" 
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
                <p className="subcategories_description" dangerouslySetInnerHTML={{ __html: subcategoriesDescription }} />
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
                          <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: section.description }} />
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
                    <span style={{color: '#191919'}} dangerouslySetInnerHTML={{ __html: howItWorksDescription }} />
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
                          <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: step.description }} />
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
                <form onSubmit={handleEstateLastSectionChatSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                  <div className="style-module__shinyBorderContainer">
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-estate-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-estate-last-section" aria-label="send-button" disabled={!estateLastSectionChatInput.trim()}>
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
                          id="double-input-estate-last-section"
                          className="style-module__textareaInput style-module__withPreTextIcon"
                          rows="1"
                          placeholder="سؤال حقوقی خود را مطرح کنید"
                          style={{height: '72px'}}
                          value={estateLastSectionChatInput}
                          onChange={(e) => setEstateLastSectionChatInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleEstateLastSectionChatSubmit(e);
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

export default EstateAndProbateLaw;

