//Array con elementos (bolsita que contiene elementos)
const activityList = [
    "Levantarme",
    "Journal",
    "Ejercicio",
    "Bañarme",
];

//Definir el nodo o container
const container = document.getElementById ("container");

const list = document.createElement("ul");

//crear función de listas
function crearLista () {
    for(let i=0; i<activityList.length; i++) {
        const item = document.createElement ("li");
        item.textContent = activityList[i];
        list.appendChild(item); //Añadir los hijos de la lista
    }
}

//Crear lista
crearLista();
container.appendChild(list);


//Ejercicio en parejas

//fucnion que controle el click 
//Identificar el evento
//Push al array 
//Recorrer de nuevo la lista 

function agregarRespuesta () {
    const form = document.getElementsByName ("activity").value;
    list.appendChild(form);
}

boton.addEventListener ("")
//Value o target identificarlo y hacerlo un appenchild 
//Cómo capturar solo el input?

//get element by name 
