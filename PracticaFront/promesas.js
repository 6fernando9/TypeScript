async function obtenerMensaje() {
    return "Hola este es un mensaje asincrono";
}
// console.log("sexo");
// console.log(obtenerMensaje().then(console.log));
// console.log("sexo")
//como lo que haremos dentro es asincrono, entonces definimos la funcion asincrona
async function obtenerUsuariosApi() {
    try {
        //hacemos la peticion a unn backend, hacemos la solicitud HTTP
        const respuesta = await fetch("http://jsonplaceholder.typicode.com/users");
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud a la api ${respuesta.status}`);
        }
        //para pasar los datos a json toma tiempo entonces usamos un await
        const datos = await respuesta.json();
        return datos;
    }
    catch (error) {
        console.error("Error, hubo un error..", error);
        return null;
    }
}
const user = {
    nombre: "carlos",
    correo: "carlos@gmail.com"
};
async function crearUsuario(usuario) {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        if (!respuesta.ok) {
            throw new Error("Ocurrio un error a la hora de enviar los datos");
        }
        const nuevoUsuario = await respuesta.json();
        console.log(`Usuario creado: \n${JSON.stringify(nuevoUsuario)}`);
    }
    catch (error) {
        console.error("Hubo un error inesperado", error);
    }
}
crearUsuario(user);
