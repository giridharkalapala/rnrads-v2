import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight, Car, MapPin, ShieldCheck } from 'lucide-react';
import { heroSlides, heroStats } from '../data/websiteData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'car':
        return <Car size={22} color="#00A9E8" />;
      case 'map-pin':
        return <MapPin size={22} color="#00A9E8" />;
      case 'shield-check':
        return <ShieldCheck size={22} color="#00A9E8" />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#061A33' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.hero-custom-pagination',
        }}
        navigation={{
          prevEl: '.hero-prev-btn',
          nextEl: '.hero-next-btn',
        }}
        className="hero-slider"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-wrapper"
              style={{
                position: 'relative',
                minHeight: '620px',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            >
              {/* Deep Navy Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, #061A33 0%, rgba(6, 26, 51, 0.94) 42%, rgba(6, 26, 51, 0.65) 70%, rgba(6, 26, 51, 0.25) 100%)',
                  zIndex: 1,
                }}
              />

              <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '30px', paddingTop: '30px' }}>
                <div className="hero-content" style={{ maxWidth: '640px' }}>
                  {/* Eyebrow */}
                  <div
                    className="hero-eyebrow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      letterSpacing: '2.5px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    <span>{slide.eyebrow}</span>
                  </div>

                  {/* Heading */}
                  <h1
                    className="hero-heading"
                    style={{
                      fontSize: '52px',
                      fontWeight: 900,
                      lineHeight: 1.12,
                      color: '#FFFFFF',
                      letterSpacing: '-1px',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {slide.headingStart}{' '}
                    <span style={{ color: '#00A9E8', display: 'block' }}>
                      {slide.headingHighlight}
                    </span>
                  </h1>

                  {/* Description */}
                  <p
                    className="hero-desc"
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.82)',
                      marginBottom: '32px',
                      maxWidth: '520px',
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div
                    className="hero-buttons"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '44px',
                    }}
                  >
                    <Link to="/contact" className="btn btn-cyan">
                      <span>GET A QUOTE</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link to="/auto-ads" className="btn btn-dark-outline">
                      <span>OUR SERVICES</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Bottom Statistics Badges */}
                  <div
                    className="hero-stats-row"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '32px',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    {heroStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="hero-stat-item"
                        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                      >
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(0, 169, 232, 0.12)',
                            border: '1px solid rgba(0, 169, 232, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {getIcon(stat.icon)}
                        </div>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                            {stat.value}
                          </div>
                          <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <button
        className="hero-prev-btn slider-arrow-btn dark"
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="hero-next-btn slider-arrow-btn dark"
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Custom Pagination Container */}
      <div
        className="hero-custom-pagination"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      />
    </section>
  );
}
