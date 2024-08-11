import { chessBoard } from "./gameObjects/chessBoard";

// Get assets from document and set properties
const canvas = document.querySelector("canvas");

if (canvas == null) {
  throw new Error("Canvas not found");
}

const ctx = canvas.getContext("2d");

if (ctx == null) {
  throw new Error("ctx not found");
}

const body = document.querySelector("body");

if (body == null) {
  throw new Error("Body not found");
}

// Setting dimensions of the canvas
const canvasWidth = 800;
const canvasHeight = 800;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Initiate game objects
const board = new chessBoard(800);
let clickedPiece = null;

// Add eventlisteners to canvas
canvas.addEventListener("click", (e) => {
  // Finding where on the canvas the click happened
  const canvasRect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - canvasRect.left;
  const mouseY = e.clientY - canvasRect.top;

  // ctx.fillStyle = "blue";
  // ctx.fillRect(mouseX - 20, mouseY - 20, 40, 40);

  // Using the cursor coordinates relative to the canvas in order to find what square was clicked
  const tileWidth = board.pixelSize / 8;
  const xCord = Math.floor(mouseX / tileWidth);
  const yCord = Math.floor(mouseY / tileWidth);
  clickedPiece = board.tiles[xCord][yCord].piece;
  if (clickedPiece != null) {
    clickedPiece.color = "red";
  }
  main();
});

// Main function for updating game
const main = () => {
  // Draw board
  board.drawTiles(ctx);
  //board.drawPieces(ctx);
  // Draw pieces
};

// initiate animation
main();
