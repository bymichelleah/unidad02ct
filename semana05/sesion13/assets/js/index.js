/*console.log("michelleeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

//STRINGS
//Sintaxis de strings

let palabra1 = 'String con comillas simples';
console.log(palabra1);

//Comillas dobles
let palabra2 = "String con comillas dobles";
console.log(palabra2);

//Combinacion de simples y dobles
let palabra3 = "McDonald's";
console.log(palabra3);

let palabra4 ='Yo siempre digo: "Tu eres el único Ingeniero de tu vida"';
console.log(palabra4);

//Comillas invertidas (Backsticks)
//NO ES LA TILDE (')
//SON ESTAS (`)
let palabra5 = `String con comillas invertidas (Backsticks)`;
console.log(palabra5);

let palabra6 = `Puedo escribri ambas comillas '"'" sin problemas`;
console.log(palabra6);

//Strings multilinea
let palabra7 = 'String multilinea'
+ '\nCon comillas simples';
console.log(palabra7);

let palabra8 = "String multilinea"
+ "\nCon comillas dobles";
console.log(palabra8);

let palabra9 = `String multilinea
Con backticks
No tengo que agregar saltos de linea
Ni concatenar strings`
console.log(palabra9);

//Interpolacion de Strings
let nombre = 'Michelle';
let edad = 17;
let pais = 'Peru';
let signo = 'Cancer';

let palabra10 = "Hola me llamo " + nombre + " y tengo " + edad + "años.";
console.log(palabra10);

//Interpolación usando backticks

let palabra11 = `Hola me llamo ${nombre} 
Tengo ${edad} años
Soy de ${pais}
De signo ${signo}.`;
console.log(palabra11);

//Metacaracteres
//Salto de linea \n

let palabra12 = 'Salto de\nlinea';
console.log(palabra12);

//Tabulacion \n -> 4 espacios en un texto
let palabra13 = '\tTabulacion';
console.log(palabra13);

//Backlash \\ -> barra invertida
let palabra14 =  "Diagonal \\ invertida \\";
console.log(palabra14);

//Comillas simples \ ->utilizar como texto nnormal'
let palabra15 = 'McDonald\'s';
console.log(palabra15);

//Comillas simples \"
let palabra16 = "Yo siempre digo: \"Tu eres el único Ingeniero de tu vida\"";
console.log(palabra16);

//UNICODE 
let palabra17 = "Superiindice \u00b2";
console.log(palabra17);

let palabra18 = "Caracter de alfabeto arabe \u069c ☺☻♥♦♣♠•◘○◙o♀♪♫☼►◄11◘1○☻ ";
console.log(palabra18);
console.log(palabra5); */

//Métodos de strings
//.length -> tamaño de una strings (cantidad de caracteres)
let palabra = 'Hola';
console.log(palabra);

let size = palabra.length;
console.log (palabra.length);

let palabra2 = 'ABCDEFGHIJK';
console.log (palabra2);
console.log (palabra2.length);

//lOS ESPACIOS CUENTAN COMO CARACTERES
let palabra3 = "M i c h e l l e";
console.log (palabra3);
console.log (palabra3.length);

let palabra4 = " ";
console.log (palabra4);
console.log (palabra4.length);

//Indexer una string, acceder a sus indices
let palabra5 = 'America';
console.log (palabra5);
//<variable_string>[i] i-> numero entero
console.log(palabra5[0]);
console.log(palabra5[1]);
console.log(palabra5[5]);

//Immutibilidad, no se pueden modificar los indices de una
//string

palabra5[0] = "E"; //Esto no funciona
console.log(palabra5);

//Ultima posición 
console.log(palabra5.length);
//Contando
console.log(palabra5[6]);
//El ultimo indice es el tamaño -1
console.log(palabra5[palabra5.length - 1]);

//Metodos de case
//.toUpperCase() -> Vuelve la string a mayuscula
let palabra6 = 'Probando .toUpperCase()';
console.log(palabra6);
console.log(palabra6.toUpperCase());

// .toLowerCase() -> Vuelve la string a miniscula
let palabra7 = 'Probando .toLowerCase()';
console.log(palabra7);
console.log(palabra7.toLowerCase());
console.log("");

//Substrings
let palabra8 = "Boa noite meninas";
console.log(palabra8);

//.slice(star [, end])
console.log(palabra8.slice(7));
console.log(palabra8.slice(4,6));

//.substr (star [, length])
console.log(palabra8.substr(7,6));

//Busqueda
console.log(palabra8[4]);
//.indexof(caracter [, desde donde])
console.log(palabra8.indexOf['a']);
console.log(palabra8.indexOf['a',14]);

//.includes() ->erificacion
console.log(palabra8.includes("a"));
console.log(palabra8.includes("NOITE"));

//.startsWith()
console.log(palabra8.startsWith("Bu"));
console.log(palabra8.startsWith("as"));

//.endsWith()
console.log(palabra8.endsWith("Bu"));
console.log(palabra8.endsWith("as"));