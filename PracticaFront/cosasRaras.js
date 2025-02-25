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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
//objeto con caracteristicas similares a la de la funcion
var Aldeano = {
    nombre: "string",
    edad: 23,
    precio: 23.5
};
//definiremos una funcion que reciba un objeto, y lo desestructure
function mostrarInfo(_a) {
    var nombre = _a.nombre, edad = _a.edad;
    console.log("Nombre: ".concat(nombre, "\n edad:").concat(edad));
}
mostrarInfo(Aldeano);
//funcion que retorna otra funcion
var crearFuncion = function (saludo) { return function (nombre) { return "".concat(saludo, ", ").concat(nombre); }; };
var saludar = crearFuncion("Hola"); // me devuelve una funcion 
//y la funcion solamente saluda
console.log(saludar("Carlos"));
//unir objetos de cualquier tipo 
function combinarObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var persona = { id: 1, nombre: "Ana", edad: 30 };
var producto = { dni: 2, name: "Laptop", price: 1200 }; // si tuviera los mismos atributos entonces solo se sobreescribe con el ultimo
var mezcla = combinarObjects(persona, producto);
console.log(mezcla);
//lo mas raro
// Clase con generics y metodos "raros"
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.items = [];
    }
    StorageService.prototype.agregar = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.items).push.apply(_a, items);
    };
    StorageService.prototype.obtenerTodos = function () {
        return this.items;
    };
    StorageService.prototype.eliminarPorId = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    StorageService.prototype.mapear = function (fn) {
        return this.items.map(fn);
    };
    return StorageService;
}());
exports.StorageService = StorageService;
var servicioUsuarios = new StorageService();
servicioUsuarios.agregar({ id: 1, nombre: "Pedro", edad: 25 }, { id: 2, nombre: "Maria", edad: 22 });
servicioUsuarios.eliminarPorId(1);
console.log(servicioUsuarios.obtenerTodos());
// Patron Module con IIFE (inmediatamente invocada)
//NI CONCHA IDEA
var ModuloEjemplo = (function () {
    var secreto = "Clave";
    return {
        obtenerSecreto: function () { return secreto; },
    };
})();
console.log(ModuloEjemplo.obtenerSecreto());
