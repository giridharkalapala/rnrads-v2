import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Users } from 'lucide-react';
import { introData, companyData } from '../data/websiteData';

export default function IntroSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="intro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text Content */}
          <div className="intro-text-col">
            <span className="section-eyebrow">{introData.eyebrow}</span>
            <h2
              className="section-title"
              style={{
                fontSize: '44px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#061A33',
                marginBottom: '22px',
                textTransform: 'uppercase',
              }}
            >
              {introData.headingStart}{' '}
              <span style={{ color: '#00A9E8' }}>{introData.headingHighlight}</span>
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#475569',
                marginBottom: '36px',
                maxWidth: '540px',
              }}
            >
              {introData.description}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <Link to="/contact" className="btn btn-cyan">
                <span>GET A QUOTE</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`tel:${companyData.phoneRaw}`}
                className="btn btn-phone-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRadius: '9999px',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#00A9E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <Phone size={14} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '14.5px', color: '#061A33' }}>
                  {companyData.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Image with Floating Card */}
          <div className="intro-image-col" style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(6, 26, 51, 0.12)',
                position: 'relative',
              }}
            >
              <img
                src={introData.image}
                alt={introData.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
            </div>

            {/* Floating Statistics Card */}
            <div
              className="floating-stat-box floating-stat-anim"
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-20px',
                backgroundColor: '#FFFFFF',
                padding: '20px 26px',
                borderRadius: '16px',
                boxShadow: '0 14px 32px rgba(6, 26, 51, 0.16)',
                border: '1px solid #E5EFF5',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                zIndex: 3,
                maxWidth: '280px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0, 169, 232, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Users size={26} color="#00A9E8" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#061A33',
                    lineHeight: 1.1,
                  }}
                >
                  {introData.floatingStat.value}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B', marginTop: '2px' }}>
                  {introData.floatingStat.label1}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>
                  {introData.floatingStat.label2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
