import React from 'react'

import LandingSection from '../Components/LandingSection';
import AboutPage from '../Components/AboutPage';
import Footer from '../Components/Footer';
import PricingSection from '../Components/PricingSection';
import FAQs from '../Components/FAQs';
import Timeline from '../Components/Timeline';
import Teams from '../Components/Teams';
import Discord from '../Components/Discord'

function LandingPage() {
    return (
      <>
      <LandingSection/>
      <AboutPage/>
      <Teams />
      <Timeline />
      <PricingSection />
      <Discord />
      <FAQs />
      <Footer />
      </>
    )
  }

  export default LandingPage;