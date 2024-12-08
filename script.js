/*
//______________________________________________
function reproducirSonido(evento) {
    const celda = evento.target;
    const numeroCelda = celda.textContent; // Obtener el número de la celda (si lo tiene)
   // const audio = new Audio(`sonido${numeroCelda}.mp3`); // Reproducir un sonido diferente según la celda
    const audio = new Audio(`okey02.wav`);
    audio.play();
}
//______________________________________________
*/
/*
const tablero = document.getElementById('tablero');

// Función para crear una celda y asignarle su índice
function crearCelda(indice) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    celda.textContent = indice;
    return celda;
}

// Crear y agregar las celdas al tablero
let indice = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const celda = crearCelda(indice);
        tablero.appendChild(celda);
        indice++;
    }
}
*/


const tablero = document.getElementById('tablero');

// Función para crear una celda y asignarle una imagen
function crearCelda(indice) {
    const celda = document.createElement('div');
    celda.classList.add('celda');

    // Reemplaza 'tu-imagen.jpg' con la ruta a tu imagen
    const img = document.createElement('img');
    img.src = '64x64.jpg';
    img.alt = `Imagen ${indice}`;
    celda.appendChild(img);

    return celda;
}

// Crear y agregar las celdas al tablero
for (let i = 0; i < 25; i++) {
    const celda = crearCelda(i);
    tablero.appendChild(celda);
}

//______________________________________________________
// Obtener todas las celdas de la tabla
const celdas = document.querySelectorAll('td');

// Función para reproducir un sonido
function reproducirSonido() {
    const audio = new Audio('newOrder.mp3'); // Reemplaza 'tu-sonido.mp3' con la ruta a tu archivo de sonido
    audio.play();
}

// Agregar un evento de clic a cada celda
celdas.forEach(celda => {
    celda.addEventListener('click', reproducirSonido);
});













