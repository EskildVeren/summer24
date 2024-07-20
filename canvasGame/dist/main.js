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

/***/ "./javascript/gameObjects/entity.js":
/*!******************************************!*\
  !*** ./javascript/gameObjects/entity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Entity = void 0;\nvar Entity = /** @class */ (function () {\n    function Entity(ctx, x, y) {\n        var _this = this;\n        this.vx = 0;\n        this.vy = 0;\n        this.ax = 0;\n        this.ay = 0;\n        this.draw = function () {\n            _this.ctx.fillRect(_this.x, _this.y, 50, 50);\n        };\n        this.move = function (timeStamp) {\n            _this.vx += _this.ax * timeStamp;\n            _this.vy += _this.ay * timeStamp;\n            _this.x += _this.vx;\n            _this.y += _this.vy;\n        };\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n    }\n    return Entity;\n}());\nexports.Entity = Entity;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/entity.js?");

/***/ }),

/***/ "./javascript/gameObjects/player.js":
/*!******************************************!*\
  !*** ./javascript/gameObjects/player.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nvar playerProjectile_1 = __webpack_require__(/*! ./playerProjectile */ \"./javascript/gameObjects/playerProjectile.js\");\nvar Player = /** @class */ (function () {\n    function Player(ctx, x, y, width, height, maxSpeed, projectiles) {\n        var _this = this;\n        this.vx = 0;\n        this.vy = 0;\n        this.ax = 0;\n        this.ay = 0;\n        this.draw = function () {\n            _this.ctx.fillStyle = \"mediumvioletred\";\n            _this.ctx.fillRect(_this.x, _this.y, _this.width, _this.height);\n        };\n        this.setMovement = function (direction) {\n            console.log(direction);\n            switch (direction) {\n                case \" \":\n                    _this.shootProjetile(_this.projectiles);\n                    break;\n                case \"ArrowLeft\":\n                    _this.ax = -1;\n                    break;\n                case \"ArrowRight\":\n                    _this.ax = 1;\n                    break;\n                case \"ArrowUp\":\n                    _this.ay = -1;\n                    break;\n                case \"ArrowDown\":\n                    _this.ay = 1;\n                    break;\n                case \"stopX\":\n                    _this.ax = 0;\n                    break;\n                case \"stopY\":\n                    _this.ay = 0;\n                    break;\n            }\n        };\n        this.move = function (timeStamp) {\n            _this.vx += (_this.ax * timeStamp) / 200 - 0.1 * _this.vx;\n            if (_this.vx < 0.005 && _this.vx > -0.005) {\n                _this.vx = 0;\n            }\n            _this.vy += (_this.ay * timeStamp) / 200 - 0.1 * _this.vy;\n            if (_this.vy < 0.005 && _this.vy > -0.005) {\n                _this.vy = 0;\n            }\n            _this.x += _this.vx * timeStamp;\n            _this.y += _this.vy * timeStamp;\n            if (_this.x < 0) {\n                _this.x = 0;\n            }\n            if (_this.y < 0) {\n                _this.y = 0;\n            }\n            if (_this.x > 1400 - _this.width) {\n                _this.x = 1400 - _this.width;\n            }\n            if (_this.y > 800 - _this.height) {\n                _this.y = 800 - _this.height;\n            }\n        };\n        this.shootProjetile = function (projectileList) {\n            var projectile = new playerProjectile_1.PlayerProjectile(_this.ctx, _this.x + _this.width / 2, _this.y + _this.height / 2, -5);\n            projectileList.push(projectile);\n        };\n        this.x = x;\n        this.y = y;\n        this.ctx = ctx;\n        this.width = width;\n        this.height = height;\n        this.maxSpeed = maxSpeed;\n        this.projectiles = projectiles;\n    }\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/player.js?");

/***/ }),

/***/ "./javascript/gameObjects/playerProjectile.js":
/*!****************************************************!*\
  !*** ./javascript/gameObjects/playerProjectile.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PlayerProjectile = void 0;\nvar entity_1 = __webpack_require__(/*! ./entity */ \"./javascript/gameObjects/entity.js\");\nvar PlayerProjectile = /** @class */ (function (_super) {\n    __extends(PlayerProjectile, _super);\n    function PlayerProjectile(ctx, x, y, vy) {\n        var _this = _super.call(this, ctx, x, y) || this;\n        _this.vy = vy;\n        return _this;\n    }\n    return PlayerProjectile;\n}(entity_1.Entity));\nexports.PlayerProjectile = PlayerProjectile;\n\n\n//# sourceURL=webpack://canvasgame/./javascript/gameObjects/playerProjectile.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar player_1 = __webpack_require__(/*! ./gameObjects/player */ \"./javascript/gameObjects/player.js\");\nvar canvas = document.querySelector(\"canvas\");\nvar canvasWidth = 1400;\nvar canvasHeight = 800;\nif (canvas == null) {\n    throw new Error(\"Canvas not found\");\n}\nvar ctx = canvas.getContext(\"2d\");\nif (ctx == null) {\n    throw new Error(\"ctx not found\");\n}\nvar body = document.querySelector(\"body\");\nif (body == null) {\n    throw new Error(\"Body not found\");\n}\n// Setting dimensions of the canvas\ncanvas.width = canvasWidth;\ncanvas.height = canvasHeight;\n// Initiating entities\nvar projectiles = [];\nvar player = new player_1.Player(ctx, 675, 700, 50, 50, 180, projectiles);\n// Setting up userInput with keyboard\nbody.addEventListener(\"keydown\", function (e) {\n    player.setMovement(e.key);\n});\nbody.addEventListener(\"keyup\", function (e) {\n    if ((e.key == \"ArrowLeft\" && player.ax == -1) ||\n        (e.key == \"ArrowRight\" && player.ax == 1)) {\n        player.setMovement(\"stopX\");\n    }\n    else if ((e.key == \"ArrowUp\" && player.ay == -1) ||\n        (e.key == \"ArrowDown\" && player.ay == 1)) {\n        player.setMovement(\"stopY\");\n    }\n});\nvar previousTimestamp = 0;\n// Main function for updating game\nvar main = function (timeStamp) {\n    // Setup for animationFrame\n    var deltaTime = timeStamp - previousTimestamp;\n    //console.log(deltaTime);\n    ctx.clearRect(0, 0, canvasWidth, canvasHeight);\n    // Move entities\n    player.move(deltaTime);\n    projectiles.forEach(function (entity) {\n        entity.move(deltaTime);\n        entity.draw();\n    });\n    // Draw new screen\n    player.draw();\n    // setup for next animationFrame\n    previousTimestamp = timeStamp;\n    requestAnimationFrame(main);\n};\n// initiate animation\nrequestAnimationFrame(main);\n\n\n//# sourceURL=webpack://canvasgame/./javascript/index.js?");

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