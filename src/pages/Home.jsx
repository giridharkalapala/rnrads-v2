import React from 'react';
import HeroSlider from '../components/HeroSlider';
import IntroSection from '../components/IntroSection';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import WhyChooseUs from '../components/WhyChooseUs';
import ExperienceSection from '../components/ExperienceSection';
import Clients from '../components/Clients';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <IntroSection />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <ExperienceSection />
      <Clients />
      <ContactSection />
    </div>
  );
}
