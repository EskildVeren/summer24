import { ChessBoard } from "./gameObjects/chessBoard";
import { ChessPiece } from "./gameObjects/chessPiece";
import { Tile } from "./gameObjects/chessTile";

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
const board = new ChessBoard(800);
let clickedPiece: ChessPiece | null = null;
let clickedTile = null;
let markedTiles: Tile[] = [];
let markedPiece: ChessPiece | null;
const states = {
  base: "base",
  showPossibleMoves: "showPossibleMoves",
  movePiece: "movePiece",
};
const gameState = {
  state: states.base,
  numberOfMoves: 0,
  playerTurn: "white",
};

// Add eventlisteners to canvas
canvas.addEventListener("click", (e) => {
  main();
  // Redraws board on click
  // Finding where on the canvas the click happened
  const canvasRect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - canvasRect.left;
  const mouseY = e.clientY - canvasRect.top;

  // Using the cursor coordinates relative to the canvas in order to find what square was clicked
  const tileWidth = board.pixelSize / 8;
  const xCord = Math.floor(mouseX / tileWidth);
  const yCord = Math.floor(mouseY / tileWidth);

  clickedTile = board.tiles[xCord][yCord];
  clickedPiece = clickedTile.piece;

  if (clickedPiece != null && clickedPiece.owner == gameState.playerTurn) {
    markedPiece = clickedPiece;
    gameState.state = states.showPossibleMoves;
    markedTiles = board.getValidMoves(clickedPiece);
    markedTiles.forEach((tile: Tile) => {
      tile.mark(ctx, "blue");
    });
  } else if (markedTiles.includes(clickedTile) && markedPiece != null) {
    gameState.state = states.movePiece;
    markedTiles = [];
    board.movePiece(markedPiece, clickedTile);
    main();
    if (gameState.playerTurn == "white") {
      gameState.playerTurn = "black";
    } else {
      gameState.playerTurn = "white";
    }
  } else {
    gameState.state = states.base;
    markedTiles = [];
    markedPiece = null;
  }

  console.log(gameState.state);
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
