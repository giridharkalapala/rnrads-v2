import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { experienceData } from '../data/websiteData';

export default function ExperienceSection() {
  return (
    <section
      className="section section-dark"
      style={{
        backgroundColor: '#061A33',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant Translucent Watermark 15+ */}
      <div
        style={{
          position: 'absolute',
          left: '30%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '320px',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        15+
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="experience-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left Text */}
          <div>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '2px',
                color: '#00A9E8',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              OUR HERITAGE & EXPERTISE
            </span>

            <h2
              className="section-title"
              style={{
                fontSize: '44px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '22px',
              }}
            >
              <span style={{ color: '#00A9E8' }}>{experienceData.eyebrowYears}</span>
              <br />
              {experienceData.headingSuffix}
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              {experienceData.description}
            </p>

            <Link to="/contact" className="btn btn-cyan">
              <span>START YOUR CAMPAIGN</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Image */}
          <div>
            <div
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <img
                src={experienceData.image}
                alt={experienceData.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
