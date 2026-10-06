import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { companyData, advertisingOptions } from '../data/websiteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    advertisingType: 'Auto Branding',
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
    // Success simulation
    setStatus({ submitted: true, error: '' });
  };

  return (
    <section id="contact" className="section section-ice-blue">
      <div className="container">
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '56px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Contact Information */}
          <div>
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2
              className="section-title"
              style={{
                fontSize: '40px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#061A33',
                marginBottom: '18px',
              }}
            >
              Let's Talk About<br />
              <span style={{ color: '#00A9E8' }}>Your Next Campaign.</span>
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.65,
                color: '#64748B',
                marginBottom: '36px',
                maxWidth: '460px',
              }}
            >
              Discover how RNR Ads can transform your brand's visibility with creative and impactful outdoor advertising. Contact us today!
            </p>

            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Address */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  border: '1px solid #E5EFF5',
                  boxShadow: '0 2px 10px rgba(6, 26, 51, 0.03)',
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
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Office Address
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#061A33', marginTop: '2px', lineHeight: 1.4 }}>
                    {companyData.address}
                  </div>
                </div>
              </div>

              {/* Phone & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: '#FFFFFF',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #E5EFF5',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 169, 232, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} color="#00A9E8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Phone</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#061A33', marginTop: '1px' }}>{companyData.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyData.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: '#FFFFFF',
                    padding: '16px 18px',
                    borderRadius: '14px',
                    border: '1px solid #E5EFF5',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 169, 232, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} color="#00A9E8" />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Email</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#061A33', marginTop: '1px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{companyData.email}</div>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: '#FFFFFF',
                  padding: '16px 18px',
                  borderRadius: '14px',
                  border: '1px solid #E5EFF5',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 169, 232, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} color="#00A9E8" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Working Hours</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#061A33', marginTop: '1px' }}>{companyData.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1px solid #E5EFF5',
              boxShadow: '0 12px 36px rgba(6, 26, 51, 0.08)',
            }}
          >
            {status.submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={54} color="#00A9E8" style={{ margin: '0 auto 18px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#061A33', marginBottom: '10px' }}>
                  Thank You for Reaching Out!
                </h3>
                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
                  Our Hyderabad advertising team will review your enquiry and contact you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-cyan"
                  onClick={() => {
                    setStatus({ submitted: false, error: '' });
                    setFormData({ name: '', phone: '', email: '', advertisingType: 'Auto Branding', message: '' });
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {status.error && (
                  <div style={{ padding: '12px', backgroundColor: '#FEF2F2', color: '#DC2626', borderRadius: '8px', fontSize: '13px' }}>
                    {status.error}
                  </div>
                )}

                {/* Form Row: Name & Phone */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00A9E8')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Phone <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00A9E8')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Form Row: Email & Advertising Type */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Email <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00A9E8')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Advertising Type <span style={{ color: '#EF4444' }}>*</span>
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
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                        color: '#1E293B',
                        cursor: 'pointer',
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

                {/* Message Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your brand campaign requirements..."
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
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00A9E8')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-cyan"
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '15px',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    marginTop: '6px',
                  }}
                >
                  <span>SEND ENQUIRY</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
