/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bubble; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bubble = /*#__PURE__*/function () {
  function Bubble(ctx, canvasWidth, canvasHeight, addO2) {
    _classCallCheck(this, Bubble);

    this.height = 20;
    this.width = 20;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.ctx = ctx;
    this.x = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight - 30;
    this.addO2 = addO2;
  }

  _createClass(Bubble, [{
    key: "render",
    value: function render(x) {
      this.ctx.beginPath();
      this.ctx.arc(x, this.y, 10, 0, Math.PI * 2, true); // Outer circle

      this.ctx.fillStyle = "lightblue";
      this.ctx.fill();
      this.ctx.closePath();
      this.y -= 1;

      if (x < this.canvasWidth / 2 + 20 && x > this.canvasWidth / 2 - 20 && this.y < this.canvasWidth / 2 - 20 && this.y > this.canvasWidth / 2 + 20) {
        this.addO2();
      }
    }
  }]);

  return Bubble;
}();



/***/ }),

/***/ "./src/coral.js":
/*!**********************!*\
  !*** ./src/coral.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coral; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coral = /*#__PURE__*/function () {
  function Coral() {
    _classCallCheck(this, Coral);
  }

  _createClass(Coral, [{
    key: "render",
    value: function render(ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 8, 40);
      ctx.fillRect(x + 6, y + 10, 10, 8);
      ctx.fillRect(x - 10, y + 20, 10, 8);
    }
  }]);

  return Coral;
}();



/***/ }),

/***/ "./src/diver.js":
/*!**********************!*\
  !*** ./src/diver.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diver; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Diver = /*#__PURE__*/function () {
  function Diver(x, y) {
    _classCallCheck(this, Diver);

    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
  }

  _createClass(Diver, [{
    key: "render",
    value: function render(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect( // tank
      this.x - 16, this.y - 15, this.width / 2.5, this.height * 1.5);
      ctx.fillStyle = "yellow";
      ctx.fillRect( // left flipper
      this.x - 13, this.y + 52, this.width / 2, this.height * 1.5);
      ctx.fillRect( // right flipper
      this.x, this.y + 54, this.width / 2, this.height * 1.5);
      ctx.fillStyle = "black";
      ctx.fillRect( // head
      this.x - 4, this.y - 25, this.width / 2, this.height - 2);
      ctx.fillRect( // body
      this.x - this.height / 2, this.y - this.width / 2, this.width, this.height * 2);
      ctx.fillRect( // right upper leg
      this.x + 2, this.y + 30, this.width / 3.5, this.height);
      ctx.fillRect( // right upper leg
      this.x + 2, this.y + 40, this.width / 5, this.height);
      ctx.fillRect( // left upper leg
      this.x - 7, this.y + 30, this.width / 3.5, this.height / 2);
      ctx.fillRect( // right lower leg
      this.x - 8, this.y + 40, this.width / 5, this.height);
      ctx.fillStyle = "blue";
      ctx.fillRect( // goggles
      this.x - 2, this.y - 22, this.width / 2, this.height / 5);
    }
  }]);

  return Diver;
}();



/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fish; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fish = /*#__PURE__*/function () {
  function Fish() {
    _classCallCheck(this, Fish);
  }

  _createClass(Fish, [{
    key: "render",
    value: function render(ctx, x, y) {
      ctx.fillStyle = "yellow"; // body

      ctx.fillRect(x, y, 20, 20);
      ctx.beginPath(); // head

      ctx.moveTo(x - 10, y + 5);
      ctx.lineTo(x, y + 20);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath(); // tail

      ctx.moveTo(x + 18, y + 5);
      ctx.lineTo(x + 30, y + 20);
      ctx.lineTo(x + 30, y);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "blue"; // eye

      ctx.fillRect(x - 2, y + 5, 3, 3);
    }
  }]);

  return Fish;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _diver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diver.js */ "./src/diver.js");
/* harmony import */ var _sanddollar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanddollar.js */ "./src/sanddollar.js");
/* harmony import */ var _shark_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shark.js */ "./src/shark.js");
/* harmony import */ var _bubble_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble.js */ "./src/bubble.js");
/* harmony import */ var _oxygen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oxygen.js */ "./src/oxygen.js");
/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fish.js */ "./src/fish.js");
/* harmony import */ var _coral_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coral.js */ "./src/coral.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 // import Score from './score.js';
// import * as keys from './keys.js





