async function hacerPeticion<T>(url: string): Promise<T | null> {
  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error: ${respuesta.status}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    return null;
  }
}

// Usamos la función para obtener usuarios
hacerPeticion<any[]>("https://jsonplaceholder.typicode.com/users").then(
  (datos) => console.log("Datos obtenidos:", datos)
);
