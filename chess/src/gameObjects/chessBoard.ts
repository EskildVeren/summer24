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
        let color = "white";
        if (x % 2 === y % 2) {
          color = "black";
        }
        tileColumn.push(new Tile(x, y, this.pixelSize / 8, color));

        if (y <= 2 || y >= 7) {
          this.activePieces.push(
            new chessPiece(x, y, "purple", this.pixelSize)
          );
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
