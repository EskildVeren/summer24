"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCastlingMove = isCastlingMove;
var king_1 = require("../chessPieces/king");
function isCastlingMove(piece, oldTile, newTile) {
    if (!(piece instanceof king_1.King)) {
        return "no";
    }
    var movingDistance = newTile.x - oldTile.x;
    if (movingDistance == 2) {
        return "right";
    }
    if (movingDistance == -2) {
        return "left";
    }
    return "no";
}
