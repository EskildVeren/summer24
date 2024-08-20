import { ChessPiece } from "../gameObjects/chessPiece";
import { Tile } from "../gameObjects/chessTile";

export type movementRule = {
  xModifier: number;
  yModifier: number;
  repeating: boolean;
};

export function returnValidMoves(
  piece: ChessPiece,
  movementRule: movementRule,
  tiles: Tile[][]
) {
  const possibleTiles: Tile[] = [];
  const startX = piece.x - 1;
  const startY = piece.y - 1;

  if (movementRule.repeating === false) {
    const x = startX + movementRule.xModifier;
    const y = startY + movementRule.yModifier;
    if (y < 8 && y >= 0 && x < 8 && x >= 0) {
      possibleTiles.push(tiles[x][y]);
    }
  } else {
    for (let multiplier = 1; multiplier < 9 && multiplier > -1; multiplier++) {
      const x = startX + movementRule.xModifier * multiplier;
      const y = startY + movementRule.yModifier * multiplier;

      if (y > 7 || y < 0 || x > 7 || x < 0) {
        return possibleTiles;
      }
      console.log("x:", x, "y:", y);

      const reachedTile = tiles[x][y];

      if (reachedTile.piece == null) {
        possibleTiles.push(reachedTile);
      } else if (reachedTile.piece.owner != piece.owner) {
        possibleTiles.push(reachedTile);
        return possibleTiles;
      } else {
        return possibleTiles;
      }
    }
  }

  return possibleTiles;
}
