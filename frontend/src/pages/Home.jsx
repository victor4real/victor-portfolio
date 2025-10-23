import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import RecentWork from '../components/RecentWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;