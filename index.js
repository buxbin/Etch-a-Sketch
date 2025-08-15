const sketchContainer = document.querySelector("#sketch-container");
const fragment = document.createDocumentFragment();

let userGridWidth = getUserWidth();
let userGridHeight = getUserHeight();

addDivs(fragment, userGridWidth, userGridHeight);
sketchContainer.appendChild(fragment);

const sketchBox = document.querySelectorAll(".sketchBox");
sketchBox.forEach((box) => {});

function addDivs(container, x, y) {
  for (let i = 1; i <= x * y; i++) {
    const div = document.createElement("div");
    div.classList.add("sketchBox");
    div.style.width = `calc(100% / ${userGridWidth})`;
    div.style.height = `calc(100% / ${userGridHeight})`;

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}
function getUserWidth() {
  let result = 0;
  do {
    uInput = prompt("What should the grid's width be?(max 100)");
    result = parseInt(uInput);
  } while (result > 100 || result < 1);

  return result;
}

function getUserHeight() {
  let result = 0;
  do {
    uInput = prompt("What should the grid's height be?(max 100)");
    result = parseInt(uInput);
  } while (result > 100 || result < 1);

  return result;
}
