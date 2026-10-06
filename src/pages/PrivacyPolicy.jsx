import React from 'react';
import PageHero from '../components/PageHero';
import { companyData } from '../data/websiteData';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="LEGAL & PRIVACY"
        titleStart="PRIVACY POLICY"
        titleHighlight="RNR ADS"
        description="Learn how RNR Ads collects, handles, and protects your personal and business information when using our outdoor advertising services."
      />

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '15px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: '18px' }}>
              When you submit an enquiry, request a media kit, or contact us via our website ({window.location.origin}), we collect your name, phone number, email address, company name, and details regarding your advertising requirements.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '18px' }}>
              We use the collected information exclusively to prepare campaign rate cards, provide route availability schedules, coordinate printing and fleet wrapping, send proof of execution reports, and respond to your direct queries. We do not sell or rent your information to third-party data brokers.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              3. Data Protection & Security
            </h2>
            <p style={{ marginBottom: '18px' }}>
              We implement industry-standard organizational and technical measures to protect your contact and business details from unauthorized access or disclosure.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              4. Contact Us Regarding Your Data
            </h2>
            <p style={{ marginBottom: '18px' }}>
              If you have any questions regarding this Privacy Policy or wish to modify your submitted details, please write to us at <a href={`mailto:${companyData.email}`} style={{ color: '#00A9E8', fontWeight: 600 }}>{companyData.email}</a> or call us at <a href={`tel:${companyData.phoneRaw}`} style={{ color: '#00A9E8', fontWeight: 600 }}>{companyData.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
