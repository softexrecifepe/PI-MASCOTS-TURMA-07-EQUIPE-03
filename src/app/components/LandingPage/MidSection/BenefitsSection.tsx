import React from 'react';

interface BenefitCardProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ imageSrc, altText, title }) => (
  <div className="relative group transition-transform duration-300 hover:scale-105 shadow-md rounded-3xl overflow-hidden">
    <img 
      loading="lazy" 
      src={imageSrc} 
      alt={altText} 
      className="object-cover z-0 h-64 w-full transition-opacity duration-300 group-hover:opacity-70" 
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent rounded-t-[48px] transition-transform duration-300 group-hover:translate-y-2">
      <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
    </div>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a9f780793969989caf7ebf7e6a3030fd7a0f88e16a3066c8e10905e158a1163?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420", altText: "Mimo para seu pet", title: "Mime com ❤️" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/44c0e872cf6f6aafd371a51a8943cd049a551d4ec617269dfee6cd2d27e942a5?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420", altText: "Equipe profissional", title: "Equipe Profissional" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6216557388045d0746ca093b1b624e796c9d454dc87d328e1c42a865a719b58?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420", altText: "Serviços de emergência", title: "Serviços de chamada de emergência" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9926f4959cfaee4d49208aa78ed970eaf93f83f4f064cf1462952a6f5f9a428c?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420", altText: "Melhores produtos", title: "Best Products Use Only" },
  ];

  return (
    <section data-layername="mid" className="flex flex-col justify-center items-center px-20 py-16 w-full font-bold bg-white text-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1241px] max-md:max-w-full">
        <h2 data-layername="beneficios" className="gap-2.5 self-stretch p-2.5 text-5xl leading-none max-md:text-4xl text-center">
          BENEFÍCIOS
        </h2>
        <div className="flex overflow-x-auto relative gap-10 items-start mt-14 w-full text-3xl leading-none max-md:mt-10 max-md:max-w-full">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
