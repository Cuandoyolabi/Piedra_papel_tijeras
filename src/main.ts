const botonReglas = document.getElementById('reglas__boton') as HTMLButtonElement;
const paginaReglas = document.getElementById('pagina__reglas__id') as HTMLDivElement;
const modal__oscuro = document.getElementById('modal__oscuro__id') as HTMLDivElement;
const cerrarReglas = document.getElementById('cerrar__boton') as HTMLButtonElement;

botonReglas.addEventListener('click', () => {

    modal__oscuro.classList.add('active');
    paginaReglas.classList.add('active');

});

cerrarReglas.addEventListener('click', () => {

    modal__oscuro.classList.remove('active');
    paginaReglas.classList.remove('active');

});

// 1-Poder seleccionar una ficha y que las demas fichas desaparezcan
const fichaPapel = document.getElementById("papel") as HTMLDivElement;
const fichaTijera = document.getElementById("tijera") as HTMLDivElement;
const fichaRoca = document.getElementById("roca") as HTMLDivElement;

//Crear una variable que se llene cuando elija una figura
let ficha__seleccionada: string = "";

fichaPapel.addEventListener('click', () => {

    fichaPapel.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "papel";
    
    console.log(ficha__seleccionada);
    seleccionDeFicha();
    seleccionDeLaMaquina();

});

fichaTijera.addEventListener('click', () => {

    fichaTijera.classList.add("seleccionado");
    fichaPapel.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "tijera";
    console.log(ficha__seleccionada)
    seleccionDeFicha();
    seleccionDeLaMaquina();

});

fichaRoca.addEventListener('click', () => {

    fichaRoca.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaPapel.classList.add("active");
    
    ficha__seleccionada = "roca";
    console.log(ficha__seleccionada)
    seleccionDeFicha();
    seleccionDeLaMaquina();

});

//Funcion que cambia la interfaz del programa y deja la ficha que el jugador selecciono
function seleccionDeFicha(){

    const triangulo = document.getElementById("triangulo") as HTMLImageElement;
    triangulo.classList.add("hidden");

    //Obtener ese div para insertar dos textos
    const contendor__juego__interseccion__id = document.getElementById("contendor__juego__interseccion__id") as HTMLDivElement;
    
    const eleccion__DelJugador__texto: HTMLParagraphElement = document.createElement("p");
    eleccion__DelJugador__texto.textContent = "YOU PICKED";
    eleccion__DelJugador__texto.classList.add("jugador__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DelJugador__texto);

    const eleccion__DeLaMaquina__texto: HTMLParagraphElement= document.createElement("p"); 
    eleccion__DeLaMaquina__texto.textContent ="THE HOUSE PICKED";
    eleccion__DeLaMaquina__texto.classList.add("maquina__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DeLaMaquina__texto);

    const espacioVacio: HTMLDivElement = document.createElement("div");
    espacioVacio.classList.add("espacio__vacio");
    contendor__juego__interseccion__id.appendChild(espacioVacio);

}

//Funcion que elige una ficha del array de manera aleatoria
function seleccionDeLaMaquina(){

    let arrayDeFichas : string[] = ["piedra", "papel", "tijera"];

    //Numero random
    let numeroRandom: number = Math.floor(Math.random() * 3);
    let decisionDeLaMaquina: string = arrayDeFichas[numeroRandom];
    return decisionDeLaMaquina;

}

const ficha__elegida = seleccionDeLaMaquina();

console.log(ficha__elegida)




//Funcion que depende la respuesta de la seleccion de la maquina, mostrara la ficha correspondiente y mostrara el resultado



//Una vez la ficha elegida, crear el algoritmo de condiciones donde uno le gane al otro y asi 

//Crear una variable nueva que diga el texto de si ganas o perdiste+

//Crear un boton que reinicie el juego


//Creando la logica de juego

// Necesito que la maquina seleccione uno de estos 3 de forma aleatoria





//2- Que la maquina elija un ficha de las 3 de una forma random


//3-Algoritmo que determina quien gano o perdio, si perdio baja el score y si gana, sube


//4-Crear un boton de reinicio para jugar otra vez

















