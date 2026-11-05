function oscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function claro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
//Crea la función agregar, se ejecuta cuando pulsas el botón “Añadir”
function agregar() {

    //Busca en la página el cuadro de texto y lo guarda en la variable caja
    var caja = document.getElementById("cajaTexto");

    //Crea una etiqueta <li></li> nueva y vacía. Todavía no se ve en la página.
    var nuevo = document.createElement("li");

   //Crea un texto con lo que has escrito en el cuadro
    var texto = document.createTextNode(caja.value);

   //Mete el texto dentro del <li>. Ahora está: <li>leche</li>, pero sigue sin verse
    nuevo.appendChild(texto);

    //Busca la lista (<ul id="lista">) y mete el <li> dentro, al final. Aquí ya se añade a la pagina
    document.getElementById("lista").appendChild(nuevo);

    //Vacía el cuadro de texto para que se pueda escribir otra cosa
    caja.value = " ";
    
    

}