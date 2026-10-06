import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '../data/websiteData';

export default function CtaBanner({ title, subtitle, btnText = "GET A FREE QUOTE" }) {
  return (
    <section
      style={{
        backgroundColor: '#061A33',
        color: '#FFFFFF',
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background glowing sphere */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '240px',
          background: 'radial-gradient(ellipse, rgba(0, 169, 232, 0.15) 0%, rgba(6, 26, 51, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '2px',
                color: '#00A9E8',
                textTransform: 'uppercase',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              START YOUR HYDERABAD CAMPAIGN TODAY
            </span>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}
            >
              {title || "Ready to Take Your Brand to Every Street in Hyderabad?"}
            </h2>
            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.6 }}>
              {subtitle || "Reach thousands of daily commuters with our tailored 5,000+ auto rickshaw advertising network."}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-cyan">
              <span>{btnText}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn btn-dark-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <Phone size={15} color="#00A9E8" />
              <span>{companyData.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
