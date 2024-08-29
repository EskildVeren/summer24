import { getKnightMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Knight extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, boardSize, owner, spritesheetName);
    this.movementRules = getKnightMoves();
    this.spriteX = 0;
    this.spriteY = 200;
  }
}
