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

//Crear una variable que se llene cuando elija una figura
let ficha__seleccionada: string = "";

fichaPapel.addEventListener('click', () => {

    fichaPapel.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "papel";
    
    console.log(ficha__seleccionada);
    seleccionDeFicha();
    

});

fichaTijera.addEventListener('click', () => {

    fichaTijera.classList.add("seleccionado");
    fichaPapel.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "tijera";
    console.log(ficha__seleccionada)
    seleccionDeFicha();

});

fichaRoca.addEventListener('click', () => {

    fichaRoca.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaPapel.classList.add("active");
    
    ficha__seleccionada = "roca";
    console.log(ficha__seleccionada)
    seleccionDeFicha();

})

function seleccionDeFicha(){

    const triangulo = document.getElementById("triangulo") as HTMLImageElement;
    triangulo.classList.add("hidden");

    //Obtener ese div para insertar dos textos
    const contendor__juego__interseccion__id = document.getElementById("contendor__juego__interseccion__id") as HTMLDivElement;
    
    const eleccion__DelJugador__texto = document.createElement("p");
    eleccion__DelJugador__texto.textContent = "YOU PICKED";
    eleccion__DelJugador__texto.classList.add("jugador__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DelJugador__texto);

    const eleccion__DeLaMaquina__texto = document.createElement("p"); 
    eleccion__DeLaMaquina__texto.textContent ="THE HOUSE PICKED";
    eleccion__DeLaMaquina__texto.classList.add("maquina__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DeLaMaquina__texto);

}



//Creando la logica de juego
let decisionDeLaMaquina : string = "";
let decisiones: string[] = ["piedra", "papel", "tijera"];
// Necesito que la maquina seleccione uno de estos 3 de forma aleatoria





//2- Que la maquina elija un ficha de las 3 de una forma random


//3-Algoritmo que determina quien gano o perdio, si perdio baja el score y si gana, sube


//4-Crear un boton de reinicio para jugar otra vez

















