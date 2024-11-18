import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-section"
      data-layername="mid"
      className="flex flex-col justify-center p-8 w-full bg-gray-50 max-md:px-4 max-md:py-16"
    >
      <div className="flex flex-col justify-center p-6 max-w-5xl mx-auto rounded-3xl bg-teal-100 shadow-lg transition-transform duration-300 transform hover:scale-105 max-md:p-4">
        <div className="flex flex-wrap gap-8 items-center w-full">
          {/* Texto de contato */}
          <div className="flex flex-col flex-1 my-auto w-full max-w-md">
            <h2
              data-layername="nossosEspecialistasEstaoDisponiveisParaVoce24HorasPorDia7DiasPorSemana"
              className="p-2 text-4xl font-bold leading-tight text-teal-900 max-md:text-2xl"
            >
              Estamos aqui para você 24/7
            </h2>
            <p className="mt-4 text-lg text-teal-800">
              Nossa equipe está sempre pronta para ajudar você e seu animal de
              estimação, seja em situações de emergência ou para tirar dúvidas
              gerais. Não hesite em entrar em contato!
            </p>

            <div className="flex flex-col mt-6 space-y-4 text-lg text-teal-900">
              {/* Informações de contato */}
              <div className="flex items-center">
                <FaPhoneAlt className="text-xl text-teal-600 mr-3" />
                <p data-layername="☎️62213458888">☎️ 62 21345 8888</p>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="text-xl text-teal-600 mr-3" />
                <p data-layername="☎️62213454444ServicosDeEmergencia">
                  ☎️ 62 21345 4444 (Emergências)
                </p>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-xl text-teal-600 mr-3" />
                <p data-layername="✉️MailMascotsCom">✉️ mail@mascots.com</p>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/194e3e77a8f0d9e2f052d6b89d767bf652a62ed3dbaf57d25f56fa3c39064537?placeholderIfAbsent=true&apiKey=65c64030c4424aee83ffed5f5ea4d420"
            alt="Veterinário atendendo uma chamada de emergência"
            className="object-cover rounded-3xl w-full max-w-md shadow-lg max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
