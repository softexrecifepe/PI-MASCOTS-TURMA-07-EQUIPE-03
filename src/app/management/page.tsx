import React from "react";
import Logo from "../../../public/logo.svg";
import PawVet from "../../../public/veterinary_paw.svg";
import Notification from "../../../public/bell.svg";
import Image from "next/image";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { Cards } from "../components/Cards";

export const Header: React.FC = () => {
  const linksSidebar = [
    { name: "Home", href: "/" },
    { name: "Consultas", href: "/consultetion" },
    { name: "Documentos", href: "/documents" },
    { name: "Inventário", href: "/Inventory" },
  ];

  const linksCards = [
    { name: "Atendimento", href: "/" },
    { name: "Vacinas", href: "/consultetion" },
    { name: "Exames", href: "/documents" },
    { name: "Internamento", href: "/Inventory" },
  ];

  return (
    <>
      <header className="px-4 flex justify-between items-center bg-accentThree text-[191919] py-3 shadow-md">
        <div className="flex items-center">
          <div className=" border border-spacing-12 border-primary rounded-full w-[15%] p-2">
            <Image src={PawVet} alt="Pata de pet" sizes="100%" />
          </div>
          <div className="w-[50%]">
            <Image src={Logo} alt="Logo Mascots" sizes="100%" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[15%] p-1 hover:cursor-pointer">
            <Image src={Notification} alt="Ícone de notificação" sizes="100%" />
          </div>
          <Input placeholder={`Pesquise aqui...`} label={""} />
        </div>
      </header>
      <div className="flex">
        <div className="w-[20%]">
          <div className="flex my-4 w-[100%]">
            <Button label={"+ Consulta"} />
          </div>
          <aside className="w-[100%] h-full bg-[#EBEDED] text-black p-4 rounded">
            <Sidebar links={linksSidebar} />
          </aside>
        </div>
        <div>
          <Cards links={linksCards} />
        </div>
      </div>
    </>
  );
};

export default Header;
