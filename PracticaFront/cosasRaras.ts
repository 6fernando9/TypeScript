// A simple vista no se entiende ni un carajo, parece un objeto
export type Persona = {id: number, nombre:string, edad: number};
// ahora si
export type Producto = {
  id: number;
  nombre: string;
  edad: number;
};
//objeto con caracteristicas similares a la de la funcion
const Aldeano =  {
    nombre: "string",
    edad: 23,
    precio: 23.5
};

//definiremos una funcion que reciba un objeto, y lo desestructure
function mostrarInfo({nombre, edad}: {nombre: string,edad: number}){
    console.log(`Nombre: ${nombre}\n edad:${edad}`);
}

mostrarInfo(Aldeano)

//funcion que retorna otra funcion

const crearFuncion = (saludo: string) => (nombre: string) =>`${saludo}, ${nombre}`

const saludar = crearFuncion("Hola");// me devuelve una funcion 

//y la funcion solamente saluda
console.log(saludar("Carlos"))


//unir objetos de cualquier tipo 
function combinarObjects<T extends object,U extends object>(obj1: T, obj2: U): T & U{
    return {...obj1,...obj2};
}


const persona = { id: 1, nombre: "Ana", edad: 30 };
const producto = { dni: 2, name: "Laptop", price: 1200 };// si tuviera los mismos atributos entonces solo se sobreescribe con el ultimo

const mezcla = combinarObjects(persona, producto);
console.log(mezcla);




//lo mas raro

// Clase con generics y metodos "raros"
//lo unico que sorprende aqui es heredar de un objeto que se puede colocar directamente
export class StorageService<T extends { id: number }> {
    private items: T[] = [];
    
    agregar(...items: T[]) {
        this.items.push(...items);
    }
    
    obtenerTodos(): T[] {
        return this.items;
    }
    
    eliminarPorId(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }
    
    mapear(fn: (item: T) => any): any[] {
        return this.items.map(fn);
    }
}

const servicioUsuarios = new StorageService<Persona>();
servicioUsuarios.agregar({ id: 1, nombre: "Pedro", edad: 25 }, { id: 2, nombre: "Maria", edad: 22 });
servicioUsuarios.eliminarPorId(1);
console.log(servicioUsuarios.obtenerTodos());

// Patron Module con IIFE (inmediatamente invocada)
//NI CONCHA IDEA
const ModuloEjemplo = (() => {
    const secreto = "Clave";
    return {
        obtenerSecreto: () => secreto,
    };
})();

console.log(ModuloEjemplo.obtenerSecreto());
