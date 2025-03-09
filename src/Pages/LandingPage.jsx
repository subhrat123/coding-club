
import LandingSection from '../Components/LandingSection';
import AboutPage from '../Components/AboutPage';
import Footer from '../Components/Footer';
import PricingSection from '../Components/PricingSection';
import FAQs from '../Components/FAQs';
import Timeline from '../Components/Timeline';
import Teams from '../Components/Teams';
import Discord from '../Components/Discord';

function LandingPage() {
  return (
    <>
      <div id="landing">
        <LandingSection />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="teams">
        <Teams />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="discord">
        <Discord />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;