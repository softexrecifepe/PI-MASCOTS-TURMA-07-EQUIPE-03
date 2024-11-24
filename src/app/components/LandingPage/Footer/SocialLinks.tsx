import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col min-w-[150px]">
      <div className="flex items-center gap-2">
        <h3 data-layername="fiqueConectado" className="text-base font-medium text-neutral-950">
          Fique conectado:
        </h3>
        <div className="flex gap-2">
          <a href="https://linkdaRedeSocial1.com" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10f917814a83b4ead8275a7672ba13e40e7db5c25b0c9dc15f0aabdbe6412aee?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420"
              alt="Ícone da rede social 1"
              className="object-contain w-5 h-5 transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="https://linkdaRedeSocial2.com" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb57cf1f1f628d2dddc6fed42f489c3c607adc30b9351718917b4b96a45b2149?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420"
              alt="Ícone da rede social 2"
              className="object-contain w-5 h-5 transition-transform duration-200 hover:scale-110"
            />
          </a>
        </div>
      </div>
      <div className="mt-2 text-xs font-light text-neutral-950">
        Contato: <span className="text-teal-600 hover:underline">hi.mascot@mascots.com</span>
      </div>
    </div>
  );
};

export default SocialLinks;
