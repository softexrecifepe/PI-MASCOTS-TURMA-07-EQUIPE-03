import React from 'react';

const PrioritizingSection: React.FC = () => {
  return (
    <section data-layername="mid" className="flex overflow-hidden flex-col justify-center items-center p-8 w-full bg-slate-50 max-md:px-4 max-md:py-16">
      <div className="flex flex-wrap gap-6 items-center max-w-3xl mx-auto">
        <div className="flex flex-col flex-1 my-auto w-full max-w-sm">
          <h2 data-layername="priorizandoSeuCompanheiroDeEstimacao" className="text-3xl font-bold leading-[42px] text-neutral-950 max-md:text-2xl max-md:leading-[38px]">
            Priorizando seu companheiro de estimação
          </h2>
          <p data-layername="naMascot'sNossoPrincipalObjetivoEGarantirQueCadaAnimalDeEstimacaoQueCuidamosTenhaUmaVidaFelizESaudavelDedicamoNosAFornecerOMaisAltoPadraoDeAtendimentoVeterinarioPrestadoComCompaixaoEProfissionalismoNossaEquipeDeVeterinariosExperientesEEquipeDeApoioTrabalhamIncansavelmenteParaPromoverCuidadosPreventivosParaSeuAdoravelAnimalDeEstimacaoFornecendoTratamentosAbrangentesEApoiandoEmTodasAsFasesDaVida" className="mt-4 text-base leading-7 text-zinc-500">
            Na Mascot's, nosso principal objetivo é garantir que cada animal de estimação que cuidamos tenha uma vida feliz e saudável. Dedicamo-nos a fornecer o mais alto padrão de atendimento veterinário, prestado com compaixão e profissionalismo. Nossa equipe de veterinários experientes e equipe de apoio trabalham incansavelmente para promover cuidados preventivos para seu adorável animal de estimação, fornecendo tratamentos abrangentes e apoiando em todas as fases da vida.
          </p>
        </div>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d80ca4d15afbfcbd992a0caed25234151ef09682b88ba04425bee8dde1dd34?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" 
          alt="Veterinário cuidando de um animal de estimação" 
          className="object-contain rounded-3xl w-full max-w-xs max-md:w-full"
        />
      </div>
    </section>
  );
};

export default PrioritizingSection;
