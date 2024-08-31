import { getKingMoves } from "../assets/movementRules";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export class King extends ChessPiece {
  firstMove: boolean;
  canCastle: boolean;
  constructor(
    x: number,
    y: number,
    boardSize: number,
    owner: string,
    spritesheetName: string,
    tile: Tile
  ) {
    super(x, y, boardSize, owner, spritesheetName, tile);
    this.movementRules = getKingMoves();
    this.spriteX = 200;
    this.spriteY = 400;
    this.firstMove = true;
    this.canCastle = false;
  }
}
