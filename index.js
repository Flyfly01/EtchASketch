const gridSize = 600;
let squaresPerSide = 32;
let currentColour = "black";


const containers = document.querySelector(".containers");


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
  
  for (let i=0; i < totalAmtOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    newBoard.appendChild(gridCell);

    gridCell.addEventListener ("mouseover", changeBackgroundColour);
  }
}

createGridCells();

function changeBackgroundColour () {
  console.log("Current colour:", currentColour);
  if (currentColour === "black") {
    this.style.backgroundColor = "black";
  } else if (currentColour === "random") {
    const randomColour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    console.log("Random Colour Generated:", randomColour)
    this.style.backgroundColor = randomColour;
  }
}

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





