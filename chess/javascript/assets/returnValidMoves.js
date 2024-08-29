"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidMoves = returnValidMoves;
var pawn_1 = require("../chessPieces/pawn");
function returnValidMoves(piece, movementRule, tiles) {
    var possibleTiles = [];
    var startX = piece.x;
    var startY = piece.y;
    var multiplier = 0;
    var repeating = true;
    if (piece instanceof pawn_1.Pawn) {
        // Handling the movement of the pawn forwards
        var direction = piece.direction;
        var movesForward = 1;
        if (piece.firstMove == true) {
            movesForward = 2;
        }
        for (var i = 1; i <= movesForward; i++) {
            var x = startX;
            var y = startY + i * direction;
            if (y <= 7 && y >= 0) {
                var reachedTile = tiles[x][y];
                if (reachedTile.piece == null) {
                    possibleTiles.push(reachedTile);
                }
            }
        }
        // Handling pawn attacks
        for (var i = -1; i <= 1; i += 2) {
            var x = startX + i;
            var y = startY + direction;
            if (x <= 7 && x >= 0) {
                var reachedTile = tiles[x][y];
                if (reachedTile.piece != null &&
                    reachedTile.piece.owner != piece.owner) {
                    possibleTiles.push(reachedTile);
                }
            }
        }
        return possibleTiles;
    }
    while (repeating) {
        repeating = movementRule.repeating;
        multiplier++;
        var x = startX + movementRule.xModifier * multiplier;
        var y = startY + movementRule.yModifier * multiplier;
        if (multiplier > 100) {
            throw new Error("You have an infinite loop in returnValidMoves.ts");
        }
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
