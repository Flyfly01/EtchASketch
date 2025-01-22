const gridSize = 600;
let squaresPerSide = 32;

const board = document.querySelector("#board");
board.style.width = board.style.height = `${gridSize}px`;

function changeBackgroundColour() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  const totalAmtOfSquares = squaresPerSide*squaresPerSide;
  const widthOrHeight = `${(gridSize / squaresPerSide)}px`;
  
  for (i=0; i < totalAmtOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    board.appendChild(gridCell);

    gridCell.addEventListener ("mouseover", changeBackgroundColour);
  }
}

createGridCells();

let message = document.querySelector("#message");

/*function getSize(){
  let input = Number(prompt("Please enter squares per side"));
  if (input === "") {
    message.textContent = "Please enter a number";
  } else if (input < 0 || input > 100) {
    message.textContent = "Please enter a number between 1 and 100";
  } else {
    message.textContent = "Now you can play";
    return input;
  }
}

let popupbtn = document.querySelector("#popup");
popupbtn.addEventListener("click", function() {
  squaresPerSide = getSize()
  createGridCells();
}) */

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