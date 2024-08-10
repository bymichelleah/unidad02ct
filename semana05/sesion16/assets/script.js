// Array para las preguntas
let preguntas = [
  "¿Con qué frecuencia realizas deporte? Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
  "¿Cuántos vasos de agua (200mL) bebes al día? No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
  "¿Cuántas porciones de frutas y verduras consumes diariamente?",
  "¿Cuándo fue la última vez que fuiste al médico y/o te realizaste un chequeo general? No consideres visitas por situaciones muy específicas en las que no se revisó tu estado general de salud ni siquiera de manera visual, como por ejemplo en caso de una lesión.",
  "Piensa en lo que sueles comer día a día. ¿Qué tipo de alimentos es el más frecuente en tu dieta?",
  "¿Existen antecedentes de enfermedades crónicas en tu familia?.<br>Se considera como enfermedad crónica aquella que dura 3 ó más meses y que, posiblemente, empeore con el tiempo. Ejemplos: cáncer, diabetes, hipertensión, cardiopatías, accidentes cerebrovasculares.",
  "En general, consideras que tu salud es:"
];

// Array de opciones multidimensional
let opciones = [
  [
    "3 ó más veces por semana",
    "Entre 1 y 2 veces a la semana",
    "Al menos 4 veces al mes",
    "2 a 3 veces al mes",
    "1 vez al mes ó menos"
  ],
  [
    "Al menos 8 vasos al día",
    "Entre 5 y 8, depende del día",
    "Cuando me acuerdo",
    "Solo si tengo sed",
    "No me gusta el agua, prefiero la gaseosa"
  ],
  [
    "5 ó más",
    "2 a 4",
    "Al menos 1 vez al día",
    "Depende del día",
    "Solo si me obligan"
  ],
  [
    "Hace menos de un mes",
    "Entre 1 y 3 meses atrás",
    "Estoy segura que fui al menos una vez en los últimos 12 meses",
    "Solo voy si hay algún hueso expuesto",
    "Nunca me enfermo, no necesito ir al médico"
  ],
  [
    "Harinas y cereales",
    "Proteína de origen animal (carnes rojas, blancas o pescado)",
    "Aceites y grasas",
    "Ensaladas de verduras y/o frutas",
    "Proteínas de origen vegetal (legumbres)"
  ],
  [
    "Sí, ambos padres padecen enfermedades crónicas",
    "Sí, uno de mis padres padece de una o más enfermedades crónicas",
    "Sí, al menos uno de mis hermanos",
    "Sí, pero es un tío y/o abuelo",
    "No que yo sepa"
  ],
  [
    "Excelente, no recuerdo la última vez que tuve un resfrío",
    "Buena, no suelo enfermarme más de una vez al año y es de manera leve",
    "Buena, tengo alguna(s) enfermedad(es) crónica(s) pero está(n) controlada(s)",
    "Regular, me refrío siempre y/o tengo descompensaciones ocasionales de enfermedades crónicas",
    "Mala, paso resfriada, con crisis de enfermedades crónicas y/o lesionada"
  ]
];

// Array para los puntajes
let puntajePorOpcion = [
  [5, 4, 3, 1, 0],
  [5, 4, 2, 1, 0],
  [5, 4, 3, 1, 0],
  [5, 4, 3, 1, 0],
  [1, 4, 0, 3, 5],
  [1, 2, 2, 3, 5],
  [5, 4, 4, 2, 0]  
];

// Variables necesarias
let puntaje = 0;
// ÍNDICE DE PREGUNTA
let i = 0;

// Despliegue de resultados
function mostrarResultado() {
  // Obtenemos el card
  let card = document.querySelector(".card");
  // Vaciamos el contenido
  card.innerHTML = "";

  // Actualizar la bara de progreso
  document.getElementById("barra-progreso").value = 100;

  // Agregamos los elementos correspondientes a los resultados
  card.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

  // Variable para el estilo de vida
  let estiloVida;

  // Determinamos el estilo de vida max = 35
  if (puntaje > 30) {
    estiloVida = "<span id='estilo-excelente' class='resultado'>EXCELENTE</span>";
  } else if (puntaje > 25) {
    estiloVida = "<span id='estilo-bueno' class='resultado'>BUENO</span>";
  } else if (puntaje > 20) {
    estiloVida = "<span id='estilo-aceptable' class='resultado'>ACEPTABLE</span>";
  } else if (puntaje > 10) {
    estiloVida = "<span id='estilo-regular' class='resultado'>REGULAR</span>";
  } else {
    estiloVida = "<span id='estilo-malo' class='resultado'>MALO</span>";
  }

  // Agregamos el estilo al card
  card.innerHTML += `<p class="resultado-obtenido">Has obtenido ${puntaje} puntos, lo cual significa que tu estilo de vida es ${estiloVida}</p>`
}

// Función para actualizar el puntaje
function actualizarPuntaje(opcion) {
  // Sumo el puntaje en base a la opción
  puntaje += puntajePorOpcion[i][opcion];

  // Actualizo el índice de la pregunta
  i++; // AUMENTARLE 1 A i

  // Verificar si aún quedan preguntas
  if (i < preguntas.length) {
    siguientePregunta();
  } else {
    mostrarResultado();
  }
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
  // Cambiar el texto de la pregunta
  document.getElementById("pregunta").innerHTML = preguntas[i];
  // Cambiar el texto de las alternativas
  document.getElementById("op1").innerHTML = opciones[i][0];
  document.getElementById("op2").innerHTML = opciones[i][1];
  document.getElementById("op3").innerHTML = opciones[i][2];
  document.getElementById("op4").innerHTML = opciones[i][3];
  document.getElementById("op5").innerHTML = opciones[i][4];
  // Actualizar la barra de progreso
  document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
}

// Asignar los eventos a los botones
document.getElementById("op1").addEventListener('click', function () {
  actualizarPuntaje(0);
});

document.getElementById("op2").addEventListener('click', function () {
  actualizarPuntaje(1);
});

document.getElementById("op3").addEventListener('click', function () {
  actualizarPuntaje(2);
});

document.getElementById("op4").addEventListener('click', function () {
  actualizarPuntaje(3);
});

document.getElementById("op5").addEventListener('click', function () {
  actualizarPuntaje(4);
});

// Llamamos a la funcion de siguientePregunta
siguientePregunta();
