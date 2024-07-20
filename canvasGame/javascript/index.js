"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./gameObjects/player");
var canvas = document.querySelector("canvas");
var canvasWidth = 1400;
var canvasHeight = 800;
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
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// Initiating entities
var projectiles = [];
var player = new player_1.Player(ctx, 675, 700, 50, 50, 180, projectiles);
// Setting up userInput with keyboard
body.addEventListener("keydown", function (e) {
    player.setMovement(e.key);
});
body.addEventListener("keyup", function (e) {
    if ((e.key == "ArrowLeft" && player.ax == -1) ||
        (e.key == "ArrowRight" && player.ax == 1)) {
        player.setMovement("stopX");
    }
    else if ((e.key == "ArrowUp" && player.ay == -1) ||
        (e.key == "ArrowDown" && player.ay == 1)) {
        player.setMovement("stopY");
    }
});
var previousTimestamp = 0;
// Main function for updating game
var main = function (timeStamp) {
    // Setup for animationFrame
    var deltaTime = timeStamp - previousTimestamp;
    //console.log(deltaTime);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // Move entities
    player.move(deltaTime);
    projectiles.forEach(function (entity) {
        entity.move(deltaTime);
        entity.draw();
    });
    // Draw new screen
    player.draw();
    // setup for next animationFrame
    previousTimestamp = timeStamp;
    requestAnimationFrame(main);
};
// initiate animation
requestAnimationFrame(main);
