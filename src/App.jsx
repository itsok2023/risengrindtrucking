import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Map from './components/Map'
import CareerForm from './components/CareerForm';

import Chatbot from './components/Chatbot'

import Homepage from './components/Homepage'

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      
      <main>
          <Routes>
              {/* Route 1: The main home page */}
            <Route path="/" element={<Homepage />} />
          
          
            <Route path="/apply" element={<CareerForm />} />
          </Routes>
      </main>
      
      <Map />
      <Chatbot />
    
      
    </div>
    </Router>
  )
}

export default App
