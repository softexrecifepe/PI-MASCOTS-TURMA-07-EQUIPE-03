import axios from "axios";
import React, { useState } from "react";



interface DischargeAnimalProps {
  hospitalizationId: number;
  onDischargeSuccess: () => void;
  onClick: () => void;
  onRemoveFromLocalList: (hospitalizationId: number) => void;
}



const DischargeAnimal: React.FC<DischargeAnimalProps> = ({
  hospitalizationId,
  onDischargeSuccess,
  onClick,
  onRemoveFromLocalList,
}) => {


  const [loading, setLoading] = useState(false); // Estado para indicar carregamento
  const [error, setError] = useState<string | null>(null); // Estado para mensagem de erro


  const handleDischarge = async () => {
    setLoading(true); // Inicia o estado de carregamento
    setError(null); // Limpa mensagens de erro anteriores
     
    onRemoveFromLocalList(hospitalizationId);// remove o animal da lista local
     
    setTimeout(() => {
      // Se a requisição for bem-sucedida, chama a função para atualizar a lista
      onDischargeSuccess();
      
    }, 500);
    try {
      
      // Fazendo a requisição PUT
      const response = await axios.put(
        `https://pi-t1-gp2-clinica.onrender.com/pets/hospitalizations/${hospitalizationId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Erro ao atualizar os dados.");
      }
      
      // Fecha o modal
      if (onClick) {
        onClick();
      }
      
    } catch (err: unknown) {
      console.error("Erro ao dar alta ao animal:", err);

      // Trata o erro de forma segura
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao dar alta.");
      }
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
    
  };

  return (
    <div className="flex flex-row-reverse justify-start">
      <button
        onClick={handleDischarge}
        disabled={loading}
        className={`px-4 py-2 rounded ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {loading ? "Dando alta..." : "Dar Alta"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DischargeAnimal;
