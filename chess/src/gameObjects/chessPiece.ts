import { getRookMoves } from "../assets/movementRules";
import { movementRule } from "../assets/returnValidMoves";

export class ChessPiece {
  x: number;
  y: number;
  color: string;
  borderColor: string;
  boardSize: number;
  movementRules: movementRule[];
  owner: string;
  spritesheetName: string;
  spriteX: number;
  spriteY: number;

  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.borderColor = borderColor;
    this.boardSize = boardSize;
    this.movementRules = getRookMoves();
    this.spritesheetName = spritesheetName;
    this.owner = owner;
    this.spriteX = 0;
    this.spriteY = 0;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this.color;
    const tileWidth = this.boardSize / 8;
    const pieceSize = tileWidth - 15;

    let img = document.getElementById(this.spritesheetName);

    if (img == null) {
      throw new Error(`image ${this.spritesheetName} not found`);
    }

    // img.src = this.spritePath;
    ctx.drawImage(
      // @ts-ignore
      img,
      this.spriteX,
      this.spriteY,
      200,
      200,
      tileWidth * this.x + (tileWidth - pieceSize) / 2,
      tileWidth * this.y + (tileWidth - pieceSize) / 2,
      pieceSize,
      pieceSize
    );
  };

  mark = (
    ctx: CanvasRenderingContext2D,
    mainColor: string,
    borderColor: string
  ) => {
    ctx.fillStyle = this.color;
    const pieceSize = 70;
    const tileWidth = this.boardSize / 8;
    const pieceBorderSize = 2;

    // Drawing the piece's border
    ctx.fillStyle = borderColor;
    ctx.fillRect(
      tileWidth * this.x + (tileWidth - pieceSize) / 2 - pieceBorderSize,
      tileWidth * this.y + (tileWidth - pieceSize) / 2 - pieceBorderSize,
      pieceSize + pieceBorderSize * 2,
      pieceSize + pieceBorderSize * 2
    );

    // Drawing the piece itself
    ctx.fillStyle = mainColor;
    ctx.fillRect(
      tileWidth * this.x + (tileWidth - pieceSize) / 2,
      tileWidth * this.y + (tileWidth - pieceSize) / 2,
      pieceSize,
      pieceSize
    );
  };
}
