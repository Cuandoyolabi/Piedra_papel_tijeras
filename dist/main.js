"use strict";
const botonReglas = document.getElementById('reglas__boton');
const paginaReglas = document.getElementById('pagina__reglas__id');
const modalObscuro = document.getElementById('modal__oscuro__id');
const cerrarReglas = document.getElementById('cerrar__boton');
const contenedorDeJuegoInterseccion__id = document.getElementById("contenedor__juego__interseccion__id");
botonReglas.addEventListener('click', () => {
    modalObscuro.classList.add('active');
    paginaReglas.classList.add('active');
});
cerrarReglas.addEventListener('click', () => {
    modalObscuro.classList.remove('active');
    paginaReglas.classList.remove('active');
});
// 1-Poder seleccionar una ficha y que las demas fichas desaparezcan
const fichaPapel = document.getElementById("papel");
const fichaTijera = document.getElementById("tijera");
const fichaRoca = document.getElementById("roca");
//Se llaman al interior de las fichas para agregarles un diferente tamaño en modo responsive
const fichaInteriorPapel = document.getElementById("ficha__interior__papel");
const fichaInteriorTijera = document.getElementById("ficha__interior__tijera");
const fichaInteriorRoca = document.getElementById("ficha__interior__roca");
//Ficha de juego ineterior
const fichaInterior = document.getElementById("ficha__de__juego__interior__id");
//Crear una variable que se llene cuando elija una figura
let fichaSeleccionada = "";
fichaPapel.addEventListener('click', () => {
    fichaPapel.classList.add("seleccionado");
    fichaInteriorPapel.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaRoca.classList.add("active");
    fichaSeleccionada = "papel";
    //Funcion que se activara para el modo responsive (computadora)
    contenedorDeJuegoInterseccion__id.classList.add("modo__responsive");
    //Aqui es donde tal vez se implementaria la accion
    seleccionDeFicha();
    seleccionDeLaMaquina();
});
fichaTijera.addEventListener('click', () => {
    fichaTijera.classList.add("seleccionado");
    fichaInteriorTijera.classList.add("seleccionado");
    fichaPapel.classList.add("active");
    fichaRoca.classList.add("active");
    fichaSeleccionada = "tijera";
    //Funcion que se activara para el modo responsive (computadora)
    contenedorDeJuegoInterseccion__id.classList.add("modo__responsive");
    seleccionDeFicha();
    seleccionDeLaMaquina();
});
fichaRoca.addEventListener('click', () => {
    fichaRoca.classList.add("seleccionado");
    fichaInteriorRoca.classList.add("seleccionado");
    fichaTijera.classList.add("active");
    fichaPapel.classList.add("active");
    fichaSeleccionada = "piedra";
    //Funcion que se activara para el modo responsive (computadora)
    contenedorDeJuegoInterseccion__id.classList.add("modo__responsive");
    seleccionDeFicha();
    seleccionDeLaMaquina();
});
//Variables y elementos que se introduciran mas tarde pero que es neesaria su creacion en global
const eleccionDelJugadorTexto = document.createElement("p");
const eleccionDeLaMaquinaTexto = document.createElement("p");
const contenedorTransparente = document.createElement("div");
//Funcion que cambia la interfaz del programa y deja la ficha que el jugador selecciono
function seleccionDeFicha() {
    const triangulo = document.getElementById("triangulo");
    triangulo.classList.add("hidden");
    //Obtener ese div para insertar dos textos
    const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id");
    //Tu seleccion
    eleccionDelJugadorTexto.textContent = "YOU PICKED";
    eleccionDelJugadorTexto.classList.add("jugador__texto");
    contenedor__juego__interseccion__id.appendChild(eleccionDelJugadorTexto);
    //La eleccion de la maquina
    eleccionDeLaMaquinaTexto.textContent = "THE HOUSE PICKED";
    eleccionDeLaMaquinaTexto.classList.add("maquina__texto");
    contenedor__juego__interseccion__id.appendChild(eleccionDeLaMaquinaTexto);
    //Contenedor transparente 
    contenedorTransparente.classList.add("contenedor__transparente");
    contenedor__juego__interseccion__id.appendChild(contenedorTransparente);
}
//Fichas que la maquia puede seleccionar
const fichaPapelMaquina = document.getElementById("papel__maquina__id");
const fichaTijeraMaquina = document.getElementById("tijera__maquina__id");
const fichaRocaMaquina = document.getElementById("roca__maquina__id");
//Interior de las fichas de la maquina
const ficha__interior__papel__maquina = document.getElementById("ficha__interior__papel__maquina");
const ficha__interior__tijera__maquina = document.getElementById("ficha__interior__tijera__maquina");
const ficha__interior__roca__maquina = document.getElementById("ficha__interior__roca__maquina");
//Funcion que elige una ficha del array de manera aleatoria
function seleccionDeLaMaquina() {
    let arrayDeFichas = ["piedra", "papel", "tijera"];
    //Numero random
    let numeroRandom = Math.floor(Math.random() * 3);
    let decisionDeLaMaquina = arrayDeFichas[numeroRandom];
    if (decisionDeLaMaquina === "papel") {
        fichaPapelMaquina.classList.add("seleccionada");
        ficha__interior__papel__maquina.classList.add("seleccionado");
    }
    else if (decisionDeLaMaquina === "piedra") {
        fichaRocaMaquina.classList.add("seleccionada");
        ficha__interior__roca__maquina.classList.add("seleccionado");
    }
    else {
        fichaTijeraMaquina.classList.add("seleccionada");
        ficha__interior__tijera__maquina.classList.add("seleccionado");
    }
    juego(fichaSeleccionada, decisionDeLaMaquina);
}
//Variables necesarias en global
const jugarDeNuevoBoton = document.createElement("button");
const resultadoTexto = document.createElement("h1");
//Contenedores que aparecen cuando alguien gana y le dan un estilo al juego
const circuloNum1 = document.createElement("div");
const circuloNum2 = document.createElement("div");
const circuloNum3 = document.createElement("div");
function juego(fichaJugador, fichaMaquina) {
    const contenedorDeJuegoInterseccion__id = document.getElementById("contenedor__juego__interseccion__id");
    //Boton de reinicio
    jugarDeNuevoBoton.textContent = "PLAY AGAIN";
    jugarDeNuevoBoton.classList.add("jugar__de__nuevo");
    jugarDeNuevoBoton.id = 'jugar__de__nuevo__id';
    contenedorDeJuegoInterseccion__id.appendChild(jugarDeNuevoBoton);
    jugarDeNuevoBoton.addEventListener('click', () => {
        reinicioDeJuego();
    });
    //Texto de aviso
    resultadoTexto.classList.add("resultado__de__juego");
    if (fichaJugador === fichaMaquina) {
        resultadoTexto.textContent = "DRAW";
        contenedorDeJuegoInterseccion__id.appendChild(resultadoTexto);
        return;
    }
    const ganaContra = {
        piedra: "tijera",
        papel: "piedra",
        tijera: "papel"
    };
    if (ganaContra[fichaJugador] === fichaMaquina) {
        //Ganaste
        resultadoTexto.textContent = "YOU WIN";
        contenedorDeJuegoInterseccion__id.appendChild(resultadoTexto);
        let win = "WIN";
        //Circulos que agregan diseño del lado ganador
        circuloNum1.classList.add("circulo__num1__ganador");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum1);
        circuloNum2.classList.add("circulo__num2__ganador");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum2);
        circuloNum3.classList.add("circulo__num3__ganador");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum3);
        puntaje(win);
    }
    else {
        //Perdiste
        resultadoTexto.textContent = "YOU LOSE";
        contenedorDeJuegoInterseccion__id.appendChild(resultadoTexto);
        let lose = "LOSE";
        //Circulso que agregan diseño del lado perdedor
        circuloNum1.classList.add("circulo__num1__perdedor");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum1);
        circuloNum2.classList.add("circulo__num2__perdedor");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum2);
        circuloNum3.classList.add("circulo__num3__perdedor");
        contenedorDeJuegoInterseccion__id.appendChild(circuloNum3);
        puntaje(lose);
    }
}
//Funcion que reinicia el juego para probar de nuevo
function reinicioDeJuego() {
    console.log("MMM");
    const triangulo = document.getElementById("triangulo");
    const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id");
    //Retorno de la interfaz
    fichaPapel.classList.remove('active');
    fichaRoca.classList.remove('active');
    fichaTijera.classList.remove('active');
    triangulo.classList.remove("hidden");
    contenedor__juego__interseccion__id.classList.remove('espacio__extra');
    contenedor__juego__interseccion__id.classList.remove('modo__responsive');
    //Variables globales
    eleccionDelJugadorTexto.remove();
    eleccionDeLaMaquinaTexto.remove();
    jugarDeNuevoBoton.remove();
    resultadoTexto.remove();
    fichaPapelMaquina.classList.remove("seleccionada");
    fichaTijeraMaquina.classList.remove("seleccionada");
    fichaRocaMaquina.classList.remove("seleccionada");
    contenedorTransparente.remove();
    //Fichas a su lugar
    fichaPapel.classList.remove("seleccionado");
    fichaRoca.classList.remove("seleccionado");
    fichaTijera.classList.remove("seleccionado");
    fichaInteriorPapel.classList.remove("seleccionado");
    fichaInteriorTijera.classList.remove("seleccionado");
    fichaInteriorRoca.classList.remove("seleccionado");
    //Circulos que agregan diseño
    circuloNum1.remove();
    circuloNum2.remove();
    circuloNum3.remove();
    circuloNum1.classList.remove("circulo__num1__ganador", "circulo__num1__perdedor");
    circuloNum2.classList.remove("circulo__num2__ganador", "circulo__num2__perdedor");
    circuloNum3.classList.remove("circulo__num3__ganador", "circulo__num3__perdedor");
}
//Funcion que sube o baja tu puntaje dependiendo de tus jugadas
function puntaje(variable) {
    const puntaje = document.getElementById("puntaje__id");
    if (variable === "WIN") {
        //Esta variable convierte el elemento  de texto a numero
        // pero antes usa textContent para pasar de <h1>0</h1> a "0"
        //  y verifica que sea un string o sino, lo convierte a 0 y lo pasa a decimal
        let valorNumerico = parseInt(puntaje.textContent || "0", 10);
        valorNumerico++;
        puntaje.textContent = valorNumerico.toString();
    }
    else if (variable === "LOSE") {
        let valorNumerico = parseInt(puntaje.textContent || "0", 10);
        //Si el numero es 0, no bajara, porque no podemos poner -1 al jugador
        if (valorNumerico === 0) {
            return;
        }
        valorNumerico--;
        puntaje.textContent = valorNumerico.toString();
    }
}
