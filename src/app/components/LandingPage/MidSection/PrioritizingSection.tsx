import React from "react";

const PrioritizingSection: React.FC = () => {
  return (
    <section
      id="prioritizing-section"
      data-layername="mid"
      className="flex flex-col justify-center items-center p-8 w-full bg-gray-50 max-md:px-4 max-md:py-16"
    >
      <div className="flex flex-wrap gap-8 items-center max-w-5xl mx-auto">
        {/* Texto */}
        <div className="flex flex-col flex-1 my-auto w-full max-w-lg">
          <h2
            data-layername="priorizandoSeuCompanheiroDeEstimacao"
            className="text-4xl font-bold leading-tight text-teal-900 max-md:text-2xl max-md:leading-[38px]"
          >
            Priorizando seu companheiro de estimação
          </h2>
          <p
            data-layername="descricao"
            className="mt-6 text-base leading-7 text-gray-500"
          >
            Na Mascot's, nosso principal objetivo é garantir que cada animal de
            estimação que cuidamos tenha uma vida feliz e saudável.
            Dedicamo-nos a fornecer o mais alto padrão de atendimento
            veterinário, prestado com compaixão e profissionalismo. Nossa
            equipe de veterinários experientes trabalha incansavelmente para
            promover cuidados preventivos e tratamentos abrangentes para seu
            animal de estimação em todas as fases da vida.
          </p>
        </div>

        {/* Imagem */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d80ca4d15afbfcbd992a0caed25234151ef09682b88ba04425bee8dde1dd34?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420"
          alt="Veterinário cuidando de um animal de estimação"
          className="object-cover rounded-2xl w-full max-w-md shadow-lg max-md:w-full"
        />
      </div>
    </section>
  );
};

export default PrioritizingSection;
