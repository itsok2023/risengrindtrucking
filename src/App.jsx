import React from 'react'


import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Map from './components/Map'
import ContactForm from './components/ContactForm'
import BeforeAfter from './components/BeforeAfter'
import Chatbot from './components/Chatbot'
import CompanyJourney from './components/CompanyJourney'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <BeforeAfter />
      <Testimonials/>
      <CompanyJourney />
      <ContactForm />
      <Map />
      <Chatbot />
    </div>
  )
}

export default App