var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.diver = new _diver_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height / 2); // pass in keys 

    this.sanddollar = new _sanddollar_js__WEBPACK_IMPORTED_MODULE_1__["default"](); // logic for points (pass in score to render ) // logic to randomize

    this.shark = new _shark_js__WEBPACK_IMPORTED_MODULE_2__["default"](); // logic for end game? // logic to randomize

    this.oxygenMeter = new _oxygen_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.oxygenLevel = 100;
    this.fish = new _fish_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.coral = new _coral_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.score = 0;
    this.running = false;
    this.bubbles = {};
    this.fps = 15;
    this.meterColor = "limegreen";
    this.addO2 = this.addO2.bind(this);
    this.loseO2 = this.loseO2.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.generateBubbles = this.generateBubbles.bind(this);
    this.render = this.render.bind(this);
    this.initializeEvents();
    this.restart();
  }

  _createClass(Game, [{
    key: "initializeEvents",
    value: function initializeEvents() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.score = 0;
      this.render();
    }
  }, {
    key: "addO2",
    value: function addO2() {
      debugger;
    }
  }, {
    key: "loseO2",
    value: function loseO2() {
      this.oxygenLevel -= 5;

      if (this.oxygenLevel < 66) {
        this.meterColor = "orange";
      }

      if (this.oxygenLevel < 33) {
        this.meterColor = "red";
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.running = true;
      this.render();
      setInterval(this.generateBubbles, 1000);
      setInterval(this.loseO2, 1000);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.running) {
        this.play();
      } else {
        event.preventDefault();
        var newBubbles = this.bubbles;

        switch (event.keyCode) {
          case 38:
            console.log("Up key is pressed");
            this.y += this.fps;
            break;

          case 40:
            console.log("Down key is pressed");
            this.y -= this.fps;
            break;

          case 39:
            console.log("Right key is pressed");
            this.x -= this.fps; // this.ctx.translate(-this.fps, 0)

            for (var bx in this.bubbles) {
              var newX = parseInt(bx) - this.fps;
              newBubbles[newX] = newBubbles[bx];
              delete newBubbles[bx];
            }

            this.bubbles = newBubbles;
            break;

          case 37:
            debugger;
            console.log("Left key is pressed");
            event.preventDefault();
            this.x += this.fps;

            for (var _bx in newBubbles) {
              debugger;

              var _newX = parseInt(_bx) + this.fps;

              newBubbles[_newX] = newBubbles[_bx];
              debugger;
              delete newBubbles[_bx];
            }

            this.bubbles = newBubbles;
            break;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.diver.render(this.ctx);
      this.sanddollar.render(this.ctx, this.x + 40, this.y + 40);
      this.shark.render(this.ctx, this.x + 200, this.y - 200);
      this.oxygenMeter.render(this.ctx, this.oxygenLevel, this.meterColor);
      this.fish.render(this.ctx, this.x + 250, this.y + 200);
      this.coral.render(this.ctx, this.x - 250, this.y + 200, "orange");
      this.coral.render(this.ctx, this.x - 200, this.y + 150, "hotpink");

      for (var x in this.bubbles) {
        this.bubbles[x](x);
      }

      if (this.running) {
        requestAnimationFrame(this.render.bind(this));
      }
    }
  }, {
    key: "generateBubbles",
    value: function generateBubbles() {
      var bubbleX = Math.floor(Math.random() * this.canvas.width);
      var bubble = new _bubble_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, this.canvas.width, this.canvas.height, this.addO2);
      this.bubbles[bubbleX] = bubble.render.bind(bubble);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/oxygen.js":
/*!***********************!*\
  !*** ./src/oxygen.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Oxygen; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Oxygen = /*#__PURE__*/function () {
  function Oxygen() {
    _classCallCheck(this, Oxygen);
  }

  _createClass(Oxygen, [{
    key: "render",
    value: function render(ctx, n, color) {
      ctx.fillStyle = "white"; // background

      ctx.fillRect(20, 20, 20, 100);
      ctx.fillStyle = color; // level

      ctx.fillRect(25, 20, 10, n);
    }
  }]);

  return Oxygen;
}();



/***/ }),

/***/ "./src/sanddollar.js":
/*!***************************!*\
  !*** ./src/sanddollar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SandDollar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SandDollar = /*#__PURE__*/function () {
  function SandDollar() {
    _classCallCheck(this, SandDollar);

    this.width = 10;
    this.height = 10;
  }

  _createClass(SandDollar, [{
    key: "render",
    value: function render(ctx, x, y) {
      ctx.fillStyle = "pink";
      ctx.fillRect(x, y, this.width, this.height);
    }
  }]);

  return SandDollar;
}();



/***/ }),

