import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import Objectives from './components/Objectives';
import Results from './components/Results';
import Differentials from './components/Differentials';
import Plans from './components/Plans';
import CTA from './components/CTA';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-brand-black">
      {/* Fixed global navigation bar */}
      <Navbar />

      {/* Main landing content */}
      <main>
        <Hero />
        <About />
        <Method />
        <Objectives />
        <Results />
        <Differentials />
        <Plans />
        <CTA />
      </main>

      {/* Floating CTA element */}
      <WhatsAppButton />

      {/* Footer area */}
      <Footer />
    </div>
  );
}
