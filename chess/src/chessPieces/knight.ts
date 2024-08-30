import { getKnightMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export class Knight extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    super(x, y, boardSize, owner, spritesheetName, tile);
    this.movementRules = getKnightMoves();
    this.spriteX = 0;
    this.spriteY = 200;
  }
}
