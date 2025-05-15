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
    
    ficha__seleccionada = "piedra";
    console.log(ficha__seleccionada)
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
    const contendor__juego__interseccion__id = document.getElementById("contendor__juego__interseccion__id") as HTMLDivElement;
    
    //Tu seleccion
    eleccion__DelJugador__texto.textContent = "YOU PICKED";
    eleccion__DelJugador__texto.classList.add("jugador__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DelJugador__texto);

    //La eleccion de la maquina
    eleccion__DeLaMaquina__texto.textContent ="THE HOUSE PICKED";
    eleccion__DeLaMaquina__texto.classList.add("maquina__texto");
    contendor__juego__interseccion__id.appendChild(eleccion__DeLaMaquina__texto);

    //Contenedor visual
    espacioVacio.classList.add("espacio__vacio");
    contendor__juego__interseccion__id.appendChild(espacioVacio);

    contendor__juego__interseccion__id.classList.add("espacio__extra");

}

//Funcion que elige una ficha del array de manera aleatoria
function seleccionDeLaMaquina(){

    let arrayDeFichas : string[] = ["piedra", "papel", "tijera"];

    //Numero random
    let numeroRandom: number = Math.floor(Math.random() * 3);
    let decisionDeLaMaquina: string = arrayDeFichas[numeroRandom];
    
    console.log(decisionDeLaMaquina)

    const fichaPapelMaquina = document.getElementById("papel__maquina__id") as HTMLDivElement;
    const fichaTijeraMaquina = document.getElementById("tijera__maquina__id") as HTMLDivElement;
    const fichaRocaMaquina = document.getElementById("roca__maquina__id") as HTMLDivElement;

    if(decisionDeLaMaquina === "papel"){
        fichaPapelMaquina.classList.add("seleccionada");

    } else if( decisionDeLaMaquina === "piedra"){
        fichaRocaMaquina.classList.add("seleccionada");

    } else {
        fichaTijeraMaquina.classList.add("seleccionada");
    }

    juego(ficha__seleccionada, decisionDeLaMaquina);

}


//Variables necesarias en global
const jugar__de__nuevoBoton = document.createElement("button") as HTMLButtonElement;
const resultado__texto = document.createElement("h1") as HTMLParagraphElement;

function juego(ficha__del__jugador: string, ficha__maquina: string){

    const contendor__juego__interseccion__id = document.getElementById("contendor__juego__interseccion__id") as HTMLDivElement;

    //Boton de reinicio
    jugar__de__nuevoBoton.textContent = "PLAY AGAIN";
    jugar__de__nuevoBoton.classList.add("jugar__de__nuevo");
    jugar__de__nuevoBoton.id = 'jugar__de__nuevo__id';
    contendor__juego__interseccion__id.appendChild(jugar__de__nuevoBoton);

    jugar__de__nuevoBoton.addEventListener('click', () => {
        reinicioDeJuego();
    });

    //Texto de aviso
    resultado__texto.classList.add("resultado__de__juego");

    if(ficha__del__jugador === ficha__maquina){

        resultado__texto.textContent = "DRAW";
        contendor__juego__interseccion__id.appendChild(resultado__texto);
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
        contendor__juego__interseccion__id.appendChild(resultado__texto);

    } else {
        //Perdiste
        resultado__texto.textContent = "YOU LOSE";
        contendor__juego__interseccion__id.appendChild(resultado__texto);
    }
}

//Funcion que reinicia el juego para probar de nuevo
function reinicioDeJuego(){

    const triangulo = document.getElementById("triangulo") as HTMLImageElement;
    const contendor__juego__interseccion__id = document.getElementById("contendor__juego__interseccion__id") as HTMLDivElement;

    //Retorno de la interfaz
    fichaPapel.classList.remove('active');
    fichaRoca.classList.remove('active');
    fichaTijera.classList.remove('active');
    triangulo.classList.remove("hidden");
    contendor__juego__interseccion__id.classList.remove('espacio__extra');

}

//Funcion que sube o baja tu puntaje dependiendo de tus jugadas
function puntaje(){



}

