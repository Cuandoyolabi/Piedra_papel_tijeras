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


    

});


const triangulo = document.getElementById("triangulo") as HTMLImageElement;

function seleccionDeFicha(){

    triangulo.classList.add("hidden");

}



//2- Que la maquina elija un ficha de las 3 de una forma random


//3-Algoritmo que determina quien gano o perdio, si perdio baja el score y si gana, sube


//4-Crear un boton de reinicio para jugar otra vez

















