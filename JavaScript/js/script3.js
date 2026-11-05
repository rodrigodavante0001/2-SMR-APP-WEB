var contenido = document.getElementsByClassName("contenedor")[0];
var nuevoP = document.createElement("p");
var texto = document.createTextNode("Hola, soy Rodrigo");
nuevoP.appendChild(texto);

contenido.appendChild(nuevoP);