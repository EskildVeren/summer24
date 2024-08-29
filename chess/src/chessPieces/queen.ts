import { getQueenMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Queen extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, boardSize, owner, spritesheetName);
    this.movementRules = getQueenMoves();
    this.spriteX = 0;
    this.spriteY = 400;
  }
}
