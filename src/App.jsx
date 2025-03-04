import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import PricingSection from './Components/PricingSection';
import FAQs from './Components/FAQs';
import Login from './Components/Login';

function LandingPage() {
  return (
    <>
    <Navbar />
    <PricingSection />
    <FAQs />
    <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>  
    </Router>
  )
}
export default App;