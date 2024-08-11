export class chessPiece {
  x: number;
  y: number;
  color: string;
  boardSize: number;
  constructor(x: number, y: number, color: string, boardSize: number) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.boardSize = boardSize;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this.color;
    const pieceSize = 70;
    const tileWidth = this.boardSize / 8;
    ctx.fillRect(
      tileWidth * (this.x - 1) + (tileWidth - pieceSize) / 2,
      tileWidth * (this.y - 1) + (tileWidth - pieceSize) / 2,
      pieceSize,
      pieceSize
    );
  };
}
