//Ejercicio 1
//NUmeros del 0 al 5
//Declaramos nuestra variable (esta ira cambiando con el bucle)
/*let number = 0;

//Bucle while

while (number <= 5) {
    //Bloque codigo a repetir
    console.log(number);
    //Incrementar la variable number
    number++;
}

console.log("");

//Con for

for (let number = 0; number <= 5; number++) {
    console.log(number);
}*/

//eJERCICIO 1
//Numeros pares del 1 al 100
//pAR === 
/*let num = 1; // Inicializamos la variable num con 1

while (num <= 100) {  // Mientras num sea menor o igual a 100
    if (num % 2 === 0) { // Si num es par (el resto de la división de num entre 2 es 0)
        console.log(num); //eSTO se va a imprimir
    }
    num++; //va aumentando su iteración
 }*/

console.log("");
 //EJERCICIO 2
 //nuMEROS impares del 1 al 12
// !== -> IMPAR
 let num = 1; // Inicializamos la variable num con 1

while (num <= 12) { // Mientras num sea menor o igual a 12
  if (num % 2 !== 0) { // Si el número no es divisible por 2 (es decir, si es impar)
    console.log(num); // Imprime el número impar en la consola
  }
  num++; // Incrementa num en 1 en cada iteración del bucle
}

console.log("");

/*//Recorrer arreglos con el bucle while
const paises = ['Peru','Uruguay', 'Chile', 'Argentina'];
let i = 0;
while (i < paises.length) {
    console.log(paises[i]);
    i++;
}*/

//DO WHILE

let number = 12;

do {
    //Bloque codigo a repetir
    console.log(number);
    //Incrementar la variable number
    number++;
} while (number <= 5) 


//ALERT

//prompt()
let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let apellido = prompt ('Ingresa tu apellido');
console.log (apellido);

let edad = prompt ('Ingresa tu edad');
console.log (edad);

let dni = prompt ('Ingresa tu DNI');
console.log (dni);

let saludo = prompt('Ingresa tu saludo');
console.log ("Hola" + saludo);

//REGEX
//REGEX
const patron = /hola/;
// const patron = /hola[0-9]mundo/;
// const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));
console.log('Coincidencia');
