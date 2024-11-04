import React from 'react';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-stretch p-6 bg-slate-50 text-center text-sm text-zinc-500">
      <div className="flex flex-col w-full items-center p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <FooterLinks />
          <SocialLinks />
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <div
            data-layername="mascotsCo"
            className="transition-transform duration-300 hover:scale-105"
          >
            © Mascots.co
          </div>
          <span className="text-lg">•</span>
          <div
            data-layername="termosEPoliticaDePrivacidade"
            className="transition-transform duration-300 hover:scale-105"
          >
            Termos e Política de Privacidade
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
