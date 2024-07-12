import { greet } from "./greeter";

greet("Eskild");

const canvas = document.querySelector("canvas");

if (canvas == null) {
  throw new Error("Canvas not found");
}

const ctx = canvas.getContext("2d");

if (ctx == null) {
  throw new Error("ctx not found");
}

// Setting dimensions of the canvas
canvas.height = 400;
canvas.width = 600;

ctx.fillStyle = "Green";
ctx.fillRect(0, 0, 600, 400);

console.log("Hi");
