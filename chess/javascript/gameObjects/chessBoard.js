"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessBoard = void 0;
var colors_1 = require("../assets/colors");
var getPieceType_1 = require("../assets/getPieceType");
var isCastlingMove_1 = require("../assets/isCastlingMove");
var returnValidMoves_1 = require("../assets/returnValidMoves");
var king_1 = require("../chessPieces/king");
var pawn_1 = require("../chessPieces/pawn");
var rook_1 = require("../chessPieces/rook");
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
        this.getMovesForPiece = function (piece) {
            var possibleTiles = [];
            var movementRules = piece.movementRules;
            movementRules.forEach(function (movementRule) {
                possibleTiles.push.apply(possibleTiles, (0, returnValidMoves_1.returnValidMoves)(piece, movementRule, _this.tiles));
            });
            return possibleTiles;
        };
        // Adds all valid tiles to each piece
        this.calculateValidMoves = function (player) {
            // Reset tiles
            _this.tiles.forEach(function (tileColumn) {
                tileColumn.forEach(function (tile) {
                    tile.isUnderAttack = false;
                });
            });
            // Create set for all tiles that are under attack
            var attackedTiles = new Set();
            // Add all possible attacks to them
            _this.pieces.forEach(function (piece) {
                var validMoves = _this.getMovesForPiece(piece);
                if (piece.owner == player) {
                    piece.validMoves = validMoves;
                }
                else {
                    attackedTiles = attackedTiles.union(new Set(validMoves));
                }
            });
            attackedTiles.forEach(function (tile) {
                tile.isUnderAttack = true;
            });
            (0, returnValidMoves_1.checkForValidCastlingMove)(_this.kings[0], _this.tiles);
            (0, returnValidMoves_1.checkForValidCastlingMove)(_this.kings[1], _this.tiles);
        };
        this.movePiece = function (piece, newTile) {
            var oldTile = _this.tiles[piece.x][piece.y];
            var newTilePiece = newTile.piece;
            var pieceMoved = true;
            var wasPawnFirstMove = false;
            var movingPlayer = piece.owner;
            var opposingPlayer = "white";
            oldTile.piece = null;
            newTile.piece = piece;
            piece.x = newTile.x;
            piece.y = newTile.y;
            if (movingPlayer == "white") {
                opposingPlayer = "black";
            }
            if ((piece instanceof pawn_1.Pawn ||
                piece instanceof king_1.King ||
                piece instanceof rook_1.Rook) &&
                piece.firstMove == true) {
                wasPawnFirstMove = true;
                piece.firstMove = false;
            }
            if ((0, isCastlingMove_1.isCastlingMove)(piece, oldTile, newTile) == "left") {
                var rook = _this.tiles[0][piece.y].piece;
                if (rook != null) {
                    var newRookTile = _this.tiles[3][piece.y];
                    _this.movePiece(rook, newRookTile);
                }
            }
            if ((0, isCastlingMove_1.isCastlingMove)(piece, oldTile, newTile) == "right") {
                var rook = _this.tiles[7][piece.y].piece;
                if (rook != null) {
                    var newRookTile = _this.tiles[5][piece.y];
                    _this.movePiece(rook, newRookTile);
                }
            }
            _this.calculateValidMoves(movingPlayer);
            // this.calculateValidMoves(new CanvasRenderingContext2D());
            // checks if check-state is valid
            _this.kings.forEach(function (king) {
                if (king.owner == piece.owner && king.tile.isUnderAttack) {
                    console.log("CHECK");
                    oldTile.piece = piece;
                    newTile.piece = newTilePiece;
                    piece.x = oldTile.x;
                    piece.y = oldTile.y;
                    if (piece instanceof pawn_1.Pawn && wasPawnFirstMove) {
                        piece.firstMove = true;
                    }
                    _this.calculateValidMoves(movingPlayer);
                    console.log("I WILL NOW RETURN FALSE");
                    pieceMoved = false;
                }
            });
            if (pieceMoved == true) {
                _this.calculateValidMoves(opposingPlayer);
            }
            return pieceMoved;
        };
        this.pixelSize = pixelSize;
        this.tiles = [];
        this.pieces = [];
        this.kings = [];
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
                var piece = (0, getPieceType_1.getPieceType)(x, y, tile, this.pixelSize);
                if (piece != null) {
                    this.pieces.push(piece);
                }
                if (piece instanceof king_1.King) {
                    this.kings.push(piece);
                }
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
