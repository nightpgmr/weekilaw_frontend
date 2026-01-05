import React from 'react';

const SummaryModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="intro-modal_modalOverlay__NWqo3" onClick={handleOverlayClick}>
      <div className="intro-modal_modalContent__rS1BA">
        <div className="intro-modal_modalContentContainer__3O9ST" style={{ display: 'flex', maxHeight: '80vh' ,overflowY: 'hidden'}}>
          {content.desktopImage && (
            <div className="intro-modal_modalDesktopImageContainer__vG73V">
              <img
                alt={content.title}
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                className="intro-modal_modalImage__PgGy4 intro-modal_desktop__8tqEF"
                src={content.desktopImage}
                style={{ color: 'transparent', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="intro-modal_modalContentWrapper__W2M0H">
            <div className="intro-modal_modalBody___B1CF">
              <div className="intro-modal_moreInfo__J0JtO">
                <div className="intro-modal_moreInfoIconContainer__y95Yl">
                  <img
                    alt="light-bulb"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    className="intro-modal_infoIcon__w04cQ"
                    src="/assets/light-bulb.svg"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="intro-modal_moreInfoText__5p5hH">اطلاعات بیشتر</div>
              </div>
              <h2 className="intro-modal_modalTitle__q342C">{content.title}</h2>
              <div className="intro-modal_modalImageContainer__ZBTQd">
                {content.tabletImage && (
                  <img
                    alt="intro-modal-image"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    className="intro-modal_modalImage__PgGy4 intro-modal_tablet__b4ave"
                    src={content.tabletImage}
                    style={{ color: 'transparent' }}
                  />
                )}
                {content.mobileImage && (
                  <img
                    alt="intro-modal-image"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    className="intro-modal_modalImage__PgGy4 intro-modal_mobile__Vs_2I"
                    src={content.mobileImage}
                    style={{ color: 'transparent' }}
                  />
                )}
              </div>
              <div style={{ height: '100%', overflowY: 'auto' }}>
                <div
                  className="intro-modal_modalText__KrS5v"
                  dangerouslySetInnerHTML={{ __html: content.text }}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="intro-modal_closeButton__qeeB1" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 3.75C19.9142 3.75 20.25 4.08579 20.25 4.5C20.25 4.70708 20.1661 4.89456 20.0304 5.03028L13.0607 12L20.0304 18.9696C20.1661 19.1054 20.25 19.2929 20.25 19.5C20.25 19.9142 19.9142 20.25 19.5 20.25C19.2894 20.25 19.099 20.1632 18.9628 20.0233L12.0001 13.0606L5.03039 20.0303C4.89466 20.166 4.70713 20.25 4.5 20.25C4.08579 20.25 3.75 19.9142 3.75 19.5C3.75 19.2912 3.83535 19.1023 3.97308 18.9663L10.9394 12L3.97671 5.03727C3.83685 4.90104 3.75 4.71066 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75C4.70711 3.75 4.89462 3.83395 5.03034 3.96968L12.0001 10.9393L18.9663 3.97308C19.1023 3.83535 19.2912 3.75 19.5 3.75Z" fill="#B0B7BD"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;

