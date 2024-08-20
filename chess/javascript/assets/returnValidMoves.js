"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidMoves = returnValidMoves;
function returnValidMoves(piece, movementRule, tiles) {
    var possibleTiles = [];
    var startX = piece.x;
    var startY = piece.y;
    var multiplier = 0;
    var repeating = true;
    while (repeating) {
        repeating = movementRule.repeating;
        multiplier++;
        var x = startX + movementRule.xModifier * multiplier;
        var y = startY + movementRule.yModifier * multiplier;
        console.log(multiplier);
        if (multiplier > 100) {
            throw new Error("You have an infinite loop in returnValidMoves.ts");
        }
        console.log("x:", x, "y:", y);
        console.log(movementRule.repeating);
        if (y > 7 || y < 0 || x > 7 || x < 0) {
            return possibleTiles;
        }
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
    return possibleTiles;
}
