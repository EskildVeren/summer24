import { getRookMoves } from "../assets/movementRules";
import { movementRule } from "../assets/returnValidMoves";
import { Tile } from "./chessTile";

export class ChessPiece {
  x: number;
  y: number;
  boardSize: number;
  movementRules: movementRule[];
  owner: string;
  spritesheetName: string;
  spriteX: number;
  spriteY: number;
  validMoves: Tile[];
  tile: Tile;

  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    this.x = x;
    this.y = y;
    this.boardSize = boardSize;
    this.movementRules = getRookMoves();
    this.spritesheetName = spritesheetName;
    this.owner = owner;
    this.spriteX = 0;
    this.spriteY = 0;
    this.validMoves = [];
    this.tile = tile;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    const tileWidth = this.boardSize / 8;
    const pieceSize = tileWidth - 15;

    let img = document.getElementById(this.spritesheetName);

    if (img == null || !(img instanceof HTMLImageElement)) {
      throw new Error(`image ${this.spritesheetName} not found`);
    }

    // img.src = this.spritePath;
    ctx.drawImage(
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

  resetValidMoves = () => {
    this.validMoves = [];
  };
}
