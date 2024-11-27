type CustomButtonProps = {
    type?: "button" | "submit" | "reset"; // Define o tipo do botão
    variant?: "cancel"; // Para variantes específicas (como cancelamento)
    children: React.ReactNode; // Conteúdo do botão
    onClick?: () => void; // Função para o evento de clique
    className?: string; // Classes adicionais para o estilo
    disabled?: boolean; // Desabilita o botão
  }
  
  export const CustomButton = ({
    type = "button", // Valor padrão para o tipo
    children,
    onClick,
    className = "", // Adiciona uma string vazia como valor padrão
    disabled = false, // Valor padrão para disabled
  }: CustomButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`text-btnTextColor 
                    bg-primary 
                    w-32 
                    hover:bg-[#0056b3] 
                    font-bold 
                    cursor-pointer 
                    py-2 
                    px-4 
                    rounded 
                    transition 
                    duration-300 
                    ease-in-out 
                    shadow-shadowColor 
                    ${className}`} // Concatenando classes adicionais
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  