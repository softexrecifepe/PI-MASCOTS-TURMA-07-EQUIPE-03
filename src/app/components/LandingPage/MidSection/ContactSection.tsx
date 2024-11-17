// Importa o React, necessário para criar componentes funcionais em React
import React from 'react';

// Importa os ícones do pacote 'react-icons', neste caso, os ícones de telefone e envelope
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Define um componente funcional chamado ContactSection
const ContactSection: React.FC = () => {
  return (
    // Inicia uma seção com classes Tailwind para estilização, incluindo classes de layout responsivo e de aparência
    <section 
      data-layername="mid" // Atributo personalizado para fins de rastreamento de camadas (pode ser parte de uma biblioteca de design ou monitoramento)
      className="flex overflow-hidden flex-col justify-center p-8 w-full h-full text-black bg-white max-md:px-4"
    >
      {/* Div que contém o conteúdo principal da seção, com estilos de fundo, sombra e transições */}
      <div className="flex flex-col justify-center p-6 max-w-4xl mx-auto rounded-3xl bg-blue-950 shadow-lg transition-transform duration-300 transform hover:scale-105 max-md:p-4">
        {/* Div que organiza os elementos de texto e imagem dentro da seção */}
        <div className="flex flex-wrap gap-6 items-center w-full">
          {/* Div que contém o texto da seção */}
          <div className="flex flex-col flex-1 my-auto w-full max-w-md">
            {/* Título com classes de estilização, que muda de tamanho no modo responsivo */}
            <h2 
              data-layername="nossosEspecialistasEstaoDisponiveisParaVoce24HorasPorDia7DiasPorSemana"
              className="p-2 text-3xl font-bold text-white max-md:text-2xl"
            >
              Nossos especialistas estão disponíveis para você 24 horas por dia, 7 dias por semana
            </h2>
            
            {/* Div que contém as informações de contato */}
            <div className="flex flex-col mt-4 w-full text-lg text-white">
              {/* Linha com ícone de telefone e número de contato */}
              <div className="flex items-center mt-2">
                {/* Ícone de telefone */}
                <FaPhoneAlt className="text-xl mr-2" />
                {/* Número de telefone */}
                <p data-layername="☎️62213458888">☎️ 62 21345 8888</p>
              </div>

              {/* Outra linha com um ícone de telefone para serviços de emergência */}
              <div className="flex items-center mt-2">
                <FaPhoneAlt className="text-xl mr-2" />
                <p data-layername="☎️62213454444ServicosDeEmergencia" className="leading-8">
                  ☎️ 62 21345 4444 (Serviços de Emergência)
                </p>
              </div>

              {/* Linha com ícone de envelope e e-mail de contato */}
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-xl mr-2" />
                <p data-layername="✉️MailMascotsCom">✉️ mail@mascots.com</p>
              </div>
            </div>
          </div>

          {/* Imagem de suporte ao conteúdo, com carregamento preguiçoso para melhor performance */}
          <img 
            loading="lazy" // Otimiza o carregamento da imagem para carregar apenas quando estiver próxima da visualização
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/194e3e77a8f0d9e2f052d6b89d767bf652a62ed3dbaf57d25f56fa3c39064537?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" 
            alt="Veterinário atendendo uma chamada de emergência" 
            className="object-contain rounded-3xl w-full max-w-xs max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

// Exporta o componente para uso em outras partes do aplicativo
export default ContactSection;
