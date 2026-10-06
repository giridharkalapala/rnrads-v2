import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ eyebrow, titleStart, titleHighlight, description, breadcrumb }) {
  return (
    <section
      style={{
        backgroundColor: '#061A33',
        color: '#FFFFFF',
        padding: '70px 0 60px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background Subtle Gradient & Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 169, 232, 0.12) 0%, rgba(6, 26, 51, 0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: '20px',
          }}
        >
          <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.85)', transition: 'color 0.2s' }}>
            Home
          </Link>
          <ChevronRight size={14} color="#00A9E8" />
          <span style={{ color: '#00A9E8', fontWeight: 600 }}>{breadcrumb}</span>
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <span
            style={{
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '2px',
              color: '#00A9E8',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1
          style={{
            fontSize: '46px',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            marginBottom: '18px',
            textTransform: 'uppercase',
            maxWidth: '840px',
          }}
        >
          {titleStart}{' '}
          {titleHighlight && <span style={{ color: '#00A9E8' }}>{titleHighlight}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '680px',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
