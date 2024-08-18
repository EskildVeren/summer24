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

/***/ "./javascript/gameObjects/chessBoard.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessBoard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ChessBoard = void 0;\nvar colors_1 = __webpack_require__(/*! ../assets/colors */ \"./javascript/assets/colors.js\");\nvar chessPiece_1 = __webpack_require__(/*! ./chessPiece */ \"./javascript/gameObjects/chessPiece.js\");\nvar chessTile_1 = __webpack_require__(/*! ./chessTile */ \"./javascript/gameObjects/chessTile.js\");\nvar ChessBoard = /** @class */ (function () {\n    function ChessBoard(pixelSize) {\n        var _this = this;\n        this.drawTiles = function (ctx) {\n            for (var i = 0; i < _this.tiles.length; i++) {\n                for (var tileIndex = 0; tileIndex < _this.tiles[i].length; tileIndex++) {\n                    _this.tiles[i][tileIndex].draw(ctx);\n                }\n            }\n        };\n        this.drawPieces = function (ctx) {\n            _this.activePieces.forEach(function (chessPiece) {\n                chessPiece.draw(ctx);\n            });\n        };\n        this.getValidMoves = function (piece) {\n            var possibleTiles = [];\n            var x = piece.x - 1;\n            var y = piece.y - 1;\n            var movementRules = piece.movementRules;\n            movementRules.forEach(function (movementStyle) {\n                switch (movementStyle.toLowerCase()) {\n                    case \"rook\":\n                        _this.tiles.forEach(function (column) {\n                            possibleTiles.push(column[y]);\n                        });\n                        _this.tiles[x].forEach(function (tile) {\n                            possibleTiles.push(tile);\n                        });\n                        break;\n                    case \"up\":\n                        for (var i = y - 1; i >= 0; i--) {\n                            var reachedTile = _this.tiles[x][i];\n                            if (reachedTile.piece == null) {\n                                possibleTiles.push(reachedTile);\n                            }\n                            else if (reachedTile.piece.owner != piece.owner) {\n                                possibleTiles.push(reachedTile);\n                                break;\n                            }\n                            else {\n                                break;\n                            }\n                        }\n                        break;\n                    case \"down\":\n                        for (var i = y + 1; i <= 7; i++) {\n                            var reachedTile = _this.tiles[x][i];\n                            if (reachedTile.piece == null) {\n                                possibleTiles.push(reachedTile);\n                            }\n                            else if (reachedTile.piece.owner != piece.owner) {\n                                possibleTiles.push(reachedTile);\n                                break;\n                            }\n                            else {\n                                break;\n                            }\n                        }\n                        break;\n                    case \"left\":\n                        for (var i = x - 1; i >= 0; i--) {\n                            var reachedTile = _this.tiles[i][y];\n                            if (reachedTile.piece == null) {\n                                possibleTiles.push(reachedTile);\n                            }\n                            else if (reachedTile.piece.owner != piece.owner) {\n                                possibleTiles.push(reachedTile);\n                                break;\n                            }\n                            else {\n                                break;\n                            }\n                        }\n                        break;\n                    case \"right\":\n                        for (var i = x + 1; i <= 7; i++) {\n                            var reachedTile = _this.tiles[i][y];\n                            if (reachedTile.piece == null) {\n                                possibleTiles.push(reachedTile);\n                            }\n                            else if (reachedTile.piece.owner != piece.owner) {\n                                possibleTiles.push(reachedTile);\n                                break;\n                            }\n                            else {\n                                break;\n                            }\n                        }\n                        break;\n                    default:\n                        break;\n                }\n            });\n            return possibleTiles;\n        };\n        this.movePiece = function (piece, newTile) {\n            var oldTile = _this.tiles[piece.x][piece.y];\n            oldTile.piece = null;\n            newTile.piece = piece;\n            piece.x = newTile.x;\n            piece.y = newTile.y;\n            // console.log(\"New piece position:\", piece);\n        };\n        this.pixelSize = pixelSize;\n        this.tiles = [];\n        this.activePieces = [];\n        this.heaven = [];\n        // Add tiles to the chessboards\n        for (var x = 1; x <= 8; x++) {\n            var tileColumn = [];\n            for (var y = 1; y <= 8; y++) {\n                // Setting the tiles color\n                var color = colors_1.tileWhite;\n                if (x % 2 === y % 2) {\n                    color = colors_1.tileBlack;\n                }\n                var tile = new chessTile_1.Tile(x, y, this.pixelSize / 8, color);\n                tileColumn.push(tile);\n                if (y <= 2) {\n                    var piece = new chessPiece_1.ChessPiece(x, y, colors_1.pieceBlack, colors_1.pieceBorderBlack, this.pixelSize, \"black\");\n                    this.activePieces.push(piece);\n                    tile.piece = piece;\n                }\n                if (y >= 7) {\n                    var piece = new chessPiece_1.ChessPiece(x, y, colors_1.pieceWhite, colors_1.pieceBorderWhite, this.pixelSize, \"white\");\n                    this.activePieces.push(piece);\n                    tile.piece = piece;\n                }\n            }\n            this.tiles.push(tileColumn);\n        }\n    }\n    return ChessBoard;\n}());\nexports.ChessBoard = ChessBoard;\n// 1: Start game: Place the pieces and draw board\n// 2: If a tile with a piece is clicked, mark all areas that it can move to, and pieces it can capture\n// 3: If one of these marked tiles is clicked, move the piece to that tile\n// 4: If there is an enemy in that tile, capture it\n// 5: Else (as of 3) if the tile is another o that player's piece, start at 2 with the newly selected piece\n// Else deselect the piece\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessBoard.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessPiece.js":
/*!**********************************************!*\
  !*** ./javascript/gameObjects/chessPiece.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ChessPiece = void 0;\nvar ChessPiece = /** @class */ (function () {\n    function ChessPiece(x, y, color, borderColor, boardSize, owner) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            var pieceSize = 70;\n            var tileWidth = _this.boardSize / 8;\n            var pieceBorderSize = 2;\n            // Drawing the piece's border\n            ctx.fillStyle = _this.borderColor;\n            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);\n            // Drawing the piece itself\n            ctx.fillStyle = _this.color;\n            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);\n        };\n        this.mark = function (ctx, mainColor, borderColor) {\n            ctx.fillStyle = _this.color;\n            var pieceSize = 70;\n            var tileWidth = _this.boardSize / 8;\n            var pieceBorderSize = 2;\n            // Drawing the piece's border\n            ctx.fillStyle = borderColor;\n            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2 - pieceBorderSize, pieceSize + pieceBorderSize * 2, pieceSize + pieceBorderSize * 2);\n            // Drawing the piece itself\n            ctx.fillStyle = mainColor;\n            ctx.fillRect(tileWidth * (_this.x - 1) + (tileWidth - pieceSize) / 2, tileWidth * (_this.y - 1) + (tileWidth - pieceSize) / 2, pieceSize, pieceSize);\n        };\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.borderColor = borderColor;\n        this.boardSize = boardSize;\n        this.movementRules = [\"up\", \"down\", \"left\", \"right\"];\n        this.owner = owner;\n    }\n    return ChessPiece;\n}());\nexports.ChessPiece = ChessPiece;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessPiece.js?");

/***/ }),

