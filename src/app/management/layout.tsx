import React, { ReactNode } from "react";
import HeaderManagement from "../components/HeaderManagement";
import Image from "next/image";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import plusIcon from "../../../public/plus-square1.svg";  

interface ManagementLayoutProps {
  children: ReactNode;
}

const ManagementLayout: React.FC<ManagementLayoutProps> = ({ children }) => {

    const linksSidebar = [
        { name: "Home", href: "/management" },
        { name: "Cadastros", href: "/management/" },
        { name: "Internamento", href:"#"},
        { name: "Exames", href: "#" },
        { name: "Agenda", href: "#" },
        { name: "Inventário", href: "#" },
      ];
    

  return (
    <div className="h-screen flex flex-col">
      <HeaderManagement />
      <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-[20%] ms-2 px-2">
          <div className="flex my-2 w-full  ">
            <Button label={"Agendar consulta"}>
              <div className="w-11 px-1">
                <Image src={plusIcon} alt={"Ícone de mais"} sizes="100%" />
              </div>
            </Button>
          </div>
          <Sidebar links={linksSidebar} />
          </div>
        <main className="flex-1 h-full overflow-y-auto">{children}
        </main>
      </div>
    </div>
  );
};

export default ManagementLayout;
