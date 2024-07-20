"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(ctx, x, y) {
        var _this = this;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.draw = function () {
            _this.ctx.fillRect(_this.x, _this.y, 50, 50);
        };
        this.move = function (timeStamp) {
            _this.vx += _this.ax * timeStamp;
            _this.vy += _this.ay * timeStamp;
            _this.x += _this.vx;
            _this.y += _this.vy;
        };
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }
    return Entity;
}());
exports.Entity = Entity;
