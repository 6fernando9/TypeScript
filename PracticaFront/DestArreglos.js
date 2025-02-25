"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
var Destructuracion_1 = require("./Destructuracion");
exports.numeros = [10, 20, 30, 40];
//DESTRUCTURING EN ARRAYS
var primero = exports.numeros[0], segundo = exports.numeros[1];
console.log(primero, segundo);
var tercero = exports.numeros[2];
console.log(tercero);
//SPREAD OPERATOR
//SIRVE PARA EXPANDIR ELEMENTOS, O A MI ENTENDER COPIAR VARIOS ELEMENTOS DE UN ARRAY
var numbers1 = [1, 2, 3];
var numbers2 = [4, 5, 6];
var resultado = __spreadArray(__spreadArray([], numbers1, true), numbers2, true); // equivalente a unir ambos arrays
console.log("primer spread... ".concat(resultado));
//definicion de un objeto con otro ya existente
var personaCopia = __assign(__assign({}, Destructuracion_1.persona), { pais: "Bolivia" });
console.log("persona copia con spread operator ".concat(JSON.stringify(personaCopia)));
// combinar el spread opeartor, para agrupar elementos
var first = resultado[0], second = resultado[1], sex = resultado.slice(2); // copiara el primer elemento del array , el segundo, y los demas
console.log("mesclando el spread ".concat(first));
console.log("mesclando el spread ".concat(second));
console.log("mesclando el spread ".concat(sex));
//si tenemos un array [1,2,3,4], al desestructurar entonces se hacen datos sueltos 1,2,3,4,algo asi era jovenes
function sumar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acc, Element) { return acc + Element; }, 0);
}
console.log(sumar(1, 2, 3, 4, 5));
