import { chessPiece } from "./chessPiece";

export class Tile {
  x: number;
  y: number;
  size: number;
  color: string;
  piece: chessPiece | null;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.piece = null;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      (this.x - 1) * this.size,
      (this.y - 1) * this.size,
      this.size,
      this.size
    );
  };
}
