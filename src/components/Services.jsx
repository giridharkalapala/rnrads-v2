import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/websiteData';

export default function Services() {
  return (
    <section id="services" className="section section-ice-blue">
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
            <span className="section-eyebrow">OUR SERVICES</span>
            <h2
              className="section-title"
              style={{
                fontSize: '40px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#061A33',
              }}
            >
              Auto Rickshaw<br />
              <span style={{ color: '#00A9E8' }}>Advertising Solutions</span>
            </h2>
          </div>

          <div style={{ maxWidth: '460px' }}>
            <p className="section-subtitle" style={{ marginBottom: '18px' }}>
              Turn everyday auto rickshaws into moving billboards that give your brand maximum visibility in Hyderabad.
            </p>
            <Link to="/auto-ads" className="btn btn-cyan-outline">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
