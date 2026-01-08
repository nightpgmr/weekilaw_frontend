import React from 'react';

const Footer = () => {
  return (
    <footer className="style-module__footer">
      <div className="style-module__widthWrapper">
        <div className="style-module__logoContainer style-module__large" style={{display: 'flex', justifyContent: 'space-between'}}>
          <a href="/" className="style-module__logo">
            <img 
              width="202" 
              height="28" 
              alt="Weekilaw" 
              loading="lazy"
              className="style-module__logoImage"
              src="/assets/logo-icon.png" 
            />
          </a>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=681149&Code=fG5Z7QqJnj0GzhWs9K0DBxGIQ6XtFIbs" style={{display: 'inline-block'}}>
                <img referrerPolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=681149&Code=fG5Z7QqJnj0GzhWs9K0DBxGIQ6XtFIbs" alt="نشان اعتماد الکترونیکی" style={{height: '100px', width: 'auto', cursor: 'pointer'}} code="fG5Z7QqJnj0GzhWs9K0DBxGIQ6XtFIbs" />
              </a>
              <img 
                src="/assets/guild-logo.eps" 
                alt="آرم سازمان نظام صنفی رایانه ای کشور" 
                style={{height: '100px', width: 'auto', display: 'block'}}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="style-module__gridContainer style-module__large" style={{ margin: '60px 0' }}>
          <div className="style-module__column">
            <div className="style-module__headerLabel">مرور</div>
            <a href="/chat" className="style-module__menuItem style-module__askQuestion">
              <span>یک سؤال بپرسید</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="#191919" className="style-module__menuIcon">
                <style>{`.spin { animation: rotate 3s linear infinite; transform-box: fill-box; transform-origin: 50% 50%; } @keyframes rotate { to { transform: rotate(360deg); } }`}</style>
                <g>
                  <path d="M52.4749 47.5251L50 40L47.5251 47.5251L40 50L47.5251 52.4749L50 60L52.4749 52.4749L60 50L52.4749 47.5251Z"></path>
                  <path fillRule="evenodd" clipRule="evenodd" className="spin" d="M30 4L36.4347 23.5653L56 30L36.4347 36.4347L30 56L23.5653 36.4347L4 30L23.5653 23.5653L30 4ZM33.266 26.734L43.1967 30L33.266 33.266L30 43.1967L26.734 33.266L16.8033 30L26.734 26.734L30 16.8033L33.266 26.734Z"></path>
                </g>
              </svg>
            </a>
            <a href="/en-us/library" className="style-module__menuItem">زمینه‌های حقوقی</a>
            <a href="/en-us/about" className="style-module__menuItem">درباره</a>
            <a href="/en-us/about/legal-network" className="style-module__menuItem">برای وکلا</a>
            <a href="/account" className="style-module__menuItem">حساب کاربری</a>
          </div>
          <div className="style-module__column">
            <div className="style-module__headerLabel"></div>
            {/* <a href="/en-us/insights" className="style-module__menuItem">بینش‌ها</a> */}
            <a href="/faqs" className="style-module__menuItem">سؤالات متداول</a>
            <a href="/en-us/about/ai-technology" className="style-module__menuItem">فناوری هوش مصنوعی ما</a>
            <a href="/en-us/about/company" className="style-module__menuItem">شرکت</a>
            <a href="/en-us/contact-us" className="style-module__menuItem">تماس با ما</a>
          </div>
          <div className="style-module__column">
            <div className="style-module__headerLabel">زمینه‌های حقوقی</div>
            <a href="/en-us/commercial-law" className="style-module__menuItem">حقوق تجاری</a>
            <a href="/en-us/criminal-law" className="style-module__menuItem">حقوق کیفری</a>
            <a href="/en-us/employment-law" className="style-module__menuItem">حقوق کار</a>
            <a href="/en-us/estate-and-probate-law" className="style-module__menuItem">حقوق املاک و وصیت‌نامه</a>
          </div>
          <div className="style-module__column">
            <div className="style-module__headerLabel"></div>
            <a href="/en-us/family-law" className="style-module__menuItem">حقوق خانواده</a>
            <a href="/en-us/immigration-law" className="style-module__menuItem">حقوق مهاجرت</a>
            <a href="/en-us/litigation" className="style-module__menuItem">دادخواهی</a>
            <a href="/en-us/personal-injury-law" className="style-module__menuItem">حقوق جراحات شخصی</a>
          </div>
        </div>
        <div className="style-module__bottomBarContainer">
          <div className="style-module__bottomSocialContainer">
            <div className="style-module__socialContainer">
              <a href="https://www.facebook.com/asklawconnect" target="_blank" rel="noreferrer" aria-label="Facebook" className="style-module__socialIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#666666" className="style-module__socialIcon">
                  <path d="M28.376 16.0005C28.376 9.37286 23.0031 4 16.3755 4C9.74786 4 4.375 9.37286 4.375 16.0005C4.375 21.6283 8.24972 26.3507 13.4767 27.6477V19.6678H11.0022V16.0005H13.4767V14.4203C13.4767 10.3358 15.3252 8.44258 19.3353 8.44258C20.0957 8.44258 21.4075 8.59187 21.9442 8.74068V12.0648C21.661 12.0351 21.169 12.0202 20.5579 12.0202C18.5903 12.0202 17.83 12.7656 17.83 14.7035V16.0005H21.7498L21.0763 19.6678H17.83V27.9132C23.7721 27.1955 28.3765 22.1361 28.3765 16.0005H28.376Z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/asklawconnect/" target="_blank" rel="noreferrer" aria-label="Instagram" className="style-module__socialIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#666666" className="style-module__socialIcon">
                  <path d="M11.4052 4.08393C10.1284 4.14417 9.25643 4.34793 8.49418 4.64745C7.70529 4.95489 7.03665 5.36745 6.37136 6.03513C5.70607 6.70281 5.29639 7.37194 4.99111 8.16202C4.69566 8.92594 4.4955 9.79859 4.4391 11.0761C4.3827 12.3536 4.37022 12.7643 4.37646 16.023C4.3827 19.2817 4.3971 19.6902 4.45902 20.9704C4.51998 22.2469 4.72302 23.1186 5.02255 23.8811C5.33047 24.67 5.74255 25.3384 6.41048 26.0039C7.07841 26.6694 7.74705 27.0782 8.53906 27.3839C9.30227 27.6789 10.1752 27.88 11.4525 27.9359C12.7297 27.9918 13.1409 28.0048 16.3987 27.9986C19.6565 27.9923 20.0666 27.9779 21.3465 27.9172C22.6265 27.8565 23.4936 27.652 24.2563 27.3539C25.0452 27.0453 25.7141 26.6339 26.3792 25.9658C27.0442 25.2976 27.4537 24.628 27.7587 23.8374C28.0544 23.0742 28.2553 22.2013 28.3107 20.925C28.3666 19.6441 28.3798 19.2352 28.3736 15.9769C28.3673 12.7187 28.3527 12.3102 28.292 11.0305C28.2313 9.75083 28.028 8.88178 27.7287 8.11882C27.4203 7.32994 27.0087 6.66201 26.341 5.99601C25.6733 5.33001 25.0032 4.92081 24.2129 4.61649C23.4492 4.32105 22.5768 4.11969 21.2995 4.06449C20.0222 4.00929 19.6111 3.99513 16.3521 4.00137C13.0931 4.00761 12.6851 4.02153 11.4052 4.08393ZM11.5453 25.7771C10.3753 25.7262 9.74003 25.5318 9.31667 25.3691C8.75602 25.1531 8.35666 24.892 7.93474 24.4742C7.51281 24.0563 7.25361 23.6555 7.03473 23.0961C6.87032 22.6727 6.67232 22.0381 6.6176 20.8681C6.55808 19.6036 6.5456 19.2239 6.53864 16.0201C6.53168 12.8164 6.54392 12.4372 6.59936 11.1721C6.64928 10.0031 6.84488 9.36706 7.00737 8.94394C7.22337 8.38258 7.48353 7.98394 7.90234 7.56226C8.32114 7.14058 8.72074 6.8809 9.28067 6.66201C9.70355 6.49689 10.3381 6.30057 11.5077 6.24489C12.7732 6.18489 13.1524 6.17289 16.3557 6.16593C19.559 6.15897 19.9392 6.17097 21.2052 6.22665C22.3742 6.27753 23.0105 6.47121 23.4331 6.63465C23.994 6.85066 24.3931 7.1101 24.8148 7.52962C25.2365 7.94914 25.4964 8.3473 25.7153 8.90842C25.8807 9.3301 26.077 9.96443 26.1322 11.1347C26.1924 12.4002 26.2061 12.7796 26.2119 15.9827C26.2176 19.1857 26.2064 19.5661 26.1509 20.8307C26.0998 22.0007 25.9059 22.6362 25.7429 23.0601C25.5269 23.6205 25.2665 24.0201 24.8475 24.4415C24.4284 24.863 24.0293 25.1226 23.4691 25.3415C23.0467 25.5064 22.4114 25.7032 21.2429 25.7589C19.9773 25.8184 19.5981 25.8309 16.3936 25.8378C13.1891 25.8448 12.8111 25.8318 11.5456 25.7771M21.3281 9.58642C21.3285 9.87125 21.4135 10.1495 21.5721 10.3861C21.7308 10.6226 21.956 10.8068 22.2193 10.9154C22.4827 11.0239 22.7723 11.0519 23.0515 10.9959C23.3308 10.9398 23.5872 10.8022 23.7882 10.6004C23.9892 10.3986 24.1259 10.1418 24.181 9.8623C24.236 9.58285 24.2069 9.29334 24.0974 9.03041C23.9879 8.76747 23.8029 8.54291 23.5658 8.38514C23.3286 8.22736 23.05 8.14345 22.7652 8.14402C22.3834 8.14478 22.0175 8.29716 21.748 8.56765C21.4785 8.83814 21.3274 9.20459 21.3281 9.58642ZM10.2136 16.012C10.2203 19.4152 12.9841 22.1677 16.3867 22.1613C19.7892 22.1548 22.5437 19.3912 22.5372 15.988C22.5307 12.5848 19.7661 9.83147 16.3631 9.83819C12.9601 9.84491 10.2071 12.6092 10.2136 16.012ZM12.375 16.0076C12.3735 15.2165 12.6065 14.4427 13.0448 13.784C13.483 13.1253 14.1067 12.6114 14.837 12.3072C15.5674 12.003 16.3715 11.9222 17.1477 12.075C17.924 12.2278 18.6375 12.6073 19.198 13.1656C19.7586 13.724 20.141 14.436 20.2968 15.2116C20.4527 15.9872 20.3751 16.7917 20.0738 17.5232C19.7725 18.2547 19.261 18.8804 18.6041 19.3213C17.9471 19.7621 17.1742 19.9983 16.3831 19.9998C15.8577 20.0009 15.3373 19.8985 14.8516 19.6985C14.3659 19.4985 13.9243 19.2047 13.5521 18.834C13.1799 18.4632 12.8844 18.0228 12.6824 17.5379C12.4804 17.0529 12.376 16.533 12.375 16.0076Z"></path>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@asklawconnect" target="_blank" rel="noreferrer" aria-label="TikTok" className="style-module__socialIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#666666" className="style-module__socialIcon">
                  <path d="M27.6154 16.0127C27.6154 18.1511 27.6266 20.2895 27.6098 22.4275C27.6034 23.2508 27.5754 24.0814 27.2697 24.8651C26.5373 26.743 25.1374 27.7437 23.1516 27.928C22.4816 27.99 21.8047 27.9939 21.1309 27.9948C17.2995 28.0008 13.4678 28.003 9.63647 27.9939C8.75636 27.9918 7.87022 27.9969 7.01422 27.7287C5.31859 27.1969 4.23395 26.0618 3.8348 24.3432C3.66645 23.6189 3.63975 22.8499 3.63631 22.1011C3.61951 18.0684 3.62425 14.0358 3.63243 10.0032C3.63415 9.07951 3.62339 8.14682 3.93944 7.25848C4.58057 5.45725 5.86199 4.38892 7.74363 4.13486C8.73354 4.00094 9.7467 4.02247 10.7495 4.0074C11.9616 3.98974 13.1746 4.00912 14.3871 4.00998C16.8268 4.01127 19.266 4.00094 21.7057 4.01644C22.5712 4.02204 23.4396 4.03496 24.2836 4.29375C26.0628 4.83933 27.3696 6.37918 27.5306 8.33198C27.6137 9.33788 27.6094 10.3524 27.618 11.3635C27.6314 12.9132 27.6215 14.4634 27.6215 16.0131C27.6197 16.0131 27.6172 16.0127 27.6154 16.0127ZM14.8775 16.6504C14.8775 15.8306 14.8797 15.0141 14.8711 14.1973C14.8706 14.1538 14.7781 14.0801 14.7221 14.0737C11.6542 13.7077 9.56327 16.1587 9.49998 18.5752C9.46208 20.0118 9.96371 21.2256 11.0384 22.2139C12.8994 23.9251 15.9113 23.8373 17.6414 21.9938C18.5568 21.0181 18.9655 19.8572 18.9538 18.5266C18.9401 16.9626 18.95 15.3982 18.95 13.8338C18.95 13.7585 18.95 13.6836 18.95 13.5716C19.8219 14.1624 20.7304 14.531 21.7475 14.6417V11.54C21.676 11.5344 21.62 11.5301 21.5636 11.5262C20.9668 11.4862 20.3937 11.3411 19.9003 11.0039C19.0934 10.4523 18.5172 9.7181 18.2981 8.74278C18.2666 8.60197 18.1999 8.55848 18.0617 8.5602C17.588 8.56666 17.1144 8.56235 16.6412 8.56278C16.442 8.56278 16.3424 8.66154 16.3424 8.85904C16.3424 12.1528 16.3424 15.4465 16.3424 18.7402C16.3424 19.6767 15.7404 20.4958 14.8297 20.7606C13.8536 21.0443 12.9636 20.6598 12.4378 19.9131C11.5844 18.7006 12.2841 16.9592 13.736 16.6616C14.0904 16.5889 14.4723 16.6509 14.8784 16.6509L14.8775 16.6504Z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/lawconnect/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="style-module__socialIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#666666" className="style-module__socialIcon">
                  <path d="M25.3303 4C26.8037 4 27.9973 5.19366 27.9973 6.66699V25.333C27.9973 26.8063 26.8037 28 25.3303 28H6.66431C5.19097 28 3.99731 26.8063 3.99731 25.333V6.66699C3.99731 5.19366 5.19097 4 6.66431 4H25.3303ZM7.67407 24.667H11.2542V13.1104H7.67407V24.667ZM20.4602 12.7578C18.0337 12.758 16.9972 14.6316 16.9778 14.667V13.1104H13.5442V24.667H16.9778V18.6006C16.9778 16.974 17.7242 16.0078 19.1575 16.0078C20.4707 16.0079 21.1037 16.9374 21.1038 18.6006V24.667H24.6672V17.3506C24.6672 14.254 22.9102 12.7578 20.4602 12.7578ZM9.44751 7.33105C8.27757 7.33105 7.33043 8.28396 7.33032 9.46387C7.33032 10.6439 8.27751 11.5977 9.44751 11.5977C10.6174 11.5976 11.5637 10.6438 11.5637 9.46387C11.5636 8.28402 10.6174 7.33116 9.44751 7.33105Z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@asklawconnect" target="_blank" rel="noreferrer" aria-label="Youtube" className="style-module__socialIconContainer">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#666666" className="style-module__socialIcon">
                  <path d="M29.4149 9.12932C29.0929 7.89755 28.1441 6.92745 26.9394 6.59823C24.7558 6 16 6 16 6C16 6 7.2442 6 5.06058 6.59823C3.8559 6.9275 2.90711 7.89755 2.58509 9.12932C2 11.362 2 16.0202 2 16.0202C2 16.0202 2 20.6784 2.58509 22.9111C2.90711 24.1429 3.8559 25.0726 5.06058 25.4018C7.2442 26 16 26 16 26C16 26 24.7558 26 26.9394 25.4018C28.1441 25.0726 29.0929 24.1429 29.4149 22.9111C30 20.6784 30 16.0202 30 16.0202C30 16.0202 30 11.362 29.4149 9.12932ZM13.1363 20.2495V11.7909L20.4545 16.0203L13.1363 20.2495Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="style-module__copyright">
            <div>حق انتشار © {new Date().getFullYear()} LEAP Legal Software.</div>
            <div className="style-module__copyrightBottom">
              <div>تمام حقوق محفوظ است.&nbsp;</div>
              <div>
                <a href="/en-us/terms">شرایط</a> &amp; <a href="/en-us/privacy">سیاست حفظ حریم خصوصی</a>.
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
