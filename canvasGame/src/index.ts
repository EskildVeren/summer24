import { Entity } from "./gameObjects/entity";
import { Player } from "./gameObjects/player";

const canvas = document.querySelector("canvas");
const canvasWidth = 1400;
const canvasHeight = 800;

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
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Initiating entities
const projectiles: Entity[] = [];
const player = new Player(ctx, 675, 700, 50, 50, 180, projectiles);

// Setting up userInput with keyboard
body.addEventListener("keydown", (e) => {
  player.setMovement(e.key);
});

body.addEventListener("keyup", (e) => {
  if (
    (e.key == "ArrowLeft" && player.ax == -1) ||
    (e.key == "ArrowRight" && player.ax == 1)
  ) {
    player.setMovement("stopX");
  } else if (
    (e.key == "ArrowUp" && player.ay == -1) ||
    (e.key == "ArrowDown" && player.ay == 1)
  ) {
    player.setMovement("stopY");
  }
});

let previousTimestamp = 0;

// Main function for updating game
const main = (timeStamp: number) => {
  // Setup for animationFrame
  const deltaTime = timeStamp - previousTimestamp;
  //console.log(deltaTime);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // Move entities
  player.move(deltaTime);
  projectiles.forEach((entity) => {
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
