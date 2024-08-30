"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
var movementRules_1 = require("../assets/movementRules");
var chessPiece_1 = require("../gameObjects/chessPiece");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(x, y, boardSize, owner, spritesheetName, tile) {
        var _this = _super.call(this, x, y, boardSize, owner, spritesheetName, tile) || this;
        _this.movementRules = (0, movementRules_1.getQueenMoves)();
        _this.spriteX = 0;
        _this.spriteY = 400;
        return _this;
    }
    return Queen;
}(chessPiece_1.ChessPiece));
exports.Queen = Queen;
