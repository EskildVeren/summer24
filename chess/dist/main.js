/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/assets/colors.js":
/*!*************************************!*\
  !*** ./javascript/assets/colors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pieceBorderBlack = exports.pieceBorderWhite = exports.pieceBlack = exports.pieceWhite = exports.tileBlack = exports.tileWhite = void 0;\nexports.tileWhite = \"#F2E8C6\";\nexports.tileBlack = \"#C5705D\";\nexports.pieceWhite = \"#F7EFE5\";\nexports.pieceBlack = \"#373A40\";\nexports.pieceBorderWhite = \"#DFD3C3\";\nexports.pieceBorderBlack = \"#323232\";\n\n\n//# sourceURL=webpack://canvasgame/./javascript/assets/colors.js?");

/***/ }),

/***/ "./javascript/assets/getPieceType.js":
/*!*******************************************!*\
  !*** ./javascript/assets/getPieceType.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getPieceType = void 0;\nvar bishop_1 = __webpack_require__(/*! ../chessPieces/bishop */ \"./javascript/chessPieces/bishop.js\");\nvar king_1 = __webpack_require__(/*! ../chessPieces/king */ \"./javascript/chessPieces/king.js\");\nvar knight_1 = __webpack_require__(/*! ../chessPieces/knight */ \"./javascript/chessPieces/knight.js\");\nvar pawn_1 = __webpack_require__(/*! ../chessPieces/pawn */ \"./javascript/chessPieces/pawn.js\");\nvar queen_1 = __webpack_require__(/*! ../chessPieces/queen */ \"./javascript/chessPieces/queen.js\");\nvar rook_1 = __webpack_require__(/*! ../chessPieces/rook */ \"./javascript/chessPieces/rook.js\");\nvar colors_1 = __webpack_require__(/*! ./colors */ \"./javascript/assets/colors.js\");\nvar getPieceType = function (x, y, boardSize) {\n    var owner = \"white\";\n    var mainColor = colors_1.pieceWhite;\n    var borderColor = colors_1.pieceBorderWhite;\n    if (y < 4) {\n        owner = \"black\";\n        mainColor = colors_1.pieceBlack;\n        borderColor = colors_1.pieceBorderBlack;\n    }\n    if (y > 1 && y < 6) {\n        return null;\n    }\n    if (y === 1 || y === 6) {\n        return new pawn_1.Pawn(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    if (x == 0 || x == 7) {\n        return new rook_1.Rook(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    if (x == 1 || x == 6) {\n        return new knight_1.Knight(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    if (x == 2 || x == 5) {\n        return new bishop_1.Bishop(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    if (x == 3) {\n        return new queen_1.Queen(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    if (x == 4) {\n        return new king_1.King(x, y, mainColor, borderColor, boardSize, owner);\n    }\n    throw new Error(\"Chesspiece outside defined piece-space\");\n};\nexports.getPieceType = getPieceType;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/assets/getPieceType.js?");

/***/ }),

/***/ "./javascript/assets/movementRules.js":
/*!********************************************!*\
  !*** ./javascript/assets/movementRules.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getPawnMoves = exports.getKnightMoves = exports.getQueenMoves = exports.getKingMoves = exports.getBishopMoves = exports.getRookMoves = void 0;\nvar getRookMoves = function () {\n    var up = {\n        xModifier: 0,\n        yModifier: -1,\n        repeating: true,\n    };\n    var down = {\n        xModifier: 0,\n        yModifier: 1,\n        repeating: true,\n    };\n    var left = {\n        xModifier: -1,\n        yModifier: 0,\n        repeating: true,\n    };\n    var right = {\n        xModifier: 1,\n        yModifier: 0,\n        repeating: true,\n    };\n    return [up, down, left, right];\n};\nexports.getRookMoves = getRookMoves;\nvar getBishopMoves = function () {\n    var upLeft = {\n        xModifier: -1,\n        yModifier: -1,\n        repeating: true,\n    };\n    var downLeft = {\n        xModifier: -1,\n        yModifier: 1,\n        repeating: true,\n    };\n    var upRight = {\n        xModifier: 1,\n        yModifier: -1,\n        repeating: true,\n    };\n    var downRight = {\n        xModifier: 1,\n        yModifier: 1,\n        repeating: true,\n    };\n    return [upLeft, upRight, downLeft, downRight];\n};\nexports.getBishopMoves = getBishopMoves;\nvar getKingMoves = function () {\n    var upLeft = {\n        xModifier: -1,\n        yModifier: -1,\n        repeating: false,\n    };\n    var downLeft = {\n        xModifier: -1,\n        yModifier: 1,\n        repeating: false,\n    };\n    var upRight = {\n        xModifier: 1,\n        yModifier: -1,\n        repeating: false,\n    };\n    var downRight = {\n        xModifier: 1,\n        yModifier: 1,\n        repeating: false,\n    };\n    var up = {\n        xModifier: 0,\n        yModifier: -1,\n        repeating: false,\n    };\n    var down = {\n        xModifier: 0,\n        yModifier: 1,\n        repeating: false,\n    };\n    var left = {\n        xModifier: -1,\n        yModifier: 0,\n        repeating: false,\n    };\n    var right = {\n        xModifier: 1,\n        yModifier: 0,\n        repeating: false,\n    };\n    return [upLeft, upRight, downLeft, downRight, up, down, left, right];\n};\nexports.getKingMoves = getKingMoves;\nvar getQueenMoves = function () {\n    var upLeft = {\n        xModifier: -1,\n        yModifier: -1,\n        repeating: true,\n    };\n    var downLeft = {\n        xModifier: -1,\n        yModifier: 1,\n        repeating: true,\n    };\n    var upRight = {\n        xModifier: 1,\n        yModifier: -1,\n        repeating: true,\n    };\n    var downRight = {\n        xModifier: 1,\n        yModifier: 1,\n        repeating: true,\n    };\n    var up = {\n        xModifier: 0,\n        yModifier: -1,\n        repeating: true,\n    };\n    var down = {\n        xModifier: 0,\n        yModifier: 1,\n        repeating: true,\n    };\n    var left = {\n        xModifier: -1,\n        yModifier: 0,\n        repeating: true,\n    };\n    var right = {\n        xModifier: 1,\n        yModifier: 0,\n        repeating: true,\n    };\n    return [upLeft, upRight, downLeft, downRight, up, down, left, right];\n};\nexports.getQueenMoves = getQueenMoves;\nvar getKnightMoves = function () {\n    var upLeft = {\n        xModifier: -1,\n        yModifier: -2,\n        repeating: false,\n    };\n    var upRight = {\n        xModifier: 1,\n        yModifier: -2,\n        repeating: false,\n    };\n    var downLeft = {\n        xModifier: -1,\n        yModifier: 2,\n        repeating: false,\n    };\n    var downRight = {\n        xModifier: 1,\n        yModifier: 2,\n        repeating: false,\n    };\n    var lowerLeft = {\n        xModifier: -2,\n        yModifier: 1,\n        repeating: false,\n    };\n    var upperLeft = {\n        xModifier: -2,\n        yModifier: -1,\n        repeating: false,\n    };\n    var lowerRight = {\n        xModifier: 2,\n        yModifier: 1,\n        repeating: false,\n    };\n    var upperRight = {\n        xModifier: 2,\n        yModifier: -1,\n        repeating: false,\n    };\n    return [\n        upLeft,\n        upRight,\n        downLeft,\n        downRight,\n        lowerLeft,\n        upperLeft,\n        lowerRight,\n        upperRight,\n    ];\n};\nexports.getKnightMoves = getKnightMoves;\nvar getPawnMoves = function () {\n    return (0, exports.getRookMoves)();\n};\nexports.getPawnMoves = getPawnMoves;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/assets/movementRules.js?");

/***/ }),

/***/ "./javascript/assets/returnValidMoves.js":
/*!***********************************************!*\
  !*** ./javascript/assets/returnValidMoves.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnValidMoves = returnValidMoves;\nfunction returnValidMoves(piece, movementRule, tiles) {\n    var possibleTiles = [];\n    var startX = piece.x;\n    var startY = piece.y;\n    var multiplier = 0;\n    var repeating = true;\n    while (repeating) {\n        repeating = movementRule.repeating;\n        multiplier++;\n        var x = startX + movementRule.xModifier * multiplier;\n        var y = startY + movementRule.yModifier * multiplier;\n        console.log(multiplier);\n        if (multiplier > 100) {\n            throw new Error(\"You have an infinite loop in returnValidMoves.ts\");\n        }\n        console.log(\"x:\", x, \"y:\", y);\n        console.log(movementRule.repeating);\n        if (y > 7 || y < 0 || x > 7 || x < 0) {\n            return possibleTiles;\n        }\n        var reachedTile = tiles[x][y];\n        if (reachedTile.piece == null) {\n            possibleTiles.push(reachedTile);\n        }\n        else if (reachedTile.piece.owner != piece.owner) {\n            possibleTiles.push(reachedTile);\n            return possibleTiles;\n        }\n        else {\n            return possibleTiles;\n        }\n    }\n    return possibleTiles;\n}\n\n\n//# sourceURL=webpack://canvasgame/./javascript/assets/returnValidMoves.js?");

/***/ }),

/***/ "./javascript/chessPieces/bishop.js":
/*!******************************************!*\
  !*** ./javascript/chessPieces/bishop.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bishop = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar Bishop = /** @class */ (function (_super) {\n    __extends(Bishop, _super);\n    function Bishop(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getBishopMoves)();\n        return _this;\n    }\n    return Bishop;\n}(chessPiece_1.ChessPiece));\nexports.Bishop = Bishop;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/bishop.js?");

/***/ }),

/***/ "./javascript/chessPieces/king.js":
/*!****************************************!*\
  !*** ./javascript/chessPieces/king.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.King = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar King = /** @class */ (function (_super) {\n    __extends(King, _super);\n    function King(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getKingMoves)();\n        return _this;\n    }\n    return King;\n}(chessPiece_1.ChessPiece));\nexports.King = King;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/king.js?");

/***/ }),

/***/ "./javascript/chessPieces/knight.js":
/*!******************************************!*\
  !*** ./javascript/chessPieces/knight.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Knight = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar Knight = /** @class */ (function (_super) {\n    __extends(Knight, _super);\n    function Knight(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getKnightMoves)();\n        return _this;\n    }\n    return Knight;\n}(chessPiece_1.ChessPiece));\nexports.Knight = Knight;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/knight.js?");

/***/ }),

/***/ "./javascript/chessPieces/pawn.js":
/*!****************************************!*\
  !*** ./javascript/chessPieces/pawn.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pawn = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar Pawn = /** @class */ (function (_super) {\n    __extends(Pawn, _super);\n    function Pawn(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getPawnMoves)();\n        return _this;\n    }\n    return Pawn;\n}(chessPiece_1.ChessPiece));\nexports.Pawn = Pawn;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/pawn.js?");

/***/ }),

/***/ "./javascript/chessPieces/queen.js":
/*!*****************************************!*\
  !*** ./javascript/chessPieces/queen.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Queen = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar Queen = /** @class */ (function (_super) {\n    __extends(Queen, _super);\n    function Queen(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getQueenMoves)();\n        return _this;\n    }\n    return Queen;\n}(chessPiece_1.ChessPiece));\nexports.Queen = Queen;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/queen.js?");

/***/ }),

/***/ "./javascript/chessPieces/rook.js":
/*!****************************************!*\
  !*** ./javascript/chessPieces/rook.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rook = void 0;\nvar movementRules_1 = __webpack_require__(/*! ../assets/movementRules */ \"./javascript/assets/movementRules.js\");\nvar chessPiece_1 = __webpack_require__(/*! ../gameObjects/chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar Rook = /** @class */ (function (_super) {\n    __extends(Rook, _super);\n    function Rook(x, y, color, borderColor, boardSize, owner) {\n        var _this = _super.call(this, x, y, color, borderColor, boardSize, owner) || this;\n        _this.movementRules = (0, movementRules_1.getRookMoves)();\n        return _this;\n    }\n    return Rook;\n}(chessPiece_1.ChessPiece));\nexports.Rook = Rook;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/chessPieces/rook.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessBoard.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessBoard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ChessBoard = void 0;\nvar colors_1 = __webpack_require__(/*! ../assets/colors */ \"./javascript/assets/colors.js\");\nvar getPieceType_1 = __webpack_require__(/*! ../assets/getPieceType */ \"./javascript/assets/getPieceType.js\");\nvar returnValidMoves_1 = __webpack_require__(/*! ../assets/returnValidMoves */ \"./javascript/assets/returnValidMoves.js\");\nvar chessTile_1 = __webpack_require__(/*! ./chessTile */ \"./javascript/gameObjects/chessTile.js\");\nvar ChessBoard = /** @class */ (function () {\n    function ChessBoard(pixelSize) {\n        var _this = this;\n        this.drawTiles = function (ctx) {\n            for (var i = 0; i < _this.tiles.length; i++) {\n                for (var tileIndex = 0; tileIndex < _this.tiles[i].length; tileIndex++) {\n                    _this.tiles[i][tileIndex].draw(ctx);\n                }\n            }\n        };\n        this.newGetValidMoves = function (piece) {\n            var possibleTiles = [];\n            var movementRules = piece.movementRules;\n            movementRules.forEach(function (movementRule) {\n                (0, returnValidMoves_1.returnValidMoves)(piece, movementRule, _this.tiles).forEach(function (tile) {\n                    possibleTiles.push(tile);\n                });\n            });\n            return possibleTiles;\n        };\n        /*\n        getValidMoves = (piece: ChessPiece) => {\n          const possibleTiles: Tile[] = [];\n          const x = piece.x - 1;\n          const y = piece.y - 1;\n          const movementRules = piece.movementRules;\n      \n          movementRules.forEach((movementStyle: string) => {\n            switch (movementStyle.toLowerCase()) {\n              case \"rook\":\n                this.tiles.forEach((column: Tile[]) => {\n                  possibleTiles.push(column[y]);\n                });\n      \n                this.tiles[x].forEach((tile: Tile) => {\n                  possibleTiles.push(tile);\n                });\n                break;\n      \n              case \"up\":\n                for (let i = y - 1; i >= 0; i--) {\n                  const reachedTile = this.tiles[x][i];\n                  if (reachedTile.piece == null) {\n                    possibleTiles.push(reachedTile);\n                  } else if (reachedTile.piece.owner != piece.owner) {\n                    possibleTiles.push(reachedTile);\n                    break;\n                  } else {\n                    break;\n                  }\n                }\n                break;\n      \n              case \"down\":\n                for (let i = y + 1; i < 7; i++) {\n                  const reachedTile = this.tiles[x][i];\n                  if (reachedTile.piece == null) {\n                    possibleTiles.push(reachedTile);\n                  } else if (reachedTile.piece.owner != piece.owner) {\n                    possibleTiles.push(reachedTile);\n                    break;\n                  } else {\n                    break;\n                  }\n                }\n                break;\n      \n              case \"left\":\n                for (let i = x - 1; i >= 0; i--) {\n                  const reachedTile = this.tiles[i][y];\n                  if (reachedTile.piece == null) {\n                    possibleTiles.push(reachedTile);\n                  } else if (reachedTile.piece.owner != piece.owner) {\n                    possibleTiles.push(reachedTile);\n                    break;\n                  } else {\n                    break;\n                  }\n                }\n                break;\n      \n              case \"right\":\n                for (let i = x + 1; i < 7; i++) {\n                  const reachedTile = this.tiles[i][y];\n                  if (reachedTile.piece == null) {\n                    possibleTiles.push(reachedTile);\n                  } else if (reachedTile.piece.owner != piece.owner) {\n                    possibleTiles.push(reachedTile);\n                    break;\n                  } else {\n                    break;\n                  }\n                }\n                break;\n      \n              default:\n                break;\n            }\n          });\n      \n          return possibleTiles;\n        };\n      */\n        this.movePiece = function (piece, newTile) {\n            console.log(piece.x);\n            var oldTile = _this.tiles[piece.x][piece.y];\n            oldTile.piece = null;\n            newTile.piece = piece;\n            piece.x = newTile.x;\n            piece.y = newTile.y;\n            // console.log(\"New piece position:\", piece);\n        };\n        this.pixelSize = pixelSize;\n        this.tiles = [];\n        this.heaven = [];\n        // Add tiles to the chessboards\n        for (var x = 0; x < 8; x++) {\n            var tileColumn = [];\n            for (var y = 0; y < 8; y++) {\n                // Setting the tiles color\n                var color = colors_1.tileWhite;\n                if (x % 2 === y % 2) {\n                    color = colors_1.tileBlack;\n                }\n                var tile = new chessTile_1.Tile(x, y, this.pixelSize / 8, color);\n                tileColumn.push(tile);\n                var piece = (0, getPieceType_1.getPieceType)(x, y, this.pixelSize);\n                tile.piece = piece;\n            }\n            this.tiles.push(tileColumn);\n        }\n    }\n    return ChessBoard;\n}());\nexports.ChessBoard = ChessBoard;\n// 1: Start game: Place the pieces and draw board\n// 2: If a tile with a piece is clicked, mark all areas that it can move to, and pieces it can capture\n// 3: If one of these marked tiles is clicked, move the piece to that tile\n// 4: If there is an enemy in that tile, capture it\n// 5: Else (as of 3) if the tile is another o that player's piece, start at 2 with the newly selected piece\n// Else deselect the piece\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessBoard.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessPiece.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessPiece.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ChessPiece = void 0;\nvar getTestMovementRules = function () {\n    var up = {\n        xModifier: 0,\n        yModifier: -1,\n        repeating: true,\n    };\n    var down = {\n        xModifier: 0,\n        yModifier: 1,\n        repeating: true,\n    };\n    var left = {\n        xModifier: -1,\n        yModifier: 0,\n        repeating: true,\n    };\n    var right = {\n        xModifier: 1,\n        yModifier: 0,\n        repeating: true,\n    };\n    return [up, down, left, right];\n};\nvar ChessPiece = /** @class */ (function () {\n    function ChessPiece(x, y, color, borderColor, boardSize, owner) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            var pieceSize = 70;\n            var tileWidth = _this.boardSize / 8;\n            var pieceBorderSize = 2;\n            // Drawing the piece's border\n            ctx.fillStyle = _this.borderColor;\n            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * _this.y + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);\n            // Drawing the piece itself\n            ctx.fillStyle = _this.color;\n            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2, tileWidth * _this.y + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);\n        };\n        this.mark = function (ctx, mainColor, borderColor) {\n            ctx.fillStyle = _this.color;\n            var pieceSize = 70;\n            var tileWidth = _this.boardSize / 8;\n            var pieceBorderSize = 2;\n            // Drawing the piece's border\n            ctx.fillStyle = borderColor;\n            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * _this.y + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);\n            // Drawing the piece itself\n            ctx.fillStyle = mainColor;\n            ctx.fillRect(tileWidth * _this.x + (tileWidth - pieceSize) / 2, tileWidth * _this.y + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);\n        };\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.borderColor = borderColor;\n        this.boardSize = boardSize;\n        this.movementRules = getTestMovementRules();\n        this.owner = owner;\n    }\n    return ChessPiece;\n}());\nexports.ChessPiece = ChessPiece;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessPiece.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessTile.js":
/*!*********************************************!*\
  !*** ./javascript/gameObjects/chessTile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tile = void 0;\nvar Tile = /** @class */ (function () {\n    function Tile(x, y, size, color) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            ctx.fillRect(_this.x * _this.size, _this.y * _this.size, _this.size, _this.size);\n            if (_this.piece != null) {\n                _this.piece.draw(ctx);\n            }\n        };\n        this.mark = function (ctx, color) {\n            ctx.fillStyle = color;\n            ctx.fillRect(_this.x * _this.size, _this.y * _this.size, _this.size, _this.size);\n            if (_this.piece != null) {\n                _this.piece.draw(ctx);\n            }\n        };\n        this.x = x;\n        this.y = y;\n        this.size = size;\n        this.color = color;\n        this.piece = null;\n    }\n    return Tile;\n}());\nexports.Tile = Tile;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessTile.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar chessBoard_1 = __webpack_require__(/*! ./gameObjects/chessBoard */ \"./javascript/gameObjects/chessBoard.js\");\n// Get assets from document and set properties\nvar canvas = document.querySelector(\"canvas\");\nif (canvas == null) {\n    throw new Error(\"Canvas not found\");\n}\nvar ctx = canvas.getContext(\"2d\");\nif (ctx == null) {\n    throw new Error(\"ctx not found\");\n}\nvar body = document.querySelector(\"body\");\nif (body == null) {\n    throw new Error(\"Body not found\");\n}\n// Setting dimensions of the canvas\nvar canvasWidth = 800;\nvar canvasHeight = 800;\ncanvas.width = canvasWidth;\ncanvas.height = canvasHeight;\n// Initiate game objects\nvar board = new chessBoard_1.ChessBoard(800);\nvar clickedPiece = null;\nvar clickedTile = null;\nvar markedTiles = [];\nvar markedPiece;\nvar states = {\n    base: \"base\",\n    showPossibleMoves: \"showPossibleMoves\",\n    movePiece: \"movePiece\",\n};\nvar gameState = {\n    state: states.base,\n    numberOfMoves: 0,\n    playerTurn: \"white\",\n};\n// Add eventlisteners to canvas\ncanvas.addEventListener(\"click\", function (e) {\n    main();\n    // Redraws board on click\n    // Finding where on the canvas the click happened\n    var canvasRect = canvas.getBoundingClientRect();\n    var mouseX = e.clientX - canvasRect.left;\n    var mouseY = e.clientY - canvasRect.top;\n    // Using the cursor coordinates relative to the canvas in order to find what square was clicked\n    var tileWidth = board.pixelSize / 8;\n    var xCord = Math.floor(mouseX / tileWidth);\n    var yCord = Math.floor(mouseY / tileWidth);\n    clickedTile = board.tiles[xCord][yCord];\n    clickedPiece = clickedTile.piece;\n    if (clickedPiece != null && clickedPiece.owner == gameState.playerTurn) {\n        markedPiece = clickedPiece;\n        gameState.state = states.showPossibleMoves;\n        markedTiles = board.newGetValidMoves(clickedPiece);\n        markedTiles.forEach(function (tile) {\n            tile.mark(ctx, \"blue\");\n        });\n    }\n    else if (markedTiles.includes(clickedTile) && markedPiece != null) {\n        gameState.state = states.movePiece;\n        markedTiles = [];\n        board.movePiece(markedPiece, clickedTile);\n        main();\n        if (gameState.playerTurn == \"white\") {\n            gameState.playerTurn = \"black\";\n        }\n        else {\n            gameState.playerTurn = \"white\";\n        }\n    }\n    else {\n        gameState.state = states.base;\n        markedTiles = [];\n        markedPiece = null;\n    }\n    console.log(gameState.state);\n});\n// Main function for updating game\nvar main = function () {\n    // Draw board\n    board.drawTiles(ctx);\n    //board.drawPieces(ctx);\n    // Draw pieces\n};\n// initiate animation\nmain();\n\n\n//# sourceURL=webpack://canvasgame/./javascript/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/index.js");
/******/ 	
/******/ })()
;