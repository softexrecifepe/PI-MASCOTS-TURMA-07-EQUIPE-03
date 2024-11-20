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

// getAnimalsHospital()

// getAnimals();
