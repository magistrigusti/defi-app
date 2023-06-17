import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureOne from './components/FeatureOne';
import './App.css';

function App() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <FeatureOne />
    </div>
  );
}

export default App;
