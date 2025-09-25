

import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import BeforeAfter from './BeforeAfter';
import CompanyJourney from './CompanyJourney';
import Careers from './Careers';


const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <BeforeAfter />
      <Careers />
      <Testimonials />
      <CompanyJourney />
      <ContactForm />
    </>
  );
};

export default Homepage;
