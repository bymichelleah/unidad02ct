//Dar un mensaje de acuerdo alclima 
//lluvioso, soleado, nublado
let clima = 'humedad';
console.log (clima);

switch (clima) {
    case 'lluvioso':
        console.log ('Recuerda llevar paraguas.');
        break;
    case 'soleado':
        console.log ('Viste ligero.');
        break;
    case 'nubleado':
        console.log ('Sal a la calle.');
        break;
    case 'humedad':
        console.log ('Dentro de casa.');
        break;   
    case 'granizo':
        console.log ('No salgas a la calle.');
        break;        
    default:
        console.log('No se encontro ningun clima');  
        break;   
}
console.log ('Fin del condicional.');

/*if (clima == 'lluvioso') {
    console.log('Recuerda llevar un paraguas');
} else if (clima == 'soleado') {
    console.log('Viste ligera');
} else if (clima == 'nubleado') {
    console.log('Sal a la calle');
} else {
    console.log("No se encontro ningun clima");
}*/

