//funciones
// se debe declarar los parametros de la funcion, con sus respectivos tipos de dato
// se debe declarar el tipo de dato de retorno de la funcion
// cuando se tiene el signo de interrogacion hacemos referencia a que ese valor puede ser undefined
function sumar (a: number, b?: number) : number{
    if (b !== undefined)
        return a + b;
    return -1;
}

// funcion flecha con retorno implicito

 const dividir =( a: number, b: number) => a + b

 //funcion void

 function imprimirHolaMundo () : void{
    console.log("Hola Mundo")
 }

 // funciones con parametros, ya definidos

 function retornarString (nombre: string,edad: number = 30) : string{
    return `Hola, mi nombre es ${nombre} , mi edad es ${edad}`;
 }
