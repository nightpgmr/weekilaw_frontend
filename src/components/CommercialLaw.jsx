import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import SummaryModal from './SummaryModal.jsx';
import { areasOfLawContent as areas } from '../data/areas.js';

const CommercialLaw = () => {
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

  // Static content for Commercial Law
  const breadcrumbLabel = 'حقوق تجارت و کسب‌وکار';
  const breadcrumbHref = '/commercial-law';
  const heroTitle = 'راهنمایی حقوقی سریع و رایگان در امور تجاری، مبتنی بر قوانین ایران';
  const introText = `<p>شروع یا اداره یک کسب‌وکار در ایران، معمولاً با پرسش‌ها و چالش‌های حقوقی همراه است.
      از انتخاب نوع شرکت و تنظیم قراردادها گرفته تا اختلاف با مشتری، شریک یا تأمین‌کننده.
<br><br>
      در ویکیلا 
      می‌توانید با استفاده از دستیار هوش مصنوعی حقوقی،
      وضعیت حقوقی خود را مطابق با قوانین جمهوری اسلامی ایران بررسی کنید و
      پیش از هر اقدام، مسیر قانونی مناسب را بشناسید.
      <br><br>
      هدف ما این است که با اطمینان و آگاهی حقوقی تصمیم بگیرید و جلو بروید.</p>`;
  const introTextAlert = `⚠️ توجه:
      پاسخ‌های ارائه‌شده صرفاً جنبه‌ی اطلاع‌رسانی حقوقی دارند و جایگزین
      مشاوره حضوری با وکیل دادگستری نیستند.
      در دعاوی مهم، مراجعه به وکیل یا دفاتر خدمات الکترونیک قضایی توصیه می‌شود.`;
  const moreInfoText = 'مروری کوتاه بر اصول حقوق تجارت طبق قوانین ایران';
  const moreInfoHref = '/commercial-law/summary';
  const introImage = '/assets/intro-us-commercial.webp';

  const areaData = areas['commercial-law'];
  const modalContent = areaData.modalContent;
  const subcategoriesTitle = 'دستیار هوش مصنوعی ویکیلا  در چه موضوعات حقوق تجاری به شما کمک می‌کند؟';
  const subcategoriesDescription = 'دستیار هوش مصنوعی ویکیلا  برای طیف گسترده‌ای از مسائل حقوق تجارت و کسب‌وکار طراحی شده و می‌تواند در موضوعات زیر، راهنمایی اولیه و فوری ارائه دهد:';
  const subCategories = [
    {
      title: 'راه‌اندازی کسب‌وکار و ثبت شرکت',
      image: '/assets/commercial-law/1.webp',
      description: `<p>اگر نمی‌دانید از کجا شروع کنید، دستیار هوش مصنوعی ویکیلا  به شما کمک می‌کند تا:<br>
        • انواع شرکت‌ها در ایران (مسئولیت محدود، سهامی خاص و …) را بشناسید<br>
        • الزامات قانونی ثبت شرکت را درک کنید<br>
        • با مدارک و مراحل اداری لازم آشنا شوید<br>
        • الزامات اولیه مالیاتی و قانونی را بشناسید
        <br>
        تا کسب‌وکار خود را درست و قانونی راه‌اندازی کنید.</p>`,
    },
    {
      title: 'قراردادها و توافقات تجاری',
      image: '/assets/commercial-law/2.webp',
      description: `<p>اگر قصد امضای قرارداد دارید یا در مفاد آن ابهام دارید، لکسی لگال به شما کمک می‌کند تا:<br>
 • بندهای مهم قرارداد را بهتر درک کنید<br>
 • حقوق و تعهدات طرفین را بشناسید<br>
 • ریسک‌های حقوقی احتمالی را تشخیص دهید<br>
 • پیش از امضا، تصمیم آگاهانه بگیرید</p>`,
    },
    {
      title: 'اختلافات تجاری و نقض قرارداد',
      image: '/assets/commercial-law/3.webp',
      description: `<p>اگر در کسب‌وکار خود با اختلاف تجاری یا عدم انجام تعهدات قراردادی مواجه شده‌اید،
دستیار هوش مصنوعی ویکیلا  به شما کمک می‌کند تا:<br>
 • موقعیت حقوقی خود را مطابق با قوانین ایران بررسی کنید<br>
 • تشخیص دهید آیا قرارداد نقض شده است یا خیر<br>
 • راهکارهای قانونی موجود را بشناسید (مطالبه وجه، الزام به انجام تعهد، فسخ، مطالبه خسارت و …)<br>
 • قبل از اقدام قضایی، بهترین مسیر حقوقی را انتخاب کنید<br>

این راهنمایی‌ها به شما کمک می‌کند با آگاهی و کم‌ریسک‌تر برای حل اختلاف تصمیم بگیرید.</p>`,
    },
    {
      title: 'خرید یا فروش کسب‌وکار',
      image: '/assets/commercial-law/4.webp',
      description: `<p>اگر قصد خرید، فروش یا انتقال یک کسب‌وکار را دارید،<br>
دستیار هوش مصنوعی ویکیلا  به شما کمک می‌کند تا:<br>
 • مراحل حقوقی معامله را مطابق با قوانین ایران بشناسید<br>
 • وضعیت مالکیت، بدهی‌ها و تعهدات کسب‌وکار را بررسی کنید<br>
 • ریسک‌های حقوقی احتمالی را قبل از معامله شناسایی کنید<br>
 • برای تنظیم قراردادهای انتقال، مشارکت یا واگذاری، تصمیم آگاهانه بگیرید<br>
<br>
این راهنمایی‌ها به شما کمک می‌کند با اطمینان و حداقل ریسک حقوقی وارد معامله شوید</p>`,
    },
    {
      title: 'دستیار هوشمند ویکیلا  در چه دعاوی و امور حقوق تجارت کاربرد دارد؟',
      image: '/assets/commercial-law/5.webp',
      description: `<p>دستیار حقوقی هوشمند ویکیلا  قادر است در دامنه وسیعی از موضوعات مرتبط با حقوق تجارت و امور بازرگانی راهنمایی عمومی ارائه دهد.
در ادامه، مهم‌ترین زمینه‌هایی که این سامانه می‌تواند در آن‌ها پشتیبانی سریع فراهم کند معرفی شده است</p>`
    },
    {
      title: 'حریم خصوصی، مالکیت فکری و اسناد حقوقی وب‌سایت',
      image: '/assets/commercial-law/6.webp',
      description: `
اگر وب‌سایت، اپلیکیشن یا کسب‌وکار آنلاین دارید،<br>
دستیار هوش مصنوعی ویکیلا به شما کمک می‌کند تا:<br>
 • الزامات قانونی مربوط به حریم خصوصی کاربران را بشناسید<br>
 • با اصول حمایت از مالکیت فکری (نام تجاری، محتوا، نرم‌افزار) آشنا شوید<br>
 • اسناد حقوقی ضروری مانند سیاست حفظ حریم خصوصی و شرایط و مقررات استفاده را درک کنید<br>
 • ریسک‌های حقوقی فعالیت آنلاین خود را کاهش دهید<br>
<br>
این راهنمایی‌ها به شما کمک می‌کند کسب‌وکار آنلاین خود را قانون‌مند و ایمن مدیریت کنید.`,
    },
    {
      title: 'سؤالات عمومی حقوق کسب‌وکار',
      image: '/assets/commercial-law/7.webp',
      description: `اگر مطمئن نیستید مسئله‌ای که با آن مواجه شده‌اید حقوقی است یا نه،
یا نمی‌دانید از کجا باید پیگیری را شروع کنید،
می‌توانید سؤال خود را با زبان ساده و به‌صورت آزاد مطرح کنید.

دستیار هوش مصنوعی ویکیلا  به شما کمک می‌کند تا:
 • موضوع خود را بهتر بشناسید
 • تشخیص دهید مسئله شما در چه حوزه حقوقی قرار می‌گیرد
 • مسیر مناسب قانونی یا غیرقضایی را شناسایی کنید

این بخش یک قدم اول امن و بدون قضاوت برای شروع مسیر حقوقی شماست`,
    }
  ];
  const whyUseTitle = 'چرا از هوش مصنوعی برای مسائل حقوقی تجاری استفاده کنیم؟';
  const whyUseDescription = `<p>در اداره یک کسب‌وکار، مسائل حقوقی می‌توانند پیچیده، زمان‌بر و پرهزینه باشند.<br>
بسیاری از افراد نمی‌دانند از کجا شروع کنند یا چه اقدامی درست است.

در ویکیلا  دستیار هوش مصنوعی حقوقی به شما کمک می‌کند تا:<br>
 • حقوق و تعهدات قانونی خود را بهتر بشناسید<br>
 • بدون استرس و سردرگمی، وضعیت حقوقی‌تان را بررسی کنید<br>
 • پیش از هر اقدام، تصویر روشنی از مسیر قانونی داشته باشید<br>

پاسخ‌ها سریع، قابل‌فهم و مطابق با قوانین ایران ارائه می‌شوند تا بتوانید
با اطمینان بیشتری تصمیم بگیرید.</p>`;
  const whyUseSections = [
    {
      title: 'بر پایه اصول و مقررات واقعی حقوق ایران',
      image: '/assets/commercial-law/8.webp',
      description: `<p>
      دستیار هوش مصنوعی ویکیلا  بر پایه‌ی
قوانین، مقررات و اصول حقوقی ایران طراحی شده است.
<br>
پاسخ‌ها به‌گونه‌ای ارائه می‌شوند که:<br>
 • دقیق و قابل‌اعتماد باشند<br>
 • با چارچوب‌های حقوقی ایران هم‌خوانی داشته باشند<br>
 • متناسب با شرایط و مسئله‌ی کسب‌وکار شما تنظیم شوند<br>
هدف، ارائه‌ی راهنمایی حقوقی واقعی و کاربردی است، نه پاسخ‌های کلی و غیرقابل اتکا.
      </p>`,
    },
    {
      title: 'پاسخ‌های متناسب با شرایط کسب‌وکار شما',
      image: '/assets/commercial-law/9.webp',
      description: `<p>پاسخ‌های ارائه‌شده در ویکیلا به‌صورت کلی و یکسان نیستند.<br>
این پاسخ‌ها بر اساس:<br>
 • نوع کسب‌وکار شما<br>
 • مسئله حقوقی مطرح‌شده<br>
 • شرایط و وضعیت خاص شما<br>
تنظیم می‌شوند.
<br>
فرقی نمی‌کند در ابتدای مسیر کسب‌وکار باشید یا درگیر یک اختلاف حقوقی؛
راهنمایی‌ها مرتبط، کاربردی و قابل استفاده در عمل ارائه می‌شوند تا بتوانید تصمیم آگاهانه‌تری بگیرید</p>`,
    },
    {
      title: 'رایگان و در دسترس در هر زمان',
      image: '/assets/commercial-law/10.webp',
      description: `<p>استفاده از دستیار هوش مصنوعی ویکیلا  کاملاً رایگان است.<br>
می‌توانید هر زمان که نیاز داشتید، سؤال حقوقی خود را مطرح کنید؛<br>
بدون نیاز به نوبت، بدون انتظار و بدون محدودیت زمانی.<br>

ویکیلا  در تمام ساعات شبانه‌روز در کنار شماست تا<br>
در اولین قدم، مسیر حقوقی‌تان را روشن کند.<br>
پاسخ‌های اولیه رایگان هستند و در صورت نیاز به خدمات تخصصی، ممکن است هزینه جداگانه داشته باشند.</p>`,
    },
    {
      title: 'کاملاً محرمانه و امن',
      image: '/assets/commercial-law/11.webp',
      description: `<p>شما می‌توانید بدون درج هویت واقعی خود سوالات حقوقی‌تان را مطرح کنید.
کلیه مکالمات در ویکیلا  به‌صورت محرمانه نگهداری می‌شود تا امکان بررسی موضوعات حقوقی در یک بستر امن و مورد اعتماد فراهم باشد.</p>`
    }
  ];
  const howItWorksTitle = 'راهنمای استفاده از ویکیلا  در امور حقوق تجارت';
  const howItWorksDescription = `<p>شروع استفاده از ویکیلا ساده و سریع است.
شما همیشه کنترل کامل دارید که:<br>
 • چه اطلاعاتی وارد کنید<br>
 • چه نوع راهنمایی حقوقی دریافت نمایید</p>`;
  const howItWorksSteps = [
    {
      title: 'وضعیت خود را توضیح دهید',
      image: '/assets/how-it-works-step1-desktop.webp',
      description: `<p>مسئله حقوقی خود را با زبان ساده و به بیان خودتان توضیح دهید.
فرقی نمی‌کند موضوع شما مربوط به:<br>
 • قراردادهای تجاری<br>
 • راه‌اندازی یا مدیریت کسب‌وکار<br>
 • اختلافات تجاری<br>
 • یا مسائل استخدامی<br>
 <br>
باشد؛ فقط توضیح دهید چه اتفاقی افتاده و دغدغه شما چیست.<br>
<br>
دستیار هوش مصنوعی ویکیلا  بر اساس اطلاعاتی که ارائه می‌کنید،<br>
وضعیت حقوقی شما را بررسی کرده و راهنمایی اولیه متناسب با قوانین ایران ارائه می‌دهد</p>`
    },
    {
      title: 'دریافت راهنمایی حقوقی متناسب با شرایط شما',
      image: '/assets/how-it-works-step2-desktop.webp',
      description: `<p>در این مرحله، ویکیلا  بر اساس اطلاعاتی که شما ارائه کرده‌اید،
راهنمایی حقوقی متناسب با شرایط خاص شما ارائه می‌دهد.<br>
<br>
در این راهنمایی:<br>
 • وضعیت حقوقی شما توضیح داده می‌شود<br>
 • ریسک‌ها و پیامدهای احتمالی مشخص می‌گردد<br>
 • گزینه‌ها و اقدامات قانونی پیشِ‌رو معرفی می‌شوند<br>
<br>
تا بتوانید با آگاهی و اطمینان بیشتر برای قدم بعدی تصمیم بگیرید</p>`
    },
    {
      title: 'گزارش شخصی‌سازی‌شده حقوقی شما، بلافاصله آماده است',
      image: '/assets/how-it-works-step3-v2-desktop.webp',
      description: `<p>پس از پایان گفت‌وگو با دستیار هوش مصنوعی ویکیلا 
یک گزارش حقوقی شخصی‌سازی‌شده بر اساس مسئله شما تهیه می‌شود.<br>
<br>
این گزارش شامل:<br>
 • خلاصه وضعیت حقوقی شما<br>
 • ریسک‌ها و نکات مهم<br>
 • گزینه‌ها و اقدامات قانونی پیشنهادی<br>
<br>
است و به‌صورت رایگان، سریع و در هر زمان در دسترس شما خواهد بود
تا بتوانید در صورت نیاز، دوباره به آن مراجعه کنید.</p>`
    }
  ];
  const faqTitle = 'سوالات متداول حقوق تجارت';
  const faqItems = [
    { question: 'آیا دستیار هوش مصنوعی ویکیلا می‌تواند در مسائل حقوقی کسب‌وکار کمک کند؟', answer: `<p>بله.<br>
دستیار هوش مصنوعی ویکیلا می‌تواند در موضوعاتی مانند:<br>
 • قراردادهای تجاری<br>
 • ثبت و راه‌اندازی شرکت<br>
 • اختلافات تجاری<br>
 • آشنایی با الزامات قانونی و مقررات<br>
 • مسائل استخدامی<br>
 • و سایر موضوعات حقوقی مرتبط با کسب‌وکار<br>
<br>
راهنمایی حقوقی اولیه و کاربردی ارائه دهد.</p>` },
    { question: 'آیا استفاده از این سرویس واقعاً رایگان است؟', answer: `<p>بله.<br>
پرسش و دریافت راهنمایی حقوقی اولیه از دستیار هوش مصنوعی ویکیلا رایگان است.<br>
در صورتی که برای پیگیری موضوع به خدمات تخصصی یا وکیل نیاز باشد، ممکن است هزینه جداگانه مطرح شود.</p>` },
    { question: 'چه نوع مسائلی را می‌توانم در ویکیلا مطرح کنم؟', answer: `<p>
می‌توانید طیف گسترده‌ای از مسائل حقوق تجارت و کسب‌وکار را مطرح کنید، از جمله:<br>
 • مشکلات و ابهامات قراردادی<br>
 • اختلاف با شریک، مشتری یا تأمین‌کننده<br>
 • مسائل مربوط به شرکت‌ها<br>
 • حقوق و تعهدات قانونی کسب‌وکار<br>
 • سؤالات کلی حقوقی در حوزه تجارت<br>
<br>
اگر مطمئن نیستید موضوع شما حقوقی است یا نه، باز هم می‌توانید سؤال خود را مطرح کنید.</p>` },
    { question: 'هزینه مراجعه به وکیل حقوق تجارت چقدر است؟', answer: `<p>هزینه وکالت بسته به:<br>
 • نوع پرونده<br>
 • میزان پیچیدگی موضوع<br>
 • مدت‌زمان رسیدگی<br>
<br>
متفاوت است.<br>
ویکیلا  به شما کمک می‌کند قبل از مراجعه به وکیل، وضعیت حقوقی خود را بهتر بشناسید و با آگاهی بیشتری تصمیم بگیرید.</p>` },
    { question: 'آیا برای حل اختلاف تجاری حتماً باید به دادگاه مراجعه کنم؟', answer: `<p>خیر.<br>
در بسیاری از موارد، اختلافات تجاری می‌توانند از طریق:<br>
 • مذاکره<br>
 • صلح و سازش<br>
 • داوری<br>
 • یا روش‌های غیرقضایی<br>
<br>
حل‌وفصل شوند.<br>
دستیار هوش مصنوعی ویکیلا می‌تواند مسیرهای مختلف قانونی را به شما معرفی کند.</p>` },
    { question: 'حل یک مسئله حقوقی چقدر زمان می‌برد؟', answer: `<p>مدت‌زمان حل مسائل حقوقی به عوامل مختلفی بستگی دارد، از جمله:<br>
 • نوع اختلاف<br>
 • همکاری طرفین<br>
 • مسیر انتخاب‌شده (قضایی یا غیرقضایی)<br>
<br>
ویکیلا  به شما کمک می‌کند تصویر واقع‌بینانه‌تری از زمان، مراحل و پیچیدگی موضوع داشته باشید.</p>` },
  ];
  const helpTitle = 'به کمک حقوقی در امور تجاری نیاز دارید؟';
  const helpDescription = 'با طرح سؤال حقوقی خود، بررسی مسئله را همین حالا شروع کنید و راهنمایی اولیه متناسب با قوانین ایران دریافت نمایید.'
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
                  <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-commercial">
                    <input className="style-module__fileInput" multiple type="file" />
                    <img
                      className="style-module__preTextIcon"
                      src="/assets/spark-gray.svg"
                      alt="spark"
                    />
                    <div className="style-module__actions">
                      <button className="style-module__sendButton" type="submit" id="send-button-commercial" aria-label="send-button" disabled={!chatInput.trim()}>
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
                        id="double-input-commercial"
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
                  دریافت پاسخ هوشمند و رایگان درباره مسائل حقوقی تجاری
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
                  شناخت مسیر درست حقوقی قبل از هر اقدام قانونی
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
                    <div dangerouslySetInnerHTML={{ __html: introText }} />
                    <p style={{ fontSize: '14px', marginTop: '50px' }}>{introTextAlert}</p>
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
                  alt="Commercial law intro image"
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
                            <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: category.description }}/>
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
                    <div className="styles_buttonText">شروع بررسی حقوقی</div>
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
                <span style={{color: '#191919'}} dangerouslySetInnerHTML={{ __html: whyUseDescription }}/>
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
                          <span style={{color: '#333333'}} dangerouslySetInnerHTML={{ __html: section.description }}/>
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
                        <div>
                          <p dangerouslySetInnerHTML={{ __html: faq.answer }}/>
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
                    <div className="styles_buttonText">شروع بررسی حقوقی</div>
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
                <p>سلب مسئولیت:
محتوای ارائه‌شده در اپلیکیشن و وب‌سایت ویکیلا  صرفاً جنبه‌ی اطلاع‌رسانی و آموزش حقوقی دارد و به‌هیچ‌وجه جایگزین مشاوره حقوقی، وکالت یا نظر تخصصی وکیل دادگستری محسوب نمی‌شود.
کاربران توصیه می‌شوند پیش از هرگونه اقدام حقوقی یا اتخاذ تصمیم نهایی، با وکیل دادگستری یا مشاور حقوقی واجد صلاحیت مشورت نمایند.
ویکیلا  هیچ‌گونه مسئولیتی در قبال اقدامات، تصمیمات یا نتایجی که بر اساس این اطلاعات اتخاذ می‌شود، نخواهد داشت.</p>
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
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-commercial-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-commercial-last-section" aria-label="send-button" disabled={!lastSectionChatInput.trim()}>
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
                          id="double-input-commercial-last-section"
                          className="style-module__textareaInput style-module__withPreTextIcon"
                          rows="1"
                          placeholder="سؤال حقوقی خود را اینجا بنویسید"
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

export default CommercialLaw;

