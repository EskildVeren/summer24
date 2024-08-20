"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidMoves = returnValidMoves;
function returnValidMoves(piece, movementRule, tiles) {
    var possibleTiles = [];
    var startX = piece.x - 1;
    var startY = piece.y - 1;
    if (movementRule.repeating === false) {
        var x = startX + movementRule.xModifier;
        var y = startY + movementRule.yModifier;
        if (y < 8 && y >= 0 && x < 8 && x >= 0) {
            possibleTiles.push(tiles[x][y]);
        }
    }
    else {
        for (var multiplier = 1; multiplier < 9 && multiplier > -1; multiplier++) {
            var x = startX + movementRule.xModifier * multiplier;
            var y = startY + movementRule.yModifier * multiplier;
            if (y > 7 || y < 0 || x > 7 || x < 0) {
                return possibleTiles;
            }
            console.log("x:", x, "y:", y);
            var reachedTile = tiles[x][y];
            if (reachedTile.piece == null) {
                possibleTiles.push(reachedTile);
            }
            else if (reachedTile.piece.owner != piece.owner) {
                possibleTiles.push(reachedTile);
                return possibleTiles;
            }
            else {
                return possibleTiles;
            }
        }
    }
    return possibleTiles;
}
