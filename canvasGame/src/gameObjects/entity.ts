export class Entity {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  draw = () => {
    this.ctx.fillRect(this.x, this.y, 50, 50);
  };

  move = (timeStamp: number) => {
    this.vx += this.ax * timeStamp;
    this.vy += this.ay * timeStamp;
    this.x += this.vx;
    this.y += this.vy;
  };
}
