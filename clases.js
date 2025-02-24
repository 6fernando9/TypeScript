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
