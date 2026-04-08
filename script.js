const personaje = {};

const escenario = {};

const capitulo = {};

let escenaActual = "capitulo 1";




function partidanueva(){
    document.getElementById("menu").style.display="none";
    document.getElementById("juego").style.display="block";

borrarPartida ();

mostrarEscena(); //empieza
}

function guardarPartida(){
localstorage.setItem("escena", escenaActual);
}

function cargarpartida (){

  const escenaGuardada = localStorage.getItem("escena");

  if (escenaGuardada) {
    escenaActual = escenaGuardada;

    document.getElementById("menu").style.display = "none";
    document.getElementById("juego").style.display = "block";

    mostrarEscena();
  } else {
    alert("No hay partida guardada");
  }
}

function borrarPartida () {
localStorage.removeItem("escena");
alerta ("Partida borrada")
}