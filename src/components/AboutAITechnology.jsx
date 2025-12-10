import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/aiTech.css';

const AboutAITechnology = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        <div className="styles_pageGapWrapper">
          <div className="page-header_helpTitleContainer styles_heroClass">
            <div className="page-header_widthWrapper">
              <div className="page-header_innerWidthWrapper styles_heroInnerClassName">
                <div className="breadcrumb_breadcrumbContainer">
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClass">
                    <a href="/en-us/about">About</a>
                  </span>
                  <span className="breadcrumb_breadcrumbItem styles_breadcrumbClass">
                    &nbsp;/&nbsp;
                    <a href="/en-us/about/ai-technology">Our AI technology</a>
                  </span>
                </div>
                <h1 className="page-header_title styles_headerClass">Harnesses the power of advanced AI</h1>
                <div className="page-header_heroIconContainer">
                  <img
                    alt="hero-icon"
                    width="260"
                    height="260"
                    loading="lazy"
                    className="page-header_heroIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/hero-icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="styles_introContainer">
            <div className="styles_widthWrapper">
              <div className="styles_innerWidthWrapper">
                <div className="intro_introBackgroundContainer">
                  <img
                    alt="AI Technology Background"
                    loading="lazy"
                    className="intro_introBackgroundImage"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/background-ai-tech.webp"
                  />
                </div>
                <div className="intro_introDescription">
                  Our AI legal assistant provides easy-to-understand, tailored answers to your legal questions.
                  If you need professional advice, LawConnect makes it simple to find the right lawyer.
                </div>

                <div className="intro_triCardStackContainer">
                  <div className="intro_triCardStackContainerInner">
                    <div
                      className="triple-highlight_cardStackContainer triple-highlight_noBackground"
                      style={{ '--card-shared-height': '296px' }}
                    >
                      <div className="triple-highlight_itemCardContainer intro_itemCardClassName">
                        <img
                          alt="triple-highlight-Quality Data-0"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/stair-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">Quality Data</div>
                        <div className="triple-highlight_itemCardDescription intro_itemCardDescriptionClassName">
                          Our AI is trained on thousands of publicly available legal issues and relevant local laws.
                          It’s designed to offer helpful, relevant information so you can better understand your
                          situation.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer intro_mainItemCardClassName">
                        <img
                          alt="triple-highlight-Intelligent Processing-1"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/light-bulb-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">Intelligent Processing</div>
                        <div className="triple-highlight_itemCardDescription intro_mainItemCardDescriptionClassName">
                          Our AI uses your chat and questionnaire responses to deliver clear, relevant insights. If you
                          choose to seek professional advice, LawConnect makes it easy to find the right lawyer.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer intro_itemCardClassName">
                        <img
                          alt="triple-highlight-Simple to Use-2"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/message-circle.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">Simple to Use</div>
                        <div className="triple-highlight_itemCardDescription intro_itemCardDescriptionClassName">
                          At home or on the go, our AI asks simple follow-up questions to understand your issue and
                          provides a tailored report to help you navigate your next steps.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="styles_needLawyerContainer">
            <div className="need-lawyer-card_wrapperContainer">
              <div className="need-lawyer-card_widthWrapper">
                <div className="need-lawyer-card_contentContainer need-lawyer-card_left">
                  <div className="need-lawyer-card_imageWrapper">
                    <img
                      alt="need-a-lawyer-image"
                      loading="lazy"
                      className="need-lawyer-card_image"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/need-a-lawyer-desktop.webp"
                    />
                  </div>
                  <div className="need-lawyer-card_imagePositionWrapper">
                    <div className="need-lawyer-card_imageTextContainer">
                      <div className="need-lawyer-card_imageTextHeader">Helping you find the right lawyer</div>
                      <div className="need-lawyer-card_imageTextDescription">
                        We help you find the right legal expert from our extensive network of lawyers, making it easy to
                        connect with the lawyer best suited to your situation.
                      </div>
                      <div className="need-lawyer-card_imageTextButton">
                        <a className="button_buttonContainer need-lawyer-card_buttonContainer" href="/en-us/about/legal-network">
                          <div className="button_buttonText need-lawyer-card_buttonText">Our legal network</div>
                          <div className="button_buttonArrow">
                            <div className="button_arrowIconWrapperHover">
                              <img
                                alt="arrow-right-white"
                                loading="lazy"
                                width="16"
                                height="16"
                                className="button_arrowIcon"
                                style={{ color: 'transparent' }}
                                src="/assets/ai-tech/arrow-right-blue.svg"
                              />
                            </div>
                            <div className="button_arrowIconWrapper">
                              <img
                                alt="arrow-right"
                                loading="lazy"
                                width="16"
                                height="16"
                                className="button_arrowIcon"
                                style={{ color: 'transparent' }}
                                src="/assets/ai-tech/arrow-right-blue.svg"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="need-lawyer-card_imageWrapper">
                    <img
                      alt="need-a-lawyer-image"
                      loading="lazy"
                      className="need-lawyer-card_image"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/need-a-lawyer-desktop.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="styles_statsContainer">
            <div className="styles_statsContainerInner">
              <div className="stats_statsContainer">
                <div className="stats_statsWrapper">
                  <img
                    alt="Stats Circle"
                    loading="lazy"
                    className="stats_statsCircle"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/about-stats-circle.svg"
                  />
                  <img
                    alt="Stats Icon"
                    loading="lazy"
                    className="stats_statsLogoIcon"
                    style={{ color: 'transparent' }}
                    src="/assets/ai-tech/logo-icon.svg"
                  />
                  <div className="stats_statsCard">
                    <img
                      alt="User"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/user-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">Unique user accounts</div>
                  </div>
                  <div className="stats_statsCard">
                    <img
                      alt="Briefcase"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/briefcase-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">Cases created</div>
                  </div>
                  <div className="stats_statsCard">
                    <img
                      alt="Chat Tick"
                      loading="lazy"
                      width="40"
                      height="40"
                      className="stats_statsIcon"
                      style={{ color: 'transparent' }}
                      src="/assets/ai-tech/chat-tick-white.svg"
                    />
                    <div className="stats_statsTitle"></div>
                    <div className="stats_statsDescription">Answers provided</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="styles_fileAnalysisContainer">
            <div className="styles_widthWrapper">
              <div className="styles_innerWidthWrapper">
                <div className="file-analysis_fileHeader">
                  Our AI can analyse files and generates documents that you can use to make informed decisions
                </div>
                <div className="file-analysis_triCardStackContainer">
                  <div className="file-analysis_triCardStackContainerInner">
                    <div
                      className="triple-highlight_cardStackContainer triple-highlight_noBackground"
                      style={{ '--card-shared-height': '272px' }}
                    >
                      <div className="triple-highlight_itemCardContainer file-analysis_itemCardClassName">
                        <img
                          alt="triple-highlight-File analysis-0"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/attachment-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">File analysis</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_itemCardDescriptionClassName">
                          Our AI can interpret files uploaded into the chat engine. This can help shorten the chat
                          process, or simply add context to support your case.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer file-analysis_mainItemCardClassName">
                        <img
                          alt="triple-highlight-Deeper insights-1"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/search-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">Deeper insights</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_mainItemCardDescriptionClassName">
                          Building on the standard report, we generate a detailed report with deeper insights. This
                          includes more detailed answers, key actions, different strategies, and a risk analysis.
                        </div>
                      </div>
                      <div className="triple-highlight_itemCardContainer file-analysis_itemCardClassName">
                        <img
                          alt="triple-highlight-Standard report-2"
                          loading="lazy"
                          width="100"
                          height="100"
                          className="triple-highlight_itemCardIcon"
                          style={{ color: 'transparent' }}
                          src="/assets/ai-tech/file-blue.svg"
                        />
                        <div className="triple-highlight_itemCardTitle">Standard report</div>
                        <div className="triple-highlight_itemCardDescription file-analysis_itemCardDescriptionClassName">
                          Users receive a report when they create a case. This includes a summary, tailored answers to
                          their questions and a set of potential next steps.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="styles_widthWrapper">
            <div className="styles_innerWidthWrapper">
              <div className="styles_needHelpCardContainer">
                <div className="styles_container">
                  <div className="styles_card">
                    <div className="styles_textWrapper">
                      <div className="styles_title">Need help with an issue?</div>
                      <div className="styles_description">Ask LawConnect your legal question for quick, free answers!</div>
                    </div>
                    <div className="styles_imageWrapper">
                      <a
                        href="/chat?newCase=true"
                        className="styles_buttonWrapper styles_startCaseButton"
                        style={{ '--need-help-full-colour': 'linear-gradient(135deg, #B78FE2 -20%, #0E5FE3 80%)' }}
                      >
                        <div className="styles_buttonText">Start now</div>
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

        </div>
      </div>
    </PageLayout>
  );
};

export default AboutAITechnology;


