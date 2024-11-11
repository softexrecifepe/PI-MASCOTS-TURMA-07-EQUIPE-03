import React from 'react';
import Header from './components/LandingPage/Header/Header';
import MidSection from './components/LandingPage/MidSection/MidSection';
import Footer from './components/LandingPage/Footer/Footer';

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
