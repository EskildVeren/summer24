import { getPawnMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Pawn extends ChessPiece {
  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number,
    owner: string
  ) {
    super(x, y, color, borderColor, boardSize, owner);
    this.movementRules = getPawnMoves();
  }
}
