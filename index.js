const gridSize = 600;
let squaresPerSide = 16;

const board = document.querySelector("#board");
board.style.width = board.style.height = `${gridSize}px`;

function changeBackgroundColour() {
  this.style.backgroundColor = "black";
}

function createGridCells () {
  const totalAmtOfSquares = squaresPerSide*squaresPerSide;
  const widthOrHeight = `${(gridSize / squaresPerSide) - 2}px`;
  
  for (i=0; i < totalAmtOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    board.appendChild(gridCell);

    gridCell.addEventListener ("mouseover", changeBackgroundColour);
  }
}

createGridCells();
