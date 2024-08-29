import { Pawn } from "../chessPieces/pawn";
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

  if (piece instanceof Pawn) {
    // Handling the movement of the pawn forwards
    let direction = piece.direction;
    let movesForward = 1;
    if (piece.firstMove == true) {
      movesForward = 2;
    }
    for (let i = 1; i <= movesForward; i++) {
      const x = startX;
      const y = startY + i * direction;

      if (y <= 7 && y >= 0) {
        const reachedTile = tiles[x][y];

        if (reachedTile.piece == null) {
          possibleTiles.push(reachedTile);
        }
      }
    }

    // Handling pawn attacks
    for (let i = -1; i <= 1; i += 2) {
      const x = startX + i;
      const y = startY + direction;

      if (x <= 7 && x >= 0) {
        const reachedTile = tiles[x][y];

        if (
          reachedTile.piece != null &&
          reachedTile.piece.owner != piece.owner
        ) {
          possibleTiles.push(reachedTile);
        }
      }
    }

    return possibleTiles;
  }

  while (repeating) {
    repeating = movementRule.repeating;
    multiplier++;
    const x = startX + movementRule.xModifier * multiplier;
    const y = startY + movementRule.yModifier * multiplier;

    if (multiplier > 100) {
      throw new Error("You have an infinite loop in returnValidMoves.ts");
    }

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
