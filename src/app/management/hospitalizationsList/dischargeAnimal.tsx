import axios from "axios";
import { useState } from "react";

interface DischargeProps {
  hospitalizationId: number;
  onDischargeSuccess: () => void; // Callback para atualizar a lista de internados
}

/**
 * Componente para dar alta a um animal internado.
 * Envia uma requisição PUT à API e chama o callback para atualizar a lista.
 */
const DischargeAnimal = ({ hospitalizationId, onDischargeSuccess }: DischargeProps) => {
  const [isLoading, setIsLoading] = useState(false); // Controle do estado de carregamento
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Mensagem de erro, se houver

  const handleDischarge = async () => {
    // Confirmação antes de executar a alta
    const confirmed = window.confirm(
      "Tem certeza de que deseja dar alta ao animal?"
    );
    if (!confirmed) return;

    setIsLoading(true); // Define o estado de carregamento
    setErrorMessage(null); // Limpa mensagens de erro anteriores

    try {
      // Fazendo a requisição PUT à API
      const response = await axios.put(
        `https://pi-t1-gp2-clinica.onrender.com/pets/hospitalizations/${hospitalizationId}`,
        {
          discharge_date: new Date().toISOString(), // Define a data de alta como a data atual
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 && response.data.success) {
        alert("Alta confirmada com sucesso!");
        onDischargeSuccess(); // Atualiza a lista após alta
      } else {
        setErrorMessage(
          "Não foi possível confirmar a alta. Por favor, tente novamente."
        );
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao confirmar alta:", error.response?.data);
        setErrorMessage(
          `Erro ao confirmar alta: ${
            error.response?.data?.message || "Erro desconhecido."
          }`
        );
      } else {
        console.error("Erro desconhecido:", error);
        setErrorMessage("Ocorreu um erro inesperado. Por favor, tente novamente.");
      }
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };


  return (
    <div className="flex flex-row-reverse justify-start">
      <button
        className={`btn ${isLoading ? "btn-disabled" : "btn-primary"} 
        px-4 py-2 rounded bg-green-500 hover:bg-blue-700 text-white font-bold`}
        onClick={handleDischarge}
        disabled={isLoading}
      >
        {isLoading ? "Processando..." : "Confirmar Alta"}
      </button>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default DischargeAnimal;
