"use client";
import { useEffect, useState } from "react";
// import { getHospitalizations, HospitalizationData } from "../hospitalizationsForm/hospitalForm";
import { getAnimalsHospital } from "../../../../get-animals";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";

function formatDate(date:Date) {
   
  const resultDate = format(new Date(date), "dd/MM/yyyy", { locale: ptBR });
  return resultDate
}

interface AnimalHospitalization {
hospitalization_id: number; //11
cage_number: number; //"1"
reason: string; //"Fratura"
entry_date: Date;//"2024-10-11T00:00:00.000Z",
requested_exams: string; //"Raio-X, Hemograma",
results_exams: string //"googledrive.com/examespet1",
hospitalization_observations: string; //"Animal em recuperação, monitoramento contínuo.",
pet_id: number; //1,
pet_name: string; //"Toinha",
owners_name: string; //"Sabrina Mathias",
owners_contact: string; //"81988278783",
consultation_id: number; //1,
veterinarian_cpf: string;//"12398745642"
}

const HospitalizationList = () => {
  const [animalHospital, setAnimalHospital] = useState<AnimalHospitalization[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPetId, setExpandedPetId] = useState<number | null>(null); // Estado para rastrear o pet_id expandido

  /* const hospitalizations: HospitalizationData[] = getHospitalizations();
  const [hospitalizations, setHospitalizations] = useState<HospitalizationData[]>([]);



  // Carregar internações do localStorage no cliente
  useEffect(() => {
    const savedHospitalizations = getHospitalizations();
    setHospitalizations(savedHospitalizations);
  }, []); */


  // Função para fazer a requisição dos dados dos animais
  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true)
      try {
        const result = await getAnimalsHospital();
        console.log("Dados do animal"+result);
        
        if (result?.erro === "true") {
          alert("Erro na requisição dos dados.");
          return;
        }
        setAnimalHospital(result);
      } catch (error) {
        console.error("Erro na requisição dos dados", error);
        alert("Ocorreu um erro ao obter os dados dos animais.");
      }finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 rounded-lg">
      
      <h1 className="text-2xl font-bold mb-4">Lista de Internações</h1>
      {loading ? ( // Exibe o indicador de carregamento
        <div className="flex justify-center items-center h-64">
          <span className="text-lg font-semibold">Carregando...</span>
        </div>) : (
        <table className="table-auto border-collapse border border-gray-300 ">
          <thead className="rounded-lg">
            <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Gaiola</th>
              <th className="border border-gray-300 px-4 py-2">Nome do Pet</th>
              <th className="border border-gray-300 px-4 py-2">Nome do Tutor</th>
              <th className="border border-gray-300 px-4 py-2">Data de Entrada</th>
              <th className="border border-gray-300 px-4 py-2">Razão</th>
              <th className="border border-gray-300 px-4 py-2">Veterinário</th>
            </tr>
          </thead>
          <tbody className="rounded-lg">
          <AnimatePresence>
            {animalHospital.map((item) => (
            <>
              <motion.tr 
                key={item.pet_id}
                className="cursor-pointer hover:bg-gray-600 hover:text-white"
                layout
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                whileHover={{scale: 1.01}}
                whileTap={{ scale: 0.95}}
                onClick={() =>
                  setExpandedPetId(expandedPetId === item.pet_id ? null : item.pet_id)
                } // Alterna entre expandido e recolhido
              >
                {/* Detalhe principal */}
                {/* <td className="border border-gray-300 px-4 py-2">{index + 1}</td> */}
                <td className="border border-gray-300 px-4 py-2 rounded-s-lg">{item.cage_number}</td>
                <td className="border border-gray-300 px-4 py-2">{item.pet_name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.owners_name}</td>
                <td className="border border-gray-300 px-4 py-2">{formatDate(item.entry_date)}</td>
                <td className="border border-gray-300 px-4 py-2">{item.reason}</td>
                <td className="border border-gray-300 px-4 py-2 rounded-e-lg">{item.veterinarian_cpf}</td>

                {/* Detalhes adicionais */}
                
              </motion.tr>
              <AnimatePresence>
                  {expandedPetId === item.pet_id && (
                    <motion.div
                      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
                      onClick={() => setExpandedPetId(null)}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                      // height: "auto",
                      
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                      exit={{
                      // height: 0,
                      opacity: 0,
                      transition: { duration: 0.6, ease: "easeInOut" },
                      }}>
                      <motion.td 
                      colSpan={6} 
                      className="border bg-gray-300 p-4 rounded max-w-xl w-full"
                      onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4, ease: "easeInOut" },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                      >
                        <motion.div className="text-sm w-[100%]">
                          <p><strong>Gaiola:</strong> {item.cage_number}</p>
                          <p><strong>Pet:</strong> {item.pet_name}</p>
                          <p><strong>Razão da internação:</strong> {item.reason}</p>
                          <p><strong>Observações:</strong> {item.hospitalization_observations}</p>
                          <p><strong>Exames Solicitados:</strong> {item.requested_exams}</p>
                          <p><strong>Resultados dos Exames:</strong> {item.results_exams}</p>
                          <p><strong>Nome do Tutor:</strong> {item.owners_name}</p>
                          <p><strong>Contato do Tutor:</strong> {item.owners_contact}</p>
                        </motion.div>
                        <motion.button
                        className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => setExpandedPetId(null)}
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // exit={{ opacity: 0 }}
                      >
                        Fechar
                      </motion.button>
                      </motion.td>
                    </motion.div>
                  )}

              </AnimatePresence>
            </>
            ))}
          </AnimatePresence> 
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HospitalizationList;
