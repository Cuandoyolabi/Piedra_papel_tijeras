const botonReglas = document.getElementById('reglas__boton') as HTMLButtonElement;
const paginaReglas = document.getElementById('pagina__reglas__id') as HTMLDivElement;
const cerrarReglas = document.getElementById('cerrar__boton') as HTMLButtonElement;

botonReglas.addEventListener('click', () => {

    paginaReglas.classList.toggle('active');

});

cerrarReglas.addEventListener('click', () => {

        paginaReglas.classList.toggle('hidden');
        
});

