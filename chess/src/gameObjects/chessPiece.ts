export class chessPiece {
  x: number;
  y: number;
  color: string;
  borderColor: string;
  boardSize: number;

  constructor(
    x: number,
    y: number,
    color: string,
    borderColor: string,
    boardSize: number
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.borderColor = borderColor;
    this.boardSize = boardSize;
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = this.color;
    const pieceSize = 70;
    const tileWidth = this.boardSize / 8;
    const pieceBorderSize = 2;

    // Drawing the piece's border
    ctx.fillStyle = this.borderColor;
    ctx.fillRect(
      tileWidth * (this.x - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize,
      tileWidth * (this.y - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize,
      pieceSize + pieceBorderSize * 2,
      pieceSize + pieceBorderSize * 2
    );

    // Drawing the piece itself
    ctx.fillStyle = this.color;
    ctx.fillRect(
      tileWidth * (this.x - 1) + (tileWidth - pieceSize) / 2,
      tileWidth * (this.y - 1) + (tileWidth - pieceSize) / 2,
      pieceSize,
      pieceSize
    );
  };
}
