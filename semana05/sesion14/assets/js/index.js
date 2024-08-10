//CONDICIONALES
//CONOCIENDO DE LA SINTAXIS 

//*let nombre = 'Gato';

/*console.log (nombre);
console.log(nombre.length);
if (nombre.length > 7) {
    //SI LA CONDICION SE CUMPLE SE EJECUTA ESTA POSICION DE CODIGO
    console.log('Tienes un largo nombre')
    //ACA PUEDE PONER TANTAS LINEAS COMO NECESITA
} else{
    //SI LA CONDICION NO SE CUMPLE, SE EJECUTA ESTA OTRA
    //POSICION DE CODIGO
    console.log('Tu nombre no es muy largo')
}
console.log("Fin del condicional");

let apellido = 'Casas';

console.log (apellido);
console.log (apellido.length);

if (apellido.length < 6) {
    console.log('Tu apellido es corto')
} else{
    console.log('Tu apellido es largo')
}*/

//-----------------------------------------
//COMPROBAR SI UNA PERSONA ES MAYOR DE EDAD
/*let edad = 18;

console.log (`Edad: ${edad}`)

if (edad >= 18) {
    console.log('La persona es mayor de edad');
} else {
    console.log('La persona es menor de edad')
}*/
//Agregar mas condiciones
//Comprobar el mayor de dos numeros
//else if -> como preguntaa
/*let num1 = 10;
let num2 = 10;

console.log(`Primer numero: ${num1}`);
console.log(`Segundo numero: ${num2}`);
console.log("");

if (num1 > num2){
    console.log("El primer numero es el mayor");
} else if  (num2 > num1){
    console.log("El segundo numero es el menor");
} else {
    console.log("Ambos numeros son iguales");
}*/

//Etapas de la vida
/*let edad = 18;
console.log("Etapas de la vida");
console.log(`Edad ${edad}`);
//Los nnombre no son exactos
if (edad <= 2) {
    console.log("Bebe");
} else if (edad <= 5) {
    console.log("Infancia");
} else if (edad <= 8) {
    console.log("Niñez");
} else if (edad <= 11) {
    console.log("Pre pubertad");
}  else if (edad <= 14) {
    console.log("Pubertad");
}  else if (edad <= 18) {
    console.log("Adolescencia");
}  else if (edad <= 50) {
    console.log("Adultez");
} else {
    console.log("Adulto Mayor");
}*/

//Condicionales anidadas
//Mayoria de edad en Peru y USA
let edad = 22;
let esAmericano = true;

console.log (`Edad: ${edad}`)

if (edad >= 18) {
    if (esAmericano){
        if (edad >= 21){
            console.log('La persona es menor de edad');
        }
        else{
            consola.log('La persona es menor de edad');
        }
    } else {
        console.log('La persona es mayor de edad');
    }
} else {
    console.log('La persona es menor de edad');
}

