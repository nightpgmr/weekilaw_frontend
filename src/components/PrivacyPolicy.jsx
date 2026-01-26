import React from 'react';
import PageLayout from './PageLayout.jsx';
import '../styles/sailing.css';

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="layout_content">
        {/* Hero */}
        <div className="styles_heroContainer">
          <div className="styles_innerWidthWrapper">
            <div className="styles_heroTitleContainer" style={{ maxWidth: '50%' }}>
              <div className="styles_breadcrumbsContainer">
                <a href="/" className="styles_breadcrumb">
                  خانه
                </a>
                <span className="styles_breadcrumb">&nbsp;/&nbsp;</span>
                <span className="styles_breadcrumb styles_bold">سیاست حفظ حریم خصوصی</span>
              </div>
              <h1 className="styles_heroTitle">سیاست حفظ حریم خصوصی کاربران ویکیلا</h1>
            </div>
            <div className="styles_heroImageContainer">
              <div className="styles_heroImageWrapper">
                <img
                  alt="تصویر قهرمان حریم خصوصی"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroImage"
                  style={{ color: 'transparent' }}
                  src="/assets/privacy-hero.webp"
                />
              </div>
            </div>
            <div className="styles_heroIconWrapper">
              <div className="styles_heroIconContainer">
                <img
                  alt="آیکون پس‌زمینه قهرمان"
                  loading="lazy"
                  width="0"
                  height="0"
                  className="styles_heroIcon"
                  style={{ color: 'transparent' }}
                  src="/assets/hero-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="styles_widthWrapper">
          <div className="styles_innerWidthWrapper">
            <div className="styles_contentTextWrapper">
              <div className="styles_descriptionText">
                <h2>مقدمه</h2>
                <p>
                  حریم خصوصی کاربران برای ما در ویکیلا بسیار اهمیت دارد. این سیاست حفظ حریم خصوصی نحوه جمع‌آوری، استفاده، نگهداری و حفاظت از اطلاعات شخصی شما را توضیح می‌دهد. با استفاده از خدمات ویکیلا، شما موافقت خود را با این سیاست اعلام می‌دارید.
                </p>

                <h2>اطلاعات جمع‌آوری شده</h2>
                <h3>۱. اطلاعات ارائه شده توسط کاربر</h3>
                <p>
                  • نام و نام خانوادگی<br />
                  • شماره تلفن همراه<br />
                  • آدرس ایمیل<br />
                  • اطلاعات مربوط به سوالات حقوقی
                </p>

                <h3>۲. اطلاعات فنی</h3>
                <p>
                  • آدرس IP<br />
                  • نوع دستگاه و مرورگر<br />
                  • زمان و مدت استفاده از خدمات<br />
                  • کوکی‌ها و داده‌های مشابه
                </p>

                <h2>نحوه استفاده از اطلاعات</h2>
                <p>
                  اطلاعات شما برای اهداف زیر استفاده می‌شود:<br />
                  • ارائه خدمات حقوقی<br />
                  • بهبود کیفیت خدمات<br />
                  • ارتباط با شما<br />
                  • رعایت الزامات قانونی<br />
                  • تحلیل آماری (به صورت ناشناس)
                </p>

                <h2>حفاظت از اطلاعات</h2>
                <p>
                  • از فناوری‌های امنیتی پیشرفته برای حفاظت از اطلاعات استفاده می‌کنیم.<br />
                  • دسترسی به اطلاعات شخصی محدود به پرسنل مجاز است.<br />
                  • اطلاعات شما بر روی سرورهای امن ذخیره می‌شود.<br />
                  • مطابق با قانون حمایت از حریم خصوصی در فضای مجازی عمل می‌کنیم.
                </p>

                <h2>اشتراک‌گذاری اطلاعات</h2>
                <p>
                  اطلاعات شما به شرح زیر به اشتراک گذاشته می‌شود:<br />
                  • با رضایت شما<br />
                  • در صورت الزام قانونی<br />
                  • با ارائه‌دهندگان خدمات فنی (با حفظ حریم خصوصی)<br />
                  • هرگز اطلاعات شما را برای مقاصد تجاری نمی‌فروشیم.
                </p>

                <h2>کوکی‌ها و فناوری‌های مشابه</h2>
                <p>
                  • از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کنیم.<br />
                  • می‌توانید کوکی‌ها را در تنظیمات مرورگر خود غیرفعال کنید.<br />
                  • برخی از ویژگی‌ها ممکن است بدون کوکی‌ها کار نکنند.
                </p>

                <h2>حقوق کاربران</h2>
                <h3>بر اساس قانون حمایت از حریم خصوصی، شما حق دارید:</h3>
                <p>
                  • دسترسی به اطلاعات شخصی خود<br />
                  • اصلاح اطلاعات نادرست<br />
                  • حذف اطلاعات (در شرایط خاص)<br />
                  • اعتراض به پردازش اطلاعات<br />
                  • انتقال اطلاعات به سرویس دیگر
                </p>

                <h2>حفاظت از داده‌های کودکان</h2>
                <p>
                  • خدمات ما برای افراد بالای ۱۸ سال طراحی شده است.<br />
                  • در صورت شناسایی کاربر زیر ۱۸ سال، حساب کاربری حذف خواهد شد.<br />
                  • والدین می‌توانند برای حذف اطلاعات فرزند خود با ما تماس بگیرند.
                </p>

                <h2>تغییرات در سیاست</h2>
                <p>
                  • این سیاست ممکن است تغییر کند.<br />
                  • تغییرات از طریق سامانه اطلاع‌رسانی خواهد شد.<br />
                  • استفاده مستمر به منزله پذیرش سیاست جدید است.
                </p>

                <h2>تماس با ما</h2>
                <p>
                  برای سوالات مربوط به حریم خصوصی، می‌توانید از طریق راه‌های زیر با ما تماس بگیرید:<br />
                  • ایمیل: privacy@weekila.com<br />
                  • تلفن: ۰۲۱-۱۲۳۴۵۶۷۸<br />
                  • آدرس: تهران، ایران
                </p>

                <h2>قانون حاکم</h2>
                <p>
                  این سیاست تابع قانون حمایت از حریم خصوصی در فضای مجازی مصوب مجلس شورای اسلامی و سایر قوانین جمهوری اسلامی ایران است.
                </p>

                <p><strong>تاریخ آخرین به‌روزرسانی: ۱۴۰۳/۰۱/۲۶</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;