import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import { companyData, advertisingOptions, contactFaqs } from '../data/websiteData';
import { MapPin, Phone, Mail, Clock, CheckCircle, HelpCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    advertisingType: 'Auto Branding',
    fleetSize: '50 Autos',
    targetZone: 'Citywide Hyderabad',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({ submitted: false, error: 'Please fill in all required fields.' });
      return;
    }
    setStatus({ submitted: true, error: '' });
  };

  return (
    <div className="contact-page">
      <PageHero
        breadcrumb="Contact Us"
        eyebrow="GET IN TOUCH"
        titleStart="LET'S PLAN YOUR NEXT"
        titleHighlight="HYDERABAD CAMPAIGN"
        description="Whether you need 50 targeted autos for a local launch or 500+ vehicles for city dominance, our Hyderabad media planners are ready to assist you."
      />

      {/* Main Contact Grid & Form */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            className="contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '60px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Office & Direct Contact Info */}
            <div>
              <span className="section-eyebrow">HEADQUARTERS</span>
              <h2
                className="section-title"
                style={{
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#061A33',
                  marginBottom: '20px',
                }}
              >
                Visit Our Office or Connect Directly
              </h2>

              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#64748B', marginBottom: '32px' }}>
                Centrally located in Narayanguda, Hyderabad, our team coordinates printing, wrapping, and dispatch across all municipal zones in Telangana.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Address Card */}
                <div
                  style={{
                    backgroundColor: '#F4F8FA',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid #E5EFF5',
                    display: 'flex',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5EFF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} color="#00A9E8" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#061A33', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                      Registered Office
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.5 }}>
                      {companyData.address}
                    </p>
                  </div>
                </div>

                {/* Phone & Email Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    style={{
                      backgroundColor: '#F4F8FA',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid #E5EFF5',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      textDecoration: 'none',
                    }}
                  >
                    <Phone size={20} color="#00A9E8" />
                    <div>
                      <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Phone Call</div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#061A33', marginTop: '2px' }}>{companyData.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyData.email}`}
                    style={{
                      backgroundColor: '#F4F8FA',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid #E5EFF5',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      textDecoration: 'none',
                      overflow: 'hidden',
                    }}
                  >
                    <Mail size={20} color="#00A9E8" />
                    <div>
                      <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Email Us</div>
                      <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#061A33', marginTop: '2px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{companyData.email}</div>
                    </div>
                  </a>
                </div>

                {/* Working Hours */}
                <div
                  style={{
                    backgroundColor: '#F4F8FA',
                    borderRadius: '16px',
                    padding: '18px 22px',
                    border: '1px solid #E5EFF5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <Clock size={20} color="#00A9E8" />
                  <div>
                    <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Operational Hours: </span>
                    <strong style={{ fontSize: '14px', color: '#061A33' }}>{companyData.hours}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Campaign Quote Form */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '40px 36px',
                border: '1px solid #E5EFF5',
                boxShadow: '0 12px 36px rgba(6, 26, 51, 0.08)',
              }}
            >
              {status.submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle size={58} color="#00A9E8" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#061A33', marginBottom: '12px' }}>
                    Campaign Request Received!
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '28px' }}>
                    Thank you, {formData.name}. One of our senior Hyderabad transit media planners will review your request and get in touch with rate cards and customized route availability within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-cyan"
                    onClick={() => {
                      setStatus({ submitted: false, error: '' });
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        advertisingType: 'Auto Branding',
                        fleetSize: '50 Autos',
                        targetZone: 'Citywide Hyderabad',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#061A33', marginBottom: '6px' }}>
                      Request a Custom Campaign Proposal
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#64748B' }}>
                      Fill in your requirements below for custom pricing and zone availability.
                    </p>
                  </div>

                  {status.error && (
                    <div style={{ padding: '12px', backgroundColor: '#FEF2F2', color: '#DC2626', borderRadius: '8px', fontSize: '13px' }}>
                      {status.error}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Your Name <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Phone Number <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Email & Advertising Type */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Email Address <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Advertising Format <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <select
                        name="advertisingType"
                        value={formData.advertisingType}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                        }}
                      >
                        {advertisingOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Fleet Size & Target Zone */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Estimated Fleet Size
                      </label>
                      <select
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                        }}
                      >
                        <option value="50 Autos">50 Autos (Area Blitz)</option>
                        <option value="100 Autos">100 Autos (Zone Coverage)</option>
                        <option value="250 Autos">250 Autos (City Dominance)</option>
                        <option value="500+ Autos">500+ Autos (Mega Blitz)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                        Target Hyderabad Zone
                      </label>
                      <select
                        name="targetZone"
                        value={formData.targetZone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                        }}
                      >
                        <option value="Citywide Hyderabad">Citywide Hyderabad</option>
                        <option value="Hitec City / IT Corridor">Hitec City & Gachibowli</option>
                        <option value="Central Hyderabad">Ameerpet, Banjara & Jubilee Hills</option>
                        <option value="Secunderabad & North">Secunderabad & Kukatpally</option>
                        <option value="South Hyderabad">Old City & Dilsukhnagar</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Additional Notes / Preferred Start Date
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Tell us about your campaign goals, brand details, or timelines..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-cyan"
                    style={{ width: '100%', padding: '15px', fontSize: '15px', fontWeight: 800 }}
                  >
                    <span>SEND CAMPAIGN REQUEST</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section-ice-blue">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}>
            <span className="section-eyebrow">COMMON QUESTIONS</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: 900, color: '#061A33' }}>
              Everything You Need to Know
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '30px 28px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 4px 16px rgba(6, 26, 51, 0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <HelpCircle size={22} color="#00A9E8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#061A33' }}>
                    {faq.q}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#64748B', paddingLeft: '34px' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Call Our Media Planning Team Directly at +91 81432 52345" />
    </div>
  );
}
