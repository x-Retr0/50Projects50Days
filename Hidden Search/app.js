const barra = document.getElementById("barra");
const contendor = document.getElementById("contenedor");
const icono = document.getElementById("icono");
let state = true;

function cambio() {
  barra.classList.toggle("ancha", !state);
  barra.classList.toggle("estrecha", state);
  state = !state;
}
