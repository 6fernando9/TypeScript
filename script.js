// console.log("Hola mundo")
// manejo de tipos de dato
// -----------------------------------------------------------------------------------------------------------------------
// cadenas
var cadena1 = "Hola soy una cadena";
var cadena2 = 'comilla simple';
var cadena3 = "template String ".concat(cadena2);
// -----------------------------------------------------------------------------------------------------------------------
// numeros en si
var numero = 23;
var numeroReal = 23.12;
var hexaVallet = 0xA; //valor decimal de 10
var octalVallet = 10; //valor decimal de 10
var binarioVallet = 10; //valor de 5
// -----------------------------------------------------------------------------------------------------------------------
// booleans
var booleano = true;
// -----------------------------------------------------------------------------------------------------------------------
// undefined
//declaracion
var variableUndefined;
//asignacion
variableUndefined = undefined;
// -----------------------------------------------------------------------------------------------------------------------
//null
//declaracion
var variableNull;
//asignacion
variableNull = null;
//NOTA AL ASIGNAR OTRO TIPO DE DATO A UNA VARIABLE, MARCA UN ERROR, UNA HERMOSURA
// -----------------------------------------------------------------------------------------------------------------------
//OBJETO
var programador = {
    nombre: "fernando",
    casado: true,
    cursosEnYoutube: 3,
    cursos: ["HTML", "CSS"],
    sexo: undefined,
    hijos: null
};
console.log(cadena1);
console.log(cadena2);
console.log(cadena3);
console.log(numero);
console.log(numeroReal);
console.log(booleano);
console.log("objeto: ".concat(programador));
//ARREGLOS
//arreglo de numeros
var arrayNumber = [1, 2, 3, 4, 5];
var arrayCadenas = ["hola", "ss"];
var arrayBoolean = [true, false, true];
//enum
// Dia de la semana
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["LUNES"] = 0] = "LUNES";
    DiaSemana[DiaSemana["MARTES"] = 1] = "MARTES";
    DiaSemana[DiaSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiaSemana[DiaSemana["JUEVES"] = 3] = "JUEVES";
    DiaSemana[DiaSemana["VIERNES"] = 4] = "VIERNES";
    DiaSemana[DiaSemana["SABADO"] = 5] = "SABADO";
    DiaSemana[DiaSemana["DOMINGO"] = 6] = "DOMINGO";
})(DiaSemana || (DiaSemana = {}));
//colores
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Red";
    Colores["Verde"] = "Green";
    Colores["Azul"] = "Blue";
})(Colores || (Colores = {}));
//funciones
// se debe declarar los parametros de la funcion, con sus respectivos tipos de dato
// se debe declarar el tipo de dato de retorno de la funcion
// cuando se tiene el signo de interrogacion hacemos referencia a que ese valor puede ser undefined
function sumar(a, b) {
    if (b !== undefined)
        return a + b;
    return -1;
}
// funcion flecha con retorno implicito
var dividir = function (a, b) { return a + b; };
//funcion void
function imprimirHolaMundo() {
    console.log("Hola Mundo");
}
// funciones con parametros, ya definidos
function retornarString(nombre, edad) {
    if (edad === void 0) { edad = 30; }
    return "Hola, mi nombre es ".concat(nombre, " , mi edad es ").concat(edad);
}
//Clases
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola Soy ".concat(this.nombre, " y te estoy saludando"));
    };
    return Persona;
}());
var persona = new Persona("Sergio");
console.log(persona.saludar());
