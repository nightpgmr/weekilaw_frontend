import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';
import SummaryModal from './SummaryModal.jsx';
import { areasOfLawContent as areas } from '../data/areas.js';

const EmploymentLaw = () => {
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

  // Static content for Employment Law
  const breadcrumbLabel = 'قانون استخدام';
  const breadcrumbHref = '/employment-law';
  const heroTitle = 'پشتیبانی سریع و رایگان حقوق کار با دستیار هوش مصنوعی ویکیلا';
  const introText = `<p>اگر با یک مشکل جدی در محیط کار روبه‌رو هستید<br>
مثل اخراج غیرقانونی، اختلاف حقوق و مزایا،<br>
مشکل قرارداد کار، یا شکایت از کارفرما<br>
دستیار حقوقی هوش مصنوعی ویکیلا  در چند دقیقه
اطلاعات روشن، کاربردی و متناسب با قانون کار ایران را ارائه می دهد
<br>
ویکیلا  کمک می‌کند:<br>
 • حقوق قانونی‌ تان را  دقیق بفهمید <br>
 • بدانید  چه راه‌هایی پیش رویتان هست<br>
 • قبل از مراجعه به وکیل یا اداره کار، با آگاهی جلو ببرید<br>
 • و با اعتمادبه‌نفس تصمیم بگیرید.</p>`;
  const moreInfoText = 'اطلاعات بیشتر درباره حقوق کار در ایران';
  const moreInfoHref = '/employment-law/summary';
  const introImage = '/assets/intro-employment.webp';

  const areaData = areas['employment-law'];
  const modalContent = areaData.modalContent;
  const subcategoriesTitle = 'با ویکیلا ، مسائل حقوق کار را ساده حل کنید';
  const subcategoriesDescription = `<p>دستیار حقوقی هوش مصنوعی ویکیلا <br>
برای کمک به هر دو گروه کارگران و کارفرمایان طراحی شده
و طیف کامل مسائل حقوقی محیط کار در ایران را پوشش می‌دهد.<br>
<br>
از سؤال‌های ساده درباره حقوق و تکالیف قانونی
تا اختلافات پیچیده‌ای که نیاز به راهنمایی فوری دارند،
ویکیلا به شما کمک می‌کند مسیر درست را
در مسائل رایج قانون کار ایران پیدا کنید.</p>`;
  const subCategories = [
    {
      title: 'اخراج غیرقانونی و فسخ قرارداد کار',
      image: '/assets/employment-law/1.webp',
      description: `<p>بی‌دلیل یا ناگهانی از کارتان اخراج شدید؟<br>
ویکیلا  به شما  توضیح می‌دهد:<br>
 • اخراج غیرقانونی در قانون کار ایران به چه معناست <br>
 • چه زمانی کارفرما حق فسخ قرارداد رو ندارد<br>
 • حقوقتان  بعد از اخراج چیست  (سنوات، بیمه بیکاری، حقوق معوقه)<br>
 • چطور از کارفرما در اداره کار شکایت کنید<br>
 • مهلت‌های قانونی اعتراض چقدر است <br>
 • چه اخراج‌هایی می‌تواند خلاف قانون محسوب شود</p>`
    },
    {
      title: 'تحلیل حقوقی قرارداد کار و اختلافات قراردادی',
      image: '/assets/employment-law/2.webp',
      description: `<p>چنانچه نسبت به مفاد قرارداد کار خود ابهام یا نگرانی دارید<br>
یا با نقض تعهدات قراردادی از سوی کارفرما مواجه شده‌اید،<br>
دستیار حقوقی هوش مصنوعی ویکیلا  اطلاعات روشن و مستند<br>
در اختیار شما قرار می‌دهد، از جمله:<br>
 • تبیین مفاد و شروط قرارداد کار بر اساس قانون کار ایران<br>
 • بررسی قراردادهای موقت، دائم و پروژه‌ای<br>
 • تحلیل توافق‌های خاتمه همکاری و تسویه‌حساب<br>
 • شناسایی شروط خلاف قانون (از جمله بندهای محدودکننده غیرمجاز)<br>
 • تبیین حقوق و تعهدات طرفین در صورت بروز اختلاف قراردادی<br>
 • معرفی مسیرهای قانونی طرح دعوا یا اعتراض در مراجع حل اختلاف کار<br>
<br>
خواه در مرحله بررسی یک پیشنهاد شغلی باشید
و خواه با اصلاح، تمدید یا فسخ قرارداد مواجه شده باشید،
ویکیلا به شما کمک می‌کند
موقعیت حقوقی خود را به‌صورت دقیق و مستند درک نمایید
و تصمیم آگاهانه اتخاذ کنید.</p>`
    },
    {
      title: 'حمایت‌های قانونی در برابر آزار و تبعیض شغلی',
      image: '/assets/employment-law/3.webp',
      description: `<p>چنانچه در محیط کار با آزار، تبعیض یا برخورد تلافی‌جویانه از سوی کارفرما یا همکاران مواجه شده‌اید،<br>
دستیار حقوقی هوش مصنوعی ویکیلا  با استناد به قوانین کار و مقررات حمایتی ایران،<br>
حقوق و حمایت‌های قانونی شما را به‌صورت شفاف تبیین می‌نماید، از جمله:<br>
 • تبیین مصادیق آزار شغلی و رفتارهای خلاف شأن انسانی<br>
 • بررسی موارد تبعیض در استخدام، ارتقا، پرداخت و اخراج<br>
 • تبیین حقوق کارگران زن، افراد دارای معلولیت و سایر گروه‌های حمایتی<br>
 • تحلیل موارد «محیط کار ناسالم» و مسئولیت کارفرما<br>
 • بررسی ممنوعیت اقدامات تلافی‌جویانه در برابر طرح شکایت یا اعتراض قانونی<br>
 • راهنمایی درباره نحوه ثبت شکایت در اداره کار و مراجع ذی‌صلاح<br>
 • تشریح مراحل قانونی پیگیری و جمع‌آوری ادله اثبات دعوا</p>`
    },
    {
      title: 'مطالبات مزدی و اضافه‌کاری',
      image: '/assets/employment-law/4.webp',
      description: `<p>چنانچه حقوق و مزایای قانونی شما به‌طور کامل پرداخت نشده<br>
یا با تأخیر در پرداخت دستمزد، اضافه‌کاری یا سایر مطالبات مزدی مواجه هستید،<br>
دستیار حقوقی هوش مصنوعی ویکیلا  با استناد به قانون کار ایران،<br>
حقوق و تکالیف طرفین را به‌صورت شفاف تبیین می‌نماید، از جمله:<br>
 • حداقل دستمزد مصوب شورای عالی کار<br>
 • حق‌الزحمه اضافه‌کاری و شرایط استحقاق آن<br>
 • نحوه محاسبه حقوق، مزایا، عیدی و سنوات<br>
 • الزامات مربوط به ساعات کار، نوبت‌کاری و تعطیلات<br>
 • حقوق مربوط به زمان استراحت و مرخصی‌های قانونی<br>
 • تکالیف کارفرما در پرداخت به‌موقع دستمزد<br>
 • نحوه طرح شکایت بابت مطالبات مزدی در اداره کار<br>
 • مهلت‌های قانونی پیگیری و مطالبه حقوق معوقه</p>`
    },
    {
      title: 'حقوق کارگران در تعدیل نیرو',
      image: '/assets/employment-law/5.webp',
      description: `<p>چنانچه به‌دلیل تعطیلی کارگاه، کاهش فعالیت اقتصادی یا تصمیمات مدیریتی
با تعدیل نیرو یا اخراج گروهی مواجه شده‌اید،<br>
دستیار حقوقی هوش مصنوعی ویکیلا  با استناد به قانون کار ایران<br>
حقوق و تکالیف طرفین را به‌صورت شفاف تبیین می‌نماید، از جمله:<br>
 • شرایط قانونی تعطیلی کارگاه و تعلیق قرارداد کار<br>
 • الزامات کارفرما در تعدیل نیرو و کاهش پرسنل<br>
 • حقوق کارگران در صورت تعطیلی موقت یا دائم کارگاه<br>
 • نحوه محاسبه حق سنوات و مزایای پایان کار<br>
 • استحقاق بیمه بیکاری و شرایط برخورداری از آن<br>
 • لزوم پرداخت مطالبات مزدی معوقه پیش از اخراج<br>
 • امکان اعتراض به اخراج گروهی در اداره کار<br>
 • مراجع صالح رسیدگی به اختلافات ناشی از تعدیل نیرو</p>`
    },
    {
      title: 'حمایت حقوقی در برابر تبعیض شغلی',
      image: '/assets/employment-law/6.webp',
      description: `<p>چنانچه در محیط کار به‌دلیل جنسیت، سن، وضعیت تأهل، بارداری،<br>
معلولیت، قومیت، مذهب یا سایر ویژگی‌های شخصی<br>
با رفتار ناعادلانه یا تبعیض‌آمیز مواجه شده‌اید،<br>
دستیار حقوقی هوش مصنوعی ویکیلا  با استناد به قانون اساسی،<br>
قانون کار و مقررات حمایتی ایران،<br>
حقوق و حمایت‌های قانونی شما را به‌صورت شفاف تبیین می‌نماید، از جمله:<br>
 • مصادیق تبعیض شغلی در استخدام، ارتقا، پرداخت و اخراج<br>
 • حقوق قانونی زنان، افراد دارای معلولیت و کارگران آسیب‌پذیر<br>
 • ممنوعیت تبعیض در پرداخت دستمزد و مزایا<br>
 • حمایت‌های قانونی از زنان باردار و مادران شاغل<br>
 • مسئولیت کارفرما در ایجاد فرصت برابر شغلی<br>
 • نحوه ثبت شکایت تبعیض در اداره کار و مراجع ذی‌صلاح<br>
 • مراحل قانونی پیگیری دعوای تبعیض شغلی<br>
 • ضمانت‌اجراهای قانونی در صورت احراز تخلف کارفرما</p>`
    }
  ];
  const whyUseTitle = 'چرا ویکیلا  انتخاب نخست کاربران در حقوق کار است؟';
  const whyUseDescription = `<p>ویکیلا  یک گام نخست اطمینان‌بخش
برای افرادی است که نسبت به حقوق یا تعهدات شغلی خود دچار ابهام هستند.<br>
<br>
دستیار حقوقی هوش مصنوعی ویکیلا 
اطلاعات حقوقی رایگان، شخصی‌سازی‌شده و مبتنی بر قوانین ایران ارائه می‌دهد
تا به شما کمک کند وضعیت شغلی خود را به‌صورت دقیق و مستند درک نمایید
و پیش از مراجعه به وکیل یا مراجع رسمی،
با آگاهی تصمیم‌گیری کنید.</p>`;
  const whyUseSections = [
    {
      title: 'دسترسی فوری به راهنمایی حقوقی اولیه',
      image: '/assets/employment-law/7.webp',
      description: `<p>ویکیلا امکان دسترسی ۲۴ ساعته به اطلاعات حقوقی اولیه
را بدون نیاز به تعیین وقت،
بدون پرداخت هزینه اولیه
و بدون ایجاد هرگونه تعهد حقوقی برای کاربر
فراهم می‌نماید.</p>`
    },
    {
      title: 'پاسخ‌های حقوقی مستند به قوانین جاری کشور',
      image: '/assets/employment-law/8.webp',
      description: `<p>دستیار حقوقی هوش مصنوعی ویکیلا 
بر پایه مجموعه‌ای جامع از قوانین، مقررات و رویه‌های قضایی ایران
طراحی شده است.<br>
<br>
پاسخ‌های ارائه‌شده مبتنی بر:<br>
 • قانون کار جمهوری اسلامی ایران<br>
 • قانون تأمین اجتماعی<br>
 • آیین‌نامه‌ها و بخشنامه‌های وزارت تعاون، کار و رفاه اجتماعی<br>
 • و اصول حقوقی تثبیت‌شده در رویه مراجع حل اختلاف<br>
<br>
می‌باشد، نه اطلاعات کلی و غیرقابل استناد
که ممکن است با وضعیت خاص شما انطباق نداشته باشد.<br>
<br>
همچنین پاسخ‌ها متناسب با آخرین اصلاحات قانونی
و تحولات مقرراتی کشور به‌روزرسانی می‌شوند
تا اطلاعات ارائه‌شده همواره دقیق، کاربردی و قابل اتکا باشد.</p>`,
    },
    {
      title: 'تصویر روشن از وضعیت حقوقی پیش از طرح دعوا',
      image: '/assets/employment-law/9.webp',
      description: `<p>کلیه گفت‌وگوهای کاربران با دستیار حقوقی هوش مصنوعی ویکیلا 
به‌صورت کاملاً محرمانه و ایمن نگهداری می‌شود.<br>
<br>
کاربران می‌توانند پیش از هرگونه اقدام رسمی،
از جمله طرح شکایت در اداره کار،
مراجعه به هیأت‌های تشخیص و حل اختلاف،
یا ورود به فرآیند سازش و مذاکره با کارفرما،
گزینه‌های حقوقی خود را به‌صورت ایمن و بدون هیچ‌گونه فشار
مورد بررسی قرار دهند.<br>
<br>
ویکیلا این امکان را فراهم می‌نماید
تا پیش از شروع دعوای رسمی،
تصویری روشن، مستند و واقع‌بینانه
از وضعیت حقوقی خود به دست آورید
و سپس با آگاهی کامل تصمیم‌گیری نمایید.</p>`
    }
  ];
  const howItWorksTitle = 'دستیار هوش مصنوعی چگونه کار می‌کند؟';
  const howItWorksDescription = `<p>شروع کار بسیار ساده است.<br>
شما همواره کنترل کامل اطلاعاتی که ارائه می‌دهید<br>
و نوع راهنمایی حقوقی که دریافت می‌کنید را در اختیار دارید</p>`;
  const howItWorksSteps = [
    {
      title: 'آغاز گفت‌وگوی حقوقی و شرح مسئله',
      image: '/assets/how-it-works-step1-desktop.webp',
      description: `<p>کاربر می‌تواند مسئله شغلی خود را
با زبان ساده و بدون نیاز به به‌کارگیری اصطلاحات تخصصی حقوقی بیان نماید.
<br>
<br>
خواه موضوع مربوط به اخراج، اختلاف قراردادی،
مطالبات مزدی یا صرفاً آگاهی از حقوق شغلی باشد،
دستیار حقوقی هوش مصنوعی ویکیلا 
با طرح سؤالات هدفمند، ابعاد حقوقی موضوع را روشن می‌نماید.</p>`
    },
    {
      title: 'دریافت اطلاعات سریع و شخصی‌سازی‌شده',
      image: '/assets/how-it-works-step2-desktop.webp',
      description: `<p>ویکیلا  بر اساس اطلاعات ارائه‌شده توسط کاربر،
پاسخ‌هایی عملی، روشن و مستند ارائه می‌دهد، از جمله:<br>
 • قوانین و مقررات مرتبط با موضوع<br>
 • حقوق و تعهدات قانونی طرفین<br>
 • راهکارهای جبرانی و حقوق قابل مطالبه<br>
 • مراجع صالح رسیدگی به اختلاف<br>
 • گام‌های عملی پیشنهادی برای پیگیری موضوع<br>
<br>
تا کاربر بتواند با آگاهی کامل
نسبت به ادامه مسیر حقوقی خود تصمیم‌گیری نماید.</p>`
    },
    {
      title: 'دریافت گزارش حقوقی شخصی‌سازی‌شده',
      image: '/assets/how-it-works-step3-v2-desktop.webp',
      description: `<p>پس از پایان گفت‌وگو،
یک گزارش حقوقی شخصی‌سازی‌شده شامل خلاصه وضعیت حقوقی،
مواد قانونی مرتبط و مسیرهای پیشنهادی اقدام
به‌صورت خودکار برای کاربر تهیه و ارائه می‌شود.<br>
<br>
این گزارش:<br>
 • رایگان است<br>
 • در کوتاه‌ترین زمان در دسترس قرار می‌گیرد<br>
 • و هر زمان که کاربر به آن نیاز داشته باشد قابل بازیابی است.</p>`
    }
  ];
  const faqTitle = 'سؤالات متداول درباره خدمات حقوقی هوشمند ویکیلا';
  const faqItems = [
    { question: 'چگونه می‌توانم راهنمایی حقوقی رایگان در حقوق کار دریافت کنم؟', answer: `<p>کاربران می‌توانند با طرح سؤال خود در سامانه ویکیلا 
اطلاعات حقوقی اولیه و مستند به قوانین کار ایران
را به‌صورت رایگان و بدون نیاز به تعیین وقت قبلی دریافت نمایند.
<br><br>
این راهنمایی‌ها به‌منظور افزایش آگاهی حقوقی ارائه می‌شود
و جایگزین مشاوره حضوری با وکیل دادگستری یا مراجع رسمی نیست.</p>` },
    { question: 'کارگران و کارمندان در ایران چه حقوقی دارند؟', answer: `<p>حقوق شغلی اشخاص شاغل در ایران
بر اساس قانون کار جمهوری اسلامی ایران،
قانون تأمین اجتماعی و آیین‌نامه‌های مرتبط تعیین می‌گردد.
<br><br>
این حقوق شامل مواردی از جمله:
حداقل دستمزد، بیمه تأمین اجتماعی، ساعات کار قانونی،
مرخصی استحقاقی، اضافه‌کاری، حق سنوات،
و حمایت در برابر اخراج غیرقانونی می‌باشد.
<br><br>
ویکیلا  متناسب با شرایط خاص هر کاربر
این حقوق را به‌صورت شخصی‌سازی‌شده توضیح می‌دهد.</p>` },
    { question: 'آیا امکان اخراج بدون اخطار قبلی وجود دارد؟', answer: `<p>به‌طور کلی اخراج کارگر یا کارمند
باید مطابق ضوابط مقرر در قانون کار و آیین‌نامه‌های انضباطی
و با رعایت تشریفات قانونی صورت گیرد.
<br><br>
اخراج بدون طی مراحل قانونی
می‌تواند غیرقانونی تلقی شده
و برای کارفرما مسئولیت حقوقی ایجاد نماید.
<br><br>
ویکیلا  با بررسی شرایط پرونده شما
و نوع قرارداد کار،
وضعیت قانونی اخراج را تحلیل می‌نماید.</p>` },
    { question: 'چه مواردی در محیط کار تبعیض محسوب می‌شود؟', answer: `<p>هرگونه رفتار ناعادلانه یا تفاوت غیرموجه
در استخدام، پرداخت حقوق، ارتقا شغلی یا اخراج
بر اساس عواملی نظیر جنسیت، مذهب، قومیت، سن،
یا وضعیت جسمانی
می‌تواند مصداق تبعیض شغلی تلقی گردد.
<br><br>
تشخیص دقیق مصداق تبعیض
نیازمند بررسی شرایط خاص هر پرونده است
که ویکیلا این تحلیل را ارائه می‌نماید.</p>` },
    { question: 'آیا ویکیلا  مشاوره حقوقی رسمی ارائه می‌دهد؟', answer: `<p>ویکیلا  اطلاعات حقوقی اولیه و راهنمایی عمومی
مبتنی بر قوانین ایران ارائه می‌نماید
و جایگزین مشاوره حضوری با وکیل دادگستری
یا نمایندگی حقوقی رسمی محسوب نمی‌شود.
<br><br>
در موارد پیچیده یا دعاوی مهم،
مراجعه به وکیل متخصص توصیه می‌گردد.</p>` },
    { question: 'آیا استفاده از ویکیلا  واقعاً رایگان است؟', answer: `<p>بله. استفاده از راهنمایی‌های اولیه ویکیلا 
در چارچوب تعیین‌شده رایگان می‌باشد
و کاربر پیش از هرگونه پرداخت
به‌صورت شفاف از شرایط مطلع خواهد شد.</p>` },
    { question: 'آیا کارفرمایان نیز می‌توانند از ویکیلا  استفاده کنند؟', answer: `<p>بله. ویکیلا  هم برای کارگران و کارمندان
و هم برای کارفرمایان قابل استفاده است
و می‌تواند در تبیین حقوق و تعهدات قانونی طرفین
و پیشگیری از اختلافات شغلی مؤثر باشد.</p>` },
    { question: 'آیا اطلاعات من در ویکیلا محرمانه باقی می‌ماند؟', answer: `<p>کلیه اطلاعات کاربران
به‌صورت محرمانه و مطابق اصول حفظ حریم خصوصی
نگهداری و پردازش می‌شود.
<br><br>
هیچ‌گونه اطلاعاتی بدون رضایت کاربر
در اختیار اشخاص ثالث قرار نخواهد گرفت.</p>` },
  ];
  const helpTitle = 'به راهنمایی در زمینه حقوق کار ایران نیاز دارید؟';
  const helpDescription = 'همین حالا سؤال حقوقی خود را مطرح کنید و در چند دقیقه اطلاعات حقوقی روشن، کاربردی و مستند دریافت نمایید';

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
                  <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-employment-law">
                    <input className="style-module__fileInput" multiple type="file" />
                    <img
                      className="style-module__preTextIcon"
                      src="/assets/spark-gray.svg"
                      alt="spark"
                    />
                    <div className="style-module__actions">
                      <button className="style-module__sendButton" type="submit" id="send-button-employment-law" aria-label="send-button" disabled={!chatInput.trim()}>
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
                        id="double-input-employment-law"
                        className="style-module__textareaInput style-module__withPreTextIcon"
                        rows="1"
                        placeholder="سؤال حقوقی خود را بپرسید"
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
                  پاسخ‌های رایگان هوش مصنوعی به سوالات حقوق کار
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
                  کمک به تصمیم‌گیری آگاهانه درباره مسائل شغلی و کاری
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
                  <div className="content_bodyText content_maxWidth" dangerouslySetInnerHTML={{ __html: introText }}/>
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
                  alt="EmploymentLaw intro image"
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
                <p className="subcategories_description" dangerouslySetInnerHTML={{ __html: subcategoriesDescription }}/>
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
                        <div className="dropdown_dropDownItemTitleText" dangerouslySetInnerHTML={{ __html: faq.question }} />
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
              بیانیه سلب مسئولیت حقوقی

کلیه مطالب و اطلاعات ارائه‌شده در سامانه ویکیلا 
صرفاً به‌منظور افزایش آگاهی حقوقی کاربران
و بدون ایجاد هرگونه رابطه وکالتی یا تعهد حقوقی
میان سامانه و کاربر ارائه می‌گردد.

بدیهی است مسئولیت نهایی تصمیم‌گیری و اقدامات حقوقی
بر عهده کاربر بوده
و توصیه می‌شود پیش از هرگونه اقدام رسمی،
با وکیل دادگستری یا مشاور حقوقی واجد صلاحیت مشورت نماید.

ویکیلا در قبال خسارات مستقیم یا غیرمستقیم
ناشی از استفاده از اطلاعات این سامانه
هیچ‌گونه مسئولیتی نخواهد داشت.
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
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input-employment-law-last-section">
                      <input className="style-module__fileInput" multiple type="file" />
                      <img
                        className="style-module__preTextIcon"
                        src="/assets/spark-gray.svg"
                        alt="spark"
                      />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button-employment-law-last-section" aria-label="send-button" disabled={!lastSectionChatInput.trim()}>
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
                          id="double-input-employment-law-last-section"
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
      <SummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </PageLayout>
  );
};

export default EmploymentLaw;
