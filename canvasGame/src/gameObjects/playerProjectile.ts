import { Entity } from "./entity";

export class PlayerProjectile extends Entity {
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, vy: number) {
    super(ctx, x, y);
    this.vy = vy;
  }
}
