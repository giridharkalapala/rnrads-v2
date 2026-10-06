import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clientsData } from '../data/websiteData';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Clients() {
  return (
    <section id="clients" className="section" style={{ backgroundColor: '#FFFFFF', padding: '60px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-eyebrow">OUR CLIENTS</span>
          <h2
            className="section-title"
            style={{
              fontSize: '36px',
              fontWeight: 900,
              color: '#061A33',
            }}
          >
            Trusted by Brands Across Hyderabad
          </h2>
        </div>

        {/* Carousel with Side Navigation Arrows */}
        <div style={{ position: 'relative', padding: '0 44px' }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={2}
            spaceBetween={24}
            navigation={{
              prevEl: '.clients-prev-btn',
              nextEl: '.clients-next-btn',
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 36,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            style={{ padding: '10px 0' }}
          >
            {clientsData.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #F1F5F9',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 26, 51, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(0, 169, 232, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#F1F5F9';
                  }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    style={{
                      maxHeight: '44px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="clients-prev-btn slider-arrow-btn"
            aria-label="Previous client"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="clients-next-btn slider-arrow-btn"
            aria-label="Next client"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
