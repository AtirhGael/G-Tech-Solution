import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';

function App() {
  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <TechStack />
        {/* Other sections will be added here */}
      </div>
    </AnimatePresence>
  );
}

export default App;