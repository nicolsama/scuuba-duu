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
    this.ctx = ctx; // this.x = (Math.random() * this.canvasWidth); 

    this.y = this.canvasHeight + 30;
    this.addO2 = addO2;
    this.range = 20;
    this.popped = false;
  }

  _createClass(Bubble, [{
    key: "render",
    value: function render(x) {
      if (!this.popped) {
        this.ctx.beginPath();
        this.ctx.arc(x, this.y, 10, 0, Math.PI * 2, true);
        this.ctx.fillStyle = "lightblue";
        this.ctx.fill();
        this.ctx.closePath();
        this.y -= 1;
      } else {
        null;
      }

      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var y = this.y;

      if (x > minX && x < maxX && y > minY && y < maxY && !this.popped) {
        debugger;
        this.addO2(); // pass in the bubble to be deleted

        this.popped = true;
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
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.js */ "./src/score.js");
/* harmony import */ var _oxygen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oxygen.js */ "./src/oxygen.js");
/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fish.js */ "./src/fish.js");
/* harmony import */ var _coral_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coral.js */ "./src/coral.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.diver = new _diver_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height / 2); // this.sanddollar = new SandDollar(); // logic for points (pass in score to render ) // logic to randomize

    this.oxygenMeter = new _oxygen_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.oxygenLevel = 100; // this.fish = new Fish();
    // this.coral = new Coral(); 

    this.score = 0;
    this.scoreBoard = new _score_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.fps = 8;
    this.meterColor = "limegreen";
    this.bubbles = {};
    this.sharks = {};
    this.running = false;
    this.isGameOver = false; // setInterval Ids

    this.bubbleInterval = null;
    this.oxygenInterval = null;
    this.sharkInterval = null; //initialize & bind

    this.gameOver = this.gameOver.bind(this);
    this.generateSharks = this.generateSharks.bind(this);
    this.deleteOldBubbles = this.deleteOldBubbles.bind(this);
    this.deleteOldSharks = this.deleteOldSharks.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.addOxygen = this.addOxygen.bind(this);
    this.loseOxygen = this.loseOxygen.bind(this);
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
      this.isGameOver = false;
      this.score = 0;
      this.oxygenLevel = 100;
      this.meterStatus();
      this.bubbles = {};
      this.sharks = {};
      this.render();
    }
  }, {
    key: "play",
    value: function play() {
      this.running = true;
      this.render();
      this.bubbleInterval = setInterval(this.generateBubbles, 2000);
      this.oxygenInterval = setInterval(this.loseOxygen, 2000);
      this.sharkInterval = setInterval(this.generateSharks, 10000);
    }
  }, {
    key: "addOxygen",
    value: function addOxygen() {
      console.log("Adding Oxygen");
      this.oxygenLevel + 20 > 100 ? this.oxygenLevel = 100 : this.oxygenLevel += 20;
      this.meterStatus();
    }
  }, {
    key: "loseOxygen",
    value: function loseOxygen() {
      this.oxygenLevel -= 5;
      this.meterStatus();
    }
  }, {
    key: "meterStatus",
    value: function meterStatus() {
      if (this.oxygenLevel >= 66) this.meterColor = "limegreen";
      if (this.oxygenLevel < 66) this.meterColor = "orange";
      if (this.oxygenLevel < 33) this.meterColor = "red";
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      this.score += 1;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.running) {
        this.play();
      } else {
        event.preventDefault();
        var newBubbles = this.bubbles;
        var newSharks = this.sharks;

        switch (event.keyCode) {
          case 38:
            console.log("Up key is pressed"); // this.y += this.fps;

            for (var bx in this.bubbles) {
              this.bubbles[bx].y += this.fps;
            }

            for (var sy in this.sharks) {
              var newY = parseInt(sy) + this.fps;
              newSharks[newY] = newSharks[sy];
              delete newSharks[sy];
            }

            this.sharks = newSharks;
            break;

          case 40:
            console.log("Down key is pressed"); // this.y -= this.fps;

            this.getPoints();

            for (var _bx in this.bubbles) {
              this.bubbles[_bx].y -= this.fps;
            }

            for (var _sy in this.sharks) {
              var _newY = parseInt(_sy) - this.fps;

              newSharks[_newY] = newSharks[_sy];
              delete newSharks[_sy];
            }

            this.sharks = newSharks;
            break;

          case 39:
            console.log("Right key is pressed"); // this.x -= this.fps;

            for (var _sy2 in this.sharks) {
              this.sharks[_sy2].x -= this.fps;
            }

            for (var _bx2 in this.bubbles) {
              var newX = parseInt(_bx2) - this.fps;
              newBubbles[newX] = newBubbles[_bx2];
              delete newBubbles[_bx2];
            }

            this.bubbles = newBubbles;
            break;

          case 37:
            console.log("Left key is pressed");
            event.preventDefault(); // this.x += this.fps;

            for (var _sy3 in this.sharks) {
              this.sharks[_sy3].x += this.fps;
            }

            for (var _bx3 in newBubbles) {
              var _newX = parseInt(_bx3) + this.fps;

              newBubbles[_newX] = newBubbles[_bx3];
              delete newBubbles[_bx3];
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
      this.oxygenMeter.render(this.ctx, this.oxygenLevel, this.meterColor);
      this.scoreBoard.render(this.ctx, this.score); // this.sanddollar.render(this.ctx, this.x + 40, this.y + 40);
      // this.fish.render(this.ctx, this.x + 250, this.y + 200);
      // this.coral.render(this.ctx, this.x - 250, this.y + 200, "orange");
      // this.coral.render(this.ctx, this.x - 200, this.y + 150, "hotpink");

      if (this.running && Object.values(this.bubbles).length > 0) {
        for (var bx in this.bubbles) {
          this.bubbles[bx].render(bx);
        }
      }

      if (this.running && Object.values(this.sharks).length > 0) {
        for (var sy in this.sharks) {
          this.sharks[sy].render(sy);
        }
      }

      if (this.oxygenLevel <= 0 && this.running) {
        clearInterval(bubbleInterval);
        this.gameOver();
      }

      if (this.running && !this.isGameOver) {
        requestAnimationFrame(this.render.bind(this));
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.running = false;
      this.isGameOver = true;
      clearInterval(this.bubbleInterval);
      clearInterval(this.sharkInterval);
      clearInterval(this.oxygenInterval); // console.log("GAME OVER");
      // render game over screen

      alert("GameOVER"); // remove eventually 

      this.restart(); // setTimeout?
    }
  }, {
    key: "generateBubbles",
    value: function generateBubbles() {
      var bubbleX = Math.floor(Math.random() * this.canvas.width);
      var bubble = new _bubble_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, this.canvas.width, this.canvas.height, this.addOxygen);
      this.bubbles[bubbleX] = bubble;
      this.deleteOldBubbles();
    }
  }, {
    key: "deleteOldBubbles",
    value: function deleteOldBubbles() {
      for (var bx in this.bubbles) {
        this.bubbles[bx].popped || this.bubbles[bx].y < 0 ? delete this.bubbles[bx] : null;
      }
    }
  }, {
    key: "generateSharks",
    value: function generateSharks() {
      var sharkY = Math.floor(Math.random() * this.canvas.height);
      var shark = new _shark_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.canvas.height, this.canvas.width, this.gameOver);
      debugger;
      this.sharks[sharkY] = shark;
      this.deleteOldSharks();
    }
  }, {
    key: "deleteOldSharks",
    value: function deleteOldSharks() {
      for (var sy in this.sharks) {
        this.sharks[sy].x < -100 ? delete this.sharks[sy] : null;
      }
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

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);
  }

  _createClass(Score, [{
    key: "render",
    value: function render(ctx, score) {
      ctx.fillStyle = "white";
      ctx.fillRect(800, 20, 80, 50);
      ctx.fillStyle = "blue";
      ctx.font = '16px monospace';
      ctx.fillText(score, 830, 50);
    }
  }]);

  return Score;
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
  function Shark(ctx, canvasHeight, canvasWidth, gameOver) {
    _classCallCheck(this, Shark);

    this.height = 25;
    this.width = 80;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.x = this.canvasWidth + 100;
    this.ctx = ctx;
    this.range = 20;
    this.gameOver = gameOver;
  }

  _createClass(Shark, [{
    key: "render",
    value: function render(y) {
      y = parseInt(y);
      this.ctx.fillStyle = "gray"; // body

      this.ctx.fillRect(this.x, y, this.width, this.height);
      this.ctx.beginPath(); // head

      this.ctx.moveTo(this.x - 30, y + 5);
      this.ctx.lineTo(this.x, y + this.height);
      this.ctx.lineTo(this.x, y);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.beginPath(); // tail

      this.ctx.moveTo(this.x + this.width, y);
      this.ctx.lineTo(this.x + this.width + 20, y);
      this.ctx.lineTo(this.x + this.width, y + this.height);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.beginPath(); // tail

      this.ctx.moveTo(this.x + this.width, y + 5);
      this.ctx.lineTo(this.x + this.width - 10 + 40, y - 10);
      this.ctx.lineTo(this.x + this.width + 40, y + 25);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.fillStyle = "grey"; // fin

      this.ctx.beginPath();
      this.ctx.moveTo(this.x + 30, y + 5);
      this.ctx.lineTo(this.x + this.width / 4 + 40, y - 10);
      this.ctx.lineTo(this.x + this.width / 4 + 40, y + 5);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.fillStyle = "red"; // eye

      this.ctx.fillRect(this.x, y + 10, 3, 3);
      this.x -= 5;
      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var x = this.x;

      if (x > minX && x < maxX && y > minY && y < maxY) {
        this.gameOver();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3h5Z2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9zYW5kZG9sbGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiYWRkTzIiLCJoZWlnaHQiLCJ3aWR0aCIsInkiLCJyYW5nZSIsInBvcHBlZCIsIngiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsIkNvcmFsIiwiY29sb3IiLCJmaWxsUmVjdCIsIkRpdmVyIiwiRmlzaCIsIm1vdmVUbyIsImxpbmVUbyIsIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImRpdmVyIiwib3h5Z2VuTWV0ZXIiLCJPeHlnZW4iLCJveHlnZW5MZXZlbCIsInNjb3JlIiwic2NvcmVCb2FyZCIsIlNjb3JlQm9hcmQiLCJmcHMiLCJtZXRlckNvbG9yIiwiYnViYmxlcyIsInNoYXJrcyIsInJ1bm5pbmciLCJpc0dhbWVPdmVyIiwiYnViYmxlSW50ZXJ2YWwiLCJveHlnZW5JbnRlcnZhbCIsInNoYXJrSW50ZXJ2YWwiLCJnYW1lT3ZlciIsImJpbmQiLCJnZW5lcmF0ZVNoYXJrcyIsImRlbGV0ZU9sZEJ1YmJsZXMiLCJkZWxldGVPbGRTaGFya3MiLCJnZXRQb2ludHMiLCJhZGRPeHlnZW4iLCJsb3NlT3h5Z2VuIiwiaGFuZGxlS2V5RG93biIsImdlbmVyYXRlQnViYmxlcyIsInJlbmRlciIsImluaXRpYWxpemVFdmVudHMiLCJyZXN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ldGVyU3RhdHVzIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJwbGF5IiwicHJldmVudERlZmF1bHQiLCJuZXdCdWJibGVzIiwibmV3U2hhcmtzIiwia2V5Q29kZSIsImJ4Iiwic3kiLCJuZXdZIiwicGFyc2VJbnQiLCJuZXdYIiwiY2xlYXJSZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFsZXJ0IiwiYnViYmxlWCIsImZsb29yIiwicmFuZG9tIiwiYnViYmxlIiwic2hhcmtZIiwic2hhcmsiLCJTaGFyayIsImdhbWUiLCJuIiwiU2FuZERvbGxhciIsIlNjb3JlIiwiZm9udCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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LENBQXJCLEdBQTBCLEtBQUtLLEtBQTNDO0FBQ0EsVUFBSWEsSUFBSSxHQUFLLEtBQUtsQixZQUFMLEdBQW9CLENBQXJCLEdBQTBCLEtBQUtLLEtBQTNDO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHLEtBQUtBLENBQWI7O0FBRUEsVUFBSUEsQ0FBQyxHQUFHUSxJQUFKLElBQVlSLENBQUMsR0FBR1MsSUFBaEIsSUFBd0JaLENBQUMsR0FBR2EsSUFBNUIsSUFBb0NiLENBQUMsR0FBR2MsSUFBNUMsRUFBa0Q7QUFDOUMsYUFBSzZCLFFBQUw7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFTCx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgYWRkTzIpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDsgXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDsgXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDsgXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgLy8gdGhpcy54ID0gKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhc1dpZHRoKTsgXG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzSGVpZ2h0ICsgMzA7IFxuICAgICAgICB0aGlzLmFkZE8yID0gYWRkTzI7IFxuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRoaXMucG9wcGVkID0gZmFsc2U7IFxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoeCkge1xuICAgICAgICBpZiAoIXRoaXMucG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyh4LCB0aGlzLnksIDEwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7IFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy55IC09IDE7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtYXhYID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1pblkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG5cbiAgICAgICAgaWYgKCB4ID4gbWluWCAmJiB4IDwgbWF4WCAmJiB5ID4gbWluWSAmJiB5IDwgbWF4WSAmJiAhdGhpcy5wb3BwZWQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyOyBcbiAgICAgICAgICAgIHRoaXMuYWRkTzIoKTsgLy8gcGFzcyBpbiB0aGUgYnViYmxlIHRvIGJlIGRlbGV0ZWRcbiAgICAgICAgICAgIHRoaXMucG9wcGVkID0gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgeCwgeSwgY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgOCwgNDApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCArNiwgeSArIDEwLCAxMCwgOCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4IC0gMTAsIHkgKyAyMCwgMTAsIDgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZlciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gdGFua1xuICAgICAgICAgICAgdGhpcy54IC0gMTYsIHRoaXMueS0xNSxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAyLjUsIHRoaXMuaGVpZ2h0ICogMS41LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLnggLSAxMywgdGhpcy55KzUyLFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSs1NCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQgKiAxLjUsXG4gICAgICAgICk7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGhlYWRcbiAgICAgICAgICAgIHRoaXMueC00LCB0aGlzLnktMjUsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0LTIsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gYm9keVxuICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy55IC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAyLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54KzIsIHRoaXMueSszMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMy41LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54ICsgMiwgdGhpcy55KzQwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDUsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC03LCB0aGlzLnkgKyAzMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAzLjUsIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBsb3dlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC04LCB0aGlzLnkgKyA0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyBnb2dnbGVzXG4gICAgICAgICAgICB0aGlzLngtMiwgdGhpcy55IC0gMjIsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyA1LFxuICAgICAgICApO1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7IC8vIGJvZHlcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDIwLCAyMCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyBoZWFkXG4gICAgICAgIGN0eC5tb3ZlVG8oeCAtMTAsIHkgKyA1KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyB0YWlsXG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIDE4LCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIDMwLCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHggKyAzMCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7IC8vIGV5ZVxuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB4LTIsIHkgKyA1LFxuICAgICAgICAgICAgMywgMyxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgRGl2ZXIgZnJvbSAnLi9kaXZlci5qcyc7XG5pbXBvcnQgU2FuZERvbGxhciBmcm9tICcuL3NhbmRkb2xsYXIuanMnO1xuaW1wb3J0IFNoYXJrIGZyb20gJy4vc2hhcmsuanMnO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL2J1YmJsZS5qcyc7IFxuaW1wb3J0IFNjb3JlQm9hcmQgZnJvbSAnLi9zY29yZS5qcyc7XG5pbXBvcnQgT3h5Z2VuIGZyb20gJy4vb3h5Z2VuLmpzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaC5qcyc7XG5pbXBvcnQgQ29yYWwgZnJvbSAnLi9jb3JhbC5qcyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZGl2ZXIgPSBuZXcgRGl2ZXIodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gdGhpcy5zYW5kZG9sbGFyID0gbmV3IFNhbmREb2xsYXIoKTsgLy8gbG9naWMgZm9yIHBvaW50cyAocGFzcyBpbiBzY29yZSB0byByZW5kZXIgKSAvLyBsb2dpYyB0byByYW5kb21pemVcbiAgICAgICAgdGhpcy5veHlnZW5NZXRlciA9IG5ldyBPeHlnZW4oKTtcbiAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMDtcbiAgICAgICAgLy8gdGhpcy5maXNoID0gbmV3IEZpc2goKTtcbiAgICAgICAgLy8gdGhpcy5jb3JhbCA9IG5ldyBDb3JhbCgpOyBcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZCA9IG5ldyBTY29yZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuZnBzID0gODtcbiAgICAgICAgdGhpcy5tZXRlckNvbG9yID0gXCJsaW1lZ3JlZW5cIjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHt9O1xuICAgICAgICB0aGlzLnNoYXJrcyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlOyBcbiAgICAgICAgXG4gICAgICAgIC8vIHNldEludGVydmFsIElkc1xuICAgICAgICB0aGlzLmJ1YmJsZUludGVydmFsID0gbnVsbDsgXG4gICAgICAgIHRoaXMub3h5Z2VuSW50ZXJ2YWwgPSBudWxsOyBcbiAgICAgICAgdGhpcy5zaGFya0ludGVydmFsID0gbnVsbDsgXG5cbiAgICAgICAgLy9pbml0aWFsaXplICYgYmluZFxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlU2hhcmtzID0gdGhpcy5nZW5lcmF0ZVNoYXJrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGV0ZU9sZEJ1YmJsZXMgPSB0aGlzLmRlbGV0ZU9sZEJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVPbGRTaGFya3MgPSB0aGlzLmRlbGV0ZU9sZFNoYXJrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFBvaW50cyA9IHRoaXMuZ2V0UG9pbnRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkT3h5Z2VuID0gdGhpcy5hZGRPeHlnZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlT3h5Z2VuID0gdGhpcy5sb3NlT3h5Z2VuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQnViYmxlcyA9IHRoaXMuZ2VuZXJhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUV2ZW50cygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMDtcbiAgICAgICAgdGhpcy5tZXRlclN0YXR1cygpO1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zaGFya3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5idWJibGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVCdWJibGVzLCAyMDAwKTtcbiAgICAgICAgdGhpcy5veHlnZW5JbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubG9zZU94eWdlbiwgMjAwMCk7XG4gICAgICAgIHRoaXMuc2hhcmtJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVTaGFya3MsIDEwMDAwKTtcbiAgICB9XG5cbiAgICBhZGRPeHlnZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIE94eWdlblwiKTtcbiAgICAgICAgKCh0aGlzLm94eWdlbkxldmVsICsgMjApID4gMTAwKSA/IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMCA6IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCArPSAyMDtcbiAgICAgICAgdGhpcy5tZXRlclN0YXR1cygpO1xuICAgIH1cblxuICAgIGxvc2VPeHlnZW4oKSB7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgLT0gNTsgXG4gICAgICAgIHRoaXMubWV0ZXJTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBtZXRlclN0YXR1cygpIHtcbiAgICAgICAgaWYgKHRoaXMub3h5Z2VuTGV2ZWwgPj0gNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwibGltZWdyZWVuXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgMzMpIHRoaXMubWV0ZXJDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7IFxuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBuZXdCdWJibGVzID0gdGhpcy5idWJibGVzOyBcbiAgICAgICAgICAgIGxldCBuZXdTaGFya3MgPSB0aGlzLnNoYXJrczsgXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwIGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnkgKz0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVzW2J4XS55ICs9IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KHN5KSArIHRoaXMuZnBzOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFya3MgPSBuZXdTaGFya3M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG93biBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy55IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBvaW50cygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ueSAtPSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1kgPSBwYXJzZUludChzeSkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3U2hhcmtzW3N5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJrcyA9IG5ld1NoYXJrcztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSaWdodCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy54IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFya3Nbc3ldLnggLT0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gdGhpcy5idWJibGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGJ4KSAtIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QnViYmxlc1tuZXdYXSA9IG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlcyA9IG5ld0J1YmJsZXM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVmdCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy54ICs9IHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFya3Nbc3ldLnggKz0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gbmV3QnViYmxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChieCkgKyB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0J1YmJsZXNbbmV3WF0gPSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZGl2ZXIucmVuZGVyKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5veHlnZW5NZXRlci5yZW5kZXIodGhpcy5jdHgsIHRoaXMub3h5Z2VuTGV2ZWwsIHRoaXMubWV0ZXJDb2xvcik7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5yZW5kZXIodGhpcy5jdHgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAvLyB0aGlzLnNhbmRkb2xsYXIucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggKyA0MCwgdGhpcy55ICsgNDApO1xuICAgICAgICAvLyB0aGlzLmZpc2gucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggKyAyNTAsIHRoaXMueSArIDIwMCk7XG4gICAgICAgIC8vIHRoaXMuY29yYWwucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggLSAyNTAsIHRoaXMueSArIDIwMCwgXCJvcmFuZ2VcIik7XG4gICAgICAgIC8vIHRoaXMuY29yYWwucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggLSAyMDAsIHRoaXMueSArIDE1MCwgXCJob3RwaW5rXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLmJ1YmJsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ucmVuZGVyKGJ4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmIE9iamVjdC52YWx1ZXModGhpcy5zaGFya3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFya3Nbc3ldLnJlbmRlcihzeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5veHlnZW5MZXZlbCA8PSAwICYmIHRoaXMucnVubmluZykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChidWJibGVJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmICghdGhpcy5pc0dhbWVPdmVyKSkgeyAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJ1YmJsZUludGVydmFsKTsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGFya0ludGVydmFsKTsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5veHlnZW5JbnRlcnZhbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR0FNRSBPVkVSXCIpO1xuICAgICAgICAvLyByZW5kZXIgZ2FtZSBvdmVyIHNjcmVlblxuICAgICAgICBhbGVydChcIkdhbWVPVkVSXCIpOyAvLyByZW1vdmUgZXZlbnR1YWxseSBcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7IC8vIHNldFRpbWVvdXQ/XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCdWJibGVzKCkge1xuICAgICAgICBsZXQgYnViYmxlWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoKVxuICAgICAgICBsZXQgYnViYmxlID0gbmV3IEJ1YmJsZSh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5hZGRPeHlnZW4pO1xuICAgICAgICB0aGlzLmJ1YmJsZXNbYnViYmxlWF0gPSBidWJibGU7IFxuICAgICAgICB0aGlzLmRlbGV0ZU9sZEJ1YmJsZXMoKTtcblxuICAgIH1cbiAgICBcbiAgICBkZWxldGVPbGRCdWJibGVzKCkge1xuICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAodGhpcy5idWJibGVzW2J4XS5wb3BwZWQgfHwgdGhpcy5idWJibGVzW2J4XS55IDwgMCkgPyBkZWxldGUgdGhpcy5idWJibGVzW2J4XSA6IG51bGw7ICAgICAgXG4gICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlU2hhcmtzKCkge1xuICAgICAgICBsZXQgc2hhcmtZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHNoYXJrID0gbmV3IFNoYXJrKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmdhbWVPdmVyKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHRoaXMuc2hhcmtzW3NoYXJrWV0gPSBzaGFyaztcbiAgICAgICAgdGhpcy5kZWxldGVPbGRTaGFya3MoKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZU9sZFNoYXJrcygpIHtcbiAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICh0aGlzLnNoYXJrc1tzeV0ueCA8IC0xMDApID8gZGVsZXRlIHRoaXMuc2hhcmtzW3N5XTogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7IFxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmxldCBnYW1lID0gbmV3IEdhbWUoKTsgXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3h5Z2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcihjdHgsIG4sIGNvbG9yKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7IC8vIGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwLCAyMCwgMjAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjsgLy8gbGV2ZWxcbiAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyMCwgMTAsIG4pO1xuXG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZERvbGxhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4LCB4LCB5KSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwaW5rXCJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgICAgICB4LCB5LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHNjb3JlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwgMjAsIDgwLCA1MClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG5cbiAgICAgICAgY3R4LmZvbnQgPSAnMTZweCBtb25vc3BhY2UnO1xuICAgICAgICBjdHguZmlsbFRleHQoc2NvcmUsIDgzMCwgNTApO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyayB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBnYW1lT3Zlcikge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDI1O1xuICAgICAgICB0aGlzLndpZHRoID0gODA7XG5cbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7IFxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzV2lkdGggKyAxMDA7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcblxuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBnYW1lT3ZlcjtcbiAgICB9XG5cbiAgICByZW5kZXIoeSkge1xuICAgICAgICB5ID0gcGFyc2VJbnQoeSk7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmF5XCI7IC8vIGJvZHlcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoIFxuICAgICAgICB0aGlzLngsIHksXG4gICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAvLyBoZWFkXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLngtMzAsIHkrNSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHkpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAvLyB0YWlsXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLCB5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGggKyAyMCwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLCB5ICsgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpOyAvLyB0YWlsXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLCB5ICsgNSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoIC0gMTAgKyA0MCwgeSAtIDEwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGggKyA0MCwgeSArIDI1KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjsgLy8gZmluXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54ICsgMzAsIHkgKyA1KVxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aC80ICsgNDAsIHkgLSAxMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLzQgKyA0MCwgeSArIDUpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjsgLy8gZXllXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgdGhpcy54LCB5ICsgMTAgLFxuICAgICAgICAgICAgMywgMyxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnggLT0gNTtcblxuICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtYXhYID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1pblkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IHggPSB0aGlzLng7XG5cbiAgICAgICAgaWYgKHggPiBtaW5YICYmIHggPCBtYXhYICYmIHkgPiBtaW5ZICYmIHkgPCBtYXhZKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==