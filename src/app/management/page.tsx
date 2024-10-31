import React from "react";
import Logo from "../../../public/logo.svg";
import PawVet from "../../../public/veterinary_paw.svg";
import Notification from "../../../public/bell.svg"
import Image from "next/image";
import Input from "../components/Input";

export const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
