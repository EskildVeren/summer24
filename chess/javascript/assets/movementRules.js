"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPawnMoves = exports.getKnightMoves = exports.getQueenMoves = exports.getKingMoves = exports.getBishopMoves = exports.getRookMoves = void 0;
var getRookMoves = function () {
    var up = {
        xModifier: 0,
        yModifier: -1,
        repeating: true,
    };
    var down = {
        xModifier: 0,
        yModifier: 1,
        repeating: true,
    };
    var left = {
        xModifier: -1,
        yModifier: 0,
        repeating: true,
    };
    var right = {
        xModifier: 1,
        yModifier: 0,
        repeating: true,
    };
    return [up, down, left, right];
};
exports.getRookMoves = getRookMoves;
var getBishopMoves = function () {
    var upLeft = {
        xModifier: -1,
        yModifier: -1,
        repeating: true,
    };
    var downLeft = {
        xModifier: -1,
        yModifier: 1,
        repeating: true,
    };
    var upRight = {
        xModifier: 1,
        yModifier: -1,
        repeating: true,
    };
    var downRight = {
        xModifier: 1,
        yModifier: 1,
        repeating: true,
    };
    return [upLeft, upRight, downLeft, downRight];
};
exports.getBishopMoves = getBishopMoves;
var getKingMoves = function () {
    var upLeft = {
        xModifier: -1,
        yModifier: -1,
        repeating: false,
    };
    var downLeft = {
        xModifier: -1,
        yModifier: 1,
        repeating: false,
    };
    var upRight = {
        xModifier: 1,
        yModifier: -1,
        repeating: false,
    };
    var downRight = {
        xModifier: 1,
        yModifier: 1,
        repeating: false,
    };
    var up = {
        xModifier: 0,
        yModifier: -1,
        repeating: false,
    };
    var down = {
        xModifier: 0,
        yModifier: 1,
        repeating: false,
    };
    var left = {
        xModifier: -1,
        yModifier: 0,
        repeating: false,
    };
    var right = {
        xModifier: 1,
        yModifier: 0,
        repeating: false,
    };
    return [upLeft, upRight, downLeft, downRight, up, down, left, right];
};
exports.getKingMoves = getKingMoves;
var getQueenMoves = function () {
    var upLeft = {
        xModifier: -1,
        yModifier: -1,
        repeating: true,
    };
    var downLeft = {
        xModifier: -1,
        yModifier: 1,
        repeating: true,
    };
    var upRight = {
        xModifier: 1,
        yModifier: -1,
        repeating: true,
    };
    var downRight = {
        xModifier: 1,
        yModifier: 1,
        repeating: true,
    };
    var up = {
        xModifier: 0,
        yModifier: -1,
        repeating: true,
    };
    var down = {
        xModifier: 0,
        yModifier: 1,
        repeating: true,
    };
    var left = {
        xModifier: -1,
        yModifier: 0,
        repeating: true,
    };
    var right = {
        xModifier: 1,
        yModifier: 0,
        repeating: true,
    };
    return [upLeft, upRight, downLeft, downRight, up, down, left, right];
};
exports.getQueenMoves = getQueenMoves;
var getKnightMoves = function () {
    var upLeft = {
        xModifier: -1,
        yModifier: -2,
        repeating: false,
    };
    var upRight = {
        xModifier: 1,
        yModifier: -2,
        repeating: false,
    };
    var downLeft = {
        xModifier: -1,
        yModifier: 2,
        repeating: false,
    };
    var downRight = {
        xModifier: 1,
        yModifier: 2,
        repeating: false,
    };
    var lowerLeft = {
        xModifier: -2,
        yModifier: 1,
        repeating: false,
    };
    var upperLeft = {
        xModifier: -2,
        yModifier: -1,
        repeating: false,
    };
    var lowerRight = {
        xModifier: 2,
        yModifier: 1,
        repeating: false,
    };
    var upperRight = {
        xModifier: 2,
        yModifier: -1,
        repeating: false,
    };
    return [
        upLeft,
        upRight,
        downLeft,
        downRight,
        lowerLeft,
        upperLeft,
        lowerRight,
        upperRight,
    ];
};
exports.getKnightMoves = getKnightMoves;
var getPawnMoves = function () {
    // Fillermove for pawns
    var firstAttack = {
        xModifier: 0,
        yModifier: 0,
        repeating: false,
    };
    return [firstAttack];
};
exports.getPawnMoves = getPawnMoves;
