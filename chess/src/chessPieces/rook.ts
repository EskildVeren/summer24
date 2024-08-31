import { getRookMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export class Rook extends ChessPiece {
  firstMove: boolean;
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    super(x, y, boardSize, owner, spritesheetName, tile);
    this.movementRules = getRookMoves();
    this.spriteX = 200;
    this.spriteY = 0;
    this.firstMove = true;
  }
}
