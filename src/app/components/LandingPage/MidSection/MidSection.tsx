import React from 'react';
import PrioritizingSection from './PrioritizingSection';
import InfoSection from './InfoSection';
import ContactSection from './ContactSection';

const MidSection: React.FC = () => {
  return (
    <main>
      <InfoSection/>
      <PrioritizingSection />
      <ContactSection />
    </main>
  );
};

export default MidSection;