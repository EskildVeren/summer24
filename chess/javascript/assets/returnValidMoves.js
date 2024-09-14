"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidMoves = returnValidMoves;
exports.checkForValidCastlingMove = checkForValidCastlingMove;
var pawn_1 = require("../chessPieces/pawn");
var rook_1 = require("../chessPieces/rook");
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
function checkForValidCastlingMove(king, tiles) {
    king.canCastle = false;
    if (king.firstMove === false) {
        return;
    }
    var y = king.y;
    var x0Rook = tiles[0][y].piece;
    var x7Rook = tiles[7][y].piece;
    if (isValidRook(x0Rook) && allTheseTilesAreValid(tiles, 1, 3, y)) {
        console.log("king can caste left");
        king.validMoves.push(tiles[2][y]);
        king.canCastle = true;
    }
    if (isValidRook(x7Rook) && allTheseTilesAreValid(tiles, 5, 6, y)) {
        console.log("king can caste right");
        king.validMoves.push(tiles[6][y]);
        king.canCastle = true;
    }
    console.log("Castlecheck completed");
}
function isValidRook(piece) {
    if (piece instanceof rook_1.Rook && piece.firstMove == true) {
        return true;
    }
    return false;
}
function allTheseTilesAreValid(tiles, startX, endX, y) {
    for (var x = startX; x <= endX; x++) {
        var tile = tiles[x][y];
        if (tile.isUnderAttack || tile.piece != null) {
            return false;
        }
    }
    return true;
}
