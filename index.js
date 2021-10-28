// import main from "./main";

const h1 = document.querySelector(".head-text");
const btnEasy = document.getElementById("easy");
const btnMedium = document.getElementById("medium");
const btnHard = document.getElementById("hard");

const minesweeperGrid = document.getElementById("minesweeper");

h1.addEventListener("click", (e) => {
  console.log(e.target);
  // document.body.style = "background-color: orangered";
});

btnEasy.addEventListener("click", (e) => {
  minesweeperGrid.innerHTML = gridBuild(5);
  activeClass(e);
});

btnMedium.addEventListener("click", (e) => {
  let gridHtml = gridBuild(8);
  minesweeperGrid.innerHTML = gridBuild(8);
  activeClass(e);
});

btnHard.addEventListener("click", (e) => {
  let gridHtml = gridBuild(10);
  minesweeperGrid.innerHTML = gridBuild(10);
  activeClass(e);
});

const gridBuild = (colCount) => {
  let gridCell = `<button>&nbsp</button>`;
  let gridCells = ``;

  const styles = {
    "grid-template-columns": `repeat(${colCount}, 1fr)`,
    "grid-template-rows": `repeat(${colCount}, 1fr)`,
    height: `${colCount * 40}px`,
    width: `${colCount * 40}px`,
  };
  // minesweeperGrid.style.gridTemplateColumns = "1fr ".repeat(colCount);
  // minesweeperGrid.style.gridTemplateRows = "1fr ".repeat(colCount);
  Object.assign(minesweeperGrid.style, styles);
  for (let i = 0; i < colCount * colCount; i++) {
    gridCells += gridCell;
  }
  // console.log(gridCells);
  return gridCells;
};

const activeClass = (e) => {
  let buttons = document.querySelector(".active");
  if (buttons !== null) {
    buttons.classList.remove("active");
  }
  e.target.className += " active";
};
