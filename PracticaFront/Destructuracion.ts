export const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid" 
}

//DEFINICION SIN DESTRUCTURING

const p5 = {
  nombre: persona.nombre,
  edad: persona.edad,
  ciudad: persona.ciudad,
  sexo: "Masculino",
};
console.log(`sin destructuring: ${(JSON.stringify(p5))}`)

//Desestructuracion
//definir un objeto Anonimo con solo algunos parametros
const {nombre,edad} = persona;

console.log(`obj1 Destructuring ${nombre},${edad}`);

//tambien se le puede cambiar el nombre

const {nombre: nombrePersonaModificado} = persona;
console.log(`obj2 Destructuring ${nombrePersonaModificado}`);



//SOLAMENTE SE PUEDE ACCEDER A LOS ATRIBUTOS DE ESE OBJETO DEFINIDO