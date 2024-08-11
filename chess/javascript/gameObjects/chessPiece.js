"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessPiece = void 0;
var chessPiece = /** @class */ (function () {
    function chessPiece(x, y, color, borderColor, boardSize) {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            var pieceSize = 70;
            var tileWidth = _this.boardSize / 8;
            var pieceBorderSize = 2;
            // Drawing the piece's border
            ctx.fillStyle = _this.borderColor;
            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);
            // Drawing the piece itself
            ctx.fillStyle = _this.color;
            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
        this.boardSize = boardSize;
    }
    return chessPiece;
}());
exports.chessPiece = chessPiece;
