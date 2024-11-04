
import Image from "next/image"
import PawVet from "../../../../public/veterinary_paw.svg";
import notification from "../../../../public/bell.svg";
import { CompanyLogo } from "@/app/components/Logo";
import Input from "@/app/components/Input";
import petGless from "../../../../public/pet-gless.jpg"
import {Sidebar} from "@/app/components/Sidebar";
const Service: React.FC = () => {
  const listClient = [
    { name: "Hemograma", href: "" },
    { name: "Vermifugo", href: "" },
    { name: "Raio X", href: "" },
    { name: "Ecocardiográma", href: "" },
  ];
    return (
      <>
        <header className="px-4 flex  justify-between items-center bg-accentThree text-[191919] py-3 shadow-md">
        <div className="flex items-center">
          <div className=" border border-spacing-12 border-primary rounded-full w-11 p-2">
            <Image src={PawVet} alt="Pata de pet" sizes="100%" />
          </div>
          <CompanyLogo />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-11 p-1 hover:cursor-pointer">
            <Image src={notification} alt="Ícone de notificação" sizes="100%" />
          </div>
          <Input placeholder={`Pesquise aqui...`} label={""} />
        </div>
      </header>
      <div className="px-4 gap-6 flex items-center justify-end border border-secondary">

        <div className="border border-secondary">
          <h1 className="font- text-3xl font-">Nome do cachorro</h1>
          <p>Espécie: Cachorro</p>
          <p>Husky Siberiano</p>
          <p>gênero</p>
          <div className="flex justify-center gap-4">
            <p className="bg-accent">Alergia</p>
            <p className="bg-primary">Animal Dócio</p>
          </div>
        </div>
        <div>
          <p>peso: 30.00</p>
          <p>idade: 2 anos</p>
        </div>
        <div className="w-36">
          <Image src={petGless} alt="Cachorro de óculos"/>
        </div>
      </div>

      <div className="flex border border-primary p-4 gap-4">
        <div className=" h-full">
          <aside className=" bg-accentThree rounded text-black p-4">
            <Sidebar links={listClient} />
          </aside>
        </div>
        <div className="flex w-[100%] h-full gap-4">
          <div className=" h-full border border-primary  flex gap-4 bg-accentThree">
            <div className="w-[40%] bg-slate-600"></div>
            <div>Histórico</div>
            <div>Prescrições</div>
            <div>Exames e Resultados</div>
            <div>Plano de alimentação</div>
            <div>Relatório PDF</div>
            <div>Alertas</div>
            <div>Consultas futuras</div>
          </div>
        </div>
      </div>
      </>
    )
}
export default Service