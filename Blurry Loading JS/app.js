const imagen = document.querySelector("section");
const contador = document.querySelector("h1");

let numerador = 0;

let int = setInterval(borrosear, 30);

function borrosear() {
  numerador++;
  if (numerador > 99) {
    clearInterval(int);
  }
  contador.innerText = `${numerador}%`;
  contador.style.opacity = scale(numerador, 0, 100, 1, 0);
  imagen.style.filter = `blur(${scale(numerador, 0, 100, 30, 0)}px)`;
}

// Es una interpolación lineal, permite que encontrar en valor de un número en una escala diferente ej: de 0 a 10 la mitad es 5, con una interpolación lineal, podemos encontrar el valor de 5 (la mitad) en otra escala, por ejemplo de 0 a 10.000, siendo la mitad 5.000
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
