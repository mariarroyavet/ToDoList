const parrafo1 = document.getElementById("parrafo1")
const parrafo2 = document.getElementById("parrafo2")

//query selector
const pElement = document.querySelector("p");
console.log(pElement);

const pElementClass = document.querySelector(".parrafo");
console.log(pElementClass);

//Crear nuevos elementos
let content = document.getElementById("content");
let elementParagraph= document.createElement("p");
elementParagraph.textContent = "Hola Mundo";
content.appendChild(elementParagraph);

//Eliminar elementos
content.removeChild(elementParagraph);

//Eventos

//Evento listener
const boton = document.getElementById("boton");
boton.addEventListener("click");
console.log ("click")
console-log ("Di click en el botón");
function onClick (event) {
console.log("Active boton");
}


const paragraph = document.querySelector('.paragraph');
paragraph.style.backgroundColor = 'red';
paragraph.style.color = 'pink';

//Cambiar estilos
parrafo1.style.color = "red";
parrafo2.style.backgroundColor = "blue";

let ventana;
let ancho;
let alto; 

function abrirVentana () {
    ancho = window.prompt ("Qué tamaño de ventana deseas?");
    alto = window.prompt ("Qué ancho de ventana deseas?");
    ventana = window.open ("https://www.google.com/", "Google",`width=${ancho}, height=${alto}`);
}

const button = document.getElementById ("button");
button.addEventListener ("click", "abrir ventana");
