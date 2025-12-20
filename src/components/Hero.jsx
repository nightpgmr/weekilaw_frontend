import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">چت حقوقی هوش مصنوعی رایگان، پاسخ‌ها و کمک ۲۴ ساعته در ایران</h1>
          <p className="hero-description">
            سؤالات حقوقی بپرسید و پاسخ‌های رایگان و فوری از دستیار هوش مصنوعی ما دریافت کنید.
            ۲۴ ساعته در دسترس برای کمک به مسائل حقوقی در سراسر ایران.
          </p>
          <div className="hero-image">
            <img 
              src="/assets/header-hero-1-1x.webp" 
              alt="Weekilaw Hero" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

