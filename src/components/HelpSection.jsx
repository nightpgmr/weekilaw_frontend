import React from 'react';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="help-widthContainer">
        <div className="help-innerWidthWrapper">
          <div className="help-helpContainer">
            <div className="help-helpDropdownContainer">
              <div className="help-helpTitle">سؤالات متداول</div>
              {/* FAQ content preserved from original */}
            </div>
            <div className="help-helpButtonContainer">
              <a href="/en-us/faqs" className="button-buttonContainer help-helpButton">
                <div className="button-buttonText help-helpButtonText">سؤالات متداول</div>
                <div className="button-buttonArrow help-helpButtonArrow">
                  <div className="button-arrowIconWrapperHover">
                    <img src="/assets/arrow-right-blue.svg" alt="فلش راست سفید" 
                         className="button-arrowIcon" width="16" height="16" />
                  </div>
                  <div className="button-arrowIconWrapper">
                    <img src="/assets/arrow-right-midnight.svg" alt="فلش راست" 
                         className="button-arrowIcon" width="16" height="16" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-contentContainer">
        <div className="content-sectionContainer">
          <div className="content-innerWidthWrapper">
            <div className="content-disclaimerTextWrapper">
              <div className="content-disclaimer" 
                   dangerouslySetInnerHTML={{
                     __html: '<b>سلب مسئولیت</b>: محتوای ارائه شده در این وب‌سایت فقط برای اهداف اطلاعاتی است و نباید به عنوان جایگزینی برای مشاوره حقوقی مورد اعتماد قرار گیرد. به گیرندگان توصیه می‌شود قبل از اجرای هر توصیه‌ای در اینجا با مشاور حقوقی واجد شرایط مشورت کنند. Weekilaw مسئولیت اقدامات انجام شده بر اساس این اطلاعات را نخواهد داشت.'
                   }}>
              </div>
              <div className="content-disclaimer content-disclaimerLawyer" 
                   dangerouslySetInnerHTML={{
                     __html: '* لطفاً توجه داشته باشید که اگر تصمیم به همکاری با یک وکیل بگیرید، ممکن است هزینه‌هایی برای خدمات خود دریافت کنند.'
                   }}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="input_portal_id" className="home-inputPortal"></div>
    </section>
  );
};

export default HelpSection;

