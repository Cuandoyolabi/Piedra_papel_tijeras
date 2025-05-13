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

// Logica de juego


// 1-Poder seleccionar una ficha y que las demas fichas desaparezcan
const fichaPapel = document.getElementById("papel") as HTMLDivElement;
const fichaTijera = document.getElementById("tijera") as HTMLDivElement;
const fichaRoca = document.getElementById("roca") as HTMLDivElement;

fichaPapel.addEventListener('click', () => {


    fichaTijera.classList.add("active");
    fichaRoca.classList.add("active");
    seleccionDeFicha();
    

});

fichaTijera.addEventListener('click', () => {

    fichaPapel.classList.add("active");
    fichaRoca.classList.add("active");
    seleccionDeFicha();

});


fichaRoca.addEventListener('click', () => {

    fichaTijera.classList.add("active");
    fichaPapel.classList.add("active");
    seleccionDeFicha();

})

const triangulo = document.getElementById("triangulo") as HTMLImageElement;

function seleccionDeFicha(){

    triangulo.classList.add("hidden");

}

//Creando la logica de juego
let decisionDeLaMaquina = "";
let decisiones = ["piedra", "papel", "tijera"];
// Necesito que la maquina seleccione uno de estos 3 de forma aleatoria





//2- Que la maquina elija un ficha de las 3 de una forma random


//3-Algoritmo que determina quien gano o perdio, si perdio baja el score y si gana, sube


//4-Crear un boton de reinicio para jugar otra vez

















