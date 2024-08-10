
let num1 = 20;
let num2 = 10;

console.log("Primer numero: " + num1);
console.log("Segundo numero: " + num2);
console.log("");

//Operaciones matemáticas básicas
//Suma
let suma = num1 + num2;
console.log("Suma: " + suma);

//Resta
let resta = num1 - num2;
console.log("Resta: " - resta);

//Multiplicacion
let multiplicacion = num1 * num2;
console.log("Suma: " * suma);

//Division
let division = num1 / num2;
console.log("Division: " / division);

//pOTENCIA
let potencia = num1**num2;
console.log("Potenciacion: " + potencia);

//Módulo 
let modulo = num1 % num2;
console.log("Modulo: " + modulo);

console.log("")

//Operadores de comparacion
//Igualdad == 
//No le importa ek tipo de dato
console.log("3 == '3' = " + ( 3 == '3'));

//Identidad ===
//El tipo de dato debe ser el mismo
console.log("3 === '3' = " + (3 === '3'));

//Desigualdad !=
console.log("3 != 4 = " + (3 !=4)) ;

//Negacion de la identidad !==
console.log("3 !== 3 = " + (3 !== 4));

//Mayor que
console.log("3 > 4 = " + (4 > 3));
console.log("3 > 4 = " + (3 > 3));

//Mayor igual que
console.log("4 > 3 = " + (4 >= 3));
console.log("3 > 3 = " + (3 >= 3));

//Menor que
console.log("4 < 3 = " + (4 < 3));
console.log("3 < 3 = " + (3 < 3));

//Menor igual que
console.log("4 <= 3 = " + (4 <= 3));
console.log("3 <= 3 = " + (3 <= 3));

//Tambien se puede usar la identidad o igualadad para strings

console.log("hola == hola = " + ("hola" == "hola"));
console.log("Hola == hola = " + ("Hola" == "hola"));
//En progrmacion no se cuenta el cero
console.log("1 == true = " + (1 == true));
console.log("0 == false = " + (0 == false));
console.log("1 == true = " + (1 === true));
console.log("0 == false = " + (0 === false));

console.log("'true' == true = " + ('true' == true));

//Operadores lógicos
//&& -> Y
// || -> OR
// ! -> NO

console.log(true);
console.log(false);

//Negación !
console.log("!true  = " + (!true));
console.log("!false = " + (!false));
console.log("")

// OR ||
// Solo es falso cuando todos los valores son falsos
console.log("true  || true = " + (true || true));
console.log("true  || false = " + (true || false));
console.log("false || true = " + (false || true));
console.log("false || false = " + (false || true));
console.log("")

// AND &&
// Solo es falso cuando todos los valores son falsos
console.log("true  && true = " + (true && true));
console.log("true  && false = " + (true && false));
console.log("false && true = " + (false && true));
console.log("false && false = " + (false && true));

//Coversor de soles a dolares

let soles = 100;
let tipoDecambio= 3.78;

console.log("Cantidad en soles: " + soles);
console.log("Tipo de cambio (Soles a dolares): " + tipoDeCambio);
console.log("");

// Calcular la cantidad en dólares
let dolares = soles / tipoDeCambio;

console.log("Cantidad en dólares: $" + dolares);


let peso = 45;
let altura = 1.5;
let IMC = peso / (altura * altura) ;
console.log("Peso: " + peso + "kg" );
console.log("Altura: " + altura + "m");
console.log("IMC: " + IMC);