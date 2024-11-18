"use client";
import { useEffect, useState } from "react";
import { getHospitalizations, HospitalizationData } from "../hospitalizationsForm/hospitalForm";

const HospitalizationList = () => {
  // const hospitalizations: HospitalizationData[] = getHospitalizations();
  const [hospitalizations, setHospitalizations] = useState<HospitalizationData[]>([]);

  // Carregar internações do localStorage no cliente
  useEffect(() => {
    const savedHospitalizations = getHospitalizations();
    setHospitalizations(savedHospitalizations);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      
      <h1 className="text-2xl font-bold mb-4">Lista de Internações</h1>
      {hospitalizations.length === 0 ? (
        <p className="text-gray-500">Nenhuma internação registrada.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Data de Entrada</th>
              <th className="border border-gray-300 px-4 py-2">Razão</th>
              <th className="border border-gray-300 px-4 py-2">Veterinário</th>
            </tr>
          </thead>
          <tbody>
            {hospitalizations.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.entry_date}</td>
                <td className="border border-gray-300 px-4 py-2">{item.reason}</td>
                <td className="border border-gray-300 px-4 py-2">{item.veterinarian_CPF}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HospitalizationList;
