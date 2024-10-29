import React from 'react';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col gap-2.5 px-14 pt-16 pb-20 mt-14 bg-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <FooterLinks />
          <SocialLinks />
        </div>
        <div className="flex flex-wrap gap-4 items-center self-start mt-14 text-xl font-light text-zinc-500 max-md:mt-10 max-md:max-w-full">
          <div data-layername="mascotsCo" className="self-stretch my-auto w-[135px]">
            © Mascots.co
          </div>
          <div data-layername="" className="self-stretch my-auto text-2xl w-[11px]">
            •
          </div>
          <div data-layername="termosEPoliticaDePrivacidade" className="self-stretch my-auto w-[374px]">
            Termos e Política de Privacidade
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;