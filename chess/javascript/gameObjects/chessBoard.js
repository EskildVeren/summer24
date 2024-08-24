"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
var colors_1 = require("../assets/colors");
var getPieceType_1 = require("../assets/getPieceType");
var returnValidMoves_1 = require("../assets/returnValidMoves");
var pawn_1 = require("../chessPieces/pawn");
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
        this.newGetValidMoves = function (piece) {
            var possibleTiles = [];
            var movementRules = piece.movementRules;
            movementRules.forEach(function (movementRule) {
                (0, returnValidMoves_1.returnValidMoves)(piece, movementRule, _this.tiles).forEach(function (tile) {
                    possibleTiles.push(tile);
                });
            });
            return possibleTiles;
        };
        /*
        getValidMoves = (piece: ChessPiece) => {
          const possibleTiles: Tile[] = [];
          const x = piece.x - 1;
          const y = piece.y - 1;
          const movementRules = piece.movementRules;
      
          movementRules.forEach((movementStyle: string) => {
            switch (movementStyle.toLowerCase()) {
              case "rook":
                this.tiles.forEach((column: Tile[]) => {
                  possibleTiles.push(column[y]);
                });
      
                this.tiles[x].forEach((tile: Tile) => {
                  possibleTiles.push(tile);
                });
                break;
      
              case "up":
                for (let i = y - 1; i >= 0; i--) {
                  const reachedTile = this.tiles[x][i];
                  if (reachedTile.piece == null) {
                    possibleTiles.push(reachedTile);
                  } else if (reachedTile.piece.owner != piece.owner) {
                    possibleTiles.push(reachedTile);
                    break;
                  } else {
                    break;
                  }
                }
                break;
      
              case "down":
                for (let i = y + 1; i < 7; i++) {
                  const reachedTile = this.tiles[x][i];
                  if (reachedTile.piece == null) {
                    possibleTiles.push(reachedTile);
                  } else if (reachedTile.piece.owner != piece.owner) {
                    possibleTiles.push(reachedTile);
                    break;
                  } else {
                    break;
                  }
                }
                break;
      
              case "left":
                for (let i = x - 1; i >= 0; i--) {
                  const reachedTile = this.tiles[i][y];
                  if (reachedTile.piece == null) {
                    possibleTiles.push(reachedTile);
                  } else if (reachedTile.piece.owner != piece.owner) {
                    possibleTiles.push(reachedTile);
                    break;
                  } else {
                    break;
                  }
                }
                break;
      
              case "right":
                for (let i = x + 1; i < 7; i++) {
                  const reachedTile = this.tiles[i][y];
                  if (reachedTile.piece == null) {
                    possibleTiles.push(reachedTile);
                  } else if (reachedTile.piece.owner != piece.owner) {
                    possibleTiles.push(reachedTile);
                    break;
                  } else {
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
      */
        this.movePiece = function (piece, newTile) {
            var oldTile = _this.tiles[piece.x][piece.y];
            oldTile.piece = null;
            newTile.piece = piece;
            piece.x = newTile.x;
            piece.y = newTile.y;
            if (piece instanceof pawn_1.Pawn && piece.firstMove == true) {
                piece.firstMove = false;
            }
        };
        this.pixelSize = pixelSize;
        this.tiles = [];
        this.heaven = [];
        // Add tiles to the chessboards
        for (var x = 0; x < 8; x++) {
            var tileColumn = [];
            for (var y = 0; y < 8; y++) {
                // Setting the tiles color
                var color = colors_1.tileWhite;
                if (x % 2 === y % 2) {
                    color = colors_1.tileBlack;
                }
                var tile = new chessTile_1.Tile(x, y, this.pixelSize / 8, color);
                tileColumn.push(tile);
                var piece = (0, getPieceType_1.getPieceType)(x, y, this.pixelSize);
                tile.piece = piece;
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
