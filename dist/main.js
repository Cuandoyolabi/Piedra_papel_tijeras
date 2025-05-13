"use strict";
const botonReglas = document.getElementById('reglas__boton');
const paginaReglas = document.getElementById('pagina__reglas__id');
const cerrarReglas = document.getElementById('cerrar__boton');
botonReglas.addEventListener('click', () => {
    paginaReglas.classList.add('active');
});
cerrarReglas.addEventListener('click', () => {
    paginaReglas.classList.remove('active');
});
