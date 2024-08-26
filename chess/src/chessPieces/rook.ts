import { getRookMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Rook extends ChessPiece {
  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, color, borderColor, boardSize, owner, spritesheetName);
    this.movementRules = getRookMoves();
    this.spriteX = 200;
    this.spriteY = 0;
  }
}
