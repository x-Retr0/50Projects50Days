let divs = document.getElementsByTagName("div");
let imgs = document.getElementsByTagName("img");
let ps = document.getElementsByTagName("p");

function change(id) {
  removeClasses();
  divs[id].classList.remove("small-size");
  imgs[id].classList.remove("small-img");
  ps[id].classList.remove("no-show");
  divs[id].classList.add("large-size");
  imgs[id].classList.add("large-img");
  ps[id].classList.add("show");
}

function removeClasses() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList = "";
    imgs[i].classList = "";
    ps[i].classList = "";
  }
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.add("small-size");
    imgs[i].classList.add("small-img");
    ps[i].classList.add("no-show");
  }
}
