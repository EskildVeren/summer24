import { getBishopMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";

export class Bishop extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string
  ) {
    super(x, y, boardSize, owner, spritesheetName);
    this.movementRules = getBishopMoves();
    this.spriteX = 200;
    this.spriteY = 200;
  }
}
