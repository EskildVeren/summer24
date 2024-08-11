import {
  pieceBlack,
  pieceBorderBlack,
  pieceBorderWhite,
  pieceWhite,
  tileBlack,
  tileWhite,
} from "../assets/colors";
import { chessPiece } from "./chessPiece";
import { Tile } from "./chessTile";

export class chessBoard {
  pixelSize: number;
  tiles: Tile[][];
  activePieces: chessPiece[];
  heaven: chessPiece[];

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
          const piece = new chessPiece(
            x,
            y,
            pieceBlack,
            pieceBorderBlack,
            this.pixelSize
          );
          this.activePieces.push(piece);
          tile.piece = piece;
        }
        if (y >= 7) {
          const piece = new chessPiece(
            x,
            y,
            pieceWhite,
            pieceBorderWhite,
            this.pixelSize
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
}
