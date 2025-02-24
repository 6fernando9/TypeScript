//Clases

class Persona {
    nombre : string

    constructor(nombre : string){
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola Soy ${this.nombre} y te estoy saludando`)
    }
}

let persona : Persona = new Persona("Sergio");
console.log(persona.saludar());