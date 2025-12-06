import React from 'react';

const AreasOfLaw = () => {
  const areas = [
    { name: 'Family law', image: 'family-law.webp' },
    { name: 'Employment law', image: 'employment-law.webp' },
    { name: 'Personal injury law', image: 'personal-injury-law.webp' },
    { name: 'Property law', image: 'property-law.webp' },
    { name: 'Criminal law', image: 'criminal-law.webp' },
    { name: 'Commercial law', image: 'commercial-law-us.webp' },
    { name: 'Immigration law', image: 'immigration-law.webp' },
    { name: 'Estate and probate law', image: 'estate-and-probate-law.webp' },
    { name: 'Litigation law', image: 'litigation-law.webp' },
  ];

  return (
    <section className="areas-of-law-section">
      <div className="areas-container">
        <h2 className="areas-title">Areas of Law</h2>
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

