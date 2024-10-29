import React from 'react';
import Header from './components/Header/Header';
import MidSection from './components/MidSection/MidSection';
import Footer from './components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <div data-layername="homepage" className="flex overflow-hidden flex-col bg-white">
      <Header
        title="Garantindo que seus animais de estimação tenham uma vida melhor"       
      />
      <MidSection />
      <Footer />
    </div>
  );
};

export default HomePage;
