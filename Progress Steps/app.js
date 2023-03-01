let state;

function next() {
  checkStatus();
  switch (state) {
    case 0:
      document
        .getElementsByClassName("progress")[0]
        .classList.add("active-background");
      document
        .getElementsByClassName("steps")[1]
        .classList.add("active-border");
      document.getElementById("prev").classList.add("active-button");
      break;
    case 1:
      document
        .getElementsByClassName("progress")[1]
        .classList.add("active-background");
      document
        .getElementsByClassName("steps")[2]
        .classList.add("active-border");
      break;
    case 2:
      document
        .getElementsByClassName("progress")[2]
        .classList.add("active-background");
      document
        .getElementsByClassName("steps")[3]
        .classList.add("active-border");
      document.getElementById("next").classList.remove("active-button");
      break;
  }
}

function previous() {
  console.log(state);
  switch (state) {
    case 0:
      document
        .getElementsByClassName("progress")[0]
        .classList.remove("active-background");
      document
        .getElementsByClassName("steps")[1]
        .classList.remove("active-border");
      state--;
      document.getElementById("prev").classList.remove("active-button");
      document.getElementById("next").classList.add("active-button");
      break;
    case 1:
      document
        .getElementsByClassName("progress")[1]
        .classList.remove("active-background");
      document
        .getElementsByClassName("steps")[2]
        .classList.remove("active-border");
      state--;
      break;
    case 2:
      document
        .getElementsByClassName("progress")[2]
        .classList.remove("active-background");
      document
        .getElementsByClassName("steps")[3]
        .classList.remove("active-border");
      state--;
      break;
    default:
      break;
  }
}

const checkStatus = () => {
  for (let i = 2; i > -1; i--) {
    if (
      document
        .getElementsByClassName("progress")
        [i].classList.contains("active-background")
    ) {
      state = i + 1;
      break;
    } else {
      state = 0;
    }
  }
};
