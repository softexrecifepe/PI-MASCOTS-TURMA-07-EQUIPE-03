import React from "react";
import Input from "./Input";
import Image from "next/image";
import PawVet from "../../../public/veterinary_paw.svg";
import Logo from "../../../public/logo.svg";
import notification from "../../../public/bell.svg";

const HeaderManagement: React.FC = () => {
  return (
      <header className="px-4 flex justify-between items-center bg-accentThree text-[191919] py-2 shadow-md">
        <div className="flex items-center">
          <div className="border border-spacing-12 border-primary rounded-full w-11 p-2">
            <Image src={PawVet} alt="Pata de pet" sizes="100%" />
          </div>
          <div className="w-32">
            <Image src={Logo} alt="Logo Mascots" sizes="100%" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-11 p-1 hover:cursor-pointer">
            <Image src={notification} alt="Ícone de notificação" sizes="100%" />
          </div>
          <Input placeholder={`Pesquise aqui...`} label={""} />
        </div>
      </header>
  );
};

export default HeaderManagement ;