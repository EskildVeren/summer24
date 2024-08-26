"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPiece = void 0;
var movementRules_1 = require("../assets/movementRules");
var ChessPiece = /** @class */ (function () {
    function ChessPiece(x, y, color, borderColor, boardSize, owner, spritesheetName) {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            var tileWidth = _this.boardSize / 8;
            var pieceSize = tileWidth - 15;
            var img = document.getElementById(_this.spritesheetName);
            if (img == null) {
                throw new Error("image ".concat(_this.spritesheetName, " not found"));
            }
            // img.src = this.spritePath;
            ctx.drawImage(
            // @ts-ignore
            img, _this.spriteX, _this.spriteY, 200, 200, tileWidth * _this.x + (tileWidth - pieceSize) / 2, tileWidth * _this.y + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);
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
        this.spritesheetName = spritesheetName;
        this.owner = owner;
        this.spriteX = 0;
        this.spriteY = 0;
    }
    return ChessPiece;
}());
exports.ChessPiece = ChessPiece;