/***/ "./javascript/gameObjects/chessTile.js":
/*!*********************************************!*\
  !*** ./javascript/gameObjects/chessTile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tile = void 0;\nvar Tile = /** @class */ (function () {\n    function Tile(x, y, size, color) {\n        var _this = this;\n        this.draw = function (ctx) {\n            ctx.fillStyle = _this.color;\n            ctx.fillRect((_this.x - 1) * _this.size, (_this.y - 1) * _this.size, _this.size, _this.size);\n            if (_this.piece != null) {\n                _this.piece.draw(ctx);\n            }\n        };\n        this.mark = function (ctx, color) {\n            ctx.fillStyle = color;\n            ctx.fillRect((_this.x - 1) * _this.size, (_this.y - 1) * _this.size, _this.size, _this.size);\n            if (_this.piece != null) {\n                _this.piece.draw(ctx);\n            }\n        };\n        this.x = x;\n        this.y = y;\n        this.size = size;\n        this.color = color;\n        this.piece = null;\n    }\n    return Tile;\n}());\nexports.Tile = Tile;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/chessTile.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar chessBoard_1 = __webpack_require__(/*! ./gameObjects/chessBoard */ \"./javascript/gameObjects/chessBoard.js\");\n// Get assets from document and set properties\nvar canvas = document.querySelector(\"canvas\");\nif (canvas == null) {\n    throw new Error(\"Canvas not found\");\n}\nvar ctx = canvas.getContext(\"2d\");\nif (ctx == null) {\n    throw new Error(\"ctx not found\");\n}\nvar body = document.querySelector(\"body\");\nif (body == null) {\n    throw new Error(\"Body not found\");\n}\n// Setting dimensions of the canvas\nvar canvasWidth = 800;\nvar canvasHeight = 800;\ncanvas.width = canvasWidth;\ncanvas.height = canvasHeight;\n// Initiate game objects\nvar board = new chessBoard_1.ChessBoard(800);\nvar clickedPiece = null;\nvar clickedTile = null;\nvar markedTiles = [];\nvar markedPiece;\nvar states = {\n    base: \"base\",\n    showPossibleMoves: \"showPossibleMoves\",\n    movePiece: \"movePiece\",\n};\nvar gameState = {\n    state: states.base,\n    numberOfMoves: 0,\n    playerTurn: \"white\",\n};\n// Add eventlisteners to canvas\ncanvas.addEventListener(\"click\", function (e) {\n    main();\n    // Redraws board on click\n    // Finding where on the canvas the click happened\n    var canvasRect = canvas.getBoundingClientRect();\n    var mouseX = e.clientX - canvasRect.left;\n    var mouseY = e.clientY - canvasRect.top;\n    // Using the cursor coordinates relative to the canvas in order to find what square was clicked\n    var tileWidth = board.pixelSize / 8;\n    var xCord = Math.floor(mouseX / tileWidth);\n    var yCord = Math.floor(mouseY / tileWidth);\n    clickedTile = board.tiles[xCord][yCord];\n    clickedPiece = clickedTile.piece;\n    if (clickedPiece != null && clickedPiece.owner == gameState.playerTurn) {\n        markedPiece = clickedPiece;\n        gameState.state = states.showPossibleMoves;\n        markedTiles = board.getValidMoves(clickedPiece);\n        markedTiles.forEach(function (tile) {\n            tile.mark(ctx, \"blue\");\n        });\n    }\n    else if (markedTiles.includes(clickedTile) && markedPiece != null) {\n        gameState.state = states.movePiece;\n        markedTiles = [];\n        board.movePiece(markedPiece, clickedTile);\n        main();\n        if (gameState.playerTurn == \"white\") {\n            gameState.playerTurn = \"black\";\n        }\n        else {\n            gameState.playerTurn = \"white\";\n        }\n    }\n    else {\n        gameState.state = states.base;\n        markedTiles = [];\n        markedPiece = null;\n    }\n    console.log(gameState.state);\n});\n// Main function for updating game\nvar main = function () {\n    // Draw board\n    board.drawTiles(ctx);\n    //board.drawPieces(ctx);\n    // Draw pieces\n};\n// initiate animation\nmain();\n\n\n//# sourceURL=webpack://canvasgame/./javascript/index.js?");

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