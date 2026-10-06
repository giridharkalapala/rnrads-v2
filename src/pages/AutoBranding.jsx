import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { autoBrandingPackages, servicesData } from '../data/websiteData';
import { Check, Star, Shield, Sparkles, Zap, Award } from 'lucide-react';

export default function AutoBranding() {
  return (
    <div className="auto-branding-page">
      <PageHero
        breadcrumb="Auto Branding"
        eyebrow="FLEET DOMINANCE PACKAGES"
        titleStart="CUSTOM AUTO BRANDING"
        titleHighlight="& FLEET SOLUTIONS"
        description="Transform 50 to 500+ Indian auto rickshaws into moving brand ambassadors with commercial-grade vehicle wrapping and guaranteed citywide frequency."
      />

      {/* Package Tiers */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">CURATED CAMPAIGN TIERS</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Select Your Advertising Fleet Size
            </h2>
            <p className="section-subtitle">
              All packages include in-house printing, professional application, weekly maintenance, and full photo auditing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              alignItems: 'stretch',
            }}
          >
            {autoBrandingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="hover-card-effect"
                style={{
                  backgroundColor: pkg.popular ? '#061A33' : '#FFFFFF',
                  color: pkg.popular ? '#FFFFFF' : '#122033',
                  borderRadius: '22px',
                  padding: '40px 32px',
                  border: pkg.popular ? '2px solid #00A9E8' : '1px solid #E5EFF5',
                  boxShadow: pkg.popular
                    ? '0 20px 40px rgba(0, 169, 232, 0.2)'
                    : '0 4px 20px rgba(6, 26, 51, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#00A9E8',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 900,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '5px 16px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(0, 169, 232, 0.4)',
                    }}
                  >
                    MOST POPULAR IN HYDERABAD
                  </div>
                )}

                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 900,
                      color: pkg.popular ? '#FFFFFF' : '#061A33',
                      marginBottom: '6px',
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 900,
                      color: '#00A9E8',
                      lineHeight: 1.1,
                      margin: '12px 0 6px',
                    }}
                  >
                    {pkg.fleet}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: pkg.popular ? 'rgba(255, 255, 255, 0.7)' : '#64748B',
                    }}
                  >
                    Est. {pkg.reach}
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px 0',
                    borderTop: `1px solid ${pkg.popular ? 'rgba(255, 255, 255, 0.1)' : '#F1F5F9'}`,
                    borderBottom: `1px solid ${pkg.popular ? 'rgba(255, 255, 255, 0.1)' : '#F1F5F9'}`,
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: pkg.popular ? 'rgba(255, 255, 255, 0.6)' : '#94A3B8',
                    }}
                  >
                    Minimum Duration:{' '}
                  </span>
                  <strong style={{ fontSize: '13px', color: pkg.popular ? '#FFFFFF' : '#061A33' }}>
                    {pkg.duration}
                  </strong>
                </div>

                {/* Features list */}
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    marginBottom: '32px',
                    flexGrow: 1,
                  }}
                >
                  {pkg.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '13.5px',
                        lineHeight: 1.5,
                        color: pkg.popular ? 'rgba(255, 255, 255, 0.85)' : '#475569',
                      }}
                    >
                      <Check size={16} color="#00A9E8" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={pkg.popular ? 'btn btn-cyan' : 'btn btn-cyan-outline'}
                  style={{ width: '100%' }}
                >
                  <span>Request Package Quote</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Print Quality */}
      <section className="section section-ice-blue">
        <div className="container">
          <div
            className="intro-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-eyebrow">QUALITY & LONGEVITY</span>
              <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33', marginBottom: '20px' }}>
                Heavy-Duty Outdoor Vinyl Built for Indian Weather
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', marginBottom: '20px' }}>
                Auto rickshaws operate in harsh sunlight, monsoon rains, and dusty road conditions. We exclusively use premium cast and polymeric vinyl with anti-UV lamination that preserves your brand’s true colors for months.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  '1440 DPI High-Resolution Solvent & Eco-Solvent Printing',
                  'UV-Resistant Clear Gloss Lamination (Zero fading under Hyderabad sun)',
                  'Non-damaging pressure-sensitive automotive adhesive',
                  'Waterproof and scratch-resistant during daily vehicle washing',
                ].map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#00A9E8',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={14} />
                    </div>
                    <span style={{ fontSize: '14.5px', fontWeight: 600, color: '#1E293B' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Showcase Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {servicesData.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(6, 26, 51, 0.08)',
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Get Custom Pricing for Your Auto Branding Campaign" />
    </div>
  );
}
