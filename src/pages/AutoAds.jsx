import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { autoAdsFormats, hyderabadCorridors } from '../data/websiteData';
import { CheckCircle2, ArrowRight, MapPin, Layers, Eye, Smartphone, Clock } from 'lucide-react';

export default function AutoAds() {
  return (
    <div className="auto-ads-page">
      <PageHero
        breadcrumb="Auto Ads"
        eyebrow="HIGH-IMPACT TRANSIT MEDIA"
        titleStart="AUTO RICKSHAW ADVERTISING"
        titleHighlight="ACROSS HYDERABAD"
        description="Reach hyper-targeted commuters, pedestrians, and motorists across Hyderabad with eye-level, high-frequency auto rickshaw advertising solutions."
      />

      {/* 4 Formats Showcase */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">PREMIUM ADVERTISING FORMATS</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Choose the Right Format For Your Campaign
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {autoAdsFormats.map((format, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={format.id}
                  className="intro-grid hover-card-effect"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isEven ? '0.9fr 1.1fr' : '1.1fr 0.9fr',
                    gap: '48px',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '36px',
                    border: '1px solid #E5EFF5',
                    boxShadow: '0 4px 24px rgba(6, 26, 51, 0.04)',
                  }}
                >
                  {/* Text Details */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 169, 232, 0.1)',
                        color: '#00A9E8',
                        fontSize: '12px',
                        fontWeight: 800,
                        marginBottom: '14px',
                      }}
                    >
                      FORMAT 0{idx + 1}
                    </div>

                    <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#061A33', marginBottom: '12px' }}>
                      {format.name}
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
                        Standard Dimensions:{' '}
                      </span>
                      <strong style={{ fontSize: '14px', color: '#00A9E8' }}>{format.dimensions}</strong>
                    </div>

                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', marginBottom: '16px' }}>
                      {format.visibility}
                    </p>

                    <div
                      style={{
                        padding: '14px 18px',
                        backgroundColor: '#F4F8FA',
                        borderRadius: '12px',
                        marginBottom: '24px',
                        borderLeft: '3px solid #00A9E8',
                      }}
                    >
                      <strong style={{ fontSize: '13px', color: '#061A33', display: 'block', marginBottom: '4px' }}>
                        Recommended For:
                      </strong>
                      <span style={{ fontSize: '13.5px', color: '#64748B' }}>{format.bestFor}</span>
                    </div>

                    <Link to="/contact" className="btn btn-cyan">
                      <span>Book This Format</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Format Photo */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        borderRadius: '18px',
                        overflow: 'hidden',
                        boxShadow: '0 12px 30px rgba(6, 26, 51, 0.1)',
                      }}
                    >
                      <img
                        src={format.image}
                        alt={format.name}
                        style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Hyderabad Coverage */}
      <section className="section section-ice-blue">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">HYPER-LOCAL GEO TARGETING</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Hyderabad Strategic Transit Corridors
            </h2>
            <p className="section-subtitle">
              We deploy your branded fleet directly where your potential customers work, live, commute, and shop.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
            }}
          >
            {hyderabadCorridors.map((c, idx) => (
              <div
                key={idx}
                className="hover-card-effect"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px 22px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 4px 16px rgba(6, 26, 51, 0.03)',
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 169, 232, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="#00A9E8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#061A33', marginBottom: '6px' }}>
                    {c.zone}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5 }}>
                    {c.areas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Auto Ads Beat Static Hoardings */}
      <section className="section section-dark" style={{ backgroundColor: '#061A33' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">THE TRANSIT ADVANTAGE</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#FFFFFF' }}>
              Why Auto Ads Deliver Highest ROI in Hyderabad
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
            <div
              style={{
                backgroundColor: '#0A2242',
                borderRadius: '18px',
                padding: '30px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Eye size={32} color="#00A9E8" style={{ marginBottom: '18px' }} />
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                100% Eye-Level Impact
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.75)' }}>
                Unlike billboards placed 40 feet high, auto rear hoods align perfectly with driver and pedestrian sightlines.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#0A2242',
                borderRadius: '18px',
                padding: '30px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Clock size={32} color="#00A9E8" style={{ marginBottom: '18px' }} />
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                High Traffic Dwell Time
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.75)' }}>
                Vehicles behind auto rickshaws spend an average of 90–180 seconds at signals staring directly at your ad.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#0A2242',
                borderRadius: '18px',
                padding: '30px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Layers size={32} color="#00A9E8" style={{ marginBottom: '18px' }} />
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                Inner Colony Penetration
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.75)' }}>
                Autos travel deep into residential streets, market gullies, and IT tech park gates where hoardings are banned.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#0A2242',
                borderRadius: '18px',
                padding: '30px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Smartphone size={32} color="#00A9E8" style={{ marginBottom: '18px' }} />
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                Lowest CPM In Outdoor Media
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.75)' }}>
                Deliver over 500,000 monthly impressions per vehicle at a small fraction of newspaper or hoarding costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">HOW WE WORK</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              5-Step Campaign Execution
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '18px',
            }}
          >
            {[
              { num: '01', title: 'Strategy & Zones', desc: 'Demographic and corridor mapping across target Hyderabad areas.' },
              { num: '02', title: 'Creative Sizing', desc: 'Optimizing typography and visual contrast for swift vehicle readability.' },
              { num: '03', title: 'HD Vinyl Print', desc: 'Solvent printing with UV weather-resistant protective lamination.' },
              { num: '04', title: 'Fleet Wrapping', desc: 'Expert application on auto hoods with zero air bubbles or peeling.' },
              { num: '05', title: 'Photo Proof', desc: '100% geotagged photo reporting and active campaign maintenance.' },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F4F8FA',
                  borderRadius: '16px',
                  padding: '24px 18px',
                  border: '1px solid #E5EFF5',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#00A9E8', marginBottom: '8px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#061A33', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#64748B' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Launch Your Auto Rickshaw Campaign in 48 Hours" />
    </div>
  );
}
