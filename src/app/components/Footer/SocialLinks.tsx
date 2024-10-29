import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col min-w-[240px] w-[360px]">
      <h3 data-layername="fiqueConectado" className="text-2xl font-medium text-neutral-950">
        Fique conectado
      </h3>
      <div className="flex flex-col mt-6 w-full">
        <div data-layername="contatoHiMascotMascotsCom" className="text-xl font-light text-neutral-950">
          Contato: hi.mascot@mascots.com
        </div>
        <div className="flex gap-1 items-start self-start mt-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10f917814a83b4ead8275a7672ba13e40e7db5c25b0c9dc15f0aabdbe6412aee?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" alt="Social media icon 1" className="object-contain shrink-0 w-8 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb57cf1f1f628d2dddc6fed42f489c3c607adc30b9351718917b4b96a45b2149?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" alt="Social media icon 2" className="object-contain shrink-0 w-8 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;