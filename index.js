const gridSize = 600;
let squaresPerSide = 32;

/*const board = document.querySelector("#board");
board.style.width = board.style.height = `${gridSize}px`;*/

const containers = document.querySelector(".containers");

function changeBackgroundColour() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  const oldBoard = document.querySelector("#board");
  if (oldBoard) {
    oldBoard.remove();
  }
  
  const newBoard = document.createElement("div");
  newBoard.id = "board";
  newBoard.style.width = newBoard.style.height = `${gridSize}`; 

  containers.appendChild(newBoard);
  
  const totalAmtOfSquares = squaresPerSide*squaresPerSide;
  const widthOrHeight = `${(gridSize / squaresPerSide)}px`;
  
  for (i=0; i < totalAmtOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    //board.appendChild(gridCell);
    newBoard.appendChild(gridCell);

    gridCell.addEventListener ("mouseover", changeBackgroundColour);
  }
}

createGridCells();

let message = document.querySelector("#message");

const resetButton = document.querySelector("#popup")
resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("Please choose grid dimensions"));

  if (userSize ==="") {
    message.textContent = "Please enter a number";
  } else if (userSize < 0 || userSize > 100) {
    message.textContent = "Please enter a number between 1 and 100";
  } else {
    message.textContent = "Now you can play";
  }

 

  squaresPerSide = userSize;
  createGridCells();
})