import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS, apiCall } from '../utils/api.js';
import '../styles/UnderConstruction.css';

const UnderConstruction = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Listen for Ctrl+Shift+B to bypass under construction page
      if (event.ctrlKey && event.shiftKey && event.key === 'B') {
        event.preventDefault();
        setShowOverlay(false);
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // If user pressed the bypass key, don't show the overlay
  if (!showOverlay) {
    return null;
  }

//   const checkUnderConstructionStatus = async () => {
//     try {
//       // Try to check the under construction status from the backend
//       const response = await fetch('https://panel.weekilaw.com/api/under-construction', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setIsUnderConstruction(data.enabled || false);
//       } else {
//         // If API fails, assume site is live
//         setIsUnderConstruction(false);
//       }
//     } catch (error) {
//       console.error('Failed to check under construction status:', error);
//       // If API fails, assume site is live
//       setIsUnderConstruction(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="under-construction-loading">
//         <div className="loading-spinner"></div>
//       </div>
//     );
//   }

//   if (!isUnderConstruction) {
//     return null; // Don't show anything if not under construction
//   }

  return (
    <div className="under-construction-overlay">
      <div className="under-construction-modal">
        <div className="construction-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7 6.3a1 1 0 0 0-1.4 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l1.47-1.47a1 1 0 0 0 0-1.4l-1.6-1.6Z" fill="currentColor"/>
            <path d="M17.84 9.16a1 1 0 0 0-1.4 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l1.47-1.47a1 1 0 0 0 0-1.4l-1.6-1.6Z" fill="currentColor"/>
            <path d="M20.29 6.71a1 1 0 0 0-1.42 1.41l.3.3a1 1 0 0 0 1.41 0l.3-.3a1 1 0 0 0 0-1.41l-.3-.3Z" fill="currentColor"/>
            <path d="M6.29 17.71a1 1 0 0 0-1.42 1.41l.3.3a1 1 0 0 0 1.41 0l.3-.3a1 1 0 0 0 0-1.41l-.3-.3Z" fill="currentColor"/>
            <path d="M9.16 6.16a1 1 0 0 0-1.4 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l1.47-1.47a1 1 0 0 0 0-1.4l-1.6-1.6Z" fill="currentColor"/>
          </svg>
        </div>

        <h1 className="construction-title">سایت در حال ساخت است</h1>

        <p className="construction-message">
          ما در حال آماده‌سازی و بهبود وب‌سایت هستیم. به زودی با امکانات جدید به شما خواهیم پیوست.
        </p>

        <div className="construction-details">
          <div className="detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>طراحی و توسعه رابط کاربری</span>
          </div>

          <div className="detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>بهبود عملکرد و سرعت</span>
          </div>

          <div className="detail-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>افزودن امکانات جدید</span>
          </div>
        </div>

        <div className="construction-contact">
          <p>برای اطلاعات بیشتر با ما تماس بگیرید:</p>
          <a href="mailto:lian@mail.weekilaw.com" className="contact-link">
            lian@mail.weekilaw.com
          </a>
        </div>

        <div className="construction-footer">
          <p>© 2024 Weekilaw. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
