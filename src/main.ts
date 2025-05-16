const botonReglas = document.getElementById('reglas__boton') as HTMLButtonElement;
const paginaReglas = document.getElementById('pagina__reglas__id') as HTMLDivElement;
const modal__oscuro = document.getElementById('modal__oscuro__id') as HTMLDivElement;
const cerrarReglas = document.getElementById('cerrar__boton') as HTMLButtonElement;
 const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id") as HTMLDivElement;

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

//Se llaman al interior de las fichas para agregarles un diferente tamaño en modo responsive
const ficha__interior__papel = document.getElementById("ficha__interior__papel") as HTMLDivElement;
const ficha__interior__tijera = document.getElementById("ficha__interior__tijera") as HTMLDivElement;
const ficha__interior__roca = document.getElementById("ficha__interior__roca") as HTMLDivElement;

//Ficha de juego ineterior
const ficha__interior = document.getElementById("ficha__de__juego__interior__id") as HTMLDivElement;

//Crear una variable que se llene cuando elija una figura
let ficha__seleccionada: string = "";

fichaPapel.addEventListener('click', () => {

    fichaPapel.classList.add("seleccionado");
    ficha__interior__papel.classList.add("seleccionado");

    fichaTijera.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "papel";
    
    //Funcion que se activara para el modo responsive (computadora)
    contenedor__juego__interseccion__id.classList.add("modo__responsive"); 

    seleccionDeFicha();
    seleccionDeLaMaquina();

});

fichaTijera.addEventListener('click', () => {

    fichaTijera.classList.add("seleccionado");
    ficha__interior__tijera.classList.add("seleccionado");

    fichaPapel.classList.add("active");
    fichaRoca.classList.add("active");
    
    ficha__seleccionada = "tijera";

    //Funcion que se activara para el modo responsive (computadora)
    contenedor__juego__interseccion__id.classList.add("modo__responsive"); 

    seleccionDeFicha();
    seleccionDeLaMaquina();

});

fichaRoca.addEventListener('click', () => {

    fichaRoca.classList.add("seleccionado");
    ficha__interior__roca.classList.add("seleccionado");

    fichaTijera.classList.add("active");
    fichaPapel.classList.add("active");
    
    ficha__seleccionada = "piedra";
    
    //Funcion que se activara para el modo responsive (computadora)
    contenedor__juego__interseccion__id.classList.add("modo__responsive"); 

    seleccionDeFicha();
    seleccionDeLaMaquina();

});

//Variables y elementos que se introduciran mas tarde pero que es neesaria su creacion en global
const eleccion__DelJugador__texto: HTMLParagraphElement = document.createElement("p");
const eleccion__DeLaMaquina__texto: HTMLParagraphElement= document.createElement("p"); 
const espacioVacio: HTMLDivElement = document.createElement("div");

//Funcion que cambia la interfaz del programa y deja la ficha que el jugador selecciono
function seleccionDeFicha(){

    const triangulo = document.getElementById("triangulo") as HTMLImageElement;
    triangulo.classList.add("hidden");

    //Obtener ese div para insertar dos textos
    const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id") as HTMLDivElement;
    
    //Tu seleccion
    eleccion__DelJugador__texto.textContent = "YOU PICKED";
    eleccion__DelJugador__texto.classList.add("jugador__texto");
    contenedor__juego__interseccion__id.appendChild(eleccion__DelJugador__texto);

    //La eleccion de la maquina
    eleccion__DeLaMaquina__texto.textContent ="THE HOUSE PICKED";
    eleccion__DeLaMaquina__texto.classList.add("maquina__texto");
    contenedor__juego__interseccion__id.appendChild(eleccion__DeLaMaquina__texto);

    //Contenedor visual
    espacioVacio.classList.add("espacio__vacio");
    contenedor__juego__interseccion__id.appendChild(espacioVacio);

    contenedor__juego__interseccion__id.classList.add("espacio__extra");

}

//Fichas que la maquia puede seleccionar
const fichaPapelMaquina = document.getElementById("papel__maquina__id") as HTMLDivElement;
const fichaTijeraMaquina = document.getElementById("tijera__maquina__id") as HTMLDivElement;
const fichaRocaMaquina = document.getElementById("roca__maquina__id") as HTMLDivElement;

//Interior de las fichas de la maquina
const ficha__interior__papel__maquina = document.getElementById("ficha__interior__papel__maquina") as HTMLDivElement;
const ficha__interior__tijera__maquina = document.getElementById("ficha__interior__tijera__maquina") as HTMLDivElement;
const ficha__interior__roca__maquina = document.getElementById("ficha__interior__roca__maquina") as HTMLDivElement;

