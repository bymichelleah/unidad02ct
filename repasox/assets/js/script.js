/*Bucle for
//Conteo de 0 al 9
for (let i = 0; i < 10; i++) {

    console.log(i);
}

console.log("");

//Conteo al reves del 9 al 0

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

//Conteo del 5 al 24 (exclusivo) de 3 en 3
for (let i = 5; i < 24; i+=3) {
    console.log(i);
}

console.log("");

//Ej. 1
//Hacer un conteo desde 135 a 36 (inclusivo) de 6 en 6
for (let i = 135; i >= 36; i-=6) {
    console.log(i);
}

//Conteo del 0 al 9 con el bucle while 
console.log("Bucle while");
let contador = 0;

while (contador < 10) {
    console.log(contador);
    //Incremento del contador
    contador++;
}
console.log("Bucle do while");
//Conteo del 0 al 9 con el bucle do while 
let contador2 = 10;

do {
    console.log(contador2);
    //Incremento del contador
    contador2++;
} while (contador < 10);

//Manejo del DOM con bucles
//Obtenemos el elemento requerido
let conteo = document.getElementById("conteo");

//Limpiamos su contenido
conteo.innerHTML= "";

//Creamos un bucle pra mostrar los numeros del 0 al 9
//Conteo de 0 al 9
for (let i = 0; i < 10; i++) {
//Esto muestra el conteo por consola
    console.log(i);
    //La añadimos al innerHtml del elemento conteo, con un br 
    conteo.innerHTML += `${i} </br>`;
}

//lLENAMOS DATOS EN EL DOM A PARTIR DE UN ARRAY
let paises = ["Mexico","Peru", "Colombia", "Chile", "Argentina"]

//Obtenemos el elemento requerido
let listaPaises = document.getElementById("lista-paises");
//Limpiamos su contenido
listaPaises.innerHTML= "";

//Creamos un bucle para mostrar los paises

for (let i = 0; i <= paises.length; i++) {
    //Agregamos cada elemento del array al innerHTML del elemento
    listaPaises.innerHTML += `${paises[i]} </br>`;
}

//Ej-2
//LLenar datos en el DOM a partir de un array de animales (5 elementos)
let animales = ["Gato","Tortuga", "Loro", "Leon", "Unicornio"]

//Obtenemos el elemento requerido
let listaAnimales = document.getElementById("lista-animales");
//Limpiamos su contenido
listaAnimales.innerHTML= "";

//Creamos un bucle para mostrar los animales

for (let i = 0; i <= animales.length; i++) {
    //Agregamos cada elemento del array al innerHTML del elemento
    listaAnimales.innerHTML += `${animales[i]} </br>`;
}*/

function saludar() {
    console.log("Hola, ¿cómo estás?, ¿Cómo vai?");
}
//Llamamos la funcion
saludar();

//Funcion para saludar que reciba un nombre
function saludarNombre(nombre) {
    console.log (`Hola ${nombre}, ¿como estas?`);
}
//Llamamos la funcion
saludarNombre("Michelle");

//Funcion saludar como arrow function
const saludar1 = () => console.log('Hola, ¿cómo estas?');

saludar1();

//Funcion slaudar con nombre con array function
const saludarConNombre = (nombre) => console.log(`Hola ${nombre}, ¿como estas?`);

saludarConNombre("Michelle");

