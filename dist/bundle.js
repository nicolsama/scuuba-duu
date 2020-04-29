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
  function Coral(ctx, color, canvasHeight, canvasWidth, collectItems) {
    _classCallCheck(this, Coral);

    this.ctx = ctx;
    this.color = color;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.y = this.canvasHeight - 30;
    this.collectItems = collectItems;
    this.collected = false;
    this.range = 20;
  }

  _createClass(Coral, [{
    key: "render",
    value: function render(x) {
      x = parseInt(x);

      if (!this.collected) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, this.y, 8, 40);
        this.ctx.fillRect(x + 6, this.y + 10, 10, 8);
        this.ctx.fillRect(x - 10, this.y + 20, 10, 8);
      } else {
        null;
      }

      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var y = this.y;

      if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {
        this.collectItems();
        this.collected = true;
      }
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
/* harmony import */ var _game_over_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game_over.js */ "./src/game_over.js");
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
    this.oxygenMeter = new _oxygen_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.diver = new _diver_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height / 2);
    this.scoreBoard = new _score_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.gameOverScreen = new _game_over_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.ctx, this.x, this.y);
    this.meterColor = "lightblue";
    this.score = 0;
    this.itemCount = 0;
    this.oxygenLevel = 100;
    this.fps = 7; // keys 

    this.rightPressed = false;
    this.leftPressed = false;
    this.upPressed = false;
    this.downPressed = false; // currently rendered objs

    this.bubbles = {};
    this.sharks = {};
    this.items = {}; // gameState

    this.running = false;
    this.isGameOver = false; // setInterval Ids

    this.bubbleInterval = null;
    this.oxygenInterval = null;
    this.sharkInterval = null;
    this.itemInterval = null; //initialize & bind

    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);
    this.generateSharks = this.generateSharks.bind(this);
    this.generateBubbles = this.generateBubbles.bind(this);
    this.generateItems = this.generateItems.bind(this);
    this.deleteOldBubbles = this.deleteOldBubbles.bind(this);
    this.deleteOldSharks = this.deleteOldSharks.bind(this);
    this.getDivePoints = this.getDivePoints.bind(this);
    this.collectItems = this.collectItems.bind(this);
    this.addOxygen = this.addOxygen.bind(this);
    this.loseOxygen = this.loseOxygen.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.initializeEvents();
    this.restart();
  }

  _createClass(Game, [{
    key: "initializeEvents",
    value: function initializeEvents() {
      document.addEventListener('keydown', this.handleKeyDown);
      document.addEventListener('keyup', this.handleKeyUp);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.isGameOver = false;
      this.score = 0;
      this.oxygenLevel = 100;
      this.bubbles = {};
      this.items = {};
      this.sharks = {};
      this.meterStatus();
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
      this.itemInterval = setInterval(this.generateItems, 1000);
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
      this.oxygenLevel -= 25; // change back to -5 after testing 

      this.meterStatus();
    }
  }, {
    key: "meterStatus",
    value: function meterStatus() {
      if (this.oxygenLevel >= 66) this.meterColor = "lightblue";
      if (this.oxygenLevel < 66) this.meterColor = "orange";
      if (this.oxygenLevel < 33) this.meterColor = "red";
    }
  }, {
    key: "getDivePoints",
    value: function getDivePoints() {
      this.score += 1;
    }
  }, {
    key: "collectItems",
    value: function collectItems() {
      console.log("Item Collected!");
      this.score += 5;
    }
  }, {
    key: "draw",
    value: function draw() {
      var newBubbles = this.bubbles;
      var newSharks = this.sharks;
      var newItems = this.items;

      if (this.upPressed) {
        for (var bx in this.bubbles) {
          this.bubbles[bx].y += this.fps;
        }

        for (var ix in this.items) {
          this.items[ix].y += this.fps;
        }

        for (var sy in this.sharks) {
          var newY = parseInt(sy) + this.fps;
          newSharks[newY] = newSharks[sy];
          delete newSharks[sy];
        }

        this.sharks = newSharks;
      }

      if (this.downPressed) {
        this.getDivePoints();

        for (var _bx in this.bubbles) {
          this.bubbles[_bx].y -= this.fps;
        }

        for (var _ix in this.items) {
          this.items[_ix].y -= this.fps;
        }

        for (var _sy in this.sharks) {
          var _newY = parseInt(_sy) - this.fps;

          newSharks[_newY] = newSharks[_sy];
          delete newSharks[_sy];
        }

        this.sharks = newSharks;
      }

      if (this.rightPressed) {
        for (var _sy2 in this.sharks) {
          this.sharks[_sy2].x -= this.fps;
        }

        for (var _bx2 in this.bubbles) {
          var newX = parseInt(_bx2) - this.fps;
          newBubbles[newX] = newBubbles[_bx2];
          delete newBubbles[_bx2];
        }

        for (var _ix2 in this.items) {
          var _newX = parseInt(_ix2) - this.fps;

          newItems[_newX] = newItems[_ix2];
          delete newItems[_ix2];
        }

        this.items = newItems;
        this.bubbles = newBubbles;
      }

      if (this.leftPressed) {
        for (var _sy3 in this.sharks) {
          this.sharks[_sy3].x += this.fps;
        }

        for (var _bx3 in newBubbles) {
          var _newX2 = parseInt(_bx3) + this.fps;

          newBubbles[_newX2] = newBubbles[_bx3];
          delete newBubbles[_bx3];
        }

        for (var _ix3 in this.items) {
          var _newX3 = parseInt(_ix3) + this.fps;

          newItems[_newX3] = newItems[_ix3];
          delete newItems[_ix3];
        }

        this.items = newItems;
        this.bubbles = newBubbles;
      }
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp() {
      this.upPressed = false;
      this.downPressed = false;
      this.rightPressed = false;
      this.leftPressed = false;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      event.preventDefault();

      if (this.isGameOver) {
        this.restart();
        return;
      }

      if (!this.running) {
        this.play();
      } else {
        event.preventDefault();

        switch (event.keyCode) {
          case 38:
            console.log("Up key is pressed");
            this.upPressed = true;
            break;

          case 40:
            console.log("Down key is pressed");
            this.downPressed = true;
            break;

          case 39:
            console.log("Right key is pressed");
            this.rightPressed = true;
            break;

          case 37:
            console.log("Left key is pressed");
            event.preventDefault();
            this.leftPressed = true;
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
      this.scoreBoard.render(this.ctx, this.score);
      this.draw();

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

      if (this.running && Object.values(this.items).length > 0) {
        for (var ix in this.items) {
          this.items[ix].render(ix);
        }
      }

      if (this.oxygenLevel <= 0 && this.running) {
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
      clearInterval(this.oxygenInterval);
      clearInterval(this.itemInterval);
      this.gameOverScreen.render(this.score); // this.renderGameOverScreen();
      // setTimeout(this.restart.bind(this), 10000)
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
  }, {
    key: "generateItems",
    value: function generateItems() {
      var coralColors = ["hotpink", "teal", "orange", "red", "pink"];
      var item;
      var itemX = Math.floor(Math.random() * this.canvas.width);

      if (this.itemCount % 2 === 0) {
        item = new _sanddollar_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas.height, this.canvas.width, this.collectItems);
      } else {
        var color = coralColors[Math.floor(Math.random() * 4)];
        item = new _coral_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.ctx, color, this.canvas.height, this.canvas.width, this.collectItems);
      }

      this.items[itemX] = item;
      this.itemCount += 1;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/game_over.js":
/*!**************************!*\
  !*** ./src/game_over.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOver; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameOver = /*#__PURE__*/function () {
  function GameOver(ctx, x, y) {
    _classCallCheck(this, GameOver);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  _createClass(GameOver, [{
    key: "render",
    value: function render(finalscore) {
      this.ctx.fillStyle = "red";
      this.ctx.font = '50px Roboto Mono';
      this.ctx.fillText("DED DUUDE", this.x - 125, this.y - 50);
      this.ctx.font = '20px Roboto Mono';
      this.ctx.fillStyle = "yellow";
      this.ctx.font = '20px Roboto Mono';
      this.ctx.fillText('Press any key to try again!', this.x - 150, this.y + 140);
    }
  }]);

  return GameOver;
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
  function SandDollar(ctx, canvasHeight, canvasWidth, collectItems) {
    _classCallCheck(this, SandDollar);

    this.width = 10;
    this.height = 10;
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.y = this.canvasHeight - 30;
    this.range = 20;
    this.collected = false;
    this.collectItems = collectItems;
  }

  _createClass(SandDollar, [{
    key: "render",
    value: function render(x) {
      x = parseInt(x);

      if (!this.collected) {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(x, this.y, this.width, this.height);
      } else {
        null;
      }

      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var y = this.y;

      if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {
        this.collectItems();
        this.collected = true;
      }
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
      // ctx.fillStyle = "white"
      // ctx.fillRect(800, 20, 80, 50)
      ctx.fillStyle = "white";
      ctx.font = '20px Roboto Mono';
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
    this.range = 40;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX292ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9veHlnZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbmRkb2xsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQnViYmxlIiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJhZGRPMiIsImhlaWdodCIsIndpZHRoIiwieSIsInJhbmdlIiwicG9wcGVkIiwieCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiQ29yYWwiLCJjb2xvciIsImNvbGxlY3RJdGVtcyIsImNvbGxlY3RlZCIsInBhcnNlSW50IiwiZmlsbFJlY3QiLCJEaXZlciIsIkZpc2giLCJtb3ZlVG8iLCJsaW5lVG8iLCJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJveHlnZW5NZXRlciIsIk94eWdlbiIsImRpdmVyIiwic2NvcmVCb2FyZCIsIlNjb3JlQm9hcmQiLCJnYW1lT3ZlclNjcmVlbiIsIkdhbWVPdmVyU2NyZWVuIiwibWV0ZXJDb2xvciIsInNjb3JlIiwiaXRlbUNvdW50Iiwib3h5Z2VuTGV2ZWwiLCJmcHMiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwiYnViYmxlcyIsInNoYXJrcyIsIml0ZW1zIiwicnVubmluZyIsImlzR2FtZU92ZXIiLCJidWJibGVJbnRlcnZhbCIsIm94eWdlbkludGVydmFsIiwic2hhcmtJbnRlcnZhbCIsIml0ZW1JbnRlcnZhbCIsInJlbmRlciIsImJpbmQiLCJkcmF3IiwiZ2VuZXJhdGVTaGFya3MiLCJnZW5lcmF0ZUJ1YmJsZXMiLCJnZW5lcmF0ZUl0ZW1zIiwiZGVsZXRlT2xkQnViYmxlcyIsImRlbGV0ZU9sZFNoYXJrcyIsImdldERpdmVQb2ludHMiLCJhZGRPeHlnZW4iLCJsb3NlT3h5Z2VuIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiZ2FtZU92ZXIiLCJpbml0aWFsaXplRXZlbnRzIiwicmVzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXRlclN0YXR1cyIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIm5ld0J1YmJsZXMiLCJuZXdTaGFya3MiLCJuZXdJdGVtcyIsImJ4IiwiaXgiLCJzeSIsIm5ld1kiLCJuZXdYIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXkiLCJrZXlDb2RlIiwiY2xlYXJSZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJJbnRlcnZhbCIsImJ1YmJsZVgiLCJmbG9vciIsInJhbmRvbSIsImJ1YmJsZSIsInNoYXJrWSIsInNoYXJrIiwiU2hhcmsiLCJjb3JhbENvbG9ycyIsIml0ZW0iLCJpdGVtWCIsIlNhbmREb2xsYXIiLCJHYW1lT3ZlciIsImZpbmFsc2NvcmUiLCJmb250IiwiZmlsbFRleHQiLCJnYW1lIiwibiIsIlNjb3JlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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QUFMLEdBQW9CLENBQXJCLEdBQTBCLEtBQUtLLEtBQTNDO0FBQ0EsVUFBSWEsSUFBSSxHQUFLLEtBQUtsQixZQUFMLEdBQW9CLENBQXJCLEdBQTBCLEtBQUtLLEtBQTNDO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHLEtBQUtBLENBQWI7O0FBRUEsVUFBSUEsQ0FBQyxHQUFHUSxJQUFKLElBQVlSLENBQUMsR0FBR1MsSUFBaEIsSUFBd0JaLENBQUMsR0FBR2EsSUFBNUIsSUFBb0NiLENBQUMsR0FBR2MsSUFBNUMsRUFBa0Q7QUFDOUMsYUFBS3NELFFBQUw7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFTCx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgYWRkTzIpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDsgXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDsgXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDsgXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgLy8gdGhpcy54ID0gKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhc1dpZHRoKTsgXG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzSGVpZ2h0ICsgMzA7IFxuICAgICAgICB0aGlzLmFkZE8yID0gYWRkTzI7IFxuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRoaXMucG9wcGVkID0gZmFsc2U7IFxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoeCkge1xuICAgICAgICBpZiAoIXRoaXMucG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyh4LCB0aGlzLnksIDEwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7IFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy55IC09IDE7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtYXhYID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1pblkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG5cbiAgICAgICAgaWYgKCB4ID4gbWluWCAmJiB4IDwgbWF4WCAmJiB5ID4gbWluWSAmJiB5IDwgbWF4WSAmJiAhdGhpcy5wb3BwZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5hZGRPMigpOyAvLyBwYXNzIGluIHRoZSBidWJibGUgdG8gYmUgZGVsZXRlZFxuICAgICAgICAgICAgdGhpcy5wb3BwZWQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JhbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb2xvciwgY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY29sbGVjdEl0ZW1zKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7IFxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhc0hlaWdodCAtIDMwO1xuICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcyA9IGNvbGxlY3RJdGVtcztcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYW5nZSA9IDIwO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKHgpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgdGhpcy55LCA4LCA0MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4ICs2LCB0aGlzLnkgKyAxMCwgMTAsIDgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCAtIDEwLCB0aGlzLnkgKyAyMCwgMTAsIDgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtYXhYID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1pblkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG5cbiAgICAgICAgaWYgKHggPiBtaW5YICYmIHggPCBtYXhYICYmIHkgPiBtaW5ZICYmIHkgPCBtYXhZICYmICF0aGlzLmNvbGxlY3RlZCkge1xuICAgICBcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSAyMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4KSB7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHRhbmtcbiAgICAgICAgICAgIHRoaXMueCAtIDE2LCB0aGlzLnktMTUsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMi41LCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgZmxpcHBlclxuICAgICAgICAgICAgdGhpcy54IC0gMTMsIHRoaXMueSs1MixcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQgKiAxLjUsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gcmlnaHQgZmxpcHBlclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnkrNTQsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0ICogMS41LFxuICAgICAgICApO1xuXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyBoZWFkXG4gICAgICAgICAgICB0aGlzLngtNCwgdGhpcy55LTI1LFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC0yLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGJvZHlcbiAgICAgICAgICAgIHRoaXMueCAtIHRoaXMuaGVpZ2h0LzIsIHRoaXMueSAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueCsyLCB0aGlzLnkrMzAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzMuNSwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueCArIDIsIHRoaXMueSs0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgdXBwZXIgbGVnXG4gICAgICAgICAgICB0aGlzLngtNywgdGhpcy55ICsgMzAsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMy41LCB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gcmlnaHQgbG93ZXIgbGVnXG4gICAgICAgICAgICB0aGlzLngtOCwgdGhpcy55ICsgNDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gNSwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gZ29nZ2xlc1xuICAgICAgICAgICAgdGhpcy54LTIsIHRoaXMueSAtIDIyLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gNSxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiOyAvLyBib2R5XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCAyMCwgMjApO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gaGVhZFxuICAgICAgICBjdHgubW92ZVRvKHggLTEwLCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIDIwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICBjdHgubW92ZVRvKHggKyAxOCwgeSArIDUpO1xuICAgICAgICBjdHgubGluZVRvKHggKyAzMCwgeSArIDIwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgMzAsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiOyAvLyBleWVcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgeC0yLCB5ICsgNSxcbiAgICAgICAgICAgIDMsIDMsXG4gICAgICAgICk7XG5cbiAgICB9XG59IiwiaW1wb3J0IERpdmVyIGZyb20gJy4vZGl2ZXIuanMnO1xuaW1wb3J0IFNhbmREb2xsYXIgZnJvbSAnLi9zYW5kZG9sbGFyLmpzJztcbmltcG9ydCBTaGFyayBmcm9tICcuL3NoYXJrLmpzJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9idWJibGUuanMnOyBcbmltcG9ydCBTY29yZUJvYXJkIGZyb20gJy4vc2NvcmUuanMnO1xuaW1wb3J0IE94eWdlbiBmcm9tICcuL294eWdlbi5qcyc7XG5pbXBvcnQgRmlzaCBmcm9tICcuL2Zpc2guanMnO1xuaW1wb3J0IENvcmFsIGZyb20gJy4vY29yYWwuanMnO1xuaW1wb3J0IEdhbWVPdmVyU2NyZWVuIGZyb20gJy4vZ2FtZV9vdmVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7ICBcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMub3h5Z2VuTWV0ZXIgPSBuZXcgT3h5Z2VuKCk7XG4gICAgICAgIHRoaXMuZGl2ZXIgPSBuZXcgRGl2ZXIodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkID0gbmV3IFNjb3JlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IG5ldyBHYW1lT3ZlclNjcmVlbih0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIHRoaXMubWV0ZXJDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgPSAxMDA7XG4gICAgICAgIHRoaXMuZnBzID0gNztcbiAgICAgICAgXG4gICAgICAgIC8vIGtleXMgXG4gICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMudXBQcmVzc2VkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmRvd25QcmVzc2VkID0gZmFsc2U7IFxuICAgICAgICBcbiAgICAgICAgLy8gY3VycmVudGx5IHJlbmRlcmVkIG9ianNcbiAgICAgICAgdGhpcy5idWJibGVzID0ge307XG4gICAgICAgIHRoaXMuc2hhcmtzID0ge307XG4gICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIC8vIGdhbWVTdGF0ZVxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7IFxuICAgICAgICBcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwgSWRzXG4gICAgICAgIHRoaXMuYnViYmxlSW50ZXJ2YWwgPSBudWxsOyBcbiAgICAgICAgdGhpcy5veHlnZW5JbnRlcnZhbCA9IG51bGw7IFxuICAgICAgICB0aGlzLnNoYXJrSW50ZXJ2YWwgPSBudWxsOyBcbiAgICAgICAgdGhpcy5pdGVtSW50ZXJ2YWwgPSBudWxsOyBcbiAgICAgICAgXG4gICAgICAgIC8vaW5pdGlhbGl6ZSAmIGJpbmRcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTaGFya3MgPSB0aGlzLmdlbmVyYXRlU2hhcmtzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdWJibGVzID0gdGhpcy5nZW5lcmF0ZUJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUl0ZW1zID0gdGhpcy5nZW5lcmF0ZUl0ZW1zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZXRlT2xkQnViYmxlcyA9IHRoaXMuZGVsZXRlT2xkQnViYmxlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGV0ZU9sZFNoYXJrcyA9IHRoaXMuZGVsZXRlT2xkU2hhcmtzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0RGl2ZVBvaW50cyA9IHRoaXMuZ2V0RGl2ZVBvaW50cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcyA9IHRoaXMuY29sbGVjdEl0ZW1zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkT3h5Z2VuID0gdGhpcy5hZGRPeHlnZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlT3h5Z2VuID0gdGhpcy5sb3NlT3h5Z2VuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUV2ZW50cygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgPSAxMDA7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHt9O1xuICAgICAgICB0aGlzLml0ZW1zID0ge307XG4gICAgICAgIHRoaXMuc2hhcmtzID0ge307XG4gICAgICAgIHRoaXMubWV0ZXJTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5idWJibGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVCdWJibGVzLCAyMDAwKTtcbiAgICAgICAgdGhpcy5veHlnZW5JbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubG9zZU94eWdlbiwgMjAwMCk7XG4gICAgICAgIHRoaXMuc2hhcmtJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVTaGFya3MsIDEwMDAwKTtcbiAgICAgICAgdGhpcy5pdGVtSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmdlbmVyYXRlSXRlbXMsIDEwMDApXG4gICAgfVxuXG4gICAgYWRkT3h5Z2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBPeHlnZW5cIik7XG4gICAgICAgICgodGhpcy5veHlnZW5MZXZlbCArIDIwKSA+IDEwMCkgPyBcbiAgICAgICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgPSAxMDAgOiBcbiAgICAgICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgKz0gMjA7XG4gICAgICAgIHRoaXMubWV0ZXJTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBsb3NlT3h5Z2VuKCkge1xuICAgICAgICB0aGlzLm94eWdlbkxldmVsIC09IDI1OyAvLyBjaGFuZ2UgYmFjayB0byAtNSBhZnRlciB0ZXN0aW5nIFxuICAgICAgICB0aGlzLm1ldGVyU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgbWV0ZXJTdGF0dXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsID49IDY2KSB0aGlzLm1ldGVyQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICBpZiAodGhpcy5veHlnZW5MZXZlbCA8IDY2KSB0aGlzLm1ldGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBpZiAodGhpcy5veHlnZW5MZXZlbCA8IDMzKSB0aGlzLm1ldGVyQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGdldERpdmVQb2ludHMoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTsgXG4gICAgfVxuXG4gICAgY29sbGVjdEl0ZW1zKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gQ29sbGVjdGVkIVwiKVxuICAgICAgICB0aGlzLnNjb3JlICs9IDVcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuXG4gICAgICAgIGxldCBuZXdCdWJibGVzID0gdGhpcy5idWJibGVzO1xuICAgICAgICBsZXQgbmV3U2hhcmtzID0gdGhpcy5zaGFya3M7XG4gICAgICAgIGxldCBuZXdJdGVtcyA9IHRoaXMuaXRlbXM7XG5cbiAgICAgICAgaWYgKHRoaXMudXBQcmVzc2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXNbYnhdLnkgKz0gdGhpcy5mcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpeCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpeF0ueSArPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1kgPSBwYXJzZUludChzeSkgKyB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICBuZXdTaGFya3NbbmV3WV0gPSBuZXdTaGFya3Nbc3ldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdTaGFya3Nbc3ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGFya3MgPSBuZXdTaGFya3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb3duUHJlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXREaXZlUG9pbnRzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXNbYnhdLnkgLT0gdGhpcy5mcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpeCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpeF0ueSAtPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1kgPSBwYXJzZUludChzeSkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICBuZXdTaGFya3NbbmV3WV0gPSBuZXdTaGFya3Nbc3ldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdTaGFya3Nbc3ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGFya3MgPSBuZXdTaGFya3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yaWdodFByZXNzZWQpIHtcbiAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICB0aGlzLnNoYXJrc1tzeV0ueCAtPSB0aGlzLmZwcztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gdGhpcy5idWJibGVzKSB7XG4gICAgICAgICAgICAgICAgIGxldCBuZXdYID0gcGFyc2VJbnQoYngpIC0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgIG5ld0J1YmJsZXNbbmV3WF0gPSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBmb3IgKGxldCBpeCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgIGxldCBuZXdYID0gcGFyc2VJbnQoaXgpIC0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgICAgIG5ld0l0ZW1zW25ld1hdID0gbmV3SXRlbXNbaXhdO1xuICAgICAgICAgICAgICAgICBkZWxldGUgbmV3SXRlbXNbaXhdO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgICAgICAgdGhpcy5idWJibGVzID0gbmV3QnViYmxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxlZnRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5zaGFya3Nbc3ldLnggKz0gdGhpcy5mcHM7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIG5ld0J1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChieCkgKyB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3QnViYmxlc1tuZXdYXSA9IG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICBkZWxldGUgbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChpeCkgKyB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3SXRlbXNbbmV3WF0gPSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcCgpIHtcbiAgICAgICAgdGhpcy51cFByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuZG93blByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7IFxuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwIGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwUHJlc3NlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvd24ga2V5IGlzIHByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25QcmVzc2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmlnaHQga2V5IGlzIHByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlZnQga2V5IGlzIHByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpOyBcbiAgICAgICAgdGhpcy5kaXZlci5yZW5kZXIodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLm94eWdlbk1ldGVyLnJlbmRlcih0aGlzLmN0eCwgdGhpcy5veHlnZW5MZXZlbCwgdGhpcy5tZXRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnJlbmRlcih0aGlzLmN0eCwgdGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyAmJiBPYmplY3QudmFsdWVzKHRoaXMuYnViYmxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gdGhpcy5idWJibGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVzW2J4XS5yZW5kZXIoYngpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLnNoYXJrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJrc1tzeV0ucmVuZGVyKHN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLml0ZW1zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpeCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpeF0ucmVuZGVyKGl4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDw9IDAgJiYgdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmICghdGhpcy5pc0dhbWVPdmVyKSkgeyAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJ1YmJsZUludGVydmFsKTsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGFya0ludGVydmFsKTsgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5veHlnZW5JbnRlcnZhbCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pdGVtSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLnJlbmRlcih0aGlzLnNjb3JlKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJHYW1lT3ZlclNjcmVlbigpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KHRoaXMucmVzdGFydC5iaW5kKHRoaXMpLCAxMDAwMClcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJ1YmJsZXMoKSB7XG4gICAgICAgIGxldCBidWJibGVYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGgpXG4gICAgICAgIGxldCBidWJibGUgPSBuZXcgQnViYmxlKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmFkZE94eWdlbik7XG4gICAgICAgIHRoaXMuYnViYmxlc1tidWJibGVYXSA9IGJ1YmJsZTsgXG4gICAgICAgIHRoaXMuZGVsZXRlT2xkQnViYmxlcygpO1xuXG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZU9sZEJ1YmJsZXMoKSB7XG4gICAgICAgZm9yIChsZXQgYnggaW4gdGhpcy5idWJibGVzKSB7XG4gICAgICAgICAgICh0aGlzLmJ1YmJsZXNbYnhdLnBvcHBlZCB8fCB0aGlzLmJ1YmJsZXNbYnhdLnkgPCAwKSA/IGRlbGV0ZSB0aGlzLmJ1YmJsZXNbYnhdIDogbnVsbDsgICAgICBcbiAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVTaGFya3MoKSB7XG4gICAgICAgIGxldCBzaGFya1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBsZXQgc2hhcmsgPSBuZXcgU2hhcmsodGhpcy5jdHgsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuZ2FtZU92ZXIpO1xuXG4gICAgICAgIHRoaXMuc2hhcmtzW3NoYXJrWV0gPSBzaGFyaztcbiAgICAgICAgdGhpcy5kZWxldGVPbGRTaGFya3MoKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZU9sZFNoYXJrcygpIHtcbiAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICh0aGlzLnNoYXJrc1tzeV0ueCA8IC0xMDApID8gZGVsZXRlIHRoaXMuc2hhcmtzW3N5XTogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGNvcmFsQ29sb3JzID0gW1wiaG90cGlua1wiLCBcInRlYWxcIiwgXCJvcmFuZ2VcIiwgXCJyZWRcIiwgXCJwaW5rXCJdO1xuXG4gICAgICAgIGxldCBpdGVtOyBcbiAgICAgICAgbGV0IGl0ZW1YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGgpOyBcblxuICAgICAgICBpZiAodGhpcy5pdGVtQ291bnQgJSAyID09PSAwKSB7XG4gICAgICAgICAgICBpdGVtID0gbmV3IFNhbmREb2xsYXIodGhpcy5jdHgsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY29sbGVjdEl0ZW1zKTtcbiAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGNvcmFsQ29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcbiAgICAgICAgICAgIGl0ZW0gPSBuZXcgQ29yYWwodGhpcy5jdHgsIGNvbG9yLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNvbGxlY3RJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zW2l0ZW1YXSA9IGl0ZW07IFxuICAgICAgICB0aGlzLml0ZW1Db3VudCArPSAxO1xuXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7IFxuICAgIH1cblxuICAgIHJlbmRlcihmaW5hbHNjb3JlKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTBweCBSb2JvdG8gTW9ubyc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiREVEIERVVURFXCIsIHRoaXMueCAtIDEyNSwgdGhpcy55IC01MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMjBweCBSb2JvdG8gTW9ubyc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMjBweCBSb2JvdG8gTW9ubyc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBhbnkga2V5IHRvIHRyeSBhZ2FpbiEnLCB0aGlzLnggLSAxNTAsIHRoaXMueSArIDE0MCk7XG5cblxuXG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJzsgXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xubGV0IGdhbWUgPSBuZXcgR2FtZSgpOyBcbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPeHlnZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgbiwgY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjsgLy8gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMjAsIDIwLCAyMCwgMTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yOyAvLyBsZXZlbFxuICAgICAgICBjdHguZmlsbFJlY3QoMjUsIDIwLCAxMCwgbik7XG5cblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kRG9sbGFyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGNvbGxlY3RJdGVtcykge1xuICAgICAgICB0aGlzLndpZHRoID0gMTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLTMwO1xuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRoaXMuY29sbGVjdGVkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcyA9IGNvbGxlY3RJdGVtczsgXG4gICAgfVxuXG4gICAgcmVuZGVyKHgpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInBpbmtcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgeCwgdGhpcy55LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBsZXQgbWF4WCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpICsgdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgICAgIGxldCB5ID0gdGhpcy55O1xuXG4gICAgICAgICAgICBpZiAoeCA+IG1pblggJiYgeCA8IG1heFggJiYgeSA+IG1pblkgJiYgeSA8IG1heFkgJiYgIXRoaXMuY29sbGVjdGVkKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHNjb3JlKSB7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDgwMCwgMjAsIDgwLCA1MClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZvbnQgPSAnMjBweCBSb2JvdG8gTW9ubyc7XG4gICAgICAgIGN0eC5maWxsVGV4dChzY29yZSwgODMwLCA1MCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGdhbWVPdmVyKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjU7XG4gICAgICAgIHRoaXMud2lkdGggPSA4MDtcblxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDsgXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXNXaWR0aCArIDEwMDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuXG4gICAgICAgIHRoaXMucmFuZ2UgPSA0MDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGdhbWVPdmVyO1xuICAgIH1cblxuICAgIHJlbmRlcih5KSB7XG4gICAgICAgIHkgPSBwYXJzZUludCh5KTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyYXlcIjsgLy8gYm9keVxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCggXG4gICAgICAgIHRoaXMueCwgeSxcbiAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIGhlYWRcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueC0zMCwgeSs1KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgeSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCArIDIwLCB5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkgKyA1KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGggLSAxMCArIDQwLCB5IC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCArIDQwLCB5ICsgMjUpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiOyAvLyBmaW5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggKyAzMCwgeSArIDUpXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLzQgKyA0MCwgeSAtIDEwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGgvNCArIDQwLCB5ICsgNSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiOyAvLyBleWVcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLngsIHkgKyAxMCAsXG4gICAgICAgICAgICAzLCAzLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMueCAtPSA1O1xuXG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcblxuICAgICAgICBpZiAoeCA+IG1pblggJiYgeCA8IG1heFggJiYgeSA+IG1pblkgJiYgeSA8IG1heFkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9