//Funcion que elige una ficha del array de manera aleatoria
function seleccionDeLaMaquina(){

    let arrayDeFichas : string[] = ["piedra", "papel", "tijera"];

    //Numero random
    let numeroRandom: number = Math.floor(Math.random() * 3);
    let decisionDeLaMaquina: string = arrayDeFichas[numeroRandom];
    
    if(decisionDeLaMaquina === "papel"){
        fichaPapelMaquina.classList.add("seleccionada");
        ficha__interior__papel__maquina.classList.add("seleccionado");

    } else if( decisionDeLaMaquina === "piedra"){
        fichaRocaMaquina.classList.add("seleccionada");
        ficha__interior__roca__maquina.classList.add("seleccionado");
    } else {
        fichaTijeraMaquina.classList.add("seleccionada");
        ficha__interior__tijera__maquina.classList.add("seleccionado");
    }

    juego(ficha__seleccionada, decisionDeLaMaquina);

}

//Variables necesarias en global
const jugar__de__nuevoBoton = document.createElement("button") as HTMLButtonElement;
const resultado__texto = document.createElement("h1") as HTMLParagraphElement;

function juego(ficha__del__jugador: string, ficha__maquina: string){

    const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id") as HTMLDivElement;

    //Boton de reinicio
    jugar__de__nuevoBoton.textContent = "PLAY AGAIN";
    jugar__de__nuevoBoton.classList.add("jugar__de__nuevo");
    jugar__de__nuevoBoton.id = 'jugar__de__nuevo__id';
    contenedor__juego__interseccion__id.appendChild(jugar__de__nuevoBoton);

    jugar__de__nuevoBoton.addEventListener('click', () => {
        reinicioDeJuego();
    });

    //Texto de aviso
    resultado__texto.classList.add("resultado__de__juego");

    if(ficha__del__jugador === ficha__maquina){

        resultado__texto.textContent = "DRAW";
        contenedor__juego__interseccion__id.appendChild(resultado__texto);
        return;
    }

    const ganaContra: Record<string, string> = {

        piedra: "tijera",
        papel: "piedra",
        tijera: "papel"

    }

    if(ganaContra[ficha__del__jugador] === ficha__maquina){
        //Ganaste
        resultado__texto.textContent = "YOU WIN";
        contenedor__juego__interseccion__id.appendChild(resultado__texto);
        let win: string = "WIN";
        puntaje(win);

    } else {
        //Perdiste
        resultado__texto.textContent = "YOU LOSE";
        contenedor__juego__interseccion__id.appendChild(resultado__texto);
        let lose: string = "LOSE";
        puntaje(lose);
    }
}

//Funcion que reinicia el juego para probar de nuevo
function reinicioDeJuego(){

    console.log("MMM")
    const triangulo = document.getElementById("triangulo") as HTMLImageElement;
    const contenedor__juego__interseccion__id = document.getElementById("contenedor__juego__interseccion__id") as HTMLDivElement;

    //Retorno de la interfaz
    fichaPapel.classList.remove('active');
    fichaRoca.classList.remove('active');
    fichaTijera.classList.remove('active');
    triangulo.classList.remove("hidden");
    contenedor__juego__interseccion__id.classList.remove('espacio__extra');
    contenedor__juego__interseccion__id.classList.remove('modo__responsive');

    //Variables globales
    eleccion__DelJugador__texto.remove();
    eleccion__DeLaMaquina__texto.remove();
    jugar__de__nuevoBoton.remove();
    resultado__texto.remove();
    espacioVacio.remove();
    fichaPapelMaquina.classList.remove("seleccionada");
    fichaTijeraMaquina.classList.remove("seleccionada");
    fichaRocaMaquina.classList.remove("seleccionada");

    //Fichas a su lugar
    fichaPapel.classList.remove("seleccionado");
    fichaRoca.classList.remove("seleccionado");
    fichaTijera.classList.remove("seleccionado");   

    ficha__interior__papel.classList.remove("seleccionado");
    ficha__interior__tijera.classList.remove("seleccionado");
    ficha__interior__roca.classList.remove("seleccionado");

}


//Funcion que sube o baja tu puntaje dependiendo de tus jugadas
function puntaje(variable: string){
    
    const puntaje = document.getElementById("puntaje__id") as HTMLParagraphElement;

    if(variable === "WIN"){
        
        //Esta variable convierte el elemento  de texto a numero
        // pero antes usa textContent para pasar de <h1>0</h1> a "0"
        //  y verifica que sea un string o sino, lo convierte a 0 y lo pasa a decimal
        let valorNumerico = parseInt(puntaje.textContent || "0", 10);
        valorNumerico++;
        puntaje.textContent = valorNumerico.toString();

    } else if(variable === "LOSE") {
        
        let valorNumerico = parseInt(puntaje.textContent || "0", 10);

        //Si el numero es 0, no bajara, porque no podemos poner -1 al jugador
        if(valorNumerico === 0){
            return;
        }

        valorNumerico--;
        puntaje.textContent = valorNumerico.toString();

    }
}

