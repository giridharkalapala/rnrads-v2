import React from 'react';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { clientsData, clientTestimonials, featuredGallery } from '../data/websiteData';
import { Quote, Star, CheckCircle, TrendingUp, Building2 } from 'lucide-react';

export default function ClientsPage() {
  return (
    <div className="clients-page">
      <PageHero
        breadcrumb="Clients"
        eyebrow="TRUSTED BY MARKET LEADERS"
        titleStart="OUR VALUED CLIENTS"
        titleHighlight="& PARTNERS"
        description="From regional Hyderabad institutions to national industry powerhouses, discover the brands that rely on RNR Ads to command the streets."
      />

      {/* Client Logos Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">INDUSTRY COLLABORATIONS</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Brands Powering Hyderabad Commutes
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            {clientsData.map((client, idx) => (
              <div
                key={idx}
                className="hover-card-effect"
                style={{
                  height: '110px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 4px 16px rgba(6, 26, 51, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  style={{ maxHeight: '54px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div
            style={{
              backgroundColor: '#061A33',
              borderRadius: '22px',
              padding: '48px 36px',
              color: '#FFFFFF',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#00A9E8' }}>100+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                Successful Campaigns
              </div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#00A9E8' }}>5,000+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                Branded Auto Fleet
              </div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#00A9E8' }}>98%</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                Client Renewal Rate
              </div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: 900, color: '#00A9E8' }}>15+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                Years Operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section section-ice-blue">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">WHAT OUR CLIENTS SAY</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Proven Outcomes Across Industries
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
          >
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="hover-card-effect"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 4px 20px rgba(6, 26, 51, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Quote size={32} color="#00A9E8" style={{ marginBottom: '16px', opacity: 0.8 }} />
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', fontStyle: 'italic', marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#061A33' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#00A9E8', fontWeight: 600, marginTop: '2px' }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Campaign Gallery */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">RECENT CAMPAIGNS</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Live Deployments on Hyderabad Streets
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '16px',
            }}
          >
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '1 / 1.15',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Join 100+ Leading Brands Advertising with RNR Ads" />
    </div>
  );
}
