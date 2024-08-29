import { getPawnMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Pawn extends ChessPiece {
  firstMove: boolean;
  direction: number;

  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, boardSize, owner, spritesheetName);
    this.firstMove = true;
    this.movementRules = getPawnMoves();
    this.spriteX = 0;
    this.spriteY = 0;

    if (y == 1) {
      this.direction = 1;
    } else if (y == 6) {
      this.direction = -1;
    } else {
      throw new Error(`Pawn constructed with y = ${y} is not supported`);
    }
  }
}
