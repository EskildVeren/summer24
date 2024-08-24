"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPiece = void 0;
var movementRules_1 = require("../assets/movementRules");
var ChessPiece = /** @class */ (function () {
    function ChessPiece(x, y, color, borderColor, boardSize, owner) {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            var pieceSize = 70;
            var tileWidth = _this.boardSize / 8;
            var pieceBorderSize = 2;
            /*
            // Drawing the piece's border
            ctx.fillStyle = this.borderColor;
            ctx.fillRect(
              tileWidth * this.x + (tileWidth - pieceSize) / 2 - pieceBorderSize,
              tileWidth * this.y + (tileWidth - pieceSize) / 2 - pieceBorderSize,
              pieceSize + pieceBorderSize * 2,
              pieceSize + pieceBorderSize * 2
            );
        
            // Drawing the piece itself
            ctx.fillStyle = this.color;
            ctx.fillRect(
              tileWidth * this.x + (tileWidth - pieceSize) / 2,
              tileWidth * this.y + (tileWidth - pieceSize) / 2,
              pieceSize,
              pieceSize
            );
        
            */
            var img = document.getElementById(_this.spriteName);
            if (img == null) {
                throw new Error("image ".concat(_this.spriteName, " not found"));
            }
            // img.src = this.spritePath;
            ctx.drawImage(
            // @ts-ignore
            img, tileWidth * _this.x + (tileWidth - pieceSize) / 2, tileWidth * _this.y + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
        };
        this.mark = function (ctx, mainColor, borderColor) {
            ctx.fillStyle = _this.color;
            var pieceSize = 70;
            var tileWidth = _this.boardSize / 8;
            var pieceBorderSize = 2;
            // Drawing the piece's border
            ctx.fillStyle = borderColor;
            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * _this.y + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);
            // Drawing the piece itself
            ctx.fillStyle = mainColor;
            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2, tileWidth * _this.y + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
        this.boardSize = boardSize;
        this.movementRules = (0, movementRules_1.getRookMoves)();
        this.spriteName = "rook";
        this.owner = owner;
    }
    return ChessPiece;
}());
exports.ChessPiece = ChessPiece;
