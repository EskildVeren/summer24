import { getQueenMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export class Queen extends ChessPiece {
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    super(x, y, boardSize, owner, spritesheetName, tile);
    this.movementRules = getQueenMoves();
    this.spriteX = 0;
    this.spriteY = 400;
  }
}
