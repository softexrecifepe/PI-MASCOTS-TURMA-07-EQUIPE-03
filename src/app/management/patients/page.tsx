"use client";
import { getAnimals } from "../../../../get-animals";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Animal {
  pet_id: number;
  pet_name: string;
  age: string;
  species: string;
  behavior: string;
  breed: string;
  gender: string;
  weight: string;
  physical_characteristics: string;
  allergies: string;
  diseases: string;
  microchip_code: string;
  owners_cpf: string;
}

const Pets: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchAnimals = async () => {
      try {
        const result = await getAnimals();
        if (result?.erro === "true") {
          alert("Erro na requisição dos dados.");
          return;
        }
        setAnimals(result);
      } catch (error) {
        console.error("Erro na requisição dos dados", error);
        alert("Ocorreu um erro ao obter os dados dos animais.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div className="flex flex-col w-full p-4 gap-4 overflow-y-auto">
      <div className="w-full text-center font-bold uppercase shadow-md rounded-md p-2 bg-gray-100">
        Pacientes
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-lg font-semibold">Carregando...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {animals.map((animal) => (
              <motion.div
                key={animal.pet_id}
                layoutId={`card-${animal.pet_id}`}
                className="bg-primary border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedId(animal.pet_id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="font-bold text-lg mb-2">{animal.pet_name}</div>
                <div className="text-gray-600">
                  <p><strong>Idade:</strong> {animal.age}</p>
                  <p><strong>Espécie:</strong> {animal.species}</p>
                  <p><strong>Comportamento:</strong> {animal.behavior}</p>
                </div>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={`card-${selectedId}`}
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={() => setSelectedId(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-primary rounded-lg p-6 max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      {animals.find((animal) => animal.pet_id === selectedId)?.pet_name}
                    </h2>
                    <div className="text-gray-600 space-y-2">
                      <p><strong>Espécie:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.species}</p>
                      <p><strong>Idade:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.age}</p>
                      <p><strong>Raça:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.breed}</p>
                      <p><strong>Peso:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.weight}</p>
                      <p><strong>Características:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.physical_characteristics}</p>
                      <p><strong>Alergias:</strong> {animals.find((animal) => animal.pet_id === selectedId)?.allergies}</p>
                    </div>
                    <button
                      className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => setSelectedId(null)}
                    >
                      Fechar
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Pets;
