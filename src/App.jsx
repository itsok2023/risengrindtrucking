import React from 'react'


import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default App
