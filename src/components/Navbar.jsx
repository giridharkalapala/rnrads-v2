import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyData, navLinks } from '../data/websiteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        zIndex: 999,
        boxShadow: scrolled ? '0 4px 20px rgba(6, 26, 51, 0.08)' : '0 1px 0 rgba(0, 0, 0, 0.06)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src={companyData.logos.main}
            alt="RNR ADS Logo"
            style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  fontSize: '14.5px',
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? '#00A9E8' : '#122033',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2.5px',
                      backgroundColor: '#00A9E8',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/contact" className="btn btn-cyan">
            <span>GET A QUOTE</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            display: 'none',
            color: '#061A33',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5EFF5',
            boxShadow: '0 12px 28px rgba(6, 26, 51, 0.12)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              style={{
                fontSize: '16px',
                fontWeight: location.pathname === link.path ? 800 : 600,
                color: location.pathname === link.path ? '#00A9E8' : '#122033',
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-cyan"
            style={{ width: '100%', marginTop: '8px', textDecoration: 'none' }}
          >
            <span>GET A QUOTE</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
