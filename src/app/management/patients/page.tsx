"use client";
import { getAnimals } from "../../../../get-animals";
import { useEffect, useState } from "react";

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

const Pets: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>();
  const [loading, setLoading] = useState(true)
  
  //Função para fazer a rquisição dos dados dos animais
  useEffect(()=>{
    setLoading(true)
    const fetchAnimals = async () => {
      try {
        const result = await getAnimals();
        if (result?.erro === "true") {
          alert("Erro na requisição dos dados.")
          return;
        }
        setAnimals(result)
      } catch (error) {
        console.error("Erro na requisição dos dados", error);
        alert("Ocorreu um erro ao obter os dados dos animais.")
      } finally{
        setLoading(false)
      }
    };
    fetchAnimals()
  },[])
  
  return (
    <div className="flex justify-center flex-col w-full p-2 me-2 pe-4 gap-2 overflow-y-aut">
      <div className="w-full flex justify-center font-bold uppercase shadow-md rounded-md p-2">Pacientes</div>
      
      {loading ? ( // Exibe o indicador de carregamento
        <div className="flex justify-center items-center h-64">
          <span className="text-lg font-semibold">Carregando...</span>
        </div>
      ) : (
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
