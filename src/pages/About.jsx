import React from 'react';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { aboutPageData, introData, companyData } from '../data/websiteData';
import { Target, Compass, ShieldCheck, TrendingUp, CheckCircle, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      <PageHero
        breadcrumb="About Us"
        eyebrow="ABOUT RNR ADS"
        titleStart="HYDERABAD'S PREMIER"
        titleHighlight="TRANSIT MEDIA NETWORK"
        description="For over 15 years, RNR Ads has pioneered auto rickshaw advertising across Hyderabad, connecting leading national and regional brands with millions of everyday consumers."
      />

      {/* Story / Who We Are */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
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
            <div>
              <span className="section-eyebrow">OUR STORY & HERITAGE</span>
              <h2
                className="section-title"
                style={{
                  fontSize: '38px',
                  fontWeight: 900,
                  color: '#061A33',
                  marginBottom: '20px',
                }}
              >
                Turning Every Street Into a <span style={{ color: '#00A9E8' }}>High-Yield Canvas</span>
              </h2>

              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', marginBottom: '18px' }}>
                Established in Hyderabad, RNR Ads recognized early on that Indian auto rickshaws offer the most organic, uninterrupted street-level visibility possible in urban environments. While traditional static billboards are often overlooked high above the treeline, auto rickshaws sit right at eye level of motorists, pedestrians, and passengers.
              </p>

              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', marginBottom: '28px' }}>
                Today, our network of over 5,000 verified auto rickshaws traverses every corner of Greater Hyderabad — from the tech hubs of Hitec City and Gachibowli to the bustling commercial corridors of Ameerpet, Kukatpally, Secunderabad, and Old City.
              </p>

              {/* Stats Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid #E5EFF5',
                }}
              >
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#00A9E8' }}>15+</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>Years in Hyderabad</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#00A9E8' }}>5,000+</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>Active Auto Fleet</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#00A9E8' }}>25M+</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>Daily Impressions</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(6, 26, 51, 0.12)',
                  border: '1px solid #E5EFF5',
                }}
              >
                <img
                  src={introData.image}
                  alt="RNR Ads Transit Media Hyderabad"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-ice-blue">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
            }}
          >
            {/* Mission */}
            <div
              className="hover-card-effect"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '40px 36px',
                border: '1px solid #E5EFF5',
                boxShadow: '0 4px 20px rgba(6, 26, 51, 0.04)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0, 169, 232, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Target size={28} color="#00A9E8" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#061A33', marginBottom: '14px' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569' }}>
                {aboutPageData.mission}
              </p>
            </div>

            {/* Vision */}
            <div
              className="hover-card-effect"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '40px 36px',
                border: '1px solid #E5EFF5',
                boxShadow: '0 4px 20px rgba(6, 26, 51, 0.04)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0, 169, 232, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Compass size={28} color="#00A9E8" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#061A33', marginBottom: '14px' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569' }}>
                {aboutPageData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / 4 Pillars */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">WHY CLIENTS TRUST US</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              The Four Pillars of Our Operations
            </h2>
          </div>

          <div
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {aboutPageData.values.map((val, idx) => (
              <div
                key={idx}
                className="hover-card-effect"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 4px 18px rgba(6, 26, 51, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 169, 232, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <ShieldCheck size={22} color="#00A9E8" />
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#061A33', marginBottom: '10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Milestones */}
      <section className="section section-dark" style={{ backgroundColor: '#061A33' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">OUR JOURNEY</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#FFFFFF' }}>
              15+ Years of Growth & Innovation
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {aboutPageData.milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0A2242',
                  borderRadius: '18px',
                  padding: '30px 24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 900,
                    color: '#00A9E8',
                    marginBottom: '8px',
                  }}
                >
                  {m.year}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.72)' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
