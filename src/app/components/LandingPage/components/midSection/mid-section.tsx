import React from 'react';
import PrioritizingSection from './prioritizing-section';
import InfoSection from './info-section';
import ContactSection from './contact-section';

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