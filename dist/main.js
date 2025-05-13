"use strict";
const botonReglas = document.getElementById('reglas__boton');
const paginaReglas = document.getElementById('pagina__reglas__id');
const modal__oscuro = document.getElementById('modal__oscuro__id');
const cerrarReglas = document.getElementById('cerrar__boton');
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
const fichaPapel = document.getElementById("papel");
const fichaTijera = document.getElementById("tijera");
const fichaRoca = document.getElementById("roca");
fichaPapel.addEventListener('click', () => {
});
const triangulo = document.getElementById("triangulo");
function seleccionDeFicha() {
    triangulo.classList.add("hidden");
}
//2- Que la maquina elija un ficha de las 3 de una forma random
//3-Algoritmo que determina quien gano o perdio, si perdio baja el score y si gana, sube
//4-Crear un boton de reinicio para jugar otra vez
