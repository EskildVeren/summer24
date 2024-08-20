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
  const startX = piece.x;
  const startY = piece.y;
  let multiplier = 0;
  let repeating = true;

  while (repeating) {
    repeating = movementRule.repeating;
    multiplier++;
    const x = startX + movementRule.xModifier * multiplier;
    const y = startY + movementRule.yModifier * multiplier;
    console.log(multiplier);

    if (multiplier > 100) {
      throw new Error("You have an infinite loop in returnValidMoves.ts");
    }
    console.log("x:", x, "y:", y);
    console.log(movementRule.repeating);

    if (y > 7 || y < 0 || x > 7 || x < 0) {
      return possibleTiles;
    }
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
  return possibleTiles;
}
