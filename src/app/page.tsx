import React from 'react';
import Header from './components/LandingPage/components/header/header';
import MidSection from './components/LandingPage/components/midSection/mid-section';
import Footer from './components/LandingPage/components/footer/footer';

const HomePage: React.FC = () => {
  return (
    <div data-layername="homepage" className="flex overflow-hidden flex-col bg-white">
      <Header />
      <MidSection />
      <Footer />
    </div>
  );
};

export default HomePage;

