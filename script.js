const personaje = {};

const escenario = {};

const historia = {};
let escenaActual = "inicio";


function mostrarEscena () {
const escena = historia[escenaActual]

document.getElementById("texto"). innerText = escena.texto;

const contenedor = document.getElementById("opciones");
contenedor.innerHTML="";

escena.opciones.forEach(op=>{const botón = document.createElement("button");
boton.innerText=op.texto;

boton.onclick = ()=>escenaActual=op.siguiente;
mostrarEscena();
};

contenedor.appendChild(boton);
});
}

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