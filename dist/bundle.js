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

 // import * as firebase from 'firebase/app';
// import 'firebase/database';
// const firebaseConfig = {
//     apiKey: "AIzaSyB7upg9r9T9hT3ChSuRfWyjsXIYK7Iv-9k",
//     authDomain: "scuubaduu.firebaseapp.com",
//     databaseURL: "https://scuubaduu.firebaseio.com",
//     projectId: "scuubaduu",
//     storageBucket: "scuubaduu.appspot.com",
//     messagingSenderId: "209414285335",
//     appId: "1:209414285335:web:cfe5f81e7cc62d3d895452",
//     measurementId: "G-7FMJZ5BQNY"
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX292ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9veHlnZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhbmRkb2xsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQnViYmxlIiwiY3R4IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJhZGRPMiIsImhlaWdodCIsIndpZHRoIiwieSIsInJhbmdlIiwicG9wcGVkIiwieCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiQ29yYWwiLCJjb2xvciIsImNvbGxlY3RJdGVtcyIsImNvbGxlY3RlZCIsInBhcnNlSW50IiwiZmlsbFJlY3QiLCJEaXZlciIsIkZpc2giLCJtb3ZlVG8iLCJsaW5lVG8iLCJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJveHlnZW5NZXRlciIsIk94eWdlbiIsImRpdmVyIiwic2NvcmVCb2FyZCIsIlNjb3JlQm9hcmQiLCJnYW1lT3ZlclNjcmVlbiIsIkdhbWVPdmVyU2NyZWVuIiwibWV0ZXJDb2xvciIsInNjb3JlIiwiaXRlbUNvdW50Iiwib3h5Z2VuTGV2ZWwiLCJmcHMiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwiYnViYmxlcyIsInNoYXJrcyIsIml0ZW1zIiwicnVubmluZyIsImlzR2FtZU92ZXIiLCJidWJibGVJbnRlcnZhbCIsIm94eWdlbkludGVydmFsIiwic2hhcmtJbnRlcnZhbCIsIml0ZW1JbnRlcnZhbCIsInJlbmRlciIsImJpbmQiLCJkcmF3IiwiZ2VuZXJhdGVTaGFya3MiLCJnZW5lcmF0ZUJ1YmJsZXMiLCJnZW5lcmF0ZUl0ZW1zIiwiZGVsZXRlT2xkQnViYmxlcyIsImRlbGV0ZU9sZFNoYXJrcyIsImdldERpdmVQb2ludHMiLCJhZGRPeHlnZW4iLCJsb3NlT3h5Z2VuIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiZ2FtZU92ZXIiLCJpbml0aWFsaXplRXZlbnRzIiwicmVzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXRlclN0YXR1cyIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIm5ld0J1YmJsZXMiLCJuZXdTaGFya3MiLCJuZXdJdGVtcyIsImJ4IiwiaXgiLCJzeSIsIm5ld1kiLCJuZXdYIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXkiLCJrZXlDb2RlIiwiY2xlYXJSZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJJbnRlcnZhbCIsImJ1YmJsZVgiLCJmbG9vciIsInJhbmRvbSIsImJ1YmJsZSIsInNoYXJrWSIsInNoYXJrIiwiU2hhcmsiLCJjb3JhbENvbG9ycyIsIml0ZW0iLCJpdGVtWCIsIlNhbmREb2xsYXIiLCJHYW1lT3ZlciIsImZpbmFsc2NvcmUiLCJmb250IiwiZmlsbFRleHQiLCJnYW1lIiwibiIsIlNjb3JlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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bUIsQ0FBcEIsR0FBeUIsS0FBS00sS0FBMUM7QUFDQSxVQUFJWSxJQUFJLEdBQUssS0FBS2pCLFlBQUwsR0FBb0IsQ0FBckIsR0FBMEIsS0FBS0ssS0FBM0M7QUFDQSxVQUFJYSxJQUFJLEdBQUssS0FBS2xCLFlBQUwsR0FBb0IsQ0FBckIsR0FBMEIsS0FBS0ssS0FBM0M7QUFDQSxVQUFJRSxDQUFDLEdBQUcsS0FBS0EsQ0FBYjs7QUFFQSxVQUFJQSxDQUFDLEdBQUdRLElBQUosSUFBWVIsQ0FBQyxHQUFHUyxJQUFoQixJQUF3QlosQ0FBQyxHQUFHYSxJQUE1QixJQUFvQ2IsQ0FBQyxHQUFHYyxJQUE1QyxFQUFrRDtBQUM5QyxhQUFLc0QsUUFBTDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVMLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBhZGRPMikge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwOyBcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwOyBcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoOyBcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAvLyB0aGlzLnggPSAoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzV2lkdGgpOyBcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgKyAzMDsgXG4gICAgICAgIHRoaXMuYWRkTzIgPSBhZGRPMjsgXG4gICAgICAgIHRoaXMucmFuZ2UgPSAyMDtcbiAgICAgICAgdGhpcy5wb3BwZWQgPSBmYWxzZTsgXG5cbiAgICB9XG5cblxuICAgIHJlbmRlcih4KSB7XG4gICAgICAgIGlmICghdGhpcy5wb3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguYXJjKHgsIHRoaXMueSwgMTAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTsgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeSA9IHRoaXMueTtcblxuICAgICAgICBpZiAoIHggPiBtaW5YICYmIHggPCBtYXhYICYmIHkgPiBtaW5ZICYmIHkgPCBtYXhZICYmICF0aGlzLnBvcHBlZCkge1xuXG4gICAgICAgICAgICB0aGlzLmFkZE8yKCk7IC8vIHBhc3MgaW4gdGhlIGJ1YmJsZSB0byBiZSBkZWxldGVkXG4gICAgICAgICAgICB0aGlzLnBvcHBlZCA9IHRydWU7IFxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmFsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvbG9yLCBjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjb2xsZWN0SXRlbXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjsgXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzSGVpZ2h0IC0gMzA7XG4gICAgICAgIHRoaXMuY29sbGVjdEl0ZW1zID0gY29sbGVjdEl0ZW1zO1xuICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoeCkge1xuICAgICAgICB4ID0gcGFyc2VJbnQoeCk7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB0aGlzLnksIDgsIDQwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggKzYsIHRoaXMueSArIDEwLCAxMCwgOCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4IC0gMTAsIHRoaXMueSArIDIwLCAxMCwgOCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeSA9IHRoaXMueTtcblxuICAgICAgICBpZiAoeCA+IG1pblggJiYgeCA8IG1heFggJiYgeSA+IG1pblkgJiYgeSA8IG1heFkgJiYgIXRoaXMuY29sbGVjdGVkKSB7XG4gICAgIFxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0SXRlbXMoKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZlciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gdGFua1xuICAgICAgICAgICAgdGhpcy54IC0gMTYsIHRoaXMueS0xNSxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAyLjUsIHRoaXMuaGVpZ2h0ICogMS41LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLnggLSAxMywgdGhpcy55KzUyLFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBmbGlwcGVyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSs1NCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQgKiAxLjUsXG4gICAgICAgICk7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGhlYWRcbiAgICAgICAgICAgIHRoaXMueC00LCB0aGlzLnktMjUsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0LTIsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gYm9keVxuICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy55IC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAyLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54KzIsIHRoaXMueSszMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMy41LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgdGhpcy54ICsgMiwgdGhpcy55KzQwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDUsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gbGVmdCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC03LCB0aGlzLnkgKyAzMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAzLjUsIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBsb3dlciBsZWdcbiAgICAgICAgICAgIHRoaXMueC04LCB0aGlzLnkgKyA0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyBnb2dnbGVzXG4gICAgICAgICAgICB0aGlzLngtMiwgdGhpcy55IC0gMjIsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyA1LFxuICAgICAgICApO1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7IC8vIGJvZHlcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDIwLCAyMCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyBoZWFkXG4gICAgICAgIGN0eC5tb3ZlVG8oeCAtMTAsIHkgKyA1KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyAvLyB0YWlsXG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIDE4LCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIDMwLCB5ICsgMjApO1xuICAgICAgICBjdHgubGluZVRvKHggKyAzMCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7IC8vIGV5ZVxuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB4LTIsIHkgKyA1LFxuICAgICAgICAgICAgMywgMyxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgRGl2ZXIgZnJvbSAnLi9kaXZlci5qcyc7XG5pbXBvcnQgU2FuZERvbGxhciBmcm9tICcuL3NhbmRkb2xsYXIuanMnO1xuaW1wb3J0IFNoYXJrIGZyb20gJy4vc2hhcmsuanMnO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL2J1YmJsZS5qcyc7IFxuaW1wb3J0IFNjb3JlQm9hcmQgZnJvbSAnLi9zY29yZS5qcyc7XG5pbXBvcnQgT3h5Z2VuIGZyb20gJy4vb3h5Z2VuLmpzJztcbmltcG9ydCBGaXNoIGZyb20gJy4vZmlzaC5qcyc7XG5pbXBvcnQgQ29yYWwgZnJvbSAnLi9jb3JhbC5qcyc7XG5pbXBvcnQgR2FtZU92ZXJTY3JlZW4gZnJvbSAnLi9nYW1lX292ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICAgICAgdGhpcy5veHlnZW5NZXRlciA9IG5ldyBPeHlnZW4oKTtcbiAgICAgICAgdGhpcy5kaXZlciA9IG5ldyBEaXZlcih0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBuZXcgU2NvcmVCb2FyZCgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gbmV3IEdhbWVPdmVyU2NyZWVuKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgdGhpcy5tZXRlckNvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMDtcbiAgICAgICAgdGhpcy5mcHMgPSA3O1xuICAgICAgICBcbiAgICAgICAgLy8ga2V5cyBcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy51cFByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuZG93blByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIFxuICAgICAgICAvLyBjdXJyZW50bHkgcmVuZGVyZWQgb2Jqc1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zaGFya3MgPSB7fTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gZ2FtZVN0YXRlXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTsgXG4gICAgICAgIFxuICAgICAgICAvLyBzZXRJbnRlcnZhbCBJZHNcbiAgICAgICAgdGhpcy5idWJibGVJbnRlcnZhbCA9IG51bGw7IFxuICAgICAgICB0aGlzLm94eWdlbkludGVydmFsID0gbnVsbDsgXG4gICAgICAgIHRoaXMuc2hhcmtJbnRlcnZhbCA9IG51bGw7IFxuICAgICAgICB0aGlzLml0ZW1JbnRlcnZhbCA9IG51bGw7IFxuICAgICAgICBcbiAgICAgICAgLy9pbml0aWFsaXplICYgYmluZFxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpOyBcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVNoYXJrcyA9IHRoaXMuZ2VuZXJhdGVTaGFya3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1YmJsZXMgPSB0aGlzLmdlbmVyYXRlQnViYmxlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlSXRlbXMgPSB0aGlzLmdlbmVyYXRlSXRlbXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVPbGRCdWJibGVzID0gdGhpcy5kZWxldGVPbGRCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZXRlT2xkU2hhcmtzID0gdGhpcy5kZWxldGVPbGRTaGFya3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXREaXZlUG9pbnRzID0gdGhpcy5nZXREaXZlUG9pbnRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGVjdEl0ZW1zID0gdGhpcy5jb2xsZWN0SXRlbXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRPeHlnZW4gPSB0aGlzLmFkZE94eWdlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VPeHlnZW4gPSB0aGlzLmxvc2VPeHlnZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5VXAgPSB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMDtcbiAgICAgICAgdGhpcy5idWJibGVzID0ge307XG4gICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICAgICAgdGhpcy5zaGFya3MgPSB7fTtcbiAgICAgICAgdGhpcy5tZXRlclN0YXR1cygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmJ1YmJsZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5nZW5lcmF0ZUJ1YmJsZXMsIDIwMDApO1xuICAgICAgICB0aGlzLm94eWdlbkludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5sb3NlT3h5Z2VuLCAyMDAwKTtcbiAgICAgICAgdGhpcy5zaGFya0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5nZW5lcmF0ZVNoYXJrcywgMTAwMDApO1xuICAgICAgICB0aGlzLml0ZW1JbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVJdGVtcywgMTAwMClcbiAgICB9XG5cbiAgICBhZGRPeHlnZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIE94eWdlblwiKTtcbiAgICAgICAgKCh0aGlzLm94eWdlbkxldmVsICsgMjApID4gMTAwKSA/IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMCA6IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCArPSAyMDtcbiAgICAgICAgdGhpcy5tZXRlclN0YXR1cygpO1xuICAgIH1cblxuICAgIGxvc2VPeHlnZW4oKSB7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgLT0gMjU7IC8vIGNoYW5nZSBiYWNrIHRvIC01IGFmdGVyIHRlc3RpbmcgXG4gICAgICAgIHRoaXMubWV0ZXJTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBtZXRlclN0YXR1cygpIHtcbiAgICAgICAgaWYgKHRoaXMub3h5Z2VuTGV2ZWwgPj0gNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgMzMpIHRoaXMubWV0ZXJDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgZ2V0RGl2ZVBvaW50cygpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxOyBcbiAgICB9XG5cbiAgICBjb2xsZWN0SXRlbXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBDb2xsZWN0ZWQhXCIpXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gNVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG5cbiAgICAgICAgbGV0IG5ld0J1YmJsZXMgPSB0aGlzLmJ1YmJsZXM7XG4gICAgICAgIGxldCBuZXdTaGFya3MgPSB0aGlzLnNoYXJrcztcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5pdGVtcztcblxuICAgICAgICBpZiAodGhpcy51cFByZXNzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ueSArPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2l4XS55ICs9IHRoaXMuZnBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KHN5KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoYXJrcyA9IG5ld1NoYXJrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvd25QcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmdldERpdmVQb2ludHMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ueSAtPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2l4XS55IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KHN5KSAtIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoYXJrcyA9IG5ld1NoYXJrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuc2hhcmtzW3N5XS54IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChieCkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3QnViYmxlc1tuZXdYXSA9IG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICBkZWxldGUgbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChpeCkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3SXRlbXNbbmV3WF0gPSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGVmdFByZXNzZWQpIHtcbiAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICB0aGlzLnNoYXJrc1tzeV0ueCArPSB0aGlzLmZwcztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gbmV3QnViYmxlcykge1xuICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGJ4KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICBuZXdCdWJibGVzW25ld1hdID0gbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZm9yIChsZXQgaXggaW4gdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGl4KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICBuZXdJdGVtc1tuZXdYXSA9IG5ld0l0ZW1zW2l4XTtcbiAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld0l0ZW1zW2l4XTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xuICAgICAgICAgICAgIHRoaXMuYnViYmxlcyA9IG5ld0J1YmJsZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKCkge1xuICAgICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXAga2V5IGlzIHByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBQcmVzc2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG93biBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93blByZXNzZWQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSaWdodCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVmdCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7IFxuICAgICAgICB0aGlzLmRpdmVyLnJlbmRlcih0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMub3h5Z2VuTWV0ZXIucmVuZGVyKHRoaXMuY3R4LCB0aGlzLm94eWdlbkxldmVsLCB0aGlzLm1ldGVyQ29sb3IpO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG5cblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmIE9iamVjdC52YWx1ZXModGhpcy5idWJibGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZXNbYnhdLnJlbmRlcihieCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyAmJiBPYmplY3QudmFsdWVzKHRoaXMuc2hhcmtzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmtzW3N5XS5yZW5kZXIoc3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyAmJiBPYmplY3QudmFsdWVzKHRoaXMuaXRlbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2l4XS5yZW5kZXIoaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3h5Z2VuTGV2ZWwgPD0gMCAmJiB0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgJiYgKCF0aGlzLmlzR2FtZU92ZXIpKSB7ICAgICAgICAgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYnViYmxlSW50ZXJ2YWwpOyBcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoYXJrSW50ZXJ2YWwpOyBcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm94eWdlbkludGVydmFsKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLml0ZW1JbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4ucmVuZGVyKHRoaXMuc2NvcmUpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlckdhbWVPdmVyU2NyZWVuKCk7XG4gICAgICAgIC8vIHNldFRpbWVvdXQodGhpcy5yZXN0YXJ0LmJpbmQodGhpcyksIDEwMDAwKVxuICAgIH1cblxuICAgIGdlbmVyYXRlQnViYmxlcygpIHtcbiAgICAgICAgbGV0IGJ1YmJsZVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aClcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG5ldyBCdWJibGUodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuYWRkT3h5Z2VuKTtcbiAgICAgICAgdGhpcy5idWJibGVzW2J1YmJsZVhdID0gYnViYmxlOyBcbiAgICAgICAgdGhpcy5kZWxldGVPbGRCdWJibGVzKCk7XG5cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlT2xkQnViYmxlcygpIHtcbiAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgKHRoaXMuYnViYmxlc1tieF0ucG9wcGVkIHx8IHRoaXMuYnViYmxlc1tieF0ueSA8IDApID8gZGVsZXRlIHRoaXMuYnViYmxlc1tieF0gOiBudWxsOyAgICAgIFxuICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVNoYXJrcygpIHtcbiAgICAgICAgbGV0IHNoYXJrWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGxldCBzaGFyayA9IG5ldyBTaGFyayh0aGlzLmN0eCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5nYW1lT3Zlcik7XG5cbiAgICAgICAgdGhpcy5zaGFya3Nbc2hhcmtZXSA9IHNoYXJrO1xuICAgICAgICB0aGlzLmRlbGV0ZU9sZFNoYXJrcygpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlT2xkU2hhcmtzKCkge1xuICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgKHRoaXMuc2hhcmtzW3N5XS54IDwgLTEwMCkgPyBkZWxldGUgdGhpcy5zaGFya3Nbc3ldOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVJdGVtcygpIHtcbiAgICAgICAgY29uc3QgY29yYWxDb2xvcnMgPSBbXCJob3RwaW5rXCIsIFwidGVhbFwiLCBcIm9yYW5nZVwiLCBcInJlZFwiLCBcInBpbmtcIl07XG5cbiAgICAgICAgbGV0IGl0ZW07IFxuICAgICAgICBsZXQgaXRlbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aCk7IFxuXG4gICAgICAgIGlmICh0aGlzLml0ZW1Db3VudCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIGl0ZW0gPSBuZXcgU2FuZERvbGxhcih0aGlzLmN0eCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jb2xsZWN0SXRlbXMpO1xuICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gY29yYWxDb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICAgICAgICAgICAgaXRlbSA9IG5ldyBDb3JhbCh0aGlzLmN0eCwgY29sb3IsIHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY29sbGVjdEl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXNbaXRlbVhdID0gaXRlbTsgXG4gICAgICAgIHRoaXMuaXRlbUNvdW50ICs9IDE7XG5cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTsgXG4gICAgfVxuXG4gICAgcmVuZGVyKGZpbmFsc2NvcmUpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1MHB4IFJvYm90byBNb25vJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJERUQgRFVVREVcIiwgdGhpcy54IC0gMTI1LCB0aGlzLnkgLTUwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICcyMHB4IFJvYm90byBNb25vJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICcyMHB4IFJvYm90byBNb25vJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIGFueSBrZXkgdG8gdHJ5IGFnYWluIScsIHRoaXMueCAtIDE1MCwgdGhpcy55ICsgMTQwKTtcblxuXG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnOyBcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG4vLyBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuLy8gaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5cbi8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuLy8gICAgIGFwaUtleTogXCJBSXphU3lCN3VwZzlyOVQ5aFQzQ2hTdVJmV3lqc1hJWUs3SXYtOWtcIixcbi8vICAgICBhdXRoRG9tYWluOiBcInNjdXViYWR1dS5maXJlYmFzZWFwcC5jb21cIixcbi8vICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NjdXViYWR1dS5maXJlYmFzZWlvLmNvbVwiLFxuLy8gICAgIHByb2plY3RJZDogXCJzY3V1YmFkdXVcIixcbi8vICAgICBzdG9yYWdlQnVja2V0OiBcInNjdXViYWR1dS5hcHBzcG90LmNvbVwiLFxuLy8gICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIwOTQxNDI4NTMzNVwiLFxuLy8gICAgIGFwcElkOiBcIjE6MjA5NDE0Mjg1MzM1OndlYjpjZmU1ZjgxZTdjYzYyZDNkODk1NDUyXCIsXG4vLyAgICAgbWVhc3VyZW1lbnRJZDogXCJHLTdGTUpaNUJRTllcIlxuLy8gfTtcblxubGV0IGdhbWUgPSBuZXcgR2FtZSgpOyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPeHlnZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgbiwgY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjsgLy8gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMjAsIDIwLCAyMCwgMTAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yOyAvLyBsZXZlbFxuICAgICAgICBjdHguZmlsbFJlY3QoMjUsIDIwLCAxMCwgbik7XG5cblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kRG9sbGFyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGNvbGxlY3RJdGVtcykge1xuICAgICAgICB0aGlzLndpZHRoID0gMTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLTMwO1xuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRoaXMuY29sbGVjdGVkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcyA9IGNvbGxlY3RJdGVtczsgXG4gICAgfVxuXG4gICAgcmVuZGVyKHgpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInBpbmtcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgeCwgdGhpcy55LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWluWCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBsZXQgbWF4WCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpICsgdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICAgICAgbGV0IG1heFkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgKyB0aGlzLnJhbmdlKTtcbiAgICAgICAgICAgIGxldCB5ID0gdGhpcy55O1xuXG4gICAgICAgICAgICBpZiAoeCA+IG1pblggJiYgeCA8IG1heFggJiYgeSA+IG1pblkgJiYgeSA8IG1heFkgJiYgIXRoaXMuY29sbGVjdGVkKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihjdHgsIHNjb3JlKSB7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDgwMCwgMjAsIDgwLCA1MClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZvbnQgPSAnMjBweCBSb2JvdG8gTW9ubyc7XG4gICAgICAgIGN0eC5maWxsVGV4dChzY29yZSwgODMwLCA1MCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0hlaWdodCwgY2FudmFzV2lkdGgsIGdhbWVPdmVyKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjU7XG4gICAgICAgIHRoaXMud2lkdGggPSA4MDtcblxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDsgXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXNXaWR0aCArIDEwMDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuXG4gICAgICAgIHRoaXMucmFuZ2UgPSA0MDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGdhbWVPdmVyO1xuICAgIH1cblxuICAgIHJlbmRlcih5KSB7XG4gICAgICAgIHkgPSBwYXJzZUludCh5KTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyYXlcIjsgLy8gYm9keVxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCggXG4gICAgICAgIHRoaXMueCwgeSxcbiAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIGhlYWRcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueC0zMCwgeSs1KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgeSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCArIDIwLCB5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIHRoaXMud2lkdGgsIHkgKyA1KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGggLSAxMCArIDQwLCB5IC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCArIDQwLCB5ICsgMjUpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiOyAvLyBmaW5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggKyAzMCwgeSArIDUpXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoLzQgKyA0MCwgeSAtIDEwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGgvNCArIDQwLCB5ICsgNSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiOyAvLyBleWVcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLngsIHkgKyAxMCAsXG4gICAgICAgICAgICAzLCAzLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMueCAtPSA1O1xuXG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcblxuICAgICAgICBpZiAoeCA+IG1pblggJiYgeCA8IG1heFggJiYgeSA+IG1pblkgJiYgeSA8IG1heFkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9