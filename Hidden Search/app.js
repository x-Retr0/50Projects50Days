const lupa = document.getElementById("icon");
const main = document.getElementById("container");
let action = true;

lupa.addEventListener("click", function () {
  main.classList.toggle("encoger", action);
  main.classList.toggle("estirar", !action);
  action = !action;
});
