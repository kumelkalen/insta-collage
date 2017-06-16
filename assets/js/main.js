// Función para arrastrar -ondragstart-
function drag(ev) {
  console.log(ev.target.src); // Verificamos en la consola lo que ocurre
  ev.dataTransfer.setData('text', ev.target.id); // Indicamos el tipo de dato que ingresaremos
}

// Inicializamos el drop -ondragover-
function permitirDrop(ev){
  ev.preventDefault(); // Evitamos que el navegador manipule nuestros datos
}

// Obtenemos en una variable el elemento arrastrado
function drop(ev) {
  ev.preventDefault();

  var id_foto = ev.dataTransfer.getData('text'); // Con getData tomamos el elemento
  ev.target.appendChild(document.getElementById(id_foto)); // Agregamos el elemento arrastrado al elemento en el que se produjo el evento 
}