const image = document.getElementById("image");
const counter = document.getElementById("counter");

for (let i = 1; i < 101; i++) {
  setTimeout(() => {
    counter.innerHTML = `${i}%`;
  }, i * 50);
}
