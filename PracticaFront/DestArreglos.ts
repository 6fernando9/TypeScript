import { persona } from "./Destructuracion";

export const numeros = [10,20,30,40];

//DESTRUCTURING EN ARRAYS
const [primero,segundo]=numeros;
console.log(primero,segundo);

const [, , tercero] = numeros;

console.log(tercero);

//SPREAD OPERATOR
//SIRVE PARA EXPANDIR ELEMENTOS, O A MI ENTENDER COPIAR VARIOS ELEMENTOS DE UN ARRAY

const numbers1 = [1,2,3];
const numbers2 = [4, 5, 6];

const resultado = [...numbers1,...numbers2];// equivalente a unir ambos arrays

console.log(`primer spread... ${resultado}`);

//definicion de un objeto con otro ya existente

const personaCopia = {...persona, pais: "Bolivia"}

console.log(`persona copia con spread operator ${JSON.stringify(personaCopia)}`)

// combinar el spread opeartor, para agrupar elementos

const [first,second,...sex] = resultado;// copiara el primer elemento del array , el segundo, y los demas


console.log(`mesclando el spread ${first}`)
console.log(`mesclando el spread ${second}`)
console.log(`mesclando el spread ${sex}`);

//si tenemos un array [1,2,3,4], al desestructurar entonces se hacen datos sueltos 1,2,3,4,algo asi era jovenes

function sumar(...numeros: number[]):number{
    return numeros.reduce((acc,Element)=> acc + Element,0)
}

console.log(sumar(1,2,3,4,5))








