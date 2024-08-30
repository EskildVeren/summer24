"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chessBoard_1 = require("./gameObjects/chessBoard");
// Get assets from document and set properties
var canvas = document.querySelector("canvas");
if (canvas == null) {
    throw new Error("Canvas not found");
}
var ctx = canvas.getContext("2d");
if (ctx == null) {
    throw new Error("ctx not found");
}
var body = document.querySelector("body");
if (body == null) {
    throw new Error("Body not found");
}
// Setting dimensions of the canvas
var canvasWidth = 800;
var canvasHeight = 800;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// Initiate game objects
var board = new chessBoard_1.ChessBoard(800);
board.calculateValidMoves();
var clickedPiece = null;
var clickedTile = null;
var markedPiece;
var states = {
    base: "base",
    showPossibleMoves: "showPossibleMoves",
    movePiece: "movePiece",
};
var gameState = {
    state: states.base,
    numberOfMoves: 0,
    playerTurn: "white",
};
// Add eventlisteners to canvas
canvas.addEventListener("click", function (e) {
    main();
    // Redraws board on click
    // Finding where on the canvas the click happened
    var canvasRect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - canvasRect.left;
    var mouseY = e.clientY - canvasRect.top;
    // Using the cursor coordinates relative to the canvas in order to find what square was clicked
    var tileWidth = board.pixelSize / 8;
    var xCord = Math.floor(mouseX / tileWidth);
    var yCord = Math.floor(mouseY / tileWidth);
    clickedTile = board.tiles[xCord][yCord];
    clickedPiece = clickedTile.piece;
    // If a tile containing a piece that can move is clicked
    if (clickedPiece != null && clickedPiece.owner == gameState.playerTurn) {
        markedPiece = clickedPiece;
        gameState.state = states.showPossibleMoves;
        clickedPiece.validMoves.forEach(function (tile) {
            tile.mark(ctx, "blue");
        });
        // Else if a valid move is clicked
    }
    else if (markedPiece != null &&
        //clickedPiece != null &&
        markedPiece.validMoves.includes(clickedTile)) {
        gameState.state = states.movePiece;
        var pieceMoved = board.movePiece(markedPiece, clickedTile);
        //console.log(board.movePiece(markedPiece, clickedTile));
        //board.calculateValidMoves(ctx);
        console.log(pieceMoved);
        if (pieceMoved === true) {
            main();
            if (gameState.playerTurn == "white") {
                gameState.playerTurn = "black";
            }
            else {
                gameState.playerTurn = "white";
            }
        }
    }
    // If no valid move was chosen
    else {
        gameState.state = states.base;
        markedPiece = null;
    }
    console.log(gameState.state);
});
// Main function for updating game
var main = function () {
    // Draw board
    board.drawTiles(ctx);
    //board.drawPieces(ctx);
    // Draw pieces
};
// initiate animation
main();
