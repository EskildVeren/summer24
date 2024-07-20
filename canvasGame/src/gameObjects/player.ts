import { Entity } from "./entity";
import { PlayerProjectile } from "./playerProjectile";

export class Player {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  maxSpeed: number;
  projectiles: Entity[];

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    maxSpeed: number,
    projectiles: Entity[]
  ) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.maxSpeed = maxSpeed;
    this.projectiles = projectiles;
  }

  draw = () => {
    this.ctx.fillStyle = "mediumvioletred";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  setMovement = (direction: string) => {
    console.log(direction);

    switch (direction) {
      case " ":
        this.shootProjetile(this.projectiles);
        break;

      case "ArrowLeft":
        this.ax = -1;
        break;

      case "ArrowRight":
        this.ax = 1;
        break;

      case "ArrowUp":
        this.ay = -1;
        break;

      case "ArrowDown":
        this.ay = 1;
        break;

      case "stopX":
        this.ax = 0;
        break;

      case "stopY":
        this.ay = 0;
        break;
    }
  };

  move = (timeStamp: number) => {
    this.vx += (this.ax * timeStamp) / 200 - 0.1 * this.vx;
    if (this.vx < 0.005 && this.vx > -0.005) {
      this.vx = 0;
    }

    this.vy += (this.ay * timeStamp) / 200 - 0.1 * this.vy;
    if (this.vy < 0.005 && this.vy > -0.005) {
      this.vy = 0;
    }

    this.x += this.vx * timeStamp;
    this.y += this.vy * timeStamp;

    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.x > 1400 - this.width) {
      this.x = 1400 - this.width;
    }
    if (this.y > 800 - this.height) {
      this.y = 800 - this.height;
    }
  };

  shootProjetile = (projectileList: Entity[]) => {
    const projectile = new PlayerProjectile(
      this.ctx,
      this.x + this.width / 2,
      this.y + this.height / 2,
      -5
    );
    projectileList.push(projectile);
  };
}
