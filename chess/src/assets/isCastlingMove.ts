import { King } from "../chessPieces/king";
import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export function isCastlingMove(
  piece: ChessPiece,
  oldTile: Tile,
  newTile: Tile
) {
  if (!(piece instanceof King)) {
    return "no";
  }
  const movingDistance = newTile.x - oldTile.x;
  if (movingDistance == 2) {
    return "right";
  }
  if (movingDistance == -2) {
    return "left";
  }
  return "no";
}
