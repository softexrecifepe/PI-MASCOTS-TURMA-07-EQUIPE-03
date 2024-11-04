'use client'
import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import PawVet from "../../../public/veterinary_paw.svg";
import Notification from "../../../public/bell.svg";
import plusIcon from "../../../public/plus-square1.svg";
import Image from "next/image";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { Cards } from "../components/Cards";
import { getAnimals } from "../../../get-animals";

type Animal = {
  pet_id: number;
  pet_name: string;
  age: string;
  allergies: string;
  behavior: string;
  breed: string;
  diseases: string;
  gender: string;
  microchip_code: string;
  owners_cpf: string;
  physical_characteristics: string;
  species: string;
  weight: string;
};

export const Management: React.FC = () => {

  const [showPetsDiv, setShowPetsDiv] = useState(false); // Estado para controlar a visibilidade da div
  const [animals, setAnimals] = useState<Animal[]>();

  const linksSidebar = [
    { name: "Home", href: "#" },
    { name: "Pets", href: "#" },
    { name: "Consultas", href: "#" },
    { name: "Documentos", href: "#" },
    { name: "Inventário", href: "#" },
  ];

  const linksCards = [
    {
      name: "Atendimento",
      href: "/management/atendimento",
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

  // Função para lidar com o clique nos links
  const handleLinkClick = (link: { name: string }) => {
    if (link.name === "Pets") {
      setShowPetsDiv(true); // Mostra a div ao clicar em "Pets"
    } else {
      setShowPetsDiv(false); // Oculta a div para outros links
    }
    console.log(handleGetPets());
  };

  async function handleGetPets() {
    try {
    } catch (error) {
      console.error("Ocorreu algum erro na requisição", error);
    }
    try {
      const result = await getAnimals();

      if (result?.erro === "true") {
        alert("Erro na requisição dos dados.");
        return;
      }
      setAnimals(result)
      console.log(result);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao obter o endereço.");
    }
    // finally {
    //   setLoading(false);
    // }
    // handleGetPets()
    
  }

  return (
    <>
      <header className="px-4 flex justify-between items-center bg-accentThree text-[191919] py-3 shadow-md">
        <div className="flex items-center">
          <div className="border border-spacing-12 border-primary rounded-full w-11 p-2">
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
            <Sidebar links={linksSidebar} onClickLink={handleLinkClick} />
          </aside>
        </div>
        <div className="flex h-full flex-col py-4 gap-4">
          <Cards links={linksCards} />
          {showPetsDiv && (
            <div className="flex flex-col w-[100%] bg-accentThree p-4 rounded shadow-lg">
              <ul className="space-y-4">
                {animals?.map((animal) => (
                  <li
                    key={animal.pet_id}
                    className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <table className="w-full text-left">
                      <tbody>
                        <tr>
                          <td className="font-semibold pr-2">Nome do animal:</td>
                          <td>{animal.pet_name}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Comportamento:</td>
                          <td>{animal.behavior}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Espécie:</td>
                          <td>{animal.species}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Gênero:</td>
                          <td>{animal.gender}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Idade:</td>
                          <td>{animal.age}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Raça:</td>
                          <td>{animal.breed}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Peso:</td>
                          <td>{animal.weight}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Característica:</td>
                          <td>{animal.physical_characteristics}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold pr-2">Alergia:</td>
                          <td>{animal.allergies}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );  
};

export default Management;
