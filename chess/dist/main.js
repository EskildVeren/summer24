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

/***/ "./javascript/gameObjects/chessBoard.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessBoard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.chessBoard = void 0;\nvar chessPiece_1 = __webpack_require__(/*! ./chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar chessTile_1 = __webpack_require__(/*! ./chessTile */ \"./javascript/gameObjects/chessTile.js\");\nvar chessBoard = /** @class */ (function () {\n    function chessBoard(pixelSize) {\n        var _this = this;\n        this.drawTiles = function (ctx) {\n            for (var i = 0; i < _this.tiles.length; i++) {\n                for (var tileIndex = 0; tileIndex < _this.tiles[i].length; tileIndex++) {\n                    _this.tiles[i][tileIndex].draw(ctx);\n                }\n            }\n        };\n        this.drawPieces = function (ctx) {\n            _this.activePieces.forEach(function (chessPiece) {\n                chessPiece.draw(ctx);\n            });\n        };\n        this.pixelSize = pixelSize;\n        this.tiles = [];\n        this.activePieces = [];\n        this.heaven = [];\n        // Add tiles to the chessboards\n        for (var x = 1; x <= 8; x++) {\n            var tileColumn = [];\n            for (var y = 1; y <= 8; y++) {\n                // Setting the tiles color\n                var color = \"white\";\n                if (x % 2 === y % 2) {\n                    color = \"black\";\n                }\n                tileColumn.push(new chessTile_1.Tile(x, y, this.pixelSize / 8, color));\n                if (y <= 2 || y >= 7) {\n                    this.activePieces.push(new chessPiece_1.chessPiece(x, y, \"purple\", this.pixelSize));\n                }\n            }\n            this.tiles.push(tileColumn);\n        }\n    }\n    return chessBoard;\n}());\nexports.chessBoard = chessBoard;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessBoard.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessPiece.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessPiece.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.chessPiece = void 0;\nvar chessPiece = /** @class */ (function () {\n    function chessPiece(x, y, color, boardSize) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            var pieceSize = 70;\n            var tileWidth = _this.boardSize / 8;\n            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);\n        };\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.boardSize = boardSize;\n    }\n    return chessPiece;\n}());\nexports.chessPiece = chessPiece;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessPiece.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessTile.js":
/*!*********************************************!*\
  !*** ./javascript/gameObjects/chessTile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tile = void 0;\nvar Tile = /** @class */ (function () {\n    function Tile(x, y, size, color) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            ctx.fillRect((_this.x - 1) * _this.size, (_this.y - 1) * _this.size, _this.size, _this.size);\n        };\n        this.x = x;\n        this.y = y;\n        this.size = size;\n        this.color = color;\n        this.piece = null;\n    }\n    return Tile;\n}());\nexports.Tile = Tile;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessTile.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar chessBoard_1 = __webpack_require__(/*! ./gameObjects/chessBoard */ \"./javascript/gameObjects/chessBoard.js\");\n// Get assets from document and set properties\nvar canvas = document.querySelector(\"canvas\");\nif (canvas == null) {\n    throw new Error(\"Canvas not found\");\n}\nvar ctx = canvas.getContext(\"2d\");\nif (ctx == null) {\n    throw new Error(\"ctx not found\");\n}\nvar body = document.querySelector(\"body\");\nif (body == null) {\n    throw new Error(\"Body not found\");\n}\n// Setting dimensions of the canvas\nvar canvasWidth = 800;\nvar canvasHeight = 800;\ncanvas.width = canvasWidth;\ncanvas.height = canvasHeight;\n// Initiate game objects\nvar board = new chessBoard_1.chessBoard(800);\n// Add eventlisteners to canvas\ncanvas.addEventListener(\"click\", function (e) {\n    // Redrawing board on each click\n    main();\n    // Finding where on the canvas the click happened\n    var canvasRect = canvas.getBoundingClientRect();\n    var mouseX = e.clientX - canvasRect.left;\n    var mouseY = e.clientY - canvasRect.top;\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(mouseX - 20, mouseY - 20, 40, 40);\n    // Using the cursor coordinates relative to the canvas in order to find what square was clicked\n    var tileWidth = board.pixelSize / 8;\n    var xCord = Math.floor(mouseX / tileWidth);\n    var yCord = Math.floor(mouseY / tileWidth);\n    board.tiles[xCord][yCord].color = \"blue\";\n    main();\n});\n// Main function for updating game\nvar main = function () {\n    // Draw board\n    board.drawTiles(ctx);\n    board.drawPieces(ctx);\n    // Draw pieces\n};\n// initiate animation\nmain();\n\n\n//# sourceURL=webpack://canvasgame/./javascript/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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