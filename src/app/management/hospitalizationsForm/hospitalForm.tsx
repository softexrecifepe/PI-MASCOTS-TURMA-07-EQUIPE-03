"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { postAnimalsHospital } from "../../../../get-animals";
// import { useRouter } from "next/router";

export interface HospitalizationData {
  cage_number: string; //"1"
  reason: string; //"Fratura"
  entry_date: string;// Date "2024-10-11T00:00:00.000Z",
  requested_exams: string; //"Raio-X, Hemograma",
  results_exams: string //"googledrive.com/examespet1",
  hospitalization_observations: string; //"Animal em recuperação, monitoramento contínuo.",
  pet_id: number; //1,
  pet_name: string; //"Toinha",
  owners_name: string; //"Sabrina Mathias",
  owners_contact: string; //"81988278783",
  consultation_id: number; //1,
  veterinarian_cpf: string;//"12398745642"
  discharge_date: string | null;
  discharge_time: string | null;
  death: boolean;
  time_death: string | null;
  date_death: string | null;
  hospitalization_id: number; //11
}

export interface Animal {
  id: number;
  name: string;
  owner_name: string;
}

export const getAnimals = (): Animal[] => {
  if (typeof window === "undefined") {
    return [];
  }
  const savedAnimals = localStorage.getItem("animals");
  return savedAnimals ? JSON.parse(savedAnimals) : [];
};

export const getHospitalizations = (): HospitalizationData[] => {
  if (typeof window === "undefined") {
    return []; // Garante que não tente acessar localStorage no servidor
  }

  const savedHospitalizations = localStorage.getItem("hospitalizations");
  return savedHospitalizations ? JSON.parse(savedHospitalizations) : [];
};

