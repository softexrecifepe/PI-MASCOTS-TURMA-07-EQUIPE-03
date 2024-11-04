import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section data-layername="mid" className="flex overflow-hidden flex-col justify-center px-6 py-12 w-full text-black bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-8 py-10 w-full rounded-3xl bg-blue-950 shadow-lg transition-transform duration-300 transform hover:scale-105 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-20 items-center max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[450px] max-md:max-w-full">
            <h2 data-layername="nossosEspecialistasEstaoDisponiveisParaVoce24HorasPorDia7DiasPorSemana" className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Nossos especialistas estão disponíveis para você 24 horas por dia, 7 dias por semana
            </h2>
            <div className="flex flex-col mt-6 w-full text-xl text-white max-md:max-w-full">
              <div className="flex items-center mt-3">
                <FaPhoneAlt className="text-2xl mr-2" />
                <p data-layername="☎️62213458888">☎️ 62 21345 8888</p>
              </div>
              <div className="flex items-center mt-3">
                <FaPhoneAlt className="text-2xl mr-2" />
                <p data-layername="☎️62213454444ServicosDeEmergencia" className="leading-10 max-md:max-w-full">
                  ☎️ 62 21345 4444 (Serviços de Emergência)
                </p>
              </div>
              <div className="flex items-center mt-3">
                <FaEnvelope className="text-2xl mr-2" />
                <p data-layername="✉️MailMascotsCom">✉️ mail@mascots.com</p>
              </div>
            </div>
          </div>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/194e3e77a8f0d9e2f052d6b89d767bf652a62ed3dbaf57d25f56fa3c39064537?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420" 
            alt="Veterinário atendendo uma chamada de emergência" 
            className="object-contain self-stretch my-auto rounded-3xl aspect-[1.02] min-w-[240px] w-[500px] max-md:max-w-full ml-20" // Adicionando margin-left
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
