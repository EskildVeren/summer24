import { getBishopMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export class Bishop extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    super(x, y, boardSize, owner, spritesheetName, tile);
    this.movementRules = getBishopMoves();
    this.spriteX = 200;
    this.spriteY = 200;
  }
}