/***/ "./src/shark.js":
/*!**********************!*\
  !*** ./src/shark.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shark; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shark = /*#__PURE__*/function () {
  function Shark() {
    _classCallCheck(this, Shark);

    this.height = 25;
    this.width = 80;
  }

  _createClass(Shark, [{
    key: "render",
    value: function render(ctx, x, y) {
      ctx.fillStyle = "gray"; // body

      ctx.fillRect(x, y, this.width, this.height);
      ctx.beginPath(); // head

      ctx.moveTo(x - 30, y + 5);
      ctx.lineTo(x, y + this.height);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath(); // tail

      ctx.moveTo(x + this.width, y);
      ctx.lineTo(x + this.width + 20, y);
      ctx.lineTo(x + this.width, y + this.height);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath(); // tail

      ctx.moveTo(x + this.width, y + 5);
      ctx.lineTo(x + this.width - 10 + 40, y - 10);
      ctx.lineTo(x + this.width + 40, y + 25);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "grey"; // fin

      ctx.beginPath();
      ctx.moveTo(x + 30, y + 5);
      ctx.lineTo(x + this.width / 4 + 40, y - 10);
      ctx.lineTo(x + this.width / 4 + 40, y + 5);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "red"; // eye

      ctx.fillRect(x, y + 10, 3, 3);
    }
  }]);

  return Shark;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3h5Z2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9zYW5kZG9sbGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQnViYmxlIiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJhZGRPMiIsImhlaWdodCIsIndpZHRoIiwieCIsIk1hdGgiLCJyYW5kb20iLCJ5IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiQ29yYWwiLCJjb2xvciIsImZpbGxSZWN0IiwiRGl2ZXIiLCJGaXNoIiwibW92ZVRvIiwibGluZVRvIiwiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZGl2ZXIiLCJzYW5kZG9sbGFyIiwiU2FuZERvbGxhciIsInNoYXJrIiwiU2hhcmsiLCJveHlnZW5NZXRlciIsIk94eWdlbiIsIm94eWdlbkxldmVsIiwiZmlzaCIsImNvcmFsIiwic2NvcmUiLCJydW5uaW5nIiwiYnViYmxlcyIsImZwcyIsIm1ldGVyQ29sb3IiLCJiaW5kIiwibG9zZU8yIiwiaGFuZGxlS2V5RG93biIsImdlbmVyYXRlQnViYmxlcyIsInJlbmRlciIsImluaXRpYWxpemVFdmVudHMiLCJyZXN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiZXZlbnQiLCJwbGF5IiwicHJldmVudERlZmF1bHQiLCJuZXdCdWJibGVzIiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJieCIsIm5ld1giLCJwYXJzZUludCIsImNsZWFyUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ1YmJsZVgiLCJmbG9vciIsImJ1YmJsZSIsImdhbWUiLCJuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqRnFCQSxNO0FBQ2pCLGtCQUFZQyxHQUFaLEVBQWlCQyxXQUFqQixFQUE4QkMsWUFBOUIsRUFBNENDLEtBQTVDLEVBQW1EO0FBQUE7O0FBQy9DLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLSixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS00s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SjtBQUNBZixTQUFHLENBQUNjLElBQUo7QUFHQWQsU0FBRyxDQUFDYSxTQUFKLEdBQWdCLEtBQWhCLENBdENjLENBc0NTOztBQUN2QmIsU0FBRyxDQUFDa0IsUUFBSixDQUNJWixDQURKLEVBQ09HLENBQUMsR0FBRyxFQURYLEVBRUksQ0FGSixFQUVPLENBRlA7QUFLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREwsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBhZGRPMikge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwOyBcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwOyBcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoOyBcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSAoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzV2lkdGgpOyBcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLSAzMDsgXG4gICAgICAgIHRoaXMuYWRkTzIgPSBhZGRPMjsgXG4gICAgfVxuXG5cbiAgICByZW5kZXIoeCkge1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgdGhpcy55LCAxMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpOyAvLyBPdXRlciBjaXJjbGVcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLnkgLT0gMTsgXG4gICAgICAgIFxuICAgICAgICBpZiAoeCA8ICh0aGlzLmNhbnZhc1dpZHRoLzIgKyAyMCkgJiZcbiAgICAgICAgICAgIHggPiAodGhpcy5jYW52YXNXaWR0aC8yIC0gMjApICYmIFxuICAgICAgICAgICAgdGhpcy55IDwgKHRoaXMuY2FudmFzV2lkdGgvMiAtIDIwKSAmJlxuICAgICAgICAgICAgdGhpcy55ID4gKHRoaXMuY2FudmFzV2lkdGggLyAyICsgMjApKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE8yKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgeCwgeSwgY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgOCwgNDApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCArNiwgeSArIDEwLCAxMCwgOCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4IC0gMTAsIHkgKyAyMCwgMTAsIDgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZlciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gdGFua1xuICAgICAgICAgICAgdGhpcy54IC0gMTYsIHRoaXMueS0xNSxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAyLjUsIHRoaXMuaGVpZ2h0ICogMS41LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLnggLSAxMywgdGhpcy55KzUyLFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSs1NCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQgKiAxLjUsXG4gICAgICAgICk7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGhlYWRcbiAgICAgICAgICAgIHRoaXMueC00LCB0aGlzLnktMjUsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0LTIsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gYm9keVxuICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy55IC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAyLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54KzIsIHRoaXMueSszMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMy41LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54ICsgMiwgdGhpcy55KzQwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDUsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC03LCB0aGlzLnkgKyAzMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAzLjUsIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBsb3dlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC04LCB0aGlzLnkgKyA0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyBnb2dnbGVzXG4gICAgICAgICAgICB0aGlzLngtMiwgdGhpcy55IC0gMjIsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyA1LFxuICAgICAgICApO1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7IC8vIGJvZHlcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDIwLCAyMCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyBoZWFkXG4gICAgICAgIGN0eC5tb3ZlVG8oeCAtMTAsIHkgKyA1KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyB0YWlsXG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIDE4LCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIDMwLCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHggKyAzMCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7IC8vIGV5ZVxuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB4LTIsIHkgKyA1LFxuICAgICAgICAgICAgMywgMyxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgRGl2ZXIgZnJvbSAnLi9kaXZlci5qcyc7XG5pbXBvcnQgU2FuZERvbGxhciBmcm9tICcuL3NhbmRkb2xsYXIuanMnO1xuaW1wb3J0IFNoYXJrIGZyb20gJy4vc2hhcmsuanMnO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL2J1YmJsZS5qcyc7IFxuLy8gaW1wb3J0IFNjb3JlIGZyb20gJy4vc2NvcmUuanMnO1xuLy8gaW1wb3J0ICogYXMga2V5cyBmcm9tICcuL2tleXMuanNcbmltcG9ydCBPeHlnZW4gZnJvbSAnLi9veHlnZW4uanMnO1xuaW1wb3J0IEZpc2ggZnJvbSAnLi9maXNoLmpzJztcbmltcG9ydCBDb3JhbCBmcm9tICcuL2NvcmFsLmpzJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkgeyAgXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuZGl2ZXIgPSBuZXcgRGl2ZXIodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTsgLy8gcGFzcyBpbiBrZXlzIFxuICAgIHRoaXMuc2FuZGRvbGxhciA9IG5ldyBTYW5kRG9sbGFyKCk7IC8vIGxvZ2ljIGZvciBwb2ludHMgKHBhc3MgaW4gc2NvcmUgdG8gcmVuZGVyICkgLy8gbG9naWMgdG8gcmFuZG9taXplXG4gICAgdGhpcy5zaGFyayA9IG5ldyBTaGFyaygpOyAvLyBsb2dpYyBmb3IgZW5kIGdhbWU/IC8vIGxvZ2ljIHRvIHJhbmRvbWl6ZVxuICAgIHRoaXMub3h5Z2VuTWV0ZXIgPSBuZXcgT3h5Z2VuKCk7XG4gICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMDtcbiAgICB0aGlzLmZpc2ggPSBuZXcgRmlzaCgpO1xuICAgIHRoaXMuY29yYWwgPSBuZXcgQ29yYWwoKTsgXG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5idWJibGVzID0ge307XG4gICAgdGhpcy5mcHMgPSAxNTtcbiAgICB0aGlzLm1ldGVyQ29sb3IgPSBcImxpbWVncmVlblwiO1xuXG5cbiAgICB0aGlzLmFkZE8yID0gdGhpcy5hZGRPMi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9zZU8yID0gdGhpcy5sb3NlTzIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdlbmVyYXRlQnViYmxlcyA9IHRoaXMuZ2VuZXJhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuXG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGFkZE8yKCkge1xuICAgICAgICBkZWJ1Z2dlcjsgXG4gICAgfVxuXG4gICAgbG9zZU8yKCkge1xuICAgICAgICB0aGlzLm94eWdlbkxldmVsIC09IDU7IFxuICAgICAgICBpZiAodGhpcy5veHlnZW5MZXZlbCA8IDY2KSB7XG4gICAgICAgICAgICB0aGlzLm1ldGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3h5Z2VuTGV2ZWwgPCAzMykge1xuICAgICAgICAgICAgdGhpcy5tZXRlckNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVCdWJibGVzLCAxMDAwKVxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmxvc2VPMiwgMTAwMClcbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgbmV3QnViYmxlcyA9IHRoaXMuYnViYmxlczsgXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwIGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG93biBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJpZ2h0IGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZSgtdGhpcy5mcHMsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGJ4KSAtIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0J1YmJsZXNbbmV3WF0gPSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVmdCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gbmV3QnViYmxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdYID0gcGFyc2VJbnQoYngpICsgdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QnViYmxlc1tuZXdYXSA9IG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kaXZlci5yZW5kZXIodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLnNhbmRkb2xsYXIucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggKyA0MCwgdGhpcy55ICsgNDApO1xuICAgICAgICB0aGlzLnNoYXJrLnJlbmRlcih0aGlzLmN0eCwgdGhpcy54ICsgMjAwLCB0aGlzLnkgLSAyMDApO1xuICAgICAgICB0aGlzLm94eWdlbk1ldGVyLnJlbmRlcih0aGlzLmN0eCwgdGhpcy5veHlnZW5MZXZlbCwgdGhpcy5tZXRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5maXNoLnJlbmRlcih0aGlzLmN0eCwgdGhpcy54ICsgMjUwLCB0aGlzLnkgKyAyMDApO1xuICAgICAgICB0aGlzLmNvcmFsLnJlbmRlcih0aGlzLmN0eCwgdGhpcy54IC0gMjUwLCB0aGlzLnkgKyAyMDAsIFwib3JhbmdlXCIpO1xuICAgICAgICB0aGlzLmNvcmFsLnJlbmRlcih0aGlzLmN0eCwgdGhpcy54IC0gMjAwLCB0aGlzLnkgKyAxNTAsIFwiaG90cGlua1wiKTtcblxuICAgICAgXG4gICAgICAgIGZvciAobGV0IHggaW4gdGhpcy5idWJibGVzKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXNbeF0oeCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7ICAgICAgICAgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJ1YmJsZXMoKSB7XG4gICAgICAgIGxldCBidWJibGVYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGgpXG4gICAgICAgIGxldCBidWJibGUgPSBuZXcgQnViYmxlKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmFkZE8yKTtcbiAgICAgICAgdGhpcy5idWJibGVzW2J1YmJsZVhdID0gYnViYmxlLnJlbmRlci5iaW5kKGJ1YmJsZSk7XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7IFxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmxldCBnYW1lID0gbmV3IEdhbWUoKTsgXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3h5Z2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcihjdHgsIG4sIGNvbG9yKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7IC8vIGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwLCAyMCwgMjAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjsgLy8gbGV2ZWxcbiAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyMCwgMTAsIG4pO1xuXG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZERvbGxhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4LCB4LCB5KSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwaW5rXCJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgICAgICB4LCB5LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmsge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDI1O1xuICAgICAgICB0aGlzLndpZHRoID0gODA7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgeCwgeSkge1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiOyAvLyBib2R5XG4gICAgICAgIGN0eC5maWxsUmVjdCggXG4gICAgICAgIHgsIHksXG4gICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gaGVhZFxuICAgICAgICBjdHgubW92ZVRvKHgtMzAsIHkrNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICBjdHgubW92ZVRvKHggKyB0aGlzLndpZHRoLCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdGhpcy53aWR0aCArIDIwLCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdGhpcy53aWR0aCwgeSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICBjdHgubW92ZVRvKHggKyB0aGlzLndpZHRoLCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHRoaXMud2lkdGggLSAxMCArIDQwLCB5IC0gMTApO1xuICAgICAgICBjdHgubGluZVRvKHggKyB0aGlzLndpZHRoICsgNDAsIHkgKyAyNSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7IC8vIGZpblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIDMwLCB5ICsgNSlcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdGhpcy53aWR0aC80ICsgNDAsIHkgLSAxMCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHRoaXMud2lkdGgvNCArIDQwLCB5ICsgNSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiOyAvLyBleWVcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgeCwgeSArIDEwICxcbiAgICAgICAgICAgIDMsIDMsXG4gICAgICAgICk7XG5cbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==