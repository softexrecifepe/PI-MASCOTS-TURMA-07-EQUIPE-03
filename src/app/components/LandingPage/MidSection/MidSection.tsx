import React from 'react';
import PrioritizingSection from './PrioritizingSection';
import BenefitsSection from './BenefitsSection';
import ContactSection from './ContactSection';

const MidSection: React.FC = () => {
  return (
    <main>
      <PrioritizingSection />
      <ContactSection />
    </main>
  );
};

export default MidSection;