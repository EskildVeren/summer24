"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPieceType = void 0;
var bishop_1 = require("../chessPieces/bishop");
var king_1 = require("../chessPieces/king");
var knight_1 = require("../chessPieces/knight");
var pawn_1 = require("../chessPieces/pawn");
var queen_1 = require("../chessPieces/queen");
var rook_1 = require("../chessPieces/rook");
var colors_1 = require("./colors");
var getPieceType = function (x, y, boardSize) {
    var owner = "white";
    var mainColor = colors_1.pieceWhite;
    var borderColor = colors_1.pieceBorderWhite;
    if (y < 4) {
        owner = "black";
        mainColor = colors_1.pieceBlack;
        borderColor = colors_1.pieceBorderBlack;
    }
    if (y > 1 && y < 6) {
        return null;
    }
    if (y === 1 || y === 6) {
        return new pawn_1.Pawn(x, y, mainColor, borderColor, boardSize, owner);
    }
    if (x == 0 || x == 7) {
        return new rook_1.Rook(x, y, mainColor, borderColor, boardSize, owner);
    }
    if (x == 1 || x == 6) {
        return new knight_1.Knight(x, y, mainColor, borderColor, boardSize, owner);
    }
    if (x == 2 || x == 5) {
        return new bishop_1.Bishop(x, y, mainColor, borderColor, boardSize, owner);
    }
    if (x == 3) {
        return new queen_1.Queen(x, y, mainColor, borderColor, boardSize, owner);
    }
    if (x == 4) {
        return new king_1.King(x, y, mainColor, borderColor, boardSize, owner);
    }
    throw new Error("Chesspiece outside defined piece-space");
};
exports.getPieceType = getPieceType;
