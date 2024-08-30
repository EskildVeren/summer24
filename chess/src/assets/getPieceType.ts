import { Bishop } from "../chessPieces/bishop";
import { King } from "../chessPieces/king";
import { Knight } from "../chessPieces/knight";
import { Pawn } from "../chessPieces/pawn";
import { Queen } from "../chessPieces/queen";
import { Rook } from "../chessPieces/rook";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";
import {
  pieceBlack,
  pieceBorderBlack,
  pieceBorderWhite,
  pieceWhite,
} from "./colors";

export const getPieceType = (
  x: number,
  y: number,
  tile: Tile,
  boardSize: number
) => {
  let owner = "white";
  let mainColor = pieceWhite;
  let borderColor = pieceBorderWhite;
  let spritesheetName = "spritesheet_white";
  if (y < 4) {
    owner = "black";
    mainColor = pieceBlack;
    borderColor = pieceBorderBlack;
    spritesheetName = "spritesheet_black";
  }
  if (y > 1 && y < 6) {
    return null;
  }
  if (y === 1 || y === 6) {
    return new Pawn(x, y, boardSize, owner, spritesheetName, tile);
  }
  if (x == 0 || x == 7) {
    return new Rook(x, y, boardSize, owner, spritesheetName, tile);
  }
  if (x == 1 || x == 6) {
    return new Knight(x, y, boardSize, owner, spritesheetName, tile);
  }
  if (x == 2 || x == 5) {
    return new Bishop(x, y, boardSize, owner, spritesheetName, tile);
  }
  if (x == 3) {
    return new Queen(x, y, boardSize, owner, spritesheetName, tile);
  }
  if (x == 4) {
    return new King(x, y, boardSize, owner, spritesheetName, tile);
  }
  throw new Error("Chesspiece outside defined piece-space");
};
