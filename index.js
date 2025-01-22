const gridSize = 600;
let rows = 16;
let columns = 16;

const board = document.querySelector("#board");
board.style.width = `${gridSize}px`;
board.style.height = `${gridSize}px`;

function createGridCells () {
  for (i=0; i < rows*columns; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${(gridSize / columns) - 2}px`;
    gridCell.style.height = `${(gridSize / rows) - 2}px`;
    gridCell.classList.add("cell");

    board.appendChild(gridCell);
  }
}

createGridCells();
