"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

export interface HospitalizationData {
  cage_number: string;
  reason: string;
  entry_date: string;
  discharge_date: string | null;
  discharge_time: string | null;
  requested_exams: string;
  results_exams: string;
  death: boolean;
  time_death: string | null;
  date_death: string | null;
  hospitalization_observations: string;
  pet_id: number;
  consultation_id: number;
  veterinarian_CPF: string;
}

export const getHospitalizations = (): HospitalizationData[] => {
  if (typeof window === "undefined") {
    return []; // Garante que não tente acessar localStorage no servidor
  }

  const savedHospitalizations = localStorage.getItem("hospitalizations");
  return savedHospitalizations ? JSON.parse(savedHospitalizations) : [];
};

const RegisterHospitalization = () => {
  const [hospitalizations, setHospitalizations] = useState<HospitalizationData[]>([]);
  const [formData, setFormData] = useState<HospitalizationData>({
    cage_number: "01",
    reason: "Tratamento para cistite aguda.",
    entry_date: "2024-10-17",
    discharge_date: null,
    discharge_time: null,
    requested_exams: "Hemograma completo e ultrassom pélvica",
    results_exams: "drive.google.com/drive",
    death: false,
    time_death: null,
    date_death: null,
    hospitalization_observations:
      "Retirar a sonda apenas após reavaliação médica.",
    pet_id: 1,
    consultation_id: 1,
    veterinarian_CPF: "98765432100",
  });

  // Busca os dados das internações do localStorage
  useEffect(() => {
    const savedHospitalizations = getHospitalizations();
    setHospitalizations(savedHospitalizations);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newHospitalization = { ...formData };

    // Adicionar nova internação à lista
    setHospitalizations((prevHospitalizations) => [...prevHospitalizations, newHospitalization]);

    alert("Cadastrado com sucesso!")

    // Limpar o formulário
    setFormData({
      cage_number: "01",
      reason: "",
      entry_date: "",
      discharge_date: null,
      discharge_time: null,
      requested_exams: "",
      results_exams: "",
      death: false,
      time_death: null,
      date_death: null,
      hospitalization_observations: "",
      pet_id: 1,
      consultation_id: 1,
      veterinarian_CPF: "",
    });

    //Para futura integração de API
    /* try {
      // Armazenar localmente no localStorage
      localStorage.setItem("hospitalizationData", JSON.stringify(formData));
      console.log("Dados de internação salvos localmente!");

      // Aqui é o ponto onde uma futura requisição API pode ser integrada:
      // fetch('/api/hospitalization', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // }).then(res => res.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error('Erro ao salvar dados:', error));

      //   router.push("/success"); // Redireciona para uma página de sucesso ou outra página
      alert("Cadastrado com sucesso");
      console.log(formData);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    } */
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Cadastro de Internação
        </h2>

        {/* Cage Number */}
        <label className="block">
          <span className="text-gray-700">Número da Gaiola</span>
          <input
            type="text"
            name="cage_number"
            value={formData.cage_number}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>

        {/* Reason */}
        <label className="block">
          <span className="text-gray-700">Razão da Internação</span>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </label>

        {/* Entry Date */}
        <label className="block">
          <span className="text-gray-700">Data de Entrada</span>
          <input
            type="date"
            name="entry_date"
            value={formData.entry_date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>

        {/* Requested Exams */}
        <label className="block">
          <span className="text-gray-700">Exames Solicitados</span>
          <textarea
            name="requested_exams"
            value={formData.requested_exams}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </label>

        {/* Results Exams */}
        <label className="block">
          <span className="text-gray-700">Resultados dos Exames (Link)</span>
          <input
            type="text"
            name="results_exams"
            value={formData.results_exams}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>

        {/* Death */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="death"
            checked={formData.death}
            onChange={handleChange}
            className="rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500"
          />
          <span className="text-gray-700">Óbito</span>
        </label>

        {/* Hospitalization Observations */}
        <label className="block">
          <span className="text-gray-700">Observações da Internação</span>
          <textarea
            name="hospitalization_observations"
            value={formData.hospitalization_observations}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </label>

        {/* Veterinarian CPF */}
        <label className="block">
          <span className="text-gray-700">CPF do Veterinário</span>
          <input
            type="text"
            name="veterinarian_CPF"
            value={formData.veterinarian_CPF}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Registrar Internação
        </button>
      </form>
    </div>
  );
};

export default RegisterHospitalization;
