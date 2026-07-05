import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Friction from './components/Friction.jsx';
import Services from './components/Services.jsx';
import MicrosoftEcosystem from './components/MicrosoftEcosystem.jsx';
import HowWeWork from './components/HowWeWork.jsx';
import ContactCTA from './components/ContactCTA.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';
import MotionLayer from './components/MotionLayer.jsx';
import RevealOnScroll from './components/RevealOnScroll.jsx';

function HomePage() {
  return (
    <main>
      <Hero />
      <Friction />
      <Services />
      <MicrosoftEcosystem />
      <HowWeWork />
      <ContactCTA />
    </main>
  );
}

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.hash}`);
  const isContactPage = window.location.pathname === '/contacto';

  useEffect(() => {
    const syncLocation = () => {
      setLocationKey(`${window.location.pathname}${window.location.hash}`);
    };

    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);

    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  useEffect(() => {
    if (isContactPage || !window.location.hash) return undefined;

    const targetId = window.location.hash.slice(1);
    const scrollToTarget = () => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [isContactPage, locationKey]);

  return (
    <>
      <MotionLayer />
      <RevealOnScroll />
      <Navbar />
      {isContactPage ? <ContactPage /> : <HomePage />}
      <Footer />
    </>
  );
}

export default App;
