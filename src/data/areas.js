// Centralised content for each area of law. The estate/probate entry keeps
// the fully authored content from the original page. Other areas reuse the
// same UI with sensible generic copy so every route renders without needing
// separate pages.

const createGenericContent = ({ slug, title, description }) => {
  const lower = title.toLowerCase();
  const summary = description || `راهنمایی واضح و ساده در مورد ${lower} دریافت کنید.`;

  return {
    slug,
    breadcrumbLabel: title,
    breadcrumbHref: `/en-us/${slug}`,
    heroTitle: `کمک هوش مصنوعی رایگان برای ${lower}`,
    introText: `${summary} دستیار هوش مصنوعی ما به سؤالات رایج پاسخ می‌دهد، گزینه‌ها را شرح می‌دهد و زمان‌هایی را که صحبت با وکیل می‌تواند کمک کند برجسته می‌کند.`,
    moreInfoText: `خلاصه سریع درباره ${lower} در ایالات متحده`,
    moreInfoHref: `/en-us/${slug}/summary`,
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: `چه مسائل ${lower} می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند`,
    subcategoriesDescription: `دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل ${lower} کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:`,
    subCategories: [
      {
        title: `اصول ${title}`,
        image: '/assets/default-area-of-law.webp',
        description: `مبانی ${lower}، اصطلاحات کلیدی و فرآیندهای معمول را درک کنید.`
      },
      {
        title: `اسناد ${title}`,
        image: '/assets/default-area-of-law.webp',
        description: `بیاموزید چه اسنادی معمولاً مورد نیاز است، چگونه آنها را تهیه کنید و به چه چیزهایی توجه کنید.`
      },
      {
        title: `اختلافات ${title}`,
        image: '/assets/default-area-of-law.webp',
        description: `راهنمایی در مورد حل اختلافات رایج و زمان‌هایی که باید مشاوره حرفه‌ای را در نظر بگیرید دریافت کنید.`
      }
    ],
    whyUseTitle: `چرا از هوش مصنوعی برای کمک ${lower} استفاده کنید`,
    whyUseDescription: `وقتی با ${lower} سر و کار دارید، فرآیندها می‌توانند گیج‌کننده باشند. Weekilaw به شما کمک می‌کند حقوق و مسئولیت‌های خود را بدون دردسر درک کنید.`,
    whyUseSections: [
      {
        title: `بر اساس اطلاعات قابل اعتماد ${lower} ساخته شده`,
        image: '/assets/default-area-of-law.webp',
        description: `راهنمایی با کیفیت بر اساس اصول پذیرفته شده به طور گسترده تا بتوانید تصمیمات آگاهانه بگیرید.`
      },
      {
        title: `کمک فوری برای درک گزینه‌های شما`,
        image: '/assets/default-area-of-law.webp',
        description: `توضیحات واضح از سناریوهای رایج، زمان‌بندی‌ها و مراحل بعدی برای وضعیت شما.`
      },
      {
        title: `زبانی ساده که درک آن آسان است`,
        image: '/assets/default-area-of-law.webp',
        description: `پاسخ‌های محرمانه و بدون فشار که به شما کمک می‌کنند با اطمینان پیش بروید.`
      }
    ],
    howItWorksTitle: `چگونه از Weekilaw برای کمک ${lower} استفاده کنید`,
    howItWorksDescription: `شروع کار ساده است. شما همیشه کنترل آنچه را که به اشتراک می‌گذارید و کمک‌هایی که دریافت می‌کنید در اختیار دارید.`,
    howItWorksSteps: [
      {
        title: 'وضعیت خود را توصیف کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: `مسئله ${lower} خود را با کلمات خودتان توضیح دهید - نیازی به اصطلاحات حقوقی نیست.`
      },
      {
        title: 'کمک هوش مصنوعی شخصی‌سازی شده دریافت کنید',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: `راهنمایی عملی، گزینه‌های احتمالی و ملاحظات خاص سناریوی خود را دریافت کنید.`
      },
      {
        title: 'گزارش شخصی‌سازی شده خود را فوراً دریافت کنید',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: `خلاصه رایگان چت خود را دانلود کنید تا به شما کمک کند مراحل بعدی را تصمیم بگیرید.`
      }
    ],
    faqTitle: `سؤالات متداول ${title}`,
    faqItems: [
      { question: `آیا دستیار هوش مصنوعی می‌تواند در ${lower} کمک کند؟`, answer: 'بله. راهنمایی کلی و مراحل بعدی ارائه می‌دهد تا بتوانید با اطمینان عمل کنید.' },
      { question: 'آیا این سرویس واقعاً رایگان است؟', answer: "بله. هیچ هزینه‌ای برای استفاده از دستیار هوش مصنوعی Weekilaw وجود ندارد و هیچ تعهدی برای ادامه دادن نیست." },
      { question: `در مورد ${lower} چه موضوعاتی می‌توانم بپرسم؟`, answer: `در مورد فرآیندهای رایج، اسناد، زمان‌بندی‌ها و مراحل بعدی معمول برای ${lower} بپرسید.` },
      { question: 'آیا اطلاعات من خصوصی باقی می‌ماند؟', answer: 'بله. چت‌های شما ناشناس و امن هستند.' },
      { question: 'آیا همیشه به وکیل نیاز دارم؟', answer: 'نه همیشه. هوش مصنوعی می‌تواند به شما کمک کند تصمیم بگیرید چه زمانی مشاوره حرفه‌ای ارزشمند است.' },
      { question: 'آیا می‌توانم بعد از ساعات اداری کمک بگیرم؟', answer: 'بله. دستیار ۲۴ ساعته در دسترس است.' }
    ],
    helpTitle: `کمک به یک مسئله ${lower} نیاز دارید؟`,
    helpDescription: `با پرسیدن هر سؤالی درباره مسئله ${lower} خود شروع کنید`,
  };
};

