const square = document.getElementById("square");
const circle = document.getElementById("circle");
const menu = document.getElementById("menu");
let action = true;
let cooldown = false;

function activateRotation() {
  if (!cooldown) {
    square.classList.toggle("rotate", action);
    square.classList.toggle("rotate-inverse", !action);
    circle.classList.toggle("rotate", action);
    circle.classList.toggle("rotate-inverse", !action);
    action = !action;
    cooldown = !cooldown;
    setTimeout(() => {
      cooldown = false;
    }, 1100);
  }
}
