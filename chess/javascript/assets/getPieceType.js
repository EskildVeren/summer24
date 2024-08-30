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
var getPieceType = function (x, y, tile, boardSize) {
    var owner = "white";
    var mainColor = colors_1.pieceWhite;
    var borderColor = colors_1.pieceBorderWhite;
    var spritesheetName = "spritesheet_white";
    if (y < 4) {
        owner = "black";
        mainColor = colors_1.pieceBlack;
        borderColor = colors_1.pieceBorderBlack;
        spritesheetName = "spritesheet_black";
    }
    if (y > 1 && y < 6) {
        return null;
    }
    if (y === 1 || y === 6) {
        return new pawn_1.Pawn(x, y, boardSize, owner, spritesheetName, tile);
    }
    if (x == 0 || x == 7) {
        return new rook_1.Rook(x, y, boardSize, owner, spritesheetName, tile);
    }
    if (x == 1 || x == 6) {
        return new knight_1.Knight(x, y, boardSize, owner, spritesheetName, tile);
    }
    if (x == 2 || x == 5) {
        return new bishop_1.Bishop(x, y, boardSize, owner, spritesheetName, tile);
    }
    if (x == 3) {
        return new queen_1.Queen(x, y, boardSize, owner, spritesheetName, tile);
    }
    if (x == 4) {
        return new king_1.King(x, y, boardSize, owner, spritesheetName, tile);
    }
    throw new Error("Chesspiece outside defined piece-space");
};
exports.getPieceType = getPieceType;
