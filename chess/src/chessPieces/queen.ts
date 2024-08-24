import { getQueenMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Queen extends ChessPiece {
  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number,
    owner: string
  ) {
    super(x, y, color, borderColor, boardSize, owner);
    this.movementRules = getQueenMoves();
    this.spriteName = "queen";
  }
}
