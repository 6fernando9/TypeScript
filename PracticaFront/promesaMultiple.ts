async function obtenerMultiplesRecursos() {
  try {
    const [usuarios, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    ]);

    console.log("Usuarios:", usuarios);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error en las peticiones:", error);
  }
}

obtenerMultiplesRecursos();
