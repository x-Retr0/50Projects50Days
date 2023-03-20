// Crear un array con todos los elementos div o cajas
let boxes = document.querySelectorAll("div");

window.addEventListener("scroll", checkCajas);

function checkCajas() {
  // Obtener el valor del 80% del tamañoY de la pantalla
  const activarSiguiente = window.innerHeight * 0.7;

  // Obtener la ubicación del lado de arriba de todas las cajas
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    // Si el lado de arriba de las cajas es menor al 80% de la pantalla, mostrar la siguiente
    if (boxTop < activarSiguiente) {
      box.className = "show";
    }
    // Si el valor del lado de arriba es menor, esconder la caja
    else {
      box.className = "no-show";
    }
  });
}
