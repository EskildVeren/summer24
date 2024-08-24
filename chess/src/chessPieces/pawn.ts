import { getPawnMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Pawn extends ChessPiece {
  firstMove: boolean;
  direction: number;

  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number,
    owner: string
  ) {
    super(x, y, color, borderColor, boardSize, owner);
    this.spriteName = "pawn";
    this.firstMove = true;
    this.movementRules = getPawnMoves();

    if (y == 1) {
      this.direction = 1;
    } else if (y == 6) {
      this.direction = -1;
    } else {
      throw new Error(`Pawn constructed with y = ${y} is not supported`);
    }
  }
}
