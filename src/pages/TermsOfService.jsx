import React from 'react';
import PageHero from '../components/PageHero';
import { companyData } from '../data/websiteData';

export default function TermsOfService() {
  return (
    <div className="terms-page">
      <PageHero
        breadcrumb="Terms of Service"
        eyebrow="LEGAL TERMS"
        titleStart="TERMS & CONDITIONS"
        titleHighlight="TRANSIT MEDIA"
        description="Review the service terms and campaign booking conditions for auto rickshaw advertising campaigns executed by RNR Ads across Hyderabad."
      />

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '15px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              1. Campaign Commencement & Installation
            </h2>
            <p style={{ marginBottom: '18px' }}>
              Transit media campaigns officially commence once full creative artwork approvals, payment terms, and vehicle wrap installations are completed. Proof of execution photos are provided within 72 hours of total fleet deployment.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              2. Fleet Maintenance & Damage Replacements
            </h2>
            <p style={{ marginBottom: '18px' }}>
              RNR Ads conducts regular field audits of all active vehicles. In the rare event of accidental damage or normal wear and tear to vinyl wraps during an active contract period, RNR Ads replaces the affected branding at no additional printing cost to the client.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              3. Content & Compliance Standards
            </h2>
            <p style={{ marginBottom: '18px' }}>
              All advertising creatives must comply with local municipal regulations in Telangana and the Advertising Standards Council of India (ASCI). Ads promoting illegal or prohibited substances/activities are not accepted.
            </p>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#061A33', marginTop: '30px', marginBottom: '12px' }}>
              4. Inquiries & Official Notices
            </h2>
            <p style={{ marginBottom: '18px' }}>
              Official communication regarding agreements, invoices, and scheduling should be routed to <a href={`mailto:${companyData.email}`} style={{ color: '#00A9E8', fontWeight: 600 }}>{companyData.email}</a> or delivered to our office at {companyData.address}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
