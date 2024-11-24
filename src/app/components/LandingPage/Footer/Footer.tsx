import React from 'react';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center p-2 bg-slate-50 text-center text-xs text-zinc-500">
      <div className="flex flex-wrap justify-between w-full max-w-screen-md items-center">
        <FooterLinks />
        <SocialLinks />
      </div>
      <div className="flex gap-1 mt-2">
        <div
          data-layername="mascotsCo"
          className="transition-transform duration-200 hover:scale-105"
        >
          © Mascots.co
        </div>
        <span className="text-base">•</span>
        <div
          data-layername="termosEPoliticaDePrivacidade"
          className="transition-transform duration-200 hover:scale-105"
        >
          Termos e Política de Privacidade
        </div>
      </div>
    </footer>
  );
};

export default Footer;
