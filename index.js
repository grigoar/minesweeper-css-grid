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
  console.log("this is the easy mode");
  let gridHtml = gridBuild(6);
  //   let gridCell = `<div>Cell${1}</div>`;
  minesweeperGrid.innerHTML = gridHtml;
});

btnMedium.addEventListener("click", (e) => {
  console.log("this is the medium mode");
  let gridHtml = gridBuild(12);
  minesweeperGrid.innerHTML = gridHtml;
});

btnHard.addEventListener("click", (e) => {
  console.log("this is the hard mode");
  let gridHtml = gridBuild(22);
  minesweeperGrid.innerHTML = gridHtml;
});

const gridBuild = (nrCells) => {
  let gridCell = `<div>Cell${1}</div>`;
  let gridCells = ``;
  for (let i = 0; i < nrCells; i++) {
    gridCells += gridCell;
  }
  console.log(gridCells);
  return gridCells;
};
