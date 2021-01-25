let container = document.getElementById("elem-container");
let out = " ";

createBoard();

//Creacte Board
function createBoard(type = "Hourse") {
  let num = 0;
  for (let x = 0; x <= 8; x++) {
    for (let y = 0; y <= 8; y++) {
      if (num % 2 != 0) {
        out += `<div class="elem dark-field" data-x="${x}" data-y="${y}" onclick="${type}(this)">${x}:${y}</div>`;
      } else {
        out += `<div class="elem white-field" data-x="${x}" data-y="${y}" onclick="${type}(this)">${x}:${y}</div>`;
      }
      num++;
    }
  }

  document.querySelector("#e").innerHTML = out;
  out = " ";
}

//------Buttons------
function HourseButton() {
  createBoard("Hourse");
}
function BishopButton() {
  createBoard("Bishop");
}

function RookButton() {
  createBoard("Rook");
}

// Function for house
function Hourse(elem) {
  toDefaultF();

  let x = elem.dataset.x;
  let y = elem.dataset.y;

  if (+x + 2 <= 8 && +y + 1 <= 8) {
    document
      .querySelector(`.elem[data-x="${+x + 2}"][data-y="${+y + 1}"]`)
      .classList.add("done");
  }
  if (+x + 2 <= 8 && +y - 1 >= 0) {
    document
      .querySelector(`.elem[data-x="${+x + 2}"][data-y="${+y - 1}"]`)
      .classList.add("done");
  }
  if (+x - 2 >= 0 && +y + 1 <= 8) {
    document
      .querySelector(`.elem[data-x="${+x - 2}"][data-y="${+y + 1}"]`)
      .classList.add("done");
  }
  if (+x - 2 >= 0 && +y - 1 >= 0) {
    document
      .querySelector(`.elem[data-x="${+x - 2}"][data-y="${+y - 1}"]`)
      .classList.add("done");
  }

  if (+x - 1 >= 0 && +y - 2 >= 0) {
    document
      .querySelector(`.elem[data-x="${+x - 1}"][data-y="${+y - 2}"]`)
      .classList.add("done");
  }
  if (+x - 1 >= 0 && +y + 2 <= 8) {
    document
      .querySelector(`.elem[data-x="${+x - 1}"][data-y="${+y + 2}"]`)
      .classList.add("done");
  }
  if (+x + 1 <= 8 && +y + 2 <= 8) {
    document
      .querySelector(`.elem[data-x="${+x + 1}"][data-y="${+y + 2}"]`)
      .classList.add("done");
  }
  if (+x + 1 <= 8 && +y - 2 >= 0) {
    document
      .querySelector(`.elem[data-x="${+x + 1}"][data-y="${+y - 2}"]`)
      .classList.add("done");
  }

  elem.classList.add("highlighted-hourse");
}
function Bishop(elem) {
  toDefaultF();

  let x = elem.dataset.x;
  let y = elem.dataset.y;

  for (let i = 0; i <= 8; i++) {
    if (+x + i <= 8 && +y + i <= 8) {
      document
        .querySelector(`.elem[data-x="${+x + i}"][data-y="${+y + i}"]`)
        .classList.add("done");
    }
    if (+x - i >= 0 && +y + i <= 8) {
      document
        .querySelector(`.elem[data-x="${+x - i}"][data-y="${+y + i}"]`)
        .classList.add("done");
    }
    if (+x - i >= 0 && +y - i >= 0) {
      document
        .querySelector(`.elem[data-x="${+x - i}"][data-y="${+y - i}"]`)
        .classList.add("done");
    }
    if (+x + i <= 8 && +y - i >= 0) {
      document
        .querySelector(`.elem[data-x="${+x + i}"][data-y="${+y - i}"]`)
        .classList.add("done");
    }
  }
  elem.classList.add("highlighted-elephant");
}
function Rook(elem) {
  toDefaultF();

  let x = elem.dataset.x;
  let y = elem.dataset.y;

  for (let i = 0; i <= 8; i++) {
    if (+x + i <= 8) {
      document
        .querySelector(`.elem[data-x="${+x + i}"][data-y="${+y}"]`)
        .classList.add("done");
    }
    if (+x - i >= 0) {
      document
        .querySelector(`.elem[data-x="${+x - i}"][data-y="${+y}"]`)
        .classList.add("done");
    }
    if (+y + i <= 8) {
      document
        .querySelector(`.elem[data-x="${+x}"][data-y="${+y + i}"]`)
        .classList.add("done");
    }
    if (+y - i >= 0) {
      document
        .querySelector(`.elem[data-x="${+x}"][data-y="${+y - i}"]`)
        .classList.add("done");
    }
  }
  elem.classList.add("highlighted-rook");
}
function toDefaultF() {
  document.querySelectorAll(".elem").forEach(function (element) {
    element.classList.remove("done");
    element.classList.remove("highlighted-hourse");
    element.classList.remove("highlighted-elephant");
    element.classList.remove("highlighted-rook");
  });
}
function toDeleteF() {
  document.querySelector("#e").innerHTML = " ";
}
