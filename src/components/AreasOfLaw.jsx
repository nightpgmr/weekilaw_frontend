import React from 'react';

const AreasOfLaw = () => {
  const areas = [
    { name: 'حقوق خانواده', image: 'family-law.webp' },
    { name: 'حقوق کار', image: 'employment-law.webp' },
    { name: 'حقوق جراحات شخصی', image: 'personal-injury-law.webp' },
    { name: 'حقوق املاک', image: 'property-law.webp' },
    { name: 'حقوق کیفری', image: 'criminal-law.webp' },
    { name: 'حقوق تجاری', image: 'commercial-law-us.webp' },
    { name: 'حقوق مهاجرت', image: 'immigration-law.webp' },
    { name: 'حقوق املاک و وصیت‌نامه', image: 'estate-and-probate-law.webp' },
    { name: 'دادخواهی', image: 'litigation-law.webp' },
  ];

  return (
    <section className="areas-of-law-section">
      <div className="areas-container">
        <h2 className="areas-title">زمینه‌های حقوقی</h2>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              <img src="/assets/" + area.image} alt={area.name} />
              <h3>{area.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfLaw;

