import Image from "next/image";
import PawVet from "../../../../public/veterinary_paw.svg";
import notification from "../../../../public/bell.svg";
import { CompanyLogo } from "@/app/components/Logo";
import Input from "@/app/components/Input";
import petGless from "../../../../public/pet-gless.jpg";
import { Sidebar } from "@/app/components/Sidebar";

const Service: React.FC = () => {
  const listClient = [
    { name: "Hemograma", href: "" },
    { name: "Vermifugo", href: "" },
    { name: "Raio X", href: "" },
    { name: "Ecocardiográma", href: "" },
  ];

  return (
    <>
      <header className="px-6 flex justify-between items-center bg-accentThree text-gray-900 py-4 shadow-lg">
        <div className="flex items-center">
          <div className="border border-primary rounded-full w-12 p-2">
            <Image src={PawVet} alt="Pata de pet" sizes="100%" />
          </div>
          <CompanyLogo />
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-11 p-1 hover:bg-gray-200 rounded transition duration-200 cursor-pointer">
            <Image src={notification} alt="Ícone de notificação" sizes="100%" />
          </div>
          <Input placeholder="Pesquise aqui..." label="" />
        </div>
      </header>

      <div className="px-6 py-4 flex gap-6 items-start justify-end border-b border-secondary bg-gray-50">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-2">Nome do Cachorro</h1>
          <p className="text-sm text-gray-700">Espécie: Cachorro</p>
          <p className="text-sm text-gray-700">Raça: Husky Siberiano</p>
          <p className="text-sm text-gray-700">Gênero: Masculino</p>
          <div className="flex justify-start gap-2 mt-2">
            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Alergia</span>
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Animal Dócil</span>
          </div>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <p className="text-sm text-gray-700">Peso: 30 kg</p>
          <p className="text-sm text-gray-700">Idade: 2 anos</p>
        </div>
        <div className="w-36">
          <Image src={petGless} alt="Cachorro de óculos" className="rounded-lg shadow-md" />
        </div>
      </div>

      <div className="flex border-t border-primary p-4 gap-4 bg-white">
        <div className="w-1/4 h-full">
          <aside className="bg-accentThree rounded-lg p-4 shadow-md">
            <Sidebar links={listClient} />
          </aside>
        </div>
        <div className="flex-1 h-full border border-gray-200 bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Histórico</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Prescrições</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Exames e Resultados</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Plano de alimentação</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Relatório PDF</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Alertas</h2>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200">
            <h2 className="text-lg font-medium">Consultas futuras</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
