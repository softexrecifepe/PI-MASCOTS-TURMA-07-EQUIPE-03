import React from "react";
import Logo from "../../../public/logo.svg";
import PawVet from "../../../public/veterinary_paw.svg";
import Notification from "../../../public/bell.svg";
import plusIcon from "../../../public/plus-square1.svg";
import Image from "next/image";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { Cards } from "../components/Cards";

export const Header: React.FC = () => {
  const linksSidebar = [
    { name: "Home", href: "#" },
    { name: "Consultas", href: "#" },
    { name: "Documentos", href: "#" },
    { name: "Inventário", href: "#" },
  ];

  const linksCards = [
    {
      name: "Atendimento",
      href: "#",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
    {
      name: "Vacinas",
      href: "#",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    { name: "Exames", href: "#" },
    {
      name: "Internamentos",
      href: "#",
      bgColor: "bg-purple-500",
      textColor: "text-white",
    },
  ];

  return (
    <>
      <header className="px-4 flex justify-between items-center bg-accentThree text-[191919] py-3 shadow-md">
        <div className="flex items-center">
          <div className=" border border-spacing-12 border-primary rounded-full w-11 p-2">
            <Image src={PawVet} alt="Pata de pet" sizes="100%" />
          </div>
          <div className="w-[50%]">
            <Image src={Logo} alt="Logo Mascots" sizes="100%" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-11 p-1 hover:cursor-pointer">
            <Image src={Notification} alt="Ícone de notificação" sizes="100%" />
          </div>
          <Input placeholder={`Pesquise aqui...`} label={""} />
        </div>
      </header>
      <div className="flex px-4 gap-4">
        <div className="w-[20%] h-full">
          <div className="flex my-4 w-[100%]">
            <Button label={"Consulta"}>
              <div className="w-[15%] p-2">
                <Image src={plusIcon} alt={"Ícone de mais"} sizes="100%" />
              </div>
            </Button>
          </div>
          <aside className="w-[100%] h-full bg-[#EBEDED] text-black p-4 rounded">
            <Sidebar links={linksSidebar} />
          </aside>
        </div>
        <div className="flex h-full flex-col py-4 gap-4">
          <Cards links={linksCards} />
        </div>
      </div>
    </>
  );
};

export default Header;
