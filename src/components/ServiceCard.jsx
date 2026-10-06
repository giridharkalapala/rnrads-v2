import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Megaphone, Eye, Crosshair } from 'lucide-react';

export default function ServiceCard({ number, title, description, image, alt }) {
  const getIcon = (num) => {
    switch (num) {
      case '01':
        return <Car size={22} color="#00A9E8" />;
      case '02':
        return <Megaphone size={22} color="#00A9E8" />;
      case '03':
        return <Eye size={22} color="#00A9E8" />;
      case '04':
        return <Crosshair size={22} color="#00A9E8" />;
      default:
        return <Car size={22} color="#00A9E8" />;
    }
  };

  return (
    <div
      className="service-card hover-card-effect"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #E5EFF5',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(6, 26, 51, 0.04)',
        position: 'relative',
      }}
    >
      {/* Top Header Information */}
      <div style={{ padding: '24px 24px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 169, 232, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {getIcon(number)}
          </div>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#00A9E8', letterSpacing: '1px' }}>
            {number}
          </span>
        </div>

        <h3
          style={{
            fontSize: '20px',
            fontWeight: 800,
            color: '#061A33',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: '13.5px',
            lineHeight: 1.6,
            color: '#64748B',
            minHeight: '44px',
          }}
        >
          {description}
        </p>
      </div>

      {/* Image Container with Floating Action Button */}
      <div
        style={{
          position: 'relative',
          marginTop: 'auto',
          height: '190px',
          overflow: 'hidden',
          backgroundColor: '#061A33',
        }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="card-img-zoom"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Floating Circular Arrow Button */}
        <Link
          to="/contact"
          aria-label={`Enquire about ${title}`}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#00A9E8',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 169, 232, 0.4)',
            transition: 'all 0.2s ease',
            zIndex: 2,
            textDecoration: 'none',
          }}
        >
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
