import React from 'react';
import WhyChooseCard from './WhyChooseCard';
import { benefitsData } from '../data/websiteData';

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div>
            <span className="section-eyebrow">WHY CHOOSE RNR ADS</span>
            <h2
              className="section-title"
              style={{
                fontSize: '40px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#061A33',
              }}
            >
              Why Leading Brands<br />
              <span>Choose RNR Ads</span>
            </h2>
          </div>

          <div style={{ maxWidth: '460px' }}>
            <p className="section-subtitle">
              We deliver impactful outdoor advertising that helps your brand get noticed, remembered and grow in Hyderabad.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="benefits-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {benefitsData.map((benefit, idx) => (
            <WhyChooseCard key={idx} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
