"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessBoard = void 0;
var chessPiece_1 = require("./chessPiece");
var chessTile_1 = require("./chessTile");
var chessBoard = /** @class */ (function () {
    function chessBoard(pixelSize) {
        var _this = this;
        this.drawTiles = function (ctx) {
            for (var i = 0; i < _this.tiles.length; i++) {
                for (var tileIndex = 0; tileIndex < _this.tiles[i].length; tileIndex++) {
                    _this.tiles[i][tileIndex].draw(ctx);
                }
            }
        };
        this.drawPieces = function (ctx) {
            _this.activePieces.forEach(function (chessPiece) {
                chessPiece.draw(ctx);
            });
        };
        this.pixelSize = pixelSize;
        this.tiles = [];
        this.activePieces = [];
        this.heaven = [];
        // Add tiles to the chessboards
        for (var x = 1; x <= 8; x++) {
            var tileColumn = [];
            for (var y = 1; y <= 8; y++) {
                // Setting the tiles color
                var color = "white";
                if (x % 2 === y % 2) {
                    color = "black";
                }
                tileColumn.push(new chessTile_1.Tile(x, y, this.pixelSize / 8, color));
                if (y <= 2 || y >= 7) {
                    this.activePieces.push(new chessPiece_1.chessPiece(x, y, "purple", this.pixelSize));
                }
            }
            this.tiles.push(tileColumn);
        }
    }
    return chessBoard;
}());
exports.chessBoard = chessBoard;
