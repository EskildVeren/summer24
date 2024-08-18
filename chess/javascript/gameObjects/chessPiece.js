"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPiece = void 0;
var ChessPiece = /** @class */ (function () {
    function ChessPiece(x, y, color, borderColor, boardSize, owner) {
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
        this.mark = function (ctx, mainColor, borderColor) {
            ctx.fillStyle = _this.color;
            var pieceSize = 70;
            var tileWidth = _this.boardSize / 8;
            var pieceBorderSize = 2;
            // Drawing the piece's border
            ctx.fillStyle = borderColor;
            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);
            // Drawing the piece itself
            ctx.fillStyle = mainColor;
            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
        this.boardSize = boardSize;
        this.movementRules = ["up", "down", "left", "right"];
        this.owner = owner;
    }
    return ChessPiece;
}());
exports.ChessPiece = ChessPiece;