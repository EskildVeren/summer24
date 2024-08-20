import {
  pieceBlack,
  pieceBorderBlack,
  pieceBorderWhite,
  pieceWhite,
  tileBlack,
  tileWhite,
} from "../assets/colors";
import { returnValidMoves } from "../assets/returnValidMoves";
import { Rook } from "../chessPieces/rook";
import { ChessPiece } from "./chessPiece";
import { Tile } from "./chessTile";

export class ChessBoard {
  pixelSize: number;
  tiles: Tile[][];
  activePieces: ChessPiece[];
  heaven: ChessPiece[];

  constructor(pixelSize: number) {
    this.pixelSize = pixelSize;
    this.tiles = [];
    this.activePieces = [];
    this.heaven = [];

    // Add tiles to the chessboards
    for (let x = 1; x <= 8; x++) {
      const tileColumn = [];
      for (let y = 1; y <= 8; y++) {
        // Setting the tiles color
        let color = tileWhite;
        if (x % 2 === y % 2) {
          color = tileBlack;
        }
        const tile = new Tile(x, y, this.pixelSize / 8, color);
        tileColumn.push(tile);

        if (y <= 2) {
          const piece = new Rook(
            x,
            y,
            pieceBlack,
            pieceBorderBlack,
            this.pixelSize,
            "black"
          );
          this.activePieces.push(piece);
          tile.piece = piece;
        }
        if (y >= 7) {
          const piece = new ChessPiece(
            x,
            y,
            pieceWhite,
            pieceBorderWhite,
            this.pixelSize,
            "white"
          );
          this.activePieces.push(piece);
          tile.piece = piece;
        }
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

  drawPieces = (ctx: CanvasRenderingContext2D) => {
    this.activePieces.forEach((chessPiece) => {
      chessPiece.draw(ctx);
    });
  };

  newGetValidMoves = (piece: ChessPiece) => {
    let possibleTiles: Tile[] = [];
    const movementRules = piece.movementRules;
    movementRules.forEach((movementRule) => {
      returnValidMoves(piece, movementRule, this.tiles).forEach((tile) => {
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

  movePiece = (piece: ChessPiece, newTile: Tile) => {
    console.log(piece.x);

    const oldTile = this.tiles[piece.x - 1][piece.y - 1];
    oldTile.piece = null;
    newTile.piece = piece;
    piece.x = newTile.x;
    piece.y = newTile.y;
    // console.log("New piece position:", piece);
  };
}

// 1: Start game: Place the pieces and draw board

// 2: If a tile with a piece is clicked, mark all areas that it can move to, and pieces it can capture

// 3: If one of these marked tiles is clicked, move the piece to that tile

// 4: If there is an enemy in that tile, capture it

// 5: Else (as of 3) if the tile is another o that player's piece, start at 2 with the newly selected piece

// Else deselect the piece
