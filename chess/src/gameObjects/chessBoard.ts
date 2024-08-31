import { tileBlack, tileWhite } from "../assets/colors";
import { getPieceType } from "../assets/getPieceType";
import { isCastlingMove } from "../assets/isCastlingMove";
import {
  checkForValidCastlingMove,
  returnValidMoves,
} from "../assets/returnValidMoves";
import { King } from "../chessPieces/king";
import { Pawn } from "../chessPieces/pawn";
import { Rook } from "../chessPieces/rook";
import { ChessPiece } from "./chessPiece";
import { Tile } from "./chessTile";

export class ChessBoard {
  pixelSize: number;
  tiles: Tile[][];
  pieces: ChessPiece[];
  kings: King[];

  constructor(pixelSize: number) {
    this.pixelSize = pixelSize;
    this.tiles = [];
    this.pieces = [];
    this.kings = [];

    // Add tiles to the chessboards
    for (let x = 0; x < 8; x++) {
      const tileColumn = [];
      for (let y = 0; y < 8; y++) {
        // Setting the tiles color
        let color = tileWhite;
        if (x % 2 === y % 2) {
          color = tileBlack;
        }
        const tile = new Tile(x, y, this.pixelSize / 8, color);
        tileColumn.push(tile);

        const piece: ChessPiece | null = getPieceType(
          x,
          y,
          tile,
          this.pixelSize
        );

        if (piece != null) {
          this.pieces.push(piece);
        }
        if (piece instanceof King) {
          this.kings.push(piece);
        }

        tile.piece = piece;
      }
      this.tiles.push(tileColumn);
    }
  }

  drawTiles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < this.tiles.length; i++) {
      for (let tileIndex = 0; tileIndex < this.tiles[i].length; tileIndex++) {
        this.tiles[i][tileIndex].draw(ctx);
      }
    }
  };

  getMovesForPiece = (piece: ChessPiece) => {
    let possibleTiles: Tile[] = [];
    const movementRules = piece.movementRules;
    movementRules.forEach((movementRule) => {
      possibleTiles.push(...returnValidMoves(piece, movementRule, this.tiles));
    });
    return possibleTiles;
  };

  // Adds all valid tiles to each piece
  calculateValidMoves = (player: string) => {
    // Reset tiles
    this.tiles.forEach((tileColumn: Tile[]) => {
      tileColumn.forEach((tile: Tile) => {
        tile.isUnderAttack = false;
      });
    });
    // Create set for all tiles that are under attack
    let attackedTiles: Set<Tile> = new Set();

    // Add all possible attacks to them
    this.pieces.forEach((piece: ChessPiece) => {
      const validMoves = this.getMovesForPiece(piece);
      if (piece.owner == player) {
        piece.validMoves = validMoves;
      } else {
        attackedTiles = attackedTiles.union(new Set(validMoves));
      }
    });

    attackedTiles.forEach((tile: Tile) => {
      tile.isUnderAttack = true;
    });

    checkForValidCastlingMove(this.kings[0], this.tiles);
    checkForValidCastlingMove(this.kings[1], this.tiles);
  };

  movePiece = (piece: ChessPiece, newTile: Tile) => {
    const oldTile = this.tiles[piece.x][piece.y];
    const newTilePiece = newTile.piece;
    let pieceMoved = true;
    let wasPawnFirstMove = false;
    const movingPlayer = piece.owner;
    let opposingPlayer = "white";

    oldTile.piece = null;
    newTile.piece = piece;
    piece.x = newTile.x;
    piece.y = newTile.y;

    if (movingPlayer == "white") {
      opposingPlayer = "black";
    }

    if (
      (piece instanceof Pawn ||
        piece instanceof King ||
        piece instanceof Rook) &&
      piece.firstMove == true
    ) {
      wasPawnFirstMove = true;
      piece.firstMove = false;
    }

    if (isCastlingMove(piece, oldTile, newTile) == "left") {
      const rook = this.tiles[0][piece.y].piece;
      if (rook != null) {
        const newRookTile = this.tiles[3][piece.y];
        this.movePiece(rook, newRookTile);
      }
    }

    if (isCastlingMove(piece, oldTile, newTile) == "right") {
      const rook = this.tiles[7][piece.y].piece;
      if (rook != null) {
        const newRookTile = this.tiles[5][piece.y];
        this.movePiece(rook, newRookTile);
      }
    }

    this.calculateValidMoves(movingPlayer);
    // this.calculateValidMoves(new CanvasRenderingContext2D());
    // checks if check-state is valid
    this.kings.forEach((king: King) => {
      if (king.owner == piece.owner && king.tile.isUnderAttack) {
        console.log("CHECK");

        oldTile.piece = piece;
        newTile.piece = newTilePiece;
        piece.x = oldTile.x;
        piece.y = oldTile.y;

        if (piece instanceof Pawn && wasPawnFirstMove) {
          piece.firstMove = true;
        }

        this.calculateValidMoves(movingPlayer);

        console.log("I WILL NOW RETURN FALSE");
        pieceMoved = false;
      }
    });

    if (pieceMoved == true) {
      this.calculateValidMoves(opposingPlayer);
    }

    return pieceMoved;
  };
}

// 1: Start game: Place the pieces and draw board

// 2: If a tile with a piece is clicked, mark all areas that it can move to, and pieces it can capture

// 3: If one of these marked tiles is clicked, move the piece to that tile

// 4: If there is an enemy in that tile, capture it

// 5: Else (as of 3) if the tile is another o that player's piece, start at 2 with the newly selected piece

// Else deselect the piece
