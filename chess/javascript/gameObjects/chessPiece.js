"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessPiece = void 0;
var chessPiece = /** @class */ (function () {
    function chessPiece(x, y, color, boardSize) {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            var pieceSize = 70;
            var tileWidth = _this.boardSize / 8;
            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.boardSize = boardSize;
    }
    return chessPiece;
}());
exports.chessPiece = chessPiece;
