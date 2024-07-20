"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var playerProjectile_1 = require("./playerProjectile");
var Player = /** @class */ (function () {
    function Player(ctx, x, y, width, height, maxSpeed, projectiles) {
        var _this = this;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.draw = function () {
            _this.ctx.fillStyle = "mediumvioletred";
            _this.ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
        };
        this.setMovement = function (direction) {
            console.log(direction);
            switch (direction) {
                case " ":
                    _this.shootProjetile(_this.projectiles);
                    break;
                case "ArrowLeft":
                    _this.ax = -1;
                    break;
                case "ArrowRight":
                    _this.ax = 1;
                    break;
                case "ArrowUp":
                    _this.ay = -1;
                    break;
                case "ArrowDown":
                    _this.ay = 1;
                    break;
                case "stopX":
                    _this.ax = 0;
                    break;
                case "stopY":
                    _this.ay = 0;
                    break;
            }
        };
        this.move = function (timeStamp) {
            _this.vx += (_this.ax * timeStamp) / 200 - 0.1 * _this.vx;
            if (_this.vx < 0.005 && _this.vx > -0.005) {
                _this.vx = 0;
            }
            _this.vy += (_this.ay * timeStamp) / 200 - 0.1 * _this.vy;
            if (_this.vy < 0.005 && _this.vy > -0.005) {
                _this.vy = 0;
            }
            _this.x += _this.vx * timeStamp;
            _this.y += _this.vy * timeStamp;
            if (_this.x < 0) {
                _this.x = 0;
            }
            if (_this.y < 0) {
                _this.y = 0;
            }
            if (_this.x > 1400 - _this.width) {
                _this.x = 1400 - _this.width;
            }
            if (_this.y > 800 - _this.height) {
                _this.y = 800 - _this.height;
            }
        };
        this.shootProjetile = function (projectileList) {
            var projectile = new playerProjectile_1.PlayerProjectile(_this.ctx, _this.x + _this.width / 2, _this.y + _this.height / 2, -5);
            projectileList.push(projectile);
        };
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.maxSpeed = maxSpeed;
        this.projectiles = projectiles;
    }
    return Player;
}());
exports.Player = Player;
