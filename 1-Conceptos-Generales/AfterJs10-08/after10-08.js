let nombre = "Gonzalo";
let Nombre= "Facundo";
let rol = "tutor";
let edad = 28;
let mayor = true; 
let aprobado = false;
let prueba;

let numero1 = 20;
let numero2 = 10;

const PI = 3.14159265359;

console.log("Bienvendidos/as al primer after del curso de javascript");
console.log("Usted es " + nombre + " su rol asignado es " + rol + " y tiene " + edad + " años" );

//Concatenar de manera más ágil con backtick 
// console.log("*********Concatenar con backtick (ascii: alt + 96)*************");

console.log(`Usted es ${nombre} su rol asignado es ${rol} y tiene ${edad} años`);

//typeof Saber tipo de dato
console.log("*****Type of*****");
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(mayor));

console.log(aprobado);

//Javascript es un lenguaje sensible a mayúsculas y minúsculas
console.log("**********Lenguaje sensible a May y min************");
console.log(nombre);
console.log(Nombre);


//Qué es undefined y NaN (Not a Number) --> indefindo y No es un número
console.log("*********Variable inicializada*************");
console.log(prueba);
prueba = "Inicializada"
console.log(prueba);

console.log("Esto es PI " + PI);


//SCOPE: Var y let diferencias de alcance. Constantes 

console.log("*********Scope de variables*************"); 
{
    let variablePrueba = "Funciona";
    console.log("Dentro del bloque let " + variablePrueba);
    var variablePruebaVar ="Funciona var ";
    console.log("Dentro del bloque var " + variablePruebaVar);
    
}

// console.log("Fuera del bloque " + variablePrueba);
// console.log("Fuera del bloque var " + variablePruebaVar);
// .toFixed parseInt parseFloat
console.log("*******ToFixed*******");
console.log(PI.toFixed(2))
console.log(PI.toFixed(5))
console.log(edad);
console.log(edad.toFixed(3));

//Qué es NaN
console.log("***********Posibles resultados en operaciones entre distintos tipos de datos*****************");
console.log("String que mediante el signo + queda concatenado a un número: " + (nombre + edad));
console.log("operanción entre string y un número: " + (nombre - edad));
console.log("Restar un boolean true a un número: " + (mayor - edad));
console.log("Restar un boolean false a un número: " +(aprobado - edad));
console.log("********Operaciones entre números**********")
console.log(numero1 - numero2);
console.log(numero1 + numero2);