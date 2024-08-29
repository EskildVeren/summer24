"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tileIsUnderAttack = tileIsUnderAttack;
var bishop_1 = require("../chessPieces/bishop");
var returnValidMoves_1 = require("./returnValidMoves");
function tileIsUnderAttack(tile, tiles, king) {
    var x = tile.x;
    var y = tile.y;
    //const;
    //const rook = new Rook(x, y);
    var piece = new bishop_1.Bishop(tile.x, tile.y, 800, "white", "spritesheet_white");
    var bishopTiles = [];
    piece.movementRules.forEach(function (movementRule) {
        bishopTiles.push.apply(bishopTiles, (0, returnValidMoves_1.returnValidMoves)(piece, movementRule, tiles));
    });
    bishopTiles.forEach(function (tile) {
        if (tile.piece instanceof bishop_1.Bishop) {
            return true;
        }
    });
    return false;
}
