import { getKingMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class King extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, boardSize, owner, spritesheetName);
    this.movementRules = getKingMoves();
    this.spriteX = 200;
    this.spriteY = 400;
  }
}
