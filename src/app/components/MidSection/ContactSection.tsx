import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section data-layername="mid" className="flex overflow-hidden flex-col justify-center p-8 w-full h-full text-black bg-white max-md:px-4">
      <div className="flex flex-col justify-center p-6 max-w-4xl mx-auto rounded-3xl bg-blue-950 shadow-lg transition-transform duration-300 transform hover:scale-105 max-md:p-4">
        <div className="flex flex-wrap gap-6 items-center w-full">
          <div className="flex flex-col flex-1 my-auto w-full max-w-md">
            <h2 data-layername="nossosEspecialistasEstaoDisponiveisParaVoce24HorasPorDia7DiasPorSemana" className="p-2 text-3xl font-bold text-white max-md:text-2xl">
              Nossos especialistas estão disponíveis para você 24 horas por dia, 7 dias por semana
            </h2>
            <div className="flex flex-col mt-4 w-full text-lg text-white">
              <div className="flex items-center mt-2">
                <FaPhoneAlt className="text-xl mr-2" />
                <p data-layername="☎️62213458888">☎️ 62 21345 8888</p>
              </div>
              <div className="flex items-center mt-2">
                <FaPhoneAlt className="text-xl mr-2" />
                <p data-layername="☎️62213454444ServicosDeEmergencia" className="leading-8">
                  ☎️ 62 21345 4444 (Serviços de Emergência)
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-xl mr-2" />
                <p data-layername="✉️MailMascotsCom">✉️ mail@mascots.com</p>
              </div>
            </div>
          </div>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/194e3e77a8f0d9e2f052d6b89d767bf652a62ed3dbaf57d25f56fa3c39064537?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" 
            alt="Veterinário atendendo uma chamada de emergência" 
            className="object-contain rounded-3xl w-full max-w-xs max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
