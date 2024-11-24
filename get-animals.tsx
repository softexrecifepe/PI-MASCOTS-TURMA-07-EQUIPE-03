import { HospitalizationData } from "@/app/management/hospitalizationsForm/hospitalForm";
import axios from "axios";

export async function getAnimals() {
    const url = `https://pi-t1-gp2-clinica.onrender.com/pets`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data
   
}

export async function getAnimalsHospital() {
    const url = `https://pi-t1-gp2-clinica.onrender.com/pets/hospitalizations`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    return data
}

//Para futura integração de API
export async function postAnimalsHospital(data: HospitalizationData){

    const url = `https://pi-t1-gp2-clinica.onrender.com/pets/hospitalizations`;
    try {
        const response = await axios.post(url, data,{headers: { "Content-Type": "application/json" },});
        
        console.log("Resposta da API:", response.data);
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error("Erro na requisição POST:", error);
        throw error; // Repassa o erro para ser tratado no componente
    }
    
}

// getAnimalsHospital()

// getAnimals();
