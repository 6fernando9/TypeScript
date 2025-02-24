//type , sirve para definir los tipos de datos, podemos mesclarlos y demas
//para asignar nuestro propio tipado

// Type Basico
type Numero = number;

// Type Basico Objeto Literal

type Persona1 = {
    nombre : string;
    edad : number;
}

type Nombre = string | null;

type Producto1 = {
    nombre : string;
    precio : number;
    description ?: string;
}
// type para funciones

type Comparador1 = {
    (a: number , b: number ):boolean;
}

// type para clases, o class types, lo mas cercano a java

type Persona2 = {
    nombre : string;
    edad : number;
    saludar(): void;
}



