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
exports.Pawn = void 0;
var movementRules_1 = require("../assets/movementRules");
var chessPiece_1 = require("../gameObjects/chessPiece");
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(x, y, color, borderColor, boardSize, owner) {
        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;
        _this.movementRules = (0, movementRules_1.getPawnMoves)();
        return _this;
    }
    return Pawn;
}(chessPiece_1.ChessPiece));
exports.Pawn = Pawn;