export const areasOfLawContent = {
  'estate-and-probate-law': {
    slug: 'estate-and-probate-law',
    breadcrumbLabel: 'حقوق املاک و وصیت‌نامه',
    breadcrumbHref: '/en-us/estate-and-probate-law',
    heroTitle: 'مشاوره هوشمند رایگان در زمینه وصیت‌نامه و امور ارث و میراث | ویکیلا',
    introText: "به کمک هوش مصنوعی، تصمیم‌های آگاهانه درباره امور وصیت‌نامه، وقف و ارث اتخاذ کنید برنامه‌ریزی و مدیریت دارایی با راهنمای هوشمند ویکیلا اگر درگیر تنظیم وصیت‌نامه، امور پس از فوت نزدیکان، یا اختلافات ارث و میراث هستید، دستیار حقوقی هوش مصنوعی ویکیلا اطلاعات کاربردی و روشن را در چند دقیقه در اختیارتان قرار می‌دهد — کاملاً رایگان. این دستیار بر اساس اصول تثبیت‌شده حقوق ارث و وصیت طراحی شده تا بتوانید وضعیت خود را بهتر درک کنید، گزینه‌هایتان را بسنجید و با اطمینان تصمیم بگیرید.",
    moreInfoText: 'خلاصه‌ای از قوانین وصیت، ارث و میراث در ایران',
    moreInfoHref: '/en-us/estate-and-probate-law/summary',
    introImage: '/assets/intro-estate-probate.webp',
    subcategoriesTitle: 'چه مسائل وصیت‌نامه، ارث و میراث می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل وصیت‌نامه، ارث و برنامه‌ریزی دارایی کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
      {
        title: 'تنظیم یا به‌روزرسانی وصیت‌نامه',
        image: '/assets/family-property-finances.webp',
        description: 'اگر قصد دارید نخستین وصیت‌نامه‌تان را بنویسید یا نسخه قدیمی را به‌روز کنید، دستیار ویکیلا شرایط لازم برای اعتبار وصیت‌نامه در ایران را توضیح می‌دهد: قوانین مربوط به شاهدها و نحوه تنظیم رسمی، انواع وصیت‌نامه (رسمی، خودنوشت، سری) و نیز اینکه اگر فردی بدون وصیت‌نامه از دنیا برود، چه اتفاقی برای اموالش می‌افتد.'
      },
      {
        title: 'انتخاب بهترین روش برنامه‌ریزی دارایی',
        image: '/assets/what-expert-lawyer-referral-2x.webp',
        description: 'برنامه‌ریزی برای توزیع دارایی‌ها پس از فوت تنها مربوط به وصیت‌نامه نیست. ویکیلا اطلاعات شفافی درباره قوانین مالیات بر ارث در ایران، انتقال دارایی‌ها در زمان حیات (هبه، صلح‌نامه و …) و بهترین ساختار برای حفظ سرمایه خانواده در اختیارتان قرار می‌دهد تا از نظر مالی و قانونی بهترین تصمیم را بگیرید.'
      },
      {
        title: 'راهنمای رایگان برای روند انحصار وراثت',
        image: '/assets/what-navigating-probate-2x.webp',
        description: 'در صورت فوت یکی از عزیزان، ویکیلا روند حقوقی صدور گواهی انحصار وراثت، تعیین مدیر ترکه و تقسیم اموال را برای شما توضیح می‌دهد. اطلاعاتی درباره مراحل رسمی و غیررسمی، مدارک مورد نیاز و زمان‌بندی نیز ارائه می‌شود.'
      },
      {
        title: 'مالیات و هزینه‌های ارث',
        image: '/assets/what-letters-admin-2x.webp',
        description: 'نگران مالیات بر ارث هستید؟ دستیار هوشمند ویکیلا میزان معافیت‌ها، نرخ‌های قانونی و راهکارهای کاهش هزینه انتقال ارث را برایتان شرح می‌دهد، از جمله مواردی مثل بخشش و هبه در زمان حیات، معافیت همسر و فرزندان، زمان پرداخت مالیات بر ارث.'
      },
      {
        title: 'ایجاد یا اداره اعتمادها (تراست‌ها)',
        image: '/assets/commercial-business-contract.webp',
        description: 'اگر به فکر ایجاد صندوق یا اعتماد مالی هستید، یا وظیفه اداره آن را دارید، ویکیلا اطلاعاتی درباره انواع اعتمادهای رایج، مسئولیت‌های متولی، و آثار مالیاتی مرتبط ارائه می‌دهد. با توضیح تفاوت تراست‌های قابل فسخ و غیرقابل فسخ، بهترین گزینه را برای شرایط خود انتخاب کنید.'
      },
      {
        title: 'حل اختلافات مربوط به وصیت‌نامه و ارث',
        image: '/assets/what-will-disputes-2x.webp',
        description: 'در صورت بروز اختلاف میان وراث یا وصی‌ها، ویکیلا راهنمای جامع ارائه می‌دهد درباره دلایل قانونی ابطال وصیت‌نامه، دعاوی حذف‌شدگان از ارث، اختلاف میان وراث بر سر دارایی‌ها تا بتوانید حقوق خود را بشناسید و اقدامات قانونی مناسب انجام دهید.'
      }
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور وصیت‌نامه و ارث استفاده کنید',
    whyUseDescription: "ویکیلا تحول تازه‌ای در دسترسی به مشاوره حقوقی ایجاد کرده است. با بهره‌گیری از هوش مصنوعی، در اولین قدم به شما اعتماد و آگاهی می‌دهد تا پیش از تصمیم‌های مهم، شرایط خود را بهتر درک کنید. پایگاه دانش اختصاصی حقوق ارث ویکیلا بر اساس بانک اطلاعاتی گسترده‌ای از قوانین و آیین‌نامه‌های ارث و وصیت ایران طراحی شده است.",
    whyUseSections: [
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "به سادگی سؤال خود را در مورد وصیت‌نامه یا ارث مطرح کنید و پاسخ تخصصی رایگان دریافت کنید. ویکیلا – آینده مشاوره حقوقی هوشمند در ایران.",
    howItWorksSteps: [
      {
        title: 'سؤال خود را مطرح کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "هر سؤالی درباره وصیت‌نامه، ارث یا برنامه‌ریزی دارایی دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
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
    ],
    faqTitle: 'سؤالات متداول درباره وصیت‌نامه و ارث',
    faqItems: [
      {
        question: 'آیا استفاده از ویکیلا رایگان است؟',
        answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه وصیت‌نامه و ارث کاملاً رایگان است.'
      },
      {
        question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
        answer: 'می‌توانید درباره تنظیم وصیت‌نامه، قوانین ارث، مالیات بر ارث، اعتمادها، اختلافات ارثی و سایر مسائل مرتبط با برنامه‌ریزی دارایی بپرسید.'
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
    ],
    helpTitle: 'کمک به یک مسئله وصیت‌نامه یا ارث نیاز دارید؟',
    helpDescription: 'هر سؤالی درباره وصیت‌نامه، ارث یا برنامه‌ریزی دارایی دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on estate and probate law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-estate-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-estate-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-estate-mobile.webp',
      text: `<p><span style="color: #333333">Estate and probate law deals with the transfer of property and assets after death, including wills, trusts, and the probate process. Understanding these laws ensures your wishes are carried out and your loved ones are protected.</span><br></p>
<h3>Key estate and probate concepts</h3>
<ul>
<li><p><strong>Wills and testaments</strong> - Legal documents that specify how your property should be distributed after death.</p></li>
<li><p><strong>Trusts</strong> - Legal arrangements that hold assets for beneficiaries, often used to avoid probate or provide for minors.</p></li>
<li><p><strong>Probate process</strong> - Court-supervised process of validating wills, paying debts, and distributing assets.</p></li>
<li><p><strong>Intestate succession</strong> - Rules that determine how property is distributed when someone dies without a will.</p></li>
<li><p><strong>Executor and administrator roles</strong> - Individuals responsible for managing the estate and carrying out the deceased's wishes.</p></li>
<li><p><strong>Estate taxes</strong> - Federal and state taxes that may apply to large estates before distribution to heirs.</p></li>
</ul>`
    }
  },
  'commercial-law': {
    slug: 'commercial-law',
    breadcrumbLabel: 'حقوق تجارت',
    breadcrumbHref: '/en-us/commercial-law',
    heroTitle: 'حقوق تجارت، دقیقاً وقتی به آن نیاز دارید',
    introText: 'مدیریت یا راه‌اندازی یک کسب‌وکار، همواره با تصمیم‌های حقوقی همراه است. از تنظیم و بررسی قراردادها گرفته تا روابط با شرکا، مشتریان و تأمین‌کنندگان، آشنایی با اصول حقوق تجارت نقش مهمی در کاهش ریسک و تصمیم‌گیری درست دارد. ما با استفاده از دستیار هوشمند حقوقی، اطلاعات حقوقی مرتبط با کسب‌وکار را به‌صورت ساده، قابل‌فهم و در دسترس در اختیار شما قرار می‌دهیم تا بتوانید با آگاهی بیشتری مسیر خود را انتخاب کنید.',
    moreInfoText: 'خلاصه سریع درباره حقوق تجارت',
    moreInfoHref: '/en-us/commercial-law/summary',
    introImage: '/assets/intro-us-commercial.webp',
    subcategoriesTitle: 'چگونه می‌توانیم کمک کنیم',
    subcategoriesDescription: 'دستیار حقوقی ما برای پاسخ‌گویی به سوالات رایج و کاربردی در حوزه حقوق تجارت طراحی شده است؛ سوالاتی که بسیاری از صاحبان کسب‌وکار روزانه با آن‌ها مواجه می‌شوند. شما می‌توانید درباره موضوعاتی مانند:',
    subCategories: [
      {
        title: 'قراردادهای تجاری',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات اولیه و راهنمایی حقوقی دریافت کنید.'
      },
      {
        title: 'روابط شرکا و سهام‌داران',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات اولیه و راهنمایی حقوقی دریافت کنید.'
      },
      {
        title: 'اختلافات تجاری',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات اولیه و راهنمایی حقوقی دریافت کنید.'
      },
      {
        title: 'تعهدات قانونی کسب‌وکار',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات اولیه و راهنمایی حقوقی دریافت کنید.'
      },
      {
        title: 'مسائل حقوقی مرتبط با فعالیت‌های روزمره شرکت',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات اولیه و راهنمایی حقوقی دریافت کنید.'
      }
    ],
    whyUseTitle: 'دریافت سریع اطلاعات حقوقی',
    whyUseDescription: 'بدون نیاز به جست‌وجوی طولانی یا اصطلاحات پیچیده حقوقی، کافی است وضعیت خود را توضیح دهید تا دستیار هوشمند، اطلاعات مرتبط را به زبان ساده در اختیار شما قرار دهد. این اطلاعات به شما کمک می‌کند:',
    whyUseSections: [
      {
        title: 'موضوع حقوقی خود را بهتر درک کنید',
        image: '/assets/commercial-business-contract.webp',
        description: 'اطلاعات مرتبط با کسب‌وکار را به‌صورت ساده، قابل‌فهم و در دسترس در اختیار شما قرار می‌دهیم.'
      },
      {
        title: 'گزینه‌های پیش رو را بشناسید',
        image: '/assets/commercial-business-contract.webp',
        description: 'با آگاهی بیشتری مسیر خود را انتخاب کنید.'
      },
      {
        title: 'برای قدم بعدی آگاهانه تصمیم بگیرید',
        image: '/assets/commercial-business-contract.webp',
        description: 'تصمیم‌گیری درست در کاهش ریسک کسب‌وکار.'
      }
    ],
    howItWorksTitle: 'چه زمانی باید با وکیل صحبت کنید؟',
    howItWorksDescription: 'همه مسائل حقوقی نیاز به مراجعه فوری به وکیل ندارند. در بسیاری از موارد، آگاهی اولیه می‌تواند مسیر تصمیم‌گیری را روشن کند. اما در شرایطی که موضوع:',
    howItWorksSteps: [
      {
        title: 'پیچیده یا حساس باشد',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: 'برای مسائل پیچیده، مشاوره وکیل ضروری است.'
      },
      {
        title: 'تبعات مالی یا حقوقی جدی داشته باشد',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: 'در صورت تبعات جدی، با وکیل متخصص مشورت کنید.'
      },
      {
        title: 'نیاز به اقدام رسمی یا تنظیم اسناد حقوقی داشته باشد',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: 'دستیار هوشمند به شما پیشنهاد می‌دهد که با وکیل متخصص حقوق تجارت مشورت کنید.'
      }
    ],
    faqTitle: 'سوالات متداول حقوق تجارت',
    faqItems: [
      { question: 'آیا استفاده از این خدمات رایگان است؟', answer: 'بله. استفاده از دستیار هوشمند برای دریافت اطلاعات حقوقی عمومی در حوزه حقوق تجارت رایگان است.' },
      { question: 'چه نوع سوالاتی را می‌توانم مطرح کنم؟', answer: 'سوالات مرتبط با فعالیت‌های تجاری و کسب‌وکار، از جمله قراردادها، اختلافات، تعهدات قانونی و مسائل روزمره شرکت.' },
      { question: 'آیا این اطلاعات جایگزین مشاوره حقوقی است؟', answer: 'خیر. اطلاعات ارائه‌شده صرفاً جنبه آگاهی‌بخشی دارد و جایگزین مشاوره تخصصی و رسمی حقوقی نیست.' },
      { question: 'آیا اطلاعات من محرمانه می‌ماند؟', answer: 'بله. گفتگوها به‌صورت امن و محرمانه انجام می‌شود و اطلاعات شما بدون رضایتتان ذخیره یا منتشر نمی‌شود.' },
      { question: 'آیا این خدمات همیشه در دسترس است؟', answer: 'بله. دستیار حقوقی به‌صورت ۲۴ ساعته در دسترس است.' }
    ],
    helpTitle: 'نکته مهم',
    helpDescription: 'اطلاعات ارائه‌شده در این بخش صرفاً جهت افزایش آگاهی عمومی است و مشاوره حقوقی محسوب نمی‌شود. برای تصمیم‌گیری‌های مهم یا اقدامات حقوقی رسمی، توصیه می‌شود حتماً با وکیل متخصص مشورت شود.',
    modalContent: {
      title: 'More information on commercial law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-commercial-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-commercial-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-commercial-mobile.webp',
      text: `<p><span style="color: #333333">US commercial law helps business owners understand their rights and responsibilities when it comes to contracts, compliance, disputes and general operations. Whether you're starting a business, hiring staff or selling products and services, knowing which laws apply can help you make informed decisions and avoid costly mistakes.</span><br></p>
<h3>Key legislation to consider</h3>
<ul>
<li><p><strong>The Uniform Commercial Code</strong> governs business transactions including sales of goods, contract terms, delivery obligations and remedies for breach. It has been adopted in some form by all 50 states.</p></li>
<li><p><strong>The Federal Trade Commission Act</strong> enforces fair business practices, marketing standards and consumer protection rules across industries.</p></li>
<li><p><strong>State business laws</strong> set out how to register and manage a company in your state, including LLC or corporation formation, tax ID registration and annual reporting requirements.</p></li>
<li><p><strong>The Fair Labor Standards Act</strong> outlines minimum wage, overtime pay, employee classification and child labor protections for most private employers in the US.</p></li>
<li><p><strong>The California Consumer Privacy Act</strong> and similar state privacy laws regulate how businesses collect, store and use customer data. These laws affect businesses that operate online or manage personal information.</p></li>
<li><p><strong>US contract law</strong>, shaped by state statutes and case law, governs how contracts are formed and enforced. It covers issues like valid agreements, breach of contract and available remedies.</p></li>
</ul>`
    }
  },
  'criminal-law': {
    slug: 'criminal-law',
    breadcrumbLabel: 'حقوق کیفری',
    breadcrumbHref: '/en-us/criminal-law',
    heroTitle: 'حقوق کیفری',
    introText: 'اطلاعات فوری حقوق کیفری با دستیار هوش مصنوعی در مواجهه با اتهامات کیفری یا سوالات حقوقی مرتبط، دستیار هوش مصنوعی ما اطلاعات لازم را در اختیار شما قرار می‌دهد تا تصمیمات آگاهانه‌تری دربارهٔ وضعیت حقوقی خود اتخاذ کنید. این سرویس پاسخ‌های ساده و قابل‌فهم دربارهٔ حقوق، روند دادگاهی و راهکارهای دفاعی ارائه می‌کند تا بتوانید در مسیر قانونی با اعتماد بیشتر حرکت کنید.',
    moreInfoText: 'خلاصه سریع درباره حقوق کیفری',
    moreInfoHref: '/en-us/criminal-law/summary',
    introImage: '/assets/criminal-law.webp',
    subcategoriesTitle: 'پشتیبانی حقوق کیفری توسط دستیار هوش مصنوعی',
    subcategoriesDescription: 'اگر با موضوعات حقوق کیفری روبه‌رو هستید، می‌توانید هرگونه سوال خود را دربارهٔ وضعیت‌تان مطرح کنید و پاسخ‌های مرتبط را دریافت کنید.',
    subCategories: [
      {
        title: 'توضیح حقوق در زمان بازداشت',
        image: '/assets/criminal-law.webp',
        description: 'دستیار می‌تواند اطلاعات پایه‌ای دربارهٔ حقوق فرد در زمان بازداشت، از جمله حق سکوت، حق داشتن وکیل و روند بازجویی پلیس را برای شما توضیح دهد تا بهتر از حقوق خود آگاه باشید.'
      },
      {
        title: 'اقدام پس از اتهام‌زدن',
        image: '/assets/criminal-law.webp',
        description: 'دستیار می‌تواند روند معمول بعد از اتهام‌زدن را شامل مراحل مثل قرار وثیقه، زمان‌های حضور در دادگاه و نحوهٔ آماده‌سازی دفاع توضیح دهد تا در مسیر قانونی بهتر پیش بروید.'
      },
      {
        title: 'دفاع از اتهامات کیفری',
        image: '/assets/criminal-law.webp',
        description: 'اطلاعات درباره گزینه‌های دفاعی، حقوق در دادگاه، وکیل تسخیری و استراتژی‌های رایج دفاعی در برابر اتهامات مختلف کیفری.'
      },
      {
        title: 'پیامدهای کیفری و اصلاحات',
        image: '/assets/criminal-law.webp',
        description: 'در مورد انواع مجازات‌ها، گزینه‌های آزادی مشروط، اصلاحات زندان و تأثیرات قانونی سوابق کیفری بر زندگی آینده بیاموزید.'
      },
      {
        title: 'تعدیل و کاهش احکام کیفری',
        image: '/assets/criminal-law.webp',
        description: 'راهنمایی در مورد فرآیندهای تعدیل حکم، کاهش مجازات‌ها، آزادی مشروط و داستان‌های واقعی از افرادی که موفق به کاهش احکام خود شده‌اند.'
      }
    ],
    whyUseTitle: 'چرا استفاده از هوش مصنوعی برای پشتیبانی حقوق کیفری؟',
    whyUseDescription: 'با استفاده از این سرویس می‌توانید اطلاعات حقوقی را که معمولاً پیچیده و دشوار هستند، به‌صورت ساده، بدون هزینه و بدون نیاز به مراجعهٔ اولیه به وکیل دریافت کنید.',
    whyUseSections: [
      {
        title: 'درک بهتر وضعیت حقوقی',
        image: '/assets/criminal-law.webp',
        description: 'اطلاعات پایه‌ای و کاربردی دربارهٔ حقوق کیفری برای تصمیم‌گیری آگاهانه‌تر.'
      },
      {
        title: 'دسترسی آسان و رایگان',
        image: '/assets/criminal-law.webp',
        description: 'بدون نیاز به وقت‌گیری قبلی یا هزینه‌های مشاوره اولیه.'
      },
      {
        title: 'اطلاعات به زبان ساده',
        image: '/assets/criminal-law.webp',
        description: 'پاسخ‌های بدون اصطلاحات پیچیده حقوقی که به راحتی قابل درک هستند.'
      }
    ],
    howItWorksTitle: 'نحوه کار با سرویس حقوق کیفری',
    howItWorksDescription: 'فرآیند ساده و کاربرپسند برای دریافت کمک حقوقی:',
    howItWorksSteps: [
      {
        title: '۱. توضیح وضعیت خود',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: 'وضعیت حقوقی یا مسئلهٔ کیفری خود را با جزئیات لازم شرح دهید تا دستیار هوش مصنوعی بتواند بهترین پاسخ را برای شما تهیه کند.'
      },
      {
        title: '۲. توضیح قوانین مرتبط',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: 'دستیار اطلاعات کلیدی از قوانین کیفری مرتبط با وضعیت شما را ارائه می‌دهد.'
      },
      {
        title: '۳. دریافت گزارش شخصی‌شده',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: 'در نهایت گزارش حقوقی مناسب و مرتبط با سوال شما تهیه می‌شود تا وضعیت‌تان را بهتر درک کنید و تصمیم مناسب‌تری اتخاذ کنید.'
      }
    ],
    faqTitle: 'سوالات متداول دربارهٔ حقوق کیفری',
    faqItems: [
      { question: 'آیا دستیار هوش مصنوعی مشاورهٔ حقوقی رسمی می‌دهد؟', answer: 'خیر. اطلاعات ارائه‌شده مبتنی بر قوانین عمومی و منابع معتبر حقوقی است و مشاورهٔ رسمی و حرفه‌ای حقوقی محسوب نمی‌شود. برای دریافت مشاورهٔ دقیق و تخصصی باید با وکیل متخصص در این حوزه مشورت کنید.' },
      { question: 'آیا استفاده از این سرویس رایگان است؟', answer: 'بله. استفاده از دستیار حقوق کیفری برای پرسش و دریافت پاسخ، کاملاً رایگان است و هیچ هزینهٔ پنهانی یا تعهدی برای ادامهٔ فرآیند ایجاد نمی‌کند.' },
      { question: 'اطلاعات ارائه‌شده چقدر قابل اتکا هستند؟', answer: 'اطلاعات بر اساس اصول و قوانین کیفری موجود در حوزهٔ قضایی ایالات متحده تدوین شده‌اند. این اطلاعات می‌تواند نقطهٔ شروع خوبی برای درک موضوع باشد، اما برای مسائل پیچیده‌تر یا شرایط خاص حتماً لازم است با وکیل متخصص مشورت کنید.' },
      { question: 'آیا گفتگوها و اطلاعات من محرمانه هستند؟', answer: 'بله. تمامی گفتگوها به‌صورت امن و محرمانه نگهداری می‌شوند و اطلاعات شما بدون رضایت‌تان به اشخاص ثالث ارائه نمی‌شود.' },
      { question: 'آیا لازم است حتماً اقدامی قانونی انجام دهم؟', answer: 'نه. شما می‌توانید فقط برای کسب اطلاعات دربارهٔ حقوق و گزینه‌های موجود از سرویس استفاده کنید و هیچ فشار یا الزام قانونی برای شروع یا ادامهٔ فرآیند وجود ندارد.' },
      { question: 'آیا سرویس همیشه در دسترس است؟', answer: 'بله. این سرویس هوش مصنوعی به‌صورت شبانه‌روزی در دسترس است، حتی در تعطیلات و ساعات غیراداری.' },
      { question: 'چگونه می‌تواند حقوق من در زمان بازداشت را توضیح دهد؟', answer: 'دستیار می‌تواند اطلاعات پایه‌ای دربارهٔ حقوق فرد در زمان بازداشت، از جمله حق سکوت، حق داشتن وکیل و روند بازجویی پلیس را برای شما توضیح دهد تا بهتر از حقوق خود آگاه باشید.' },
      { question: 'چگونه می‌توانم پس از اتهام‌زدن اقدام کنم؟', answer: 'دستیار می‌تواند روند معمول بعد از اتهام‌زدن را شامل مراحل مثل قرار وثیقه، زمان‌های حضور در دادگاه و نحوهٔ آماده‌سازی دفاع توضیح دهد تا در مسیر قانونی بهتر پیش بروید.' }
    ],
    helpTitle: 'توضیح مهم',
    helpDescription: 'مطالب ارائه‌شده در این بخش صرفاً برای افزایش آگاهی عمومی هستند و جایگزین مشاورهٔ حقوقی تخصصی و قانونی با وکیل متخصص نمی‌شوند. در موارد حقوقی پیچیده یا خاص، توصیه می‌شود با وکیل حرفه‌ای مشورت کنید.',
    modalContent: {
      title: 'More information on criminal law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-criminal-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-criminal-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-criminal-mobile.webp',
      text: `<p><span style="color: #333333">US criminal law covers offenses against society and individuals, from minor infractions to serious felonies. Understanding your rights during police encounters, arrest procedures, and court processes can help you navigate the criminal justice system more effectively.</span><br></p>
<h3>Key criminal law concepts</h3>
<ul>
<li><p><strong>Miranda Rights</strong> protect your right to remain silent and have an attorney present during police questioning. Law enforcement must inform you of these rights before custodial interrogation.</p></li>
<li><p><strong>Reasonable suspicion vs. probable cause</strong> determines when police can stop, frisk, or arrest you. Reasonable suspicion allows brief stops, while probable cause is needed for arrests.</p></li>
<li><p><strong>Self-defense laws</strong> vary by state but generally allow you to use reasonable force to protect yourself or others from imminent harm.</p></li>
<li><p><strong>Plea bargaining</strong> allows defendants to negotiate reduced charges or sentences with prosecutors, resulting in most criminal cases being resolved without trial.</p></li>
<li><p><strong>Double jeopardy protection</strong> prevents someone from being tried twice for the same offense, though this doesn't apply to appeals or civil cases.</p></li>
<li><p><strong>Statutes of limitations</strong> set time limits for prosecutors to file charges, varying by the severity of the crime.</p></li>
</ul>`
    }
  },
  'employment-law': {
    slug: 'employment-law',
    breadcrumbLabel: 'قانون استخدام',
    breadcrumbHref: '/en-us/employment-law',
    heroTitle: 'قانون استخدام',
    introText: 'راهنمای حقوق استخدام با کمک دستیار هوش مصنوعی اگر با مسایل حقوقی محل کار روبه‌رو هستید — مانند اخراج ناعادلانه، مسائل قرارداد کاری، تبعیض در محیط کار و سایر چالش‌های شغلی — دستیار هوش مصنوعی ما اطلاعات ضروری را فراهم می‌کند تا بتوانید تصمیمات آگاهانه اتخاذ کنید. این سرویس پاسخ‌های روشن، مفید و سریع دربارهٔ قوانین استخدام در اختیار شما قرار می‌دهد و استفاده از آن کاملاً رایگان است.',
    moreInfoText: 'خلاصه سریع درباره قانون استخدام',
    moreInfoHref: '/en-us/employment-law/summary',
    introImage: '/assets/commercial-business-contract.webp',
    subcategoriesTitle: 'پاسخ به مسائل حقوق استخدام',
    subcategoriesDescription: 'دستیار هوش مصنوعی می‌تواند در موارد متعدد مرتبط با حقوق کار به شما کمک کند، از جمله:',
    subCategories: [
      {
        title: 'توضیح وضعیت حقوقی شما در مواجهه با اختلاف‌های کاری',
        image: '/assets/commercial-business-contract.webp',
        description: 'دستیار هوش مصنوعی پاسخ‌های مرتبط و مفید ارائه می‌دهد.'
      },
      {
        title: 'تفسیر حقوق و تعهدات کارمند و کارفرما',
        image: '/assets/commercial-business-contract.webp',
        description: 'دستیار هوش مصنوعی پاسخ‌های مرتبط و مفید ارائه می‌دهد.'
      },
      {
        title: 'ارائه اطلاعات دربارهٔ اصول قانونی، مانند قوانین ضد تبعیض، پرداخت دستمزد، شرایط قرارداد و روند رسیدگی به اختلافات کاری',
        image: '/assets/commercial-business-contract.webp',
        description: 'دستیار هوش مصنوعی پاسخ‌های مرتبط و مفید ارائه می‌دهد.'
      }
    ],
    whyUseTitle: 'چگونه سرویس کار می‌کند',
    whyUseDescription: 'فرآیند ساده و کاربرپسند برای دریافت کمک حقوقی در مسائل استخدام:',
    whyUseSections: [
      {
        title: 'شرح وضعیت حقوقی خود را وارد کنید',
        image: '/assets/commercial-business-contract.webp',
        description: 'شرایط و جزئیات موضوع کاری که با آن مواجه هستید را توضیح دهید تا دستیار هوش مصنوعی بتواند پاسخ دقیق‌تر تهیه کند.'
      },
      {
        title: 'دریافت اطلاعات دقیق و قابل‌فهم',
        image: '/assets/commercial-business-contract.webp',
        description: 'دستیار پاسخ‌های مرتبط، ساده و قابل‌فهم بر اساس قوانین جاری ایالات متحده ارائه می‌دهد.'
      },
      {
        title: 'دریافت گزارش حقوقی شخصی‌شده',
        image: '/assets/commercial-business-contract.webp',
        description: 'پس از ارسال سوال، گزارش مرتبط با وضعیت شما تهیه می‌شود تا در تصمیم‌گیری حقوقی کمک کند.'
      }
    ],
    howItWorksTitle: 'سوالات متداول دربارهٔ قانون استخدام',
    howItWorksDescription: 'پاسخ به سوالات رایج در مورد سرویس حقوق استخدام:',
    howItWorksSteps: [
      {
        title: 'آیا این سرویس مشاوره حقوقی رسمی محسوب می‌شود؟',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: 'خیر. اطلاعاتی که ارائه می‌شود اطلاعات عمومی حقوقی است و جایگزین مشاوره رسمی و تخصصی با وکیل نمی‌شود. در موارد پیچیده یا حساس توصیه می‌شود با یک وکیل متخصص مشورت کنید.'
      },
      {
        title: 'آیا استفاده از این سرویس هزینه دارد؟',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: 'خیر. استفاده از دستیار هوش مصنوعی برای پاسخ به سوالات حقوق استخدام کاملاً رایگان است و هیچ هزینه پنهان یا تعهدی ایجاد نمی‌کند.'
      },
      {
        title: 'آیا اطلاعات من محرمانه خواهد بود؟',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: 'بله. تمامی اطلاعاتی که ارائه می‌دهید خصوصی و محرمانه باقی می‌ماند و بدون رضایت شما به دیگران منتقل نمی‌شود.'
      },
      {
        title: 'آیا کارفرمایان هم می‌توانند از این سرویس استفاده کنند؟',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: 'بله. دستیار هوش مصنوعی برای کارمندان و کارفرمایان طراحی شده تا هر دو بتوانند حقوق، تعهدات و شیوه‌های درست قانونی را بشناسند و از آن آگاه شوند.'
      }
    ],
    faqTitle: 'نکته مهم',
    faqItems: [
      { question: 'اطلاعات ارائه‌شده در این بخش صرفاً برای افزایش آگاهی عمومی است و نباید به‌عنوان مشاوره حقوقی تخصصی و رسمی تلقی شود. برای موقعیت‌های پیچیده یا مواردی که نیاز به تحلیل دقیق‌تر دارد، مراجعه به وکیل متخصص ضروری است.', answer: '' }
    ],
    helpTitle: 'کمک به یک مسئله حقوق کار نیاز دارید؟',
    helpDescription: 'با پرسیدن هر سؤالی درباره مسئله حقوق استخدام خود شروع کنید',
    modalContent: {
      title: 'More information on employment law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-employment-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-employment-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-employment-mobile.webp',
      text: `<p><span style="color: #333333">US employment law governs the relationship between employers and employees, covering hiring practices, workplace rights, compensation, discrimination, and termination procedures. Understanding these laws helps both employers and employees navigate workplace issues effectively.</span><br></p>
<h3>Key employment law areas</h3>
<ul>
<li><p><strong>Fair Labor Standards Act (FLSA)</strong> establishes minimum wage, overtime pay requirements, and child labor standards for most private and public employees.</p></li>
<li><p><strong>Title VII of the Civil Rights Act</strong> prohibits employment discrimination based on race, color, religion, sex, or national origin.</p></li>
<li><p><strong>Age Discrimination in Employment Act (ADEA)</strong> protects workers aged 40 and older from age-based discrimination.</p></li>
<li><p><strong>Americans with Disabilities Act (ADA)</strong> requires employers to provide reasonable accommodations for employees with disabilities.</p></li>
<li><p><strong>Family and Medical Leave Act (FMLA)</strong> provides eligible employees with up to 12 weeks of unpaid, job-protected leave for specified family and medical reasons.</p></li>
<li><p><strong>Workers' Compensation laws</strong> provide medical care and wage replacement for employees injured or who become ill due to their job.</p></li>
</ul>`
    }
  },
  'family-law': {
    slug: 'family-law',
    breadcrumbLabel: 'حقوق خانواده',
    breadcrumbHref: '/en-us/family-law',
    heroTitle: 'مشاوره هوشمند رایگان در زمینه حقوق خانواده',
    introText: "به کمک دستیار هوش مصنوعی ویکیلا، پاسخ رایگان به پرسش‌های خود درباره‌ی طلاق، حضانت، نفقه و سایر موضوعات مربوط به حقوق خانواده دریافت کنید. با راهنمایی شفاف و قابل‌فهم ما، تصمیم‌های آگاهانه‌تری درباره‌ پرونده‌های خانوادگی بگیرید. همراه هوشمند شما در حل مسائل خانوادگی موضوعاتی مانند طلاق، حضانت فرزند، توافق مالی، یا خشونت خانگی می‌تواند فشار روانی زیادی به همراه داشته باشد. ویکیلا با بهره‌گیری از هوش مصنوعی و دانش حقوقی به‌روز، اطلاعات دقیق و قابل استناد ارائه می‌دهد تا احساس کنترل بیشتری بر شرایطتان داشته باشید — کاملاً رایگان. این سامانه بر پایه‌ی اصول تثبیت‌شده‌ی حقوق خانواده طراحی شده و به شما کمک می‌کند حقوق، مسئولیت‌ها و گزینه‌های خود را بهتر بشناسید.",
    moreInfoText: 'خلاصه‌ای از قوانین خانواده در ایران',
    moreInfoHref: '/en-us/family-law/summary',
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: 'چه مسائل حقوق خانواده می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل حقوق خانواده کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
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
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور خانوادگی استفاده کنید',
    whyUseDescription: "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط دشوار خانوادگی، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از موقعیت خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.",
    whyUseSections: [
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "هر سؤالی درباره‌ی طلاق، حضانت، نفقه یا سایر امور خانوادگی دارید — هم‌اکنون از دستیار هوش مصنوعی ویکیلا بپرسید و پاسخ شفاف و رایگان دریافت کنید. ویکیلا – همراه مطمئن شما در مسیر آرام و آگاه خانوادگی.",
    howItWorksSteps: [
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
    ],
    faqTitle: 'سؤالات متداول درباره حقوق خانواده',
    faqItems: [
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
    ],
    helpTitle: 'کمک به یک مسئله خانوادگی نیاز دارید؟',
    helpDescription: 'هر سؤالی درباره‌ی طلاق، حضانت، نفقه یا سایر امور خانوادگی دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on family law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-family-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-family-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-family-mobile.webp',
      text: `<p><span style="color: #333333">Family law covers legal relationships between family members, including marriage, divorce, child custody, and support. Understanding family law helps individuals navigate major life changes and protect their rights and those of their loved ones.</span><br></p>
<h3>Key family law areas</h3>
<ul>
<li><p><strong>Marriage and divorce</strong> - Legal requirements for marriage, grounds for divorce, and division of property and debts.</p></li>
<li><p><strong>Child custody and support</strong> - Determining parental rights and responsibilities, visitation schedules, and financial support for children.</p></li>
<li><p><strong>Spousal support (alimony)</strong> - Financial support paid by one spouse to another after divorce, based on need and ability to pay.</p></li>
<li><p><strong>Domestic violence protection</strong> - Restraining orders and legal protections for victims of domestic abuse.</p></li>
<li><p><strong>Adoption and guardianship</strong> - Legal processes for adopting children or establishing guardianship over incapacitated adults.</p></li>
<li><p><strong>Prenuptial agreements</strong> - Contracts signed before marriage that specify how assets and debts will be divided in case of divorce.</p></li>
</ul>`
    }
  },
  'immigration-law': {
    slug: 'immigration-law',
    breadcrumbLabel: 'حقوق مهاجرت',
    breadcrumbHref: '/en-us/immigration-law',
    heroTitle: 'راهنمای هوشمند رایگان در امور مهاجرت',
    introText: "به کمک هوش مصنوعی ویکیلا، اطلاعات رایگان و دقیق درباره‌ی اقامت، تابعیت، و امور مهاجرتی دریافت کنید. این سامانه به شما کمک می‌کند گزینه‌ها، مراحل، و الزامات قانونی را بهتر بفهمید تا تصمیم‌های آگاهانه‌تری بگیرید. همراه هوشمند شما در امور مهاجرتی موضوعاتی مانند ویزا، اقامت، تابعیت و پناهندگی می‌تواند پیچیده و استرس‌زا باشد. ویکیلا با بهره‌گیری از هوش مصنوعی و دانش حقوقی به‌روز، اطلاعات دقیق و قابل استناد ارائه می‌دهد تا احساس کنترل بیشتری بر شرایطتان داشته باشید — کاملاً رایگان. این سامانه بر پایه‌ی اصول تثبیت‌شده‌ی حقوق مهاجرت طراحی شده و به شما کمک می‌کند حقوق، مسئولیت‌ها و گزینه‌های خود را بهتر بشناسید.",
    moreInfoText: 'خلاصه‌ای از قوانین مهاجرت در ایران',
    moreInfoHref: '/en-us/immigration-law/summary',
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: 'چه مسائل حقوق مهاجرت می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل حقوق مهاجرت کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
      {
        title: 'انواع ویزا و روند درخواست',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر قصد درخواست ویزای تحصیلی، کاری، خانوادگی یا تجاری را دارید، ویکیلا انواع ویزاها، مراحل درخواست، مدارک لازم و نکات آماده‌سازی را توضیح می‌دهد. این اطلاعات به شما کمک می‌کند تا مسیر درخواست ویزا را بهتر درک کنید.'
      },
      {
        title: 'اقامت دائم',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر قصد اقامت بلندمدت یا دائم دارید، ویکیلا گزینه‌های مختلف از طریق خانواده، اشتغال یا برنامه‌های بشردوستانه، روند بررسی، تمدید اقامت و تعهدات قانونی پس از دریافت کارت اقامت را برای شما روشن می‌کند.'
      },
      {
        title: 'تابعیت و شهروندی',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر به فکر تبدیل اقامت به تابعیت هستید، ویکیلا فرآیند اخذ تابعیت، شرایط اقامت، آزمون زبان، مصاحبه و ارزیابی مدارک را توضیح می‌دهد. با الزامات قانونی و مستندات رسمی آشنا خواهید شد.'
      },
      {
        title: 'مشکلات اقامت یا اخراج از کشور',
        image: '/assets/default-area-of-law.webp',
        description: 'در صورت درگیر بودن با پرونده‌ی اقامت یا خطر اخراج، ویکیلا حقوق شما، دفاعیات ممکن، روند اعتراض یا بازنگری و مسیرهای قانونی را توضیح می‌دهد تا دید روشنی درباره‌ی وضعیت خود داشته باشید.'
      },
      {
        title: 'پناهندگی و حمایت بشردوستانه',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر قصد درخواست پناهندگی دارید، ویکیلا حقوق پناهجویان، سازوکار حمایت انسانی، شرایط لازم برای درخواست، مدارک مورد نیاز و چالش‌های رایج این مسیر را بر اساس قوانین بین‌المللی و مقررات داخلی توضیح می‌دهد.'
      }
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور مهاجرت استفاده کنید',
    whyUseDescription: "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط پیچیده مهاجرتی، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از مسیر مهاجرتی خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.",
    whyUseSections: [
      {
        title: "بر اساس قوانین و آیین‌نامه‌های معتبر ایران",
        image: '/assets/legal-knowledge.webp',
        description: "اطلاعات ارائه‌شده مطابق آخرین مصوبات قانونی و اصول معتبر حقوقی کشور بوده و برای عموم قابل فهم است. با اینکه شرایط هر پرونده ممکن است منحصر به فرد باشد، ما تلاش می‌کنیم راهنمایی کلی و قابل اتکا ارائه دهیم."
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "هر پرسشی درباره‌ی ویزا، اقامت یا تابعیت دارید؟ همین حالا از دستیار هوش مصنوعی ویکیلا بپرسید و پاسخ شفاف و رایگان دریافت کنید. ویکیلا – راهنمای هوشمند شما در سفر مهاجرتی با اطمینان و آگاهی.",
    howItWorksSteps: [
      {
        title: 'سؤال خود را مطرح کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "هر پرسشی درباره‌ی ویزا، اقامت یا تابعیت دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
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
    ],
    faqTitle: 'سؤالات متداول درباره حقوق مهاجرت',
    faqItems: [
      {
        question: 'آیا استفاده از ویکیلا رایگان است؟',
        answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه حقوق مهاجرت کاملاً رایگان است.'
      },
      {
        question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
        answer: 'می‌توانید درباره ویزاها، اقامت، تابعیت، پناهندگی و سایر مسائل مرتبط با حقوق مهاجرت بپرسید.'
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
        answer: 'نه همیشه. در بسیاری از موارد، آگاهی اولیه می‌تواند مسیر تصمیم‌گیری را روشن کند، اما برای مسائل پیچیده، مشاوره وکیل متخصص ضروری است.'
      },
      {
        question: 'آیا ویکیلا همیشه در دسترس است؟',
        answer: 'بله. دستیار حقوقی به‌صورت ۲۴ ساعته در دسترس است.'
      }
    ],
    helpTitle: 'کمک به یک مسئله مهاجرتی نیاز دارید؟',
    helpDescription: 'هر پرسشی درباره‌ی ویزا، اقامت یا تابعیت دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on immigration law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-immigration-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-immigration-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-immigration-mobile.webp',
      text: `<p><span style="color: #333333">US immigration law governs who can enter, live, and work in the United States. From visa applications to citizenship, understanding immigration requirements and procedures helps individuals and families navigate the complex immigration system effectively.</span><br></p>
<h3>Key immigration law concepts</h3>
<ul>
<li><p><strong>Visa categories</strong> - Different types of visas for temporary stays, work, study, and family reunification.</p></li>
<li><p><strong>Green card process</strong> - Permanent residency through employment, family sponsorship, or diversity lottery.</p></li>
<li><p><strong>Citizenship requirements</strong> - Naturalization process including residency requirements, language proficiency, and civics knowledge.</p></li>
<li><p><strong>Asylum and refugee status</strong> - Protection for individuals fleeing persecution in their home countries.</p></li>
<li><p><strong>Deportation proceedings</strong> - Removal process for individuals who violate immigration laws or lose legal status.</p></li>
<li><p><strong>DACA and TPS</strong> - Temporary protected status programs for certain immigrants from designated countries.</p></li>
</ul>`
    }
  },
  'litigation': {
    slug: 'litigation',
    breadcrumbLabel: 'دادخواهی',
    breadcrumbHref: '/en-us/litigation',
    heroTitle: 'راهنمای هوشمند رایگان در امور اقامه دعوا و دعاوی حقوقی',
    introText: "مواجهه با یک اختلاف حقوقی می‌تواند بسیار نگران‌کننده باشد، به‌ویژه زمانی که از حقوق خود یا بهترین مسیر اقدام مطمئن نیستید. فرقی نمی‌کند قصد طرح دعوا را دارید، درگیر یک پرونده‌ی مدنی هستید، یا در تلاش برای درک اختلافات تجاری خود، دستیار هوشمند حقوقی ما فوراً اطلاعات لازم را بدون فشار استخدام فوری وکیل فراهم می‌کند. دستیار هوشمند پیشرفته‌ی ما به شما کمک می‌کند تا موقعیت قانونی خود را درک کنید، گزینه‌هایتان را ارزیابی نمایید و در مورد حل اختلاف به درستی تصمیم بگیرید. از سؤالات ساده درباره‌ی حقوق قانونی تا اختلافات پیچیده‌ی تجاری، شفافیت لازم برای حرکت رو به جلو با اطمینان را به دست آورید.",
    moreInfoText: 'مروری سریع بر حقوق دعاوی در نظام حقوقی ایران',
    moreInfoHref: '/en-us/litigation/summary',
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: 'چه مسائل دادخواهی می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل دادخواهی کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
      {
        title: 'آگاهی از حقوق خود پیش از اقدام قانونی',
        image: '/assets/default-area-of-law.webp',
        description: 'پیش از طرح شکایت یا اقدام به اقامه دعوای مدنی، درک جایگاه قانونی خود اهمیت دارد. دستیار هوشمند ما با طرح پرسش‌های هوشمندانه و توضیح مفاهیم حقوقی مانند محدودیت‌های زمانی طرح دعوا، الزامات ارائه ادله و نحوه‌ی مطالبه‌ی خسارت، موقعیت پرونده‌ی شما را ارزیابی کرده و تصویری شفاف از حقوق شما ارائه می‌دهد.'
      },
      {
        title: 'پشتیبانی برای طرح دعاوی یا شکایت از شخص ثالث',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر قصد شکایت از شخصی را دارید، دستیار ویکیلا روند کار را به مراحل ساده‌ای تقسیم می‌کند. این دستیار انواع دعاوی، از مطالبات خرد تا پرونده‌های بزرگتر در دادگاه‌های تخصصی، را توضیح می‌دهد و به جمع‌آوری ادله، رویه‌های دادرسی، تخمین هزینه‌ها، و جدول زمانی رسیدگی می‌پردازد.'
      },
      {
        title: 'راهنمایی در صورت ارجاع پرونده به دادگاه',
        image: '/assets/default-area-of-law.webp',
        description: 'دستیار هوشمند ما توضیح می‌دهد که چه اتفاقی در جریان است، چه گزینه‌هایی برای پاسخگویی دارید و قدم بعدی چیست. این ابزار انواع اتهامات/دعاوی، حقوق شما به عنوان خوانده، دفاعیات احتمالی، و پیامدهای عدم پاسخگویی را روشن می‌سازد و به شما کمک می‌کند از خود محافظت کرده و با اطمینان حرکت کنید.'
      },
      {
        title: 'پشتیبانی برای دعاوی تجاری و اختلافات شرکتی',
        image: '/assets/default-area-of-law.webp',
        description: 'دستیار هوشمند ما به اختلافات تجاری مانند نقض قرارداد، تعارضات شرکا، وصول مطالبات شرکت‌ها، و مسائل مالکیت فکری می‌پردازد. این سیستم به شرکت‌ها کمک می‌کند تا امور دادرسی خود را به طور کارآمد مدیریت کنند و راهنمایی‌هایی درباره‌ی رویه‌های دادگاهی، میانجی‌گری و داوری ارائه می‌دهد.'
      },
      {
        title: 'دعاوی مدنی و اختلافات روزمره',
        image: '/assets/default-area-of-law.webp',
        description: 'دستیار ما از مسائل مدنی رایج مانند شکایات مصرف‌کننده، اختلافات موجر و مستأجر، دعاوی همسایگی، و ادعاهای خسارت پشتیبانی می‌کند. این ابزار به شما کمک می‌کند تا حقوق خود را درک کرده و بفهمید آیا طرح دعوای قانونی مناسب است یا خیر، و شما را از ارزیابی اولیه تا مراحل احتمالی ورود به دادگاه راهنمایی می‌کند.'
      },
      {
        title: 'پوشش جامع سؤالات حقوقی',
        image: '/assets/default-area-of-law.webp',
        description: 'حتی اگر مطمئن نیستید با چه نوع مشکلی روبرو هستید، دستیار هوشمند حقوقی به شناسایی حوزه‌های مرتبط حقوقی و گزینه‌های شما کمک می‌کند. این سیستم به سؤالاتی مانند "آیا امکان شکایت از من وجود دارد؟" یا "آیا من حق طرح دعوا دارم؟" با اطلاعات حقوقی قابل اعتماد پاسخ می‌دهد.'
      }
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور دادخواهی استفاده کنید',
    whyUseDescription: "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط پیچیده اختلافات حقوقی، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از مسیر قانونی خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.",
    whyUseSections: [
      {
        title: "بر اساس قوانین و آیین‌نامه‌های معتبر ایران",
        image: '/assets/legal-knowledge.webp',
        description: "اطلاعات ارائه‌شده مطابق آخرین مصوبات قانونی و اصول معتبر حقوقی کشور بوده و برای عموم قابل فهم است. با اینکه شرایط هر پرونده ممکن است منحصر به فرد باشد، ما تلاش می‌کنیم راهنمایی کلی و قابل اتکا ارائه دهیم."
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "آیا پرسشی درباره‌ی اقامه دعوا، دفاع در دادگاه، یا قراردادها دارید؟ همین حالا بینش‌های فوری درباره‌ی سؤالات حقوقی خود را با دستیار هوش مصنوعی رایگان ویکیلا دریافت کنید. ویکیلا – راهنمای هوشمند شما در مسیر عدالت با اطمینان و آگاهی.",
    howItWorksSteps: [
      {
        title: 'سؤال خود را مطرح کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "هر پرسشی درباره‌ی اقامه دعوا، دفاع در دادگاه یا اختلافات حقوقی دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
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
    ],
    faqTitle: 'سؤالات متداول درباره دادخواهی',
    faqItems: [
      {
        question: 'آیا استفاده از ویکیلا رایگان است؟',
        answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه دادخواهی کاملاً رایگان است.'
      },
      {
        question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
        answer: 'می‌توانید درباره طرح دعوا، دفاع در دادگاه، اختلافات مدنی، دعاوی تجاری و سایر مسائل مرتبط با دادخواهی بپرسید.'
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
        answer: 'نه همیشه. در بسیاری از موارد، آگاهی اولیه می‌تواند مسیر تصمیم‌گیری را روشن کند، اما برای مسائل پیچیده، مشاوره وکیل متخصص ضروری است.'
      },
      {
        question: 'آیا ویکیلا همیشه در دسترس است؟',
        answer: 'بله. دستیار حقوقی به‌صورت ۲۴ ساعته در دسترس است.'
      }
    ],
    helpTitle: 'کمک به یک مسئله دادخواهی نیاز دارید؟',
    helpDescription: 'هر پرسشی درباره‌ی اقامه دعوا، دفاع در دادگاه یا اختلافات حقوقی دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on litigation',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-litigation-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-litigation-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-litigation-mobile.webp',
      text: `<p><span style="color: #333333">Litigation is the process of resolving disputes through the court system. Understanding the litigation process, from filing a complaint to trial and appeal, helps individuals and businesses navigate legal conflicts effectively and make informed decisions about whether to settle or proceed to court.</span><br></p>
<h3>Key litigation concepts</h3>
<ul>
<li><p><strong>Pleadings</strong> - Initial court documents including complaints, answers, and motions that define the dispute.</p></li>
<li><p><strong>Discovery</strong> - The process of exchanging information and evidence between parties before trial.</p></li>
<li><p><strong>Motions practice</strong> - Requests to the court for rulings on procedural or substantive issues during litigation.</p></li>
<li><p><strong>Settlement negotiations</strong> - Discussions between parties to resolve disputes without going to trial.</p></li>
<li><p><strong>Alternative dispute resolution</strong> - Methods like mediation and arbitration that can resolve disputes faster and cheaper than litigation.</p></li>
<li><p><strong>Appeals process</strong> - The right to challenge trial court decisions in higher courts.</p></li>
</ul>`
    }
  },
  'personal-injury-law': {
    slug: 'personal-injury-law',
    breadcrumbLabel: 'حقوق جراحات شخصی',
    breadcrumbHref: '/en-us/personal-injury-law',
    heroTitle: 'راهنمای هوشمند رایگان در امور صدمات شخصی و دعاوی مربوط به آن',
    introText: "تجربه‌ی صدمات شخصی می‌تواند زندگی شما را کاملاً مختل کند و اغلب با هزینه‌های ناگهانی پزشکی، از دست دادن درآمد و استرس فراوان همراه است. اگر بر اثر سهل‌انگاری شخص دیگری آسیب دیده‌اید، باید از حقوق خود در مورد جبران خسارت و راه‌های قانونی پیش رو آگاه باشید. دستیار هوش مصنوعی رایگان ما راهنمایی فوری و بدون تعهدی در مورد مسئولیت مدنی، ادعاهای خسارت ناشی از حوادث، و پیگیری غرامت ارائه می‌دهد. دستیار هوشمند ما به شما کمک می‌کند تا پیچیدگی‌های ادعای صدمات شخصی را درک کنید و ارزیابی این موارد را برایتان ساده‌تر سازد: تعیین مسئولیت، مدارک مورد نیاز برای یک ادعا، و انواع خساراتی که ممکن است حق شما باشد.",
    moreInfoText: 'مروری سریع بر قانون صدمات شخصی در نظام حقوقی ایران',
    moreInfoHref: '/en-us/personal-injury-law/summary',
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: 'چه مسائل حقوق جراحات شخصی می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل حقوق جراحات شخصی کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
      {
        title: 'آگاهی از حقوق خود پیش از اقدام قانونی',
        image: '/assets/default-area-of-law.webp',
        description: 'پیش از استخدام وکیل یا طرح دعوا، از هوش مصنوعی برای روشن شدن حقوق خود استفاده کنید. این سیستم عناصر حیاتی مانند مهلت‌های قانونی طرح دعوا، اثبات تقصیر طرف مقابل، و شواهدی که برای اثبات خسارات وارده لازم است را توضیح می‌دهد.'
      },
      {
        title: 'پشتیبانی برای ثبت ادعای خسارت یا طرح شکایت',
        image: '/assets/default-area-of-law.webp',
        description: 'اگر تصمیم به پیگیری غرامت گرفتید، دستیار هوشمند ما روند کار را ترسیم می‌کند. این ابزار تفاوت بین تسویه حساب با شرکت بیمه و طرح یک دادخواست رسمی صدمات شخصی را توضیح می‌دهد و به جمع‌آوری ادله مورد نیاز کمک می‌کند.'
      },
      {
        title: 'راهنمایی در مواجهه با کارشناسان بیمه و مذاکرات',
        image: '/assets/default-area-of-law.webp',
        description: 'شرکت‌های بیمه اغلب تلاش می‌کنند تا پرونده را سریعاً و با مبلغی کمتر از آنچه حق شماست، فیصله دهند. ابزار هوش مصنوعی ما به شما کمک می‌کند تا تاکتیک‌های ارزیابان بیمه را درک کنید و ارزش منصفانه‌ی ادعای خود را ارزیابی کنید.'
      },
      {
        title: 'پشتیبانی برای دعاوی پیچیده صدمات شخصی',
        image: '/assets/default-area-of-law.webp',
        description: 'برای پرونده‌های پیچیده‌تر مانند قصور پزشکی یا آسیب‌های ناشی از محصولات معیوب، دستیار هوشمند ما استانداردهای بالاتر اثبات مورد نیاز را توضیح می‌دهد و به درک مفاهیم تخصصی مانند تعهد به مراقبت و رابطه سببیت کمک می‌کند.'
      },
      {
        title: 'درک انواع خسارات وارده',
        image: '/assets/default-area-of-law.webp',
        description: 'پرونده‌های صدمات شخصی معمولاً شامل انواع مختلف غرامت هستند. هوش مصنوعی تفاوت بین خسارات مادی و خسارات معنوی را روشن می‌سازد و به شما کمک می‌کند تا تصویری جامع از زیان مالی خود بسازید.'
      },
      {
        title: 'پوشش جامع سؤالات حقوقی',
        image: '/assets/default-area-of-law.webp',
        description: 'آیا مطمئن نیستید که آیا حادثه‌ی شما مشمول پرونده‌ی صدمات شخصی می‌شود؟ دستیار ما با پرسش سؤالات مرتبط در مورد حادثه، مشخص می‌کند که آیا عنصر کلیدی "سهل‌انگاری" وجود دارد یا خیر، و قدم منطقی بعدی را مشخص می‌سازد.'
      }
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور صدمات شخصی استفاده کنید',
    whyUseDescription: "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط پیچیده صدمات و آسیب‌ها، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از مسیر قانونی خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.",
    whyUseSections: [
      {
        title: "بر اساس قوانین و آیین‌نامه‌های معتبر ایران",
        image: '/assets/legal-knowledge.webp',
        description: "اطلاعات ارائه‌شده مطابق آخرین مصوبات قانونی و اصول معتبر حقوقی کشور بوده و برای عموم قابل فهم است. با اینکه شرایط هر پرونده ممکن است منحصر به فرد باشد، ما تلاش می‌کنیم راهنمایی کلی و قابل اتکا ارائه دهیم."
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "آیا سؤالی درباره‌ی حقوق خود پس از یک حادثه دارید؟ همین حالا بینش‌های فوری درباره‌ی سؤالات صدمات شخصی خود را با دستیار هوش مصنوعی رایگان ویکیلا دریافت کنید. ویکیلا – راهنمای هوشمند شما در مسیر احقاق حق با اطمینان و آگاهی.",
    howItWorksSteps: [
      {
        title: 'سؤال خود را مطرح کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "هر پرسشی درباره‌ی صدمات شخصی و حقوق خود دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
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
    ],
    faqTitle: 'سؤالات متداول درباره حقوق جراحات شخصی',
    faqItems: [
      {
        question: 'آیا استفاده از ویکیلا رایگان است؟',
        answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه حقوق جراحات شخصی کاملاً رایگان است.'
      },
      {
        question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
        answer: 'می‌توانید درباره انواع صدمات، مسئولیت مدنی، خسارات، ادعاهای بیمه و سایر مسائل مرتبط با حقوق جراحات شخصی بپرسید.'
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
        answer: 'نه همیشه. در بسیاری از موارد، آگاهی اولیه می‌تواند مسیر تصمیم‌گیری را روشن کند، اما برای مسائل پیچیده، مشاوره وکیل متخصص ضروری است.'
      },
      {
        question: 'آیا ویکیلا همیشه در دسترس است؟',
        answer: 'بله. دستیار حقوقی به‌صورت ۲۴ ساعته در دسترس است.'
      }
    ],
    helpTitle: 'کمک به یک مسئله صدمات شخصی نیاز دارید؟',
    helpDescription: 'هر پرسشی درباره‌ی حقوق خود پس از یک حادثه دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on personal injury law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-personal-injury-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-personal-injury-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-personal-injury-mobile.webp',
      text: `<p><span style="color: #333333">US personal injury law allows individuals harmed by the negligence or intentional actions of others to seek compensation for medical expenses, lost wages, pain and suffering, and other damages. Understanding your rights after an accident is crucial for protecting your interests.</span><br></p>
<h3>Key personal injury law concepts</h3>
<ul>
<li><p><strong>Negligence</strong> - The failure to exercise reasonable care that results in harm to another person.</p></li>
<li><p><strong>Comparative fault</strong> - A system where damages are reduced based on the injured person's percentage of fault.</p></li>
<li><p><strong>Statute of limitations</strong> - Time limits for filing personal injury claims, varying by state and injury type.</p></li>
<li><p><strong>Pain and suffering</strong> - Non-economic damages for physical and emotional distress caused by the injury.</p></li>
<li><p><strong>Wrongful death claims</strong> - Lawsuits filed by family members when a loved one dies due to another's negligence.</p></li>
<li><p><strong>Product liability</strong> - Legal responsibility for injuries caused by defective products.</p></li>
</ul>`
    }
  },
  'property-law': {
    slug: 'property-law',
    breadcrumbLabel: 'حقوق املاک',
    breadcrumbHref: '/en-us/property-law',
    heroTitle: 'راهنمای قانون املاک (Property Law) — ویکیلا',
    introText: "ویکیلا راهنمایی جامع درباره «قانون املاک و مستغلات» ارائه می‌دهد که برای آشنایی عمومی با مسائل حقوقی مربوط به ملک طراحی شده است. این محتوا با زبانی ساده، مفاهیم پیچیده حقوقی را قابل‌فهم می‌کند. قانون املاک مجموعه‌ای از قوانین و مقررات است که به موضوعات مالکیت اموال غیرمنقول، خرید و فروش ملک، اجاره و روابط موجر و مستأجر، انتقال سند، اختلافات و دعاوی ملکی می‌پردازد. هدف ویکیلا این است که کاربران دید روشنی نسبت به حقوق و تعهدات خود در امور ملکی داشته باشند.",
    moreInfoText: 'مروری سریع بر قانون املاک در نظام حقوقی ایران',
    moreInfoHref: '/en-us/property-law/summary',
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: 'چه مسائل حقوق املاک می‌تواند دستیار حقوقی هوش مصنوعی ما به شما کمک کند',
    subcategoriesDescription: 'دستیار حقوقی هوش مصنوعی ما آموزش دیده است تا در طیف وسیعی از مسائل حقوق املاک کمک کند. در اینجا زمینه‌های اصلی که می‌تواند پشتیبانی فوری ارائه دهد آورده شده است:',
    subCategories: [
      {
        title: 'خرید و فروش ملک',
        image: '/assets/default-area-of-law.webp',
        description: 'آشنایی با مراحل قانونی معامله، تنظیم قرارداد، انتقال مالکیت و نکات مهم قبل از امضای مبایعه‌نامه.'
      },
      {
        title: 'اجاره ملک',
        image: '/assets/default-area-of-law.webp',
        description: 'بررسی حقوق و وظایف موجر و مستأجر، شرایط فسخ قرارداد، افزایش اجاره‌بها و تخلیه ملک.'
      },
      {
        title: 'اختلافات ملکی',
        image: '/assets/default-area-of-law.webp',
        description: 'راهنمای کلی برای حل اختلافات رایج مانند تصرف، تخلیه، سرقفلی، حق کسب و پیشه و دعاوی مربوط به سند.'
      },
      {
        title: 'ساخت‌وساز و تغییرات ملکی',
        image: '/assets/default-area-of-law.webp',
        description: 'اطلاعات عمومی درباره لزوم اخذ مجوز، رعایت مقررات شهری و پیامدهای تخلف ساختمانی.'
      }
    ],
    whyUseTitle: 'چرا از ویکیلا برای کمک در امور املاک استفاده کنید',
    whyUseDescription: "ویکیلا اولین گام برای درک حقوق قانونی‌تان را آسان می‌کند. در شرایط پیچیده املاک و مستغلات، با چند پرسش ساده از هوش مصنوعی ما، می‌توانید تصویری روشن از مسیر قانونی خود پیدا کنید. سیستم ما بر پایه‌ی منابع معتبر حقوقی ایران طراحی شده و اطلاعاتی ساده، دقیق و شخصی‌سازی‌شده ارائه می‌دهد.",
    whyUseSections: [
      {
        title: "بر اساس قوانین و آیین‌نامه‌های معتبر ایران",
        image: '/assets/legal-knowledge.webp',
        description: "اطلاعات ارائه‌شده مطابق آخرین مصوبات قانونی و اصول معتبر حقوقی کشور بوده و برای عموم قابل فهم است. با اینکه شرایط هر پرونده ممکن است منحصر به فرد باشد، ما تلاش می‌کنیم راهنمایی کلی و قابل اتکا ارائه دهیم."
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
    ],
    howItWorksTitle: 'آماده‌اید شروع کنید؟',
    howItWorksDescription: "آیا سؤالی درباره‌ی حقوق خود در امور ملکی دارید؟ همین حالا بینش‌های فوری درباره‌ی سؤالات املاک خود را با دستیار هوش مصنوعی رایگان ویکیلا دریافت کنید. ویکیلا – راهنمای هوشمند شما در مسیر احقاق حق با اطمینان و آگاهی.",
    howItWorksSteps: [
      {
        title: 'سؤال خود را مطرح کنید',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "هر پرسشی درباره‌ی حقوق املاک و مستغلات دارید، به سادگی آن را با کلمات خودتان مطرح کنید. نیازی به دانستن اصطلاحات حقوقی نیست."
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
    ],
    faqTitle: 'سؤالات متداول درباره حقوق املاک',
    faqItems: [
      {
        question: 'آیا استفاده از ویکیلا رایگان است؟',
        answer: 'بله، استفاده از دستیار هوشمند ویکیلا برای دریافت اطلاعات حقوقی عمومی در حوزه حقوق املاک کاملاً رایگان است.'
      },
      {
        question: 'چه نوع سوالاتی می‌توانم بپرسم؟',
        answer: 'می‌توانید درباره انواع معاملات ملکی، حقوق مالکیت، قراردادهای اجاره، اختلافات ملکی و سایر مسائل مرتبط با حقوق املاک بپرسید.'
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
        question: 'یک قرارداد اجاره معتبر شامل چه مواردی است؟',
        answer: 'یک قرارداد اجاره معتبر شامل مشخصات طرفین، مشخصات ملک، مبلغ و مدت اجاره، تعهدات موجر و مستأجر، شرایط فسخ قرارداد و سایر شرایط قانونی است.'
      },
      {
        question: 'آیا تخلیه مستأجر بدون حکم دادگاه امکان‌پذیر است؟',
        answer: 'در اغلب موارد، تخلیه قانونی نیازمند طی مراحل قانونی و صدور دستور یا حکم قضایی است.'
      }
    ],
    helpTitle: 'کمک به یک مسئله املاک نیاز دارید؟',
    helpDescription: 'هر پرسشی درباره‌ی حقوق خود در امور ملکی دارید، همین حالا بپرسید و پاسخ رایگان دریافت کنید',
    modalContent: {
      title: 'More information on property law',
      desktopImage: '/static/cms/areas-of-law/intro-modal-us-property-desktop.webp',
      tabletImage: '/static/cms/areas-of-law/intro-modal-us-property-tablet.webp',
      mobileImage: '/static/cms/areas-of-law/intro-modal-us-property-mobile.webp',
      text: `<p><span style="color: #333333">US property law governs ownership, transfer, and use of real property (land and buildings) and personal property (movable assets). Understanding property rights and legal procedures helps protect your assets and navigate transactions effectively.</span><br></p>
<h3>Key property law concepts</h3>
<ul>
<li><p><strong>Real property vs. personal property</strong> - Real property includes land and permanently attached structures, while personal property includes movable items.</p></li>
<li><p><strong>Property ownership types</strong> include fee simple (complete ownership), life estate (ownership for life), and leasehold (temporary ownership through lease).</p></li>
<li><p><strong>Deeds and titles</strong> - Legal documents that transfer ownership and provide evidence of property rights.</p></li>
<li><p><strong>Easements and rights-of-way</strong> - Legal rights to use someone else's property for specific purposes.</p></li>
<li><p><strong>Zoning and land use regulations</strong> - Local laws that control how property can be used and developed.</p></li>
<li><p><strong>Property taxes and assessments</strong> - Annual taxes based on property value, used to fund local government services.</p></li>
</ul>`
    }
  },
};

export const defaultAreaSlug = 'estate-and-probate-law';


