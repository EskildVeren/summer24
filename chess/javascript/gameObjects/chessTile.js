"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(x, y, size, color) {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.x * _this.size, _this.y * _this.size, _this.size, _this.size);
            if (_this.piece != null) {
                _this.piece.draw(ctx);
            }
        };
        this.mark = function (ctx, color) {
            ctx.fillStyle = color;
            ctx.fillRect(_this.x * _this.size, _this.y * _this.size, _this.size, _this.size);
            if (_this.piece != null) {
                _this.piece.draw(ctx);
            }
        };
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.piece = null;
        this.isUnderAttack = false;
    }
    return Tile;
}());
exports.Tile = Tile;
