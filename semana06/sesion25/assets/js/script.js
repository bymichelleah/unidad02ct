//alert() sirve para mostrar un mensaje en el navegador
//alert ('MENSAJE INICIAL');

function mostrarMensaje() {
    //alert("Buenasssssss");

    //Mostramos los numeros del 1 al 10 
    for (let i = 1; i <= 10; i++) {
        //console.log[i];
        alert(i);
    }
}

// Ejemplo 2 

let texto = "";
//Obtenemos el conteo como texto
for (let i = 1; i <= 10; i++) {
     texto += `${i}<br />`;
}

//Asignamos el elemento
document.getElementById('demo').innerHTML = texto;

//Ejemplo 3
//Limpiamos la variable texto
texto = "";
const autos = ["BMW","Volven","Saab","Ford","Fiat","Audi"]
//console.log(autos);
//console.log(autos.length);
//console.log(autos[autos.length -1])

//Acceder a los elementos de la lista mediante un bucle
for (let i = 0; i < autos.length; i++) {
    texto += `${autos[i]}<br />`;
}

//Asignamos el elemento
document.getElementById('autos').innerHTML = texto;



//Ejemplo 4
texto = "";

//Acceder a los elementos de la lista mediante un bucle
for (let auto of autos) {
    texto += `${auto}<br />`;
}

//Asignamos el elemento
document.getElementById('autos2').innerHTML = texto;