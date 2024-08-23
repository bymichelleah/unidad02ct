//VALIDADOR DE TARJETAS BANCARIAS
//Dato: La mayoria de las tarjetas tienen 16 digitos

function validarTarjeta() {
    //Nos aseguramos que la alerta no sea visible antes de una validacion
    let alerta = document.getElementById("alerta");
    //Limpiamos el contenido
    alerta.innerText = "";
    //Limpiamos las clases
    alerta.className = "";

    let numero = document.getElementById("numero-tarjeta");
    //Obtenemos el valor del input de la tarjeta
    let digitosTC = numero.value;

    //Validamos que el campo no este vacio
    if (digitosTC.length == 0) {
        //Damos el estilo y contenido de invalido a la alerta
        alerta.innerText = "Tarjeta Inválida";
        alerta.className = "alerta-error";

        //Retornamos false porque no seria válida
        return false;
    }
    //Paso 1: Almacenar los digitos de orden inverso
    //Almacenamos cada caracter de un string, como elemento de un array
    let arrTC = Array.from(digitosTC);
    let arrInverso = arrTC.reverse();

    // Paso 2: multiplicar por 2 los digitos en posicion par (contados desde 1, no desde 0)
    //Declaramos nuestra variable auxiliar
    let digitoPar;
    //Recorremos el array inverso
    for (let i = 1; i <= arrInverso.length; i += 2) {
        //Convertimos el elemento (string) a number, para poder operarlo
        digitoPar = parseInt(arrInverso[i]);
        //Duplicamos el numero
        digitoPar *= 2;

        //Si el numero es mayor o igual a 10, sumamos los digitos
        if (digitoPar >= 10) {
            //Para sumar digitos, cobnvertimos el numero a string
            digitoPar = digitoPar.toString();
            //Sumamos los digitos indexando la string y convirtiendo a number
            digitoPar = parseInt(digitoPar[0]) + parseInt(digitoPar[1]);
        }

        //Ahora reemplazamos el numero en la posicion correspondiente
        arrInverso[i] = digitoPar.toString();
    }

    //Paso 3: Sumar todos los digitos obtenidos anterior
//Inicializamos la suma en 0 (operador neutro)
    let suma = 0;

    //Recorremos el array inverso y sumamos cada elemento
    for (let i = 0; i < arrInverso.length; i++) {
        //Sumamos el elemento convertido a number
        suma += parseInt(arrInverso[i]);
    }

    //Paso 4: Validar si el numero es multiplo de 10
    if (suma % 10 == 0) {
        //Datos el estilo y contenido de válido a la alerta
        alerta.innerText = "Tarjeta Válida";
        alerta.className = "alerta-valida";

        //Retornamos true porque seria valido
        return true;
    } else {
        //Damos el estilo y contenido de inválido a la alerta
        alerta.innerText = "Tarjeta Inválida";
        alerta.className = "alerta-error";

        //Retornamos false porque no seria valido
        return false;
    }
    
    //Paso 5: (MAÑANA)

    // Enmascarar dígitos
   // Ocultaremos todos los dígitos de la tarjeta, excepto los últimos 4
  function enmascarar() {
    let numero = document.getElementById("numero-tarjeta");
    // Obtenemos el valor del input de la tarjeta
    let digitosTC = numero.value;
    let cantidadDigitos = digitosTC.length;

    if (cantidadDigitos > 4) {
        let digitosEnmascarar = cantidadDigitos - 4;

        for (let i = 0; i < digitosEnmascarar; i++) {
            // Reemplazamos cada dígito por un asterisco
            digitosTC = digitosTC.replace(digitosTC[i], "*");
        }
    }

    document.getElementById("svgnumber").innerHTML = digitosTC;
  }

   // Vinculamos la función
  document.getElementById("btn-validar").addEventListener("click", function () {
    // Validamos la tarjeta
    let valida = validarTarjeta();

    // Si es válida, enmascaramos los dígitos
    if (valida) {
        enmascarar();
        // Limpiamos el input
        document.getElementById("numero-tarjeta").value = "";
        // Ocultamos el botón
        this.hidden = true;
    }

})};