"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
exports.persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};
//DEFINICION SIN DESTRUCTURING
var p5 = {
    nombre: exports.persona.nombre,
    edad: exports.persona.edad,
    ciudad: exports.persona.ciudad,
    sexo: "Masculino",
};
console.log("sin destructuring: ".concat((JSON.stringify(p5))));
//Desestructuracion
//definir un objeto Anonimo con solo algunos parametros
var nombre = exports.persona.nombre, edad = exports.persona.edad;
console.log("obj1 Destructuring ".concat(nombre, ",").concat(edad));
//tambien se le puede cambiar el nombre
var nombrePersonaModificado = exports.persona.nombre;
console.log("obj2 Destructuring ".concat(nombrePersonaModificado));
//SOLAMENTE SE PUEDE ACCEDER A LOS ATRIBUTOS DE ESE OBJETO DEFINIDO
