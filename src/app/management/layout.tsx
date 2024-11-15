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
    { icon: "/home.svg", name: "Home", href: "/management" },
    {
      icon: "/file-tray-full.svg",
      name: "Cadastros",
      href: "/management/",
      sublinks: [
        { name: "Novo tutor", href: "/management/TutorForm" },
        { name: "Novo animal", href: "/management/PetForm" },
      ],
    },
    {
      icon: "/medical.svg",
      name: "Internamento",
      href: "#",
      sublinks: [
        { name: "Internar novo animal", href: "/management/hospitalizationsForm" },
        { name: "Novo tratamento", href: "/management/#" },
        { name: "Iniciar novo monitoramento", href: "/management/#" },
      ],
    },
    { icon: "/file.svg", name: "Exames", href: "#" },
    { icon: "/calendar.svg", name: "Agenda", href: "#" },
    { icon: "/box.svg", name: "Inventário", href: "#" },
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
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default ManagementLayout;
