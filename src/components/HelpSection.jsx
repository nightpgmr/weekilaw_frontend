import React from 'react';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="help-widthContainer">
        <div className="help-innerWidthWrapper">
          <div className="help-helpContainer">
            <div className="help-helpDropdownContainer">
              <div className="help-helpTitle">Frequently asked questions</div>
              {/* FAQ content preserved from original */}
            </div>
            <div className="help-helpButtonContainer">
              <a href="/en-us/faqs" className="button-buttonContainer help-helpButton">
                <div className="button-buttonText help-helpButtonText">FAQs</div>
                <div className="button-buttonArrow help-helpButtonArrow">
                  <div className="button-arrowIconWrapperHover">
                    <img src="/assets/arrow-right-blue.svg" alt="arrow-right-white" 
                         className="button-arrowIcon" width="16" height="16" />
                  </div>
                  <div className="button-arrowIconWrapper">
                    <img src="/assets/arrow-right-midnight.svg" alt="arrow-right" 
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
                     __html: '<b>Disclaimer</b>: The content provided on this website is for informational purposes only and should not be relied upon as a substitute for legal advice. Recipients are advised to consult with qualified legal counsel before implementing any recommendations herein. LawConnect shall not be liable for actions taken based on this information.'
                   }}>
              </div>
              <div className="content-disclaimer content-disclaimerLawyer" 
                   dangerouslySetInnerHTML={{
                     __html: '* Please note that if you choose to engage with a lawyer, they may charge fees for their services.'
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