const RegisterHospitalization = () => {
  const [message, setMessage] = useState("");
  const [hospitalizations, setHospitalizations] = useState<HospitalizationData[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [formData, setFormData] = useState<HospitalizationData>({
    cage_number: "01",
    reason: "Tratamento para cistite aguda.",
    entry_date: "2024-10-11T00:00:00.000Z",
    requested_exams: "Hemograma completo e ultrassom pélvica",
    results_exams: "drive.google.com/drive",
    hospitalization_observations: "Retirar a sonda apenas após reavaliação médica.",
    pet_id: 1,
    pet_name: "Toinha",
    owners_name: "Sabrina Mathias",
    owners_contact: "81988278783",
    consultation_id: 1,
    veterinarian_cpf: "12398745642",
    discharge_date: null,
    discharge_time: null,
    death: false,
    time_death: null,
    date_death: null,
    hospitalization_id: 11,
  });

  // Busca os dados das internações do localStorage
  useEffect(() => {
    const savedHospitalizations = getHospitalizations();
    setHospitalizations(savedHospitalizations);

    const savedAnimals = getAnimals();
    setAnimals(savedAnimals);
  }, []);

  // Carregar internações do localStorage na primeira renderização
  useEffect(() => {
    const savedHospitalizations = localStorage.getItem("hospitalizations");
    if (savedHospitalizations) {
      setHospitalizations(JSON.parse(savedHospitalizations));
    }
  }, []);

  // Atualizar o localStorage quando a lista de internações mudar
  useEffect(() => {
    localStorage.setItem("hospitalizations", JSON.stringify(hospitalizations));
    console.log(hospitalizations);
    
  }, [hospitalizations]);

  //   const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, ariaChecked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? ariaChecked : value,
    });
  };

  const handleAnimalSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAnimalId = parseInt(e.target.value);
    const selectedAnimal = animals.find((animal) => animal.id === selectedAnimalId);
    if (selectedAnimal) {
      setFormData({
        ...formData,
        pet_id: selectedAnimal.id,
        pet_name: selectedAnimal.name,
        owners_name: selectedAnimal.owner_name,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newHospitalization = { ...formData };

    // Adicionar nova internação à lista
    setHospitalizations((prevHospitalizations) => [...prevHospitalizations, newHospitalization]);
    setMessage("Internação cadastrada com sucesso!");
    // alert("Cadastrado com sucesso!")

    // Limpar o formulário
    setFormData({
      cage_number: "",
      reason: "",
      entry_date: "",
      requested_exams: "",
      results_exams: "",
      hospitalization_observations: "",
      pet_id: 1,
      pet_name: "",
      owners_name: "",
      owners_contact: "",
      consultation_id: 1,
      veterinarian_cpf: "",
      discharge_date: null,
      discharge_time: null,
      death: false,
      time_death: null,
      date_death: null,
      hospitalization_id: 11,
    });

    //Para futura integração de API
    try {
      // Envia os dados usando a função externa com Axios
      const response = await postAnimalsHospital(formData);
      setMessage("Internação cadastrada com sucesso!");
      console.log("Resposta da API:", response);

      // Limpa o formulário
      setFormData({
        cage_number: "",
        reason: "",
        entry_date: "",
        requested_exams: "",
        results_exams: "",
        hospitalization_observations: "",
        pet_id: 1,
        pet_name: "",
        owners_name: "",
        owners_contact: "",
        consultation_id: 1,
        veterinarian_cpf: "",
        discharge_date: null,
        discharge_time: null,
        death: false,
        time_death: null,
        date_death: null,
        hospitalization_id: 11,
      });
    } catch (error) {
      setMessage("Erro ao cadastrar internação.");
      console.error(error);
    }

    setMessage("")
  };

  // return (
  //   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  //     <form
  //       onSubmit={handleSubmit}
  //       className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4"
  //     >
  //       <h2 className="text-2xl font-semibold mb-4 text-center">
  //         Cadastro de Internação
  //       </h2>

  //       {/* Cage Number */}
  //       <label className="block">
  //         <span className="text-gray-700">Número da Gaiola</span>
  //         <input
  //           type="text"
  //           name="cage_number"
  //           value={formData.cage_number}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         />
  //       </label>

  //       {/* Reason */}
  //       <label className="block">
  //         <span className="text-gray-700">Razão da Internação</span>
  //         <textarea
  //           name="reason"
  //           value={formData.reason}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         ></textarea>
  //       </label>

  //       {/* Entry Date */}
  //       <label className="block">
  //         <span className="text-gray-700">Data de Entrada</span>
  //         <input
  //           type="date"
  //           name="entry_date"
  //           value={formData.entry_date}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         />
  //       </label>

  //       {/* Requested Exams */}
  //       <label className="block">
  //         <span className="text-gray-700">Exames Solicitados</span>
  //         <textarea
  //           name="requested_exams"
  //           value={formData.requested_exams}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         ></textarea>
  //       </label>

  //       {/* Results Exams */}
  //       <label className="block">
  //         <span className="text-gray-700">Resultados dos Exames (Link)</span>
  //         <input
  //           type="text"
  //           name="results_exams"
  //           value={formData.results_exams}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         />
  //       </label>

  //       {/* Death */}
  //       <label className="flex items-center space-x-2">
  //         <input
  //           type="checkbox"
  //           name="death"
  //           checked={formData.death}
  //           onChange={handleChange}
  //           className="rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500"
  //         />
  //         <span className="text-gray-700">Óbito</span>
  //       </label>

  //       {/* Hospitalization Observations */}
  //       <label className="block">
  //         <span className="text-gray-700">Observações da Internação</span>
  //         <textarea
  //           name="hospitalization_observations"
  //           value={formData.hospitalization_observations}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         ></textarea>
  //       </label>

  //       {/* Veterinarian CPF */}
  //       <label className="block">
  //         <span className="text-gray-700">CPF do Veterinário</span>
  //         <input
  //           type="text"
  //           name="veterinarian_CPF"
  //           value={formData.veterinarian_CPF}
  //           onChange={handleChange}
  //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
  //         />
  //       </label>

  //       <button
  //         type="submit"
  //         className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
  //       >
  //         Registrar Internação
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 bg-white shadow-2xl rounded-lg max-w-xl"
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold mb-2 text-center">Cadastro de Internação</h2>

        {/* Dropdown para selecionar animal */}
        <fieldset className="space-y-3">
          <legend className="font-semibold text-base">Selecionar Animal</legend>
          <motion.select
            name="pet_id"
            value={formData.pet_id}
            onChange={handleAnimalSelect}
            className="input-field"
          >
            <option value="">Selecione um animal</option>
            {animals.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name} (Proprietário: {animal.owner_name})
              </option>
            ))}
          </motion.select>
        </fieldset>


        {/* Campos do Formulário */}
        <fieldset className="space-y-3">
          <legend className="font-semibold text-base">Detalhes da Internação</legend>
          <motion.input
            type="text"
            name="cage_number"
            placeholder="Número da Gaiola"
            value={formData.cage_number}
            onChange={handleChange}
            className="input-field"
          />
          <motion.textarea
            name="reason"
            placeholder="Razão da Internação"
            value={formData.reason}
            onChange={handleChange}
            className="input-field"
          />
          <motion.input
            type="date"
            name="entry_date"
            value={formData.entry_date}
            onChange={handleChange}
            className="input-field"
          />
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="font-semibold text-base">Exames</legend>
          <motion.textarea
            name="requested_exams"
            placeholder="Exames Solicitados"
            value={formData.requested_exams}
            onChange={handleChange}
            className="input-field"
          />
          <motion.input
            type="text"
            name="results_exams"
            placeholder="Resultados dos Exames (link)"
            value={formData.results_exams}
            onChange={handleChange}
            className="input-field"
          />
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="font-semibold text-base">Informações do Veterinário</legend>
          <motion.input
            type="text"
            name="veterinarian_CPF"
            placeholder="CPF do Veterinário"
            value={formData.veterinarian_cpf}
            onChange={handleChange}
            className="input-field"
          />
        </fieldset>

        {/* Observações */}
        <fieldset className="space-y-3">
          <legend className="font-semibold text-base">Observações</legend>
          <motion.textarea
            name="hospitalization_observations"
            placeholder="Observações da Internação"
            value={formData.hospitalization_observations}
            onChange={handleChange}
            className="input-field"
          />
        </fieldset>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md"
        >
          Registrar Internação
        </motion.button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-3 font-semibold text-green-600"
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default RegisterHospitalization;
