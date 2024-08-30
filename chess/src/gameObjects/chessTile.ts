import { ChessPiece } from "./chessPiece";

export class Tile {
  x: number;
  y: number;
  size: number;
  color: string;
  piece: ChessPiece | null;
  isUnderAttack: Boolean;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.piece = null;
    this.isUnderAttack = false;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    if (this.piece != null) {
      this.piece.draw(ctx);
    }
  };

  mark = (ctx: CanvasRenderingContext2D, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    if (this.piece != null) {
      this.piece.draw(ctx);
    }
  };
}
