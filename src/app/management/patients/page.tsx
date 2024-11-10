"use client";
// import { Sidebar } from "@/app/components/Sidebar";
// import { getAnimals } from "../../../../get-animals";
import { useState } from "react";

interface Animal {
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
}

// interface PetsProps {
//   pets: Animal[];
// }

const Pets: React.FC = () => {
  const [showPetsDiv, setShowPetsDiv] = useState(false); // Estado para controlar a visibilidade da div
  const [animals, setAnimals] = useState<Animal[]>();

  // Função para lidar com o clique nos links
  const handleLinkClick = (link: { name: string }) => {
    if (link.name === "Pets") {
      setShowPetsDiv(true); // Mostra a div ao clicar em "Pets"
    } else {
      setShowPetsDiv(false); // Oculta a div para outros links
    }
    // handleGetPets();
  };

  // async function handleGetPets() {
  //   try {
  //   } catch (error) {
  //     console.error("Ocorreu algum erro na requisição", error);
  //   }
  //   try {
  //     const result = await getAnimals();

  //     if (result?.erro === "true") {
  //       alert("Erro na requisição dos dados.");
  //       return;
  //     }
  //     setAnimals(result);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //     alert("Ocorreu um erro ao obter o endereço.");
  //     console.log(error);
  //   }
  //   // finally {
  //   //   setLoading(false);
  //   // }
  //   // handleGetPets()
  // }
  //   const linksSidebar = [
  //     { name: "Home", href: "/management" },
  //     { name: "Pets", href: "/management/pacientes"},
  //     { name: "Cadastros", href: "" },
  //     { name: "Internamento", href: "#" },
  //     { name: "Exames", href: "#" },
  //     { name: "Agenda", href: "#" },
  //     { name: "Inventário", href: "#" },
  //   ];
  return (
    <div>
      {/* <div className="flex border-t border-primary p-4 gap-4 bg-white">
        <div className="w-1/4 h-full">
          <aside className="bg-accentThree rounded-lg p-4 shadow-md">
            <Sidebar links={linksSidebar} />
          </aside>
        </div>
      </div> */}
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
  );
};
export default Pets;
