"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
var colors_1 = require("../assets/colors");
var chessPiece_1 = require("./chessPiece");
var chessTile_1 = require("./chessTile");
var ChessBoard = /** @class */ (function () {
    function ChessBoard(pixelSize) {
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
        this.getValidMoves = function (piece) {
            var possibleTiles = [];
            var x = piece.x - 1;
            var y = piece.y - 1;
            var movementRules = piece.movementRules;
            movementRules.forEach(function (movementStyle) {
                switch (movementStyle.toLowerCase()) {
                    case "rook":
                        _this.tiles.forEach(function (column) {
                            possibleTiles.push(column[y]);
                        });
                        _this.tiles[x].forEach(function (tile) {
                            possibleTiles.push(tile);
                        });
                        break;
                    case "up":
                        for (var i = y - 1; i >= 0; i--) {
                            var reachedTile = _this.tiles[x][i];
                            if (reachedTile.piece == null) {
                                possibleTiles.push(reachedTile);
                            }
                            else if (reachedTile.piece.owner != piece.owner) {
                                possibleTiles.push(reachedTile);
                                break;
                            }
                            else {
                                break;
                            }
                        }
                        break;
                    case "down":
                        for (var i = y + 1; i < 7; i++) {
                            var reachedTile = _this.tiles[x][i];
                            if (reachedTile.piece == null) {
                                possibleTiles.push(reachedTile);
                            }
                            else if (reachedTile.piece.owner != piece.owner) {
                                possibleTiles.push(reachedTile);
                                break;
                            }
                            else {
                                break;
                            }
                        }
                        break;
                    case "left":
                        for (var i = x - 1; i >= 0; i--) {
                            var reachedTile = _this.tiles[i][y];
                            if (reachedTile.piece == null) {
                                possibleTiles.push(reachedTile);
                            }
                            else if (reachedTile.piece.owner != piece.owner) {
                                possibleTiles.push(reachedTile);
                                break;
                            }
                            else {
                                break;
                            }
                        }
                        break;
                    case "right":
                        for (var i = x + 1; i < 7; i++) {
                            var reachedTile = _this.tiles[i][y];
                            if (reachedTile.piece == null) {
                                possibleTiles.push(reachedTile);
                            }
                            else if (reachedTile.piece.owner != piece.owner) {
                                possibleTiles.push(reachedTile);
                                break;
                            }
                            else {
                                break;
                            }
                        }
                        break;
                    default:
                        break;
                }
            });
            return possibleTiles;
        };
        this.movePiece = function (piece, newTile) {
            console.log(piece.x);
            var oldTile = _this.tiles[piece.x - 1][piece.y - 1];
            oldTile.piece = null;
            newTile.piece = piece;
            piece.x = newTile.x;
            piece.y = newTile.y;
            // console.log("New piece position:", piece);
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
                var color = colors_1.tileWhite;
                if (x % 2 === y % 2) {
                    color = colors_1.tileBlack;
                }
                var tile = new chessTile_1.Tile(x, y, this.pixelSize / 8, color);
                tileColumn.push(tile);
                if (y <= 2) {
                    var piece = new chessPiece_1.ChessPiece(x, y, colors_1.pieceBlack, colors_1.pieceBorderBlack, this.pixelSize, "black");
                    this.activePieces.push(piece);
                    tile.piece = piece;
                }
                if (y >= 7) {
                    var piece = new chessPiece_1.ChessPiece(x, y, colors_1.pieceWhite, colors_1.pieceBorderWhite, this.pixelSize, "white");
                    this.activePieces.push(piece);
                    tile.piece = piece;
                }
            }
            this.tiles.push(tileColumn);
        }
    }
    return ChessBoard;
}());
exports.ChessBoard = ChessBoard;
// 1: Start game: Place the pieces and draw board
// 2: If a tile with a piece is clicked, mark all areas that it can move to, and pieces it can capture
// 3: If one of these marked tiles is clicked, move the piece to that tile
// 4: If there is an enemy in that tile, capture it
// 5: Else (as of 3) if the tile is another o that player's piece, start at 2 with the newly selected piece
// Else deselect the piece
