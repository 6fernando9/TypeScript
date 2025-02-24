//INTERFACES SEXO

//interface basica
interface Employee {
    nombre : string;
    edad : number;
}

//interface con propiedades opcionales
// cuando una variable esta con "?", quiere decir que , puede que ese campo este o no este con datos
interface Producto {
    nombre : string;
    precio : number;
    description ?: string;
}
// interface para funciones

interface Comparador {
    (a: number , b: number ):boolean;
}

// interface para clases, o class interfaces, lo mas cercano a java

interface Persona {
    nombre : string;
    edad : number;
    saludar(): void;
}


