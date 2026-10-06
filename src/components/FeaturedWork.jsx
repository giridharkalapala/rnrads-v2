import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { featuredGallery } from '../data/websiteData';

export default function FeaturedWork() {
  return (
    <section className="section section-dark" style={{ backgroundColor: '#061A33' }}>
      <div className="container">
        {/* Section Header */}
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
            <span className="section-eyebrow">FEATURED WORK</span>
            <h2
              className="section-title"
              style={{
                fontSize: '40px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              REAL BRANDS.<br />
              <span style={{ color: '#00A9E8' }}>REAL IMPACT.</span>
            </h2>
          </div>

          <div style={{ maxWidth: '460px' }}>
            <p className="section-subtitle" style={{ marginBottom: '18px', color: 'rgba(255, 255, 255, 0.75)' }}>
              Explore our recent auto rickshaw advertising campaigns across Hyderabad and see how brands are getting noticed.
            </p>
            <Link to="/clients" className="btn btn-dark-outline">
              <span>View Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 5-Item Gallery Row */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
          }}
        >
          {featuredGallery.map((item) => (
            <div
              key={item.id}
              className="gallery-card hover-card-effect"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#0A2242',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                aspectRatio: '1 / 1.15',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              {/* Background Auto Image */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="card-img-zoom"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Bottom Gradient Shade for Label */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 26, 51, 0.1) 40%, rgba(6, 26, 51, 0.95) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Category Label at bottom */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '16px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(6, 26, 51, 0.75)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.3px',
                  }}
                >
                  {item.title}
                </span>
                <ChevronRight size={16} color="#00A9E8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
