import React from 'react';

const PrioritizingSection: React.FC = () => {
  return (
    <section data-layername="mid" className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-slate-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex  flex-col self-stretch my-auto min-w-[240px] w-[588px] max-md:max-w-full">
          <h2 data-layername="priorizandoSeuCompanheiroDeEstimacao" className="flex-1 text-4xl shrink gap-2.5 self-stretch p-2.5 w-full text-5xl font-bold leading-[56px] text-neutral-950 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Priorizando seu companheiro de estimação
          </h2>
          <p data-layername="naMascot'sNossoPrincipalObjetivoEGarantirQueCadaAnimalDeEstimacaoQueCuidamosTenhaUmaVidaFelizESaudavelDedicamoNosAFornecerOMaisAltoPadraoDeAtendimentoVeterinarioPrestadoComCompaixaoEProfissionalismoNossaEquipeDeVeterinariosExperientesEEquipeDeApoioTrabalhamIncansavelmenteParaPromoverCuidadosPreventivosParaSeuAdoravelAnimalDeEstimacaoFornecendoTratamentosAbrangentesEApoiandoEmTodasAsFasesDaVida" className="mt-6 text-lg leading-9 text-zinc-500 max-md:max-w-full">
            Na Mascot's, nosso principal objetivo é garantir que cada animal de estimação que cuidamos tenha uma vida feliz e saudável. Dedicamo-nos a fornecer o mais alto padrão de atendimento veterinário, prestado com compaixão e profissionalismo. Nossa equipe de veterinários experientes e equipe de apoio trabalham incansavelmente para promover cuidados preventivos para seu adorável animal de estimação, fornecendo tratamentos abrangentes e apoiando em todas as fases da vida.
          </p>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d80ca4d15afbfcbd992a0caed25234151ef09682b88ba04425bee8dde1dd34?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" alt="Veterinário cuidando de um animal de estimação" className="object-contain self-stretch my-auto rounded-3xl aspect-[0.77] min-w-[240px] w-[487px] max-md:max-w-full" />
      </div>
    </section>
  );
};

export default PrioritizingSection;