import React, { useState, useMemo } from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/sailing.css';

const Insights = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      // Handle search submission - for now just log it
      console.log('Search submitted:', searchInput);
      // You can add search functionality here
      // window.location.href = `/search?q=${encodeURIComponent(searchInput)}`;
    }
  };


  const articles = [
    {
      id: 1,
      title: "هوش مصنوعی حقوقی چیست؟",
      description: "درک اصول هوش مصنوعی در زمینه حقوق و چگونگی کمک به تحقیقات و تحلیل‌های حقوقی.",
      image: "/assets/about-ai-what-is-legal-ai.webp",
      link: "/en-us/insights/what-is-legal-ai",
      category: "هوش مصنوعی حقوقی"
    },
    {
      id: 2,
      title: "آیا می‌توان به هوش مصنوعی حقوقی اعتماد کرد؟",
      description: "بررسی قابلیت اطمینان و محدودیت‌های ابزارهای حقوقی مبتنی بر هوش مصنوعی و زمان مشاوره با وکلای انسانی.",
      image: "/assets/about-ai-can-you-trust.webp",
      link: "/en-us/insights/can-you-trust-legal-ai",
      category: "هوش مصنوعی حقوقی"
    },
    {
      id: 3,
      title: "هوش مصنوعی در خدمات حقوقی",
      description: "چگونگی تحول هوش مصنوعی در خدمات حقوقی، از تحلیل قراردادها تا پیش‌بینی پرونده‌ها.",
      image: "/assets/about-ai-ai-in-legal-services.webp",
      link: "/en-us/insights/ai-in-legal-services",
      category: "هوش مصنوعی حقوقی"
    },
    {
      id: 4,
      title: "آیا نیاز به دادگاه دارم؟",
      description: "درک زمان ضرورت دادرسی و بررسی روش‌های جایگزین حل اختلاف.",
      image: "/assets/about-ai-do-i-need-court.webp",
      link: "/en-us/insights/do-i-need-court",
      category: "فرآیند حقوقی"
    },
    {
      id: 5,
      title: "حقوق خود را بشناسید",
      description: "راهنمای جامع برای درک حقوق قانونی شما در موقعیت‌های مختلف.",
      image: "/assets/legal-aid.webp",
      link: "/en-us/insights/know-your-rights",
      category: "حقوق قانونی"
    },
    {
      id: 6,
      title: "کمک حقوقی آنلاین",
      description: "چگونگی دسترسی به کمک‌های حقوقی رایگان و منابع آنلاین برای کسانی که توان مالی ندارند.",
      image: "/assets/legal-knowledge.webp",
      link: "/en-us/insights/legal-aid-online",
      category: "کمک حقوقی"
    },
    {
      id: 7,
      title: "SEO برای وکلا",
      description: "استراتژی‌های بازاریابی دیجیتال ویژه دفاتر حقوقی برای جذب مشتریان بیشتر آنلاین.",
      image: "/assets/seo-for-lawyer.png",
      link: "/en-us/insights/seo-for-lawyers",
      category: "بازاریابی حقوقی"
    },
    {
      id: 8,
      title: "جنبه‌های حقوقی جام ملت‌های استرالیا",
      description: "درک مفاهیم حقوقی و مقررات پیرامون رویدادهای ورزشی بزرگ مانند جام ملت‌های استرالیا.",
      image: "/assets/melbourne-cup-2025-search-5.png",
      link: "/en-us/insights/melbourne-cup-legal",
      category: "حقوق رویدادها"
    },
    {
      id: 9,
      title: "مطالعه موردی فینچلی",
      description: "تحلیل عمیق پرونده حقوقی فینچلی و تأثیرات آن بر اختلافات تجاری مشابه.",
      image: "/assets/blog-finchly-lc-pr.jpg",
      link: "/en-us/insights/finchly-case-study",
      category: "مطالعات موردی"
    }
  ];

  const filteredArticles = useMemo(() => {
    if (!searchInput.trim()) {
      return articles;
    }

    const searchTerm = searchInput.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm)
    );
  }, [searchInput, articles]);

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
                    <span>Insights</span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="library-header_title styles_areaOfLawMaxWidth styles_libraryHeaderClass">
                  بینش‌های قانونی
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
              <div className="chat_outerWrapper" id="insights-chat-input">
                <form onSubmit={handleSearchSubmit} className="style-module__chatInputContainer styles-module__outerWrapper">
                  <div className="style-module__shinyBorderContainer">
                    <div className="style-module__chatInput styles-module__inputWrapper" id="chat-input">
                      <input className="style-module__fileInput" multiple type="file" />
                      <div className="style-module__actions">
                        <button className="style-module__sendButton" type="submit" id="send-button" aria-label="search-button" disabled={!searchInput.trim()}>
                          <div className="style-module__sendArrowImageWrapper">
                            <div className="style-module__sendArrowWrapperHover">
                              <img
                                alt="search"
                                loading="lazy"
                                width="24"
                                height="24"
                                decoding="async"
                                src="/assets/ai-tech/search-blue.svg"
                              />
                            </div>
                            <div className="style-module__sendArrowWrapper">
                              <img
                                alt="search"
                                loading="lazy"
                                width="24"
                                height="24"
                                decoding="async"
                                src="/assets/ai-tech/search-blue.svg"
                              />
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="style-module__inputs style-module__noFiles">
                        <textarea
                          id="insights-search-input"
                          className="style-module__textareaInput"
                          rows="1"
                          placeholder="جستجو..."
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSearchSubmit(e);
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

        {/* Content Header Section */}
        <div className="styles_contentHeaderContainer__jL3hE" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="styles_contentHeaderTitle__NPn5k" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
            بینش‌های حقوقی ویکیلاک
          </div>
          <div className="styles_contentDisplayDetails__GiCjt" style={{fontSize: '1.5rem', fontWeight: '600'}}>
            نمایش ۱ تا {filteredArticles.length} از {articles.length} مقاله
          </div>
        </div>

        {/* Content Section */}
        <div className="layout_menuHeightWrapper__39a3A">
            <div className="styles_container__K9FGD">
              <div className="styles_gridContainer__sVFNF">
              {filteredArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  className="styles_gridItem__fS9yq"
                >
                  <div className="styles_articleImageContainer__GXlQm">
                    <img
                      alt={article.title}
                      loading="lazy"
                      width="373"
                      height="210"
                      decoding="async"
                      className="styles_articleImage__RTTgz"
                      src={article.image}
                    />
                  </div>
                  <div className="styles_textWrapper__yJ7QI">
                    <div className="styles_articleTitle__FFyWR">
                      {article.title}
                    </div>
                    <div className="styles_articleDescription__0e28E">
                      {article.description}
                    </div>
                    <div className="styles_articleActionContainer__kYQwp">
                      <div className="styles_articleActionText__Ak8ML">
                        بیشتر بخوانید
                      </div>
                      <div className="styles_articleArrowContainer__PnnFP">
                        <div className="styles_articleArrowHover__338p3">
                          <img
                            alt="arrow-right-blue"
                            loading="lazy"
                            width="16"
                            height="16"
                            decoding="async"
                            className="styles_articleArrow__7l7Ui"
                            src="/assets/arrow-right-blue.svg"
                          />
                        </div>
                        <div className="styles_articleArrow__7l7Ui">
                          <img
                            alt="arrow-right-midnight"
                            loading="lazy"
                            width="16"
                            height="16"
                            decoding="async"
                            className="styles_articleArrow__7l7Ui"
                            src="/assets/arrow-right-midnight.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Need help card */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_needHelpCardContainer">
              <div className="styles_container">
                <div className="styles_card">
                  <div className="styles_textWrapper">
                    <div className="styles_title">نیاز به کمک حقوقی دارید؟</div>
                    <div className="styles_description">سؤال حقوقی خود را از ویکیلاک بپرسید و پاسخ‌های سریع و رایگان دریافت کنید!</div>
                  </div>
                  <div className="styles_imageWrapper">
                    <a
                      href="/chat?newCase=true"
                      className="styles_buttonWrapper styles_startCaseButton"
                      style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
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
                            style={{ color: 'transparent' }}
                            src="/assets/ai-tech/arrow-right-blue.svg"
                          />
                        </div>
                        <div className="styles_arrowIconWrapper">
                          <img
                            alt="arrow-right-white"
                            loading="lazy"
                            width="16"
                            height="16"
                            className="styles_arrowIcon"
                            style={{ color: 'transparent' }}
                            src="/assets/ai-tech/arrow-right-white.svg"
                          />
                        </div>
                      </div>
                    </a>
                    <div className="styles_backgroundColour"></div>
                    <div className="styles_backgroundSquare" style={{ backgroundColor: '#F0EFEC' }}></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Insights;
