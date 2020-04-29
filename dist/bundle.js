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
    debugger;
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

      debugger;
      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var y = this.y;
      debugger;

      if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {
        debugger;
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
    this.diver = new _diver_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas.width / 2, this.canvas.height / 2);
    this.oxygenMeter = new _oxygen_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.oxygenLevel = 100;
    this.score = 0;
    this.scoreBoard = new _score_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.fps = 7;
    this.meterColor = "limegreen";
    this.itemCount = 0; // keys 

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
      clearInterval(this.itemInterval); // console.log("GAME OVER");
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

      debugger;
      var minX = this.canvasWidth / 2 - this.range;
      var maxX = this.canvasWidth / 2 + this.range;
      var minY = this.canvasHeight / 2 - this.range;
      var maxY = this.canvasHeight / 2 + this.range;
      var y = this.y;

      if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {
        debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9maXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3h5Z2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9zYW5kZG9sbGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiYWRkTzIiLCJoZWlnaHQiLCJ3aWR0aCIsInkiLCJyYW5nZSIsInBvcHBlZCIsIngiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsIkNvcmFsIiwiY29sb3IiLCJjb2xsZWN0SXRlbXMiLCJjb2xsZWN0ZWQiLCJwYXJzZUludCIsImZpbGxSZWN0IiwiRGl2ZXIiLCJGaXNoIiwibW92ZVRvIiwibGluZVRvIiwiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZGl2ZXIiLCJveHlnZW5NZXRlciIsIk94eWdlbiIsIm94eWdlbkxldmVsIiwic2NvcmUiLCJzY29yZUJvYXJkIiwiU2NvcmVCb2FyZCIsImZwcyIsIm1ldGVyQ29sb3IiLCJpdGVtQ291bnQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwiYnViYmxlcyIsInNoYXJrcyIsIml0ZW1zIiwicnVubmluZyIsImlzR2FtZU92ZXIiLCJidWJibGVJbnRlcnZhbCIsIm94eWdlbkludGVydmFsIiwic2hhcmtJbnRlcnZhbCIsIml0ZW1JbnRlcnZhbCIsInJlbmRlciIsImJpbmQiLCJkcmF3IiwiZ2VuZXJhdGVTaGFya3MiLCJnZW5lcmF0ZUJ1YmJsZXMiLCJnZW5lcmF0ZUl0ZW1zIiwiZGVsZXRlT2xkQnViYmxlcyIsImRlbGV0ZU9sZFNoYXJrcyIsImdldERpdmVQb2ludHMiLCJhZGRPeHlnZW4iLCJsb3NlT3h5Z2VuIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiZ2FtZU92ZXIiLCJpbml0aWFsaXplRXZlbnRzIiwicmVzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXRlclN0YXR1cyIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIm5ld0J1YmJsZXMiLCJuZXdTaGFya3MiLCJuZXdJdGVtcyIsImJ4IiwiaXgiLCJzeSIsIm5ld1kiLCJuZXdYIiwiZXZlbnQiLCJwbGF5IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwiY2xlYXJSZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJJbnRlcnZhbCIsImFsZXJ0IiwiYnViYmxlWCIsImZsb29yIiwicmFuZG9tIiwiYnViYmxlIiwic2hhcmtZIiwic2hhcmsiLCJTaGFyayIsImNvcmFsQ29sb3JzIiwiaXRlbSIsIml0ZW1YIiwiU2FuZERvbGxhciIsImdhbWUiLCJuIiwiU2NvcmUiLCJmb250IiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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USxJQUFJLEdBQUssS0FBS2hCLFdBQUwsR0FBbUIsQ0FBcEIsR0FBeUIsS0FBS00sS0FBMUM7QUFDQSxVQUFJVyxJQUFJLEdBQUssS0FBS2pCLFdBQUwsR0FBbUIsQ0FBcEIsR0FBeUIsS0FBS00sS0FBMUM7QUFDQSxVQUFJWSxJQUFJLEdBQUssS0FBS2pCLFlBQUwsR0FBb0IsQ0FBckIsR0FBMEIsS0FBS0ssS0FBM0M7QUFDQSxVQUFJYSxJQUFJLEdBQUssS0FBS2xCLFlBQUwsR0FBb0IsQ0FBckIsR0FBMEIsS0FBS0ssS0FBM0M7QUFDQSxVQUFJRSxDQUFDLEdBQUcsS0FBS0EsQ0FBYjs7QUFFQSxVQUFJQSxDQUFDLEdBQUdRLElBQUosSUFBWVIsQ0FBQyxHQUFHUyxJQUFoQixJQUF3QlosQ0FBQyxHQUFHYSxJQUE1QixJQUFvQ2IsQ0FBQyxHQUFHYyxJQUE1QyxFQUFrRDtBQUM5QyxhQUFLb0QsUUFBTDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVMLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBhZGRPMikge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwOyBcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwOyBcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoOyBcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAvLyB0aGlzLnggPSAoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzV2lkdGgpOyBcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgKyAzMDsgXG4gICAgICAgIHRoaXMuYWRkTzIgPSBhZGRPMjsgXG4gICAgICAgIHRoaXMucmFuZ2UgPSAyMDtcbiAgICAgICAgdGhpcy5wb3BwZWQgPSBmYWxzZTsgXG5cbiAgICB9XG5cblxuICAgIHJlbmRlcih4KSB7XG4gICAgICAgIGlmICghdGhpcy5wb3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguYXJjKHgsIHRoaXMueSwgMTAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTsgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnkgLT0gMTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeSA9IHRoaXMueTtcblxuICAgICAgICBpZiAoIHggPiBtaW5YICYmIHggPCBtYXhYICYmIHkgPiBtaW5ZICYmIHkgPCBtYXhZICYmICF0aGlzLnBvcHBlZCkge1xuICAgICAgICAgICAgZGVidWdnZXI7IFxuICAgICAgICAgICAgdGhpcy5hZGRPMigpOyAvLyBwYXNzIGluIHRoZSBidWJibGUgdG8gYmUgZGVsZXRlZFxuICAgICAgICAgICAgdGhpcy5wb3BwZWQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JhbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb2xvciwgY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgY29sbGVjdEl0ZW1zKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7IFxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhc0hlaWdodCAtIDMwO1xuICAgICAgICB0aGlzLmNvbGxlY3RJdGVtcyA9IGNvbGxlY3RJdGVtcztcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYW5nZSA9IDIwO1xuICAgICAgICBkZWJ1Z2dlcjsgXG4gICAgfVxuXG4gICAgcmVuZGVyKHgpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgdGhpcy55LCA4LCA0MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4ICs2LCB0aGlzLnkgKyAxMCwgMTAsIDgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCAtIDEwLCB0aGlzLnkgKyAyMCwgMTAsIDgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGxldCBtaW5YID0gKCh0aGlzLmNhbnZhc1dpZHRoIC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWluWSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WSA9ICgodGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgeSA9IHRoaXMueTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmICh4ID4gbWluWCAmJiB4IDwgbWF4WCAmJiB5ID4gbWluWSAmJiB5IDwgbWF4WSAmJiAhdGhpcy5jb2xsZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyOyBcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDsgXG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSAyMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4KSB7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHRhbmtcbiAgICAgICAgICAgIHRoaXMueCAtIDE2LCB0aGlzLnktMTUsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMi41LCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgZmxpcHBlclxuICAgICAgICAgICAgdGhpcy54IC0gMTMsIHRoaXMueSs1MixcbiAgICAgICAgICAgIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQgKiAxLjUsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gcmlnaHQgZmxpcHBlclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnkrNTQsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0ICogMS41LFxuICAgICAgICApO1xuXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyBoZWFkXG4gICAgICAgICAgICB0aGlzLngtNCwgdGhpcy55LTI1LFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC0yLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGJvZHlcbiAgICAgICAgICAgIHRoaXMueCAtIHRoaXMuaGVpZ2h0LzIsIHRoaXMueSAtIHRoaXMud2lkdGgvMixcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueCsyLCB0aGlzLnkrMzAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLzMuNSwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCB1cHBlciBsZWdcbiAgICAgICAgICAgIHRoaXMueCArIDIsIHRoaXMueSs0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgdXBwZXIgbGVnXG4gICAgICAgICAgICB0aGlzLngtNywgdGhpcy55ICsgMzAsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMy41LCB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gcmlnaHQgbG93ZXIgbGVnXG4gICAgICAgICAgICB0aGlzLngtOCwgdGhpcy55ICsgNDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gNSwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gZ29nZ2xlc1xuICAgICAgICAgICAgdGhpcy54LTIsIHRoaXMueSAtIDIyLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gNSxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoY3R4LCB4LCB5KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiOyAvLyBib2R5XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCAyMCwgMjApO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gaGVhZFxuICAgICAgICBjdHgubW92ZVRvKHggLTEwLCB5ICsgNSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIDIwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICBjdHgubW92ZVRvKHggKyAxOCwgeSArIDUpO1xuICAgICAgICBjdHgubGluZVRvKHggKyAzMCwgeSArIDIwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgMzAsIHkpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiOyAvLyBleWVcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgeC0yLCB5ICsgNSxcbiAgICAgICAgICAgIDMsIDMsXG4gICAgICAgICk7XG5cbiAgICB9XG59IiwiaW1wb3J0IERpdmVyIGZyb20gJy4vZGl2ZXIuanMnO1xuaW1wb3J0IFNhbmREb2xsYXIgZnJvbSAnLi9zYW5kZG9sbGFyLmpzJztcbmltcG9ydCBTaGFyayBmcm9tICcuL3NoYXJrLmpzJztcbmltcG9ydCBCdWJibGUgZnJvbSAnLi9idWJibGUuanMnOyBcbmltcG9ydCBTY29yZUJvYXJkIGZyb20gJy4vc2NvcmUuanMnO1xuaW1wb3J0IE94eWdlbiBmcm9tICcuL294eWdlbi5qcyc7XG5pbXBvcnQgRmlzaCBmcm9tICcuL2Zpc2guanMnO1xuaW1wb3J0IENvcmFsIGZyb20gJy4vY29yYWwuanMnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7ICBcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmRpdmVyID0gbmV3IERpdmVyKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMub3h5Z2VuTWV0ZXIgPSBuZXcgT3h5Z2VuKCk7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgPSAxMDA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBuZXcgU2NvcmVCb2FyZCgpO1xuICAgICAgICB0aGlzLmZwcyA9IDc7XG4gICAgICAgIHRoaXMubWV0ZXJDb2xvciA9IFwibGltZWdyZWVuXCI7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gMDtcblxuICAgICAgICAvLyBrZXlzIFxuICAgICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgXG4gICAgICAgIC8vIGN1cnJlbnRseSByZW5kZXJlZCBvYmpzXG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHt9O1xuICAgICAgICB0aGlzLnNoYXJrcyA9IHt9O1xuICAgICAgICB0aGlzLml0ZW1zID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBnYW1lU3RhdGVcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlOyBcbiAgICAgICAgXG4gICAgICAgIC8vIHNldEludGVydmFsIElkc1xuICAgICAgICB0aGlzLmJ1YmJsZUludGVydmFsID0gbnVsbDsgXG4gICAgICAgIHRoaXMub3h5Z2VuSW50ZXJ2YWwgPSBudWxsOyBcbiAgICAgICAgdGhpcy5zaGFya0ludGVydmFsID0gbnVsbDsgXG4gICAgICAgIHRoaXMuaXRlbUludGVydmFsID0gbnVsbDsgXG4gICAgICAgIFxuICAgICAgICAvL2luaXRpYWxpemUgJiBiaW5kXG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7IFxuICAgICAgICB0aGlzLmdlbmVyYXRlU2hhcmtzID0gdGhpcy5nZW5lcmF0ZVNoYXJrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQnViYmxlcyA9IHRoaXMuZ2VuZXJhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVJdGVtcyA9IHRoaXMuZ2VuZXJhdGVJdGVtcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGV0ZU9sZEJ1YmJsZXMgPSB0aGlzLmRlbGV0ZU9sZEJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVPbGRTaGFya3MgPSB0aGlzLmRlbGV0ZU9sZFNoYXJrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldERpdmVQb2ludHMgPSB0aGlzLmdldERpdmVQb2ludHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0SXRlbXMgPSB0aGlzLmNvbGxlY3RJdGVtcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZE94eWdlbiA9IHRoaXMuYWRkT3h5Z2VuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zZU94eWdlbiA9IHRoaXMubG9zZU94eWdlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTsgXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVFdmVudHMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLm94eWdlbkxldmVsID0gMTAwO1xuICAgICAgICB0aGlzLm1ldGVyU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHt9O1xuICAgICAgICB0aGlzLnNoYXJrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmJ1YmJsZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5nZW5lcmF0ZUJ1YmJsZXMsIDIwMDApO1xuICAgICAgICB0aGlzLm94eWdlbkludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5sb3NlT3h5Z2VuLCAyMDAwKTtcbiAgICAgICAgdGhpcy5zaGFya0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5nZW5lcmF0ZVNoYXJrcywgMTAwMDApO1xuICAgICAgICB0aGlzLml0ZW1JbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZ2VuZXJhdGVJdGVtcywgMTAwMClcbiAgICB9XG5cbiAgICBhZGRPeHlnZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIE94eWdlblwiKTtcbiAgICAgICAgKCh0aGlzLm94eWdlbkxldmVsICsgMjApID4gMTAwKSA/IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCA9IDEwMCA6IFxuICAgICAgICAgICAgdGhpcy5veHlnZW5MZXZlbCArPSAyMDtcbiAgICAgICAgdGhpcy5tZXRlclN0YXR1cygpO1xuICAgIH1cblxuICAgIGxvc2VPeHlnZW4oKSB7XG4gICAgICAgIHRoaXMub3h5Z2VuTGV2ZWwgLT0gNTsgXG4gICAgICAgIHRoaXMubWV0ZXJTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBtZXRlclN0YXR1cygpIHtcbiAgICAgICAgaWYgKHRoaXMub3h5Z2VuTGV2ZWwgPj0gNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwibGltZWdyZWVuXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgNjYpIHRoaXMubWV0ZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGlmICh0aGlzLm94eWdlbkxldmVsIDwgMzMpIHRoaXMubWV0ZXJDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgZ2V0RGl2ZVBvaW50cygpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxOyBcbiAgICB9XG5cbiAgICBjb2xsZWN0SXRlbXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBDb2xsZWN0ZWQhXCIpXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gNVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG5cbiAgICAgICAgbGV0IG5ld0J1YmJsZXMgPSB0aGlzLmJ1YmJsZXM7XG4gICAgICAgIGxldCBuZXdTaGFya3MgPSB0aGlzLnNoYXJrcztcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5pdGVtcztcblxuICAgICAgICBpZiAodGhpcy51cFByZXNzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ueSArPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2l4XS55ICs9IHRoaXMuZnBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KHN5KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoYXJrcyA9IG5ld1NoYXJrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvd25QcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmdldERpdmVQb2ludHMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ueSAtPSB0aGlzLmZwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2l4XS55IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc3kgaW4gdGhpcy5zaGFya3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KHN5KSAtIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgIG5ld1NoYXJrc1tuZXdZXSA9IG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld1NoYXJrc1tzeV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoYXJrcyA9IG5ld1NoYXJrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuc2hhcmtzW3N5XS54IC09IHRoaXMuZnBzO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChieCkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3QnViYmxlc1tuZXdYXSA9IG5ld0J1YmJsZXNbYnhdO1xuICAgICAgICAgICAgICAgICBkZWxldGUgbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGZvciAobGV0IGl4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChpeCkgLSB0aGlzLmZwcztcbiAgICAgICAgICAgICAgICAgbmV3SXRlbXNbbmV3WF0gPSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdJdGVtc1tpeF07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSBuZXdCdWJibGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGVmdFByZXNzZWQpIHtcbiAgICAgICAgICAgICBmb3IgKGxldCBzeSBpbiB0aGlzLnNoYXJrcykge1xuICAgICAgICAgICAgICAgICB0aGlzLnNoYXJrc1tzeV0ueCArPSB0aGlzLmZwcztcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZm9yIChsZXQgYnggaW4gbmV3QnViYmxlcykge1xuICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGJ4KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICBuZXdCdWJibGVzW25ld1hdID0gbmV3QnViYmxlc1tieF07XG4gICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdCdWJibGVzW2J4XTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZm9yIChsZXQgaXggaW4gdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGl4KSArIHRoaXMuZnBzO1xuICAgICAgICAgICAgICAgICBuZXdJdGVtc1tuZXdYXSA9IG5ld0l0ZW1zW2l4XTtcbiAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld0l0ZW1zW2l4XTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xuICAgICAgICAgICAgIHRoaXMuYnViYmxlcyA9IG5ld0J1YmJsZXM7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKCkge1xuICAgICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcCBrZXkgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cFByZXNzZWQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb3duIGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJpZ2h0IGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZWZ0IGtleSBpcyBwcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTsgXG4gICAgICAgIHRoaXMuZGl2ZXIucmVuZGVyKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5veHlnZW5NZXRlci5yZW5kZXIodGhpcy5jdHgsIHRoaXMub3h5Z2VuTGV2ZWwsIHRoaXMubWV0ZXJDb2xvcik7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5yZW5kZXIodGhpcy5jdHgsIHRoaXMuc2NvcmUpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgJiYgT2JqZWN0LnZhbHVlcyh0aGlzLmJ1YmJsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGJ4IGluIHRoaXMuYnViYmxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlc1tieF0ucmVuZGVyKGJ4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmIE9iamVjdC52YWx1ZXModGhpcy5zaGFya3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFya3Nbc3ldLnJlbmRlcihzeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmIE9iamVjdC52YWx1ZXModGhpcy5pdGVtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXggaW4gdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaXhdLnJlbmRlcihpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5veHlnZW5MZXZlbCA8PSAwICYmIHRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyAmJiAoIXRoaXMuaXNHYW1lT3ZlcikpIHsgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5idWJibGVJbnRlcnZhbCk7IFxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2hhcmtJbnRlcnZhbCk7IFxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMub3h5Z2VuSW50ZXJ2YWwpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaXRlbUludGVydmFsKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdBTUUgT1ZFUlwiKTtcbiAgICAgICAgLy8gcmVuZGVyIGdhbWUgb3ZlciBzY3JlZW5cbiAgICAgICAgYWxlcnQoXCJHYW1lT1ZFUlwiKTsgLy8gcmVtb3ZlIGV2ZW50dWFsbHkgXG4gICAgICAgIHRoaXMucmVzdGFydCgpOyAvLyBzZXRUaW1lb3V0P1xuICAgIH1cblxuICAgIGdlbmVyYXRlQnViYmxlcygpIHtcbiAgICAgICAgbGV0IGJ1YmJsZVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aClcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG5ldyBCdWJibGUodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuYWRkT3h5Z2VuKTtcbiAgICAgICAgdGhpcy5idWJibGVzW2J1YmJsZVhdID0gYnViYmxlOyBcbiAgICAgICAgdGhpcy5kZWxldGVPbGRCdWJibGVzKCk7XG5cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlT2xkQnViYmxlcygpIHtcbiAgICAgICBmb3IgKGxldCBieCBpbiB0aGlzLmJ1YmJsZXMpIHtcbiAgICAgICAgICAgKHRoaXMuYnViYmxlc1tieF0ucG9wcGVkIHx8IHRoaXMuYnViYmxlc1tieF0ueSA8IDApID8gZGVsZXRlIHRoaXMuYnViYmxlc1tieF0gOiBudWxsOyAgICAgIFxuICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVNoYXJrcygpIHtcbiAgICAgICAgbGV0IHNoYXJrWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGxldCBzaGFyayA9IG5ldyBTaGFyayh0aGlzLmN0eCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5nYW1lT3Zlcik7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLnNoYXJrc1tzaGFya1ldID0gc2hhcms7XG4gICAgICAgIHRoaXMuZGVsZXRlT2xkU2hhcmtzKCk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVPbGRTaGFya3MoKSB7XG4gICAgICAgIGZvciAobGV0IHN5IGluIHRoaXMuc2hhcmtzKSB7XG4gICAgICAgICAgICAodGhpcy5zaGFya3Nbc3ldLnggPCAtMTAwKSA/IGRlbGV0ZSB0aGlzLnNoYXJrc1tzeV06IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjb3JhbENvbG9ycyA9IFtcImhvdHBpbmtcIiwgXCJ0ZWFsXCIsIFwib3JhbmdlXCIsIFwicmVkXCIsIFwicGlua1wiXTtcblxuICAgICAgICBsZXQgaXRlbTsgXG4gICAgICAgIGxldCBpdGVtWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoKTsgXG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbUNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgaXRlbSA9IG5ldyBTYW5kRG9sbGFyKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNvbGxlY3RJdGVtcyk7XG4gICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBjb3JhbENvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XG4gICAgICAgICAgICBpdGVtID0gbmV3IENvcmFsKHRoaXMuY3R4LCBjb2xvciwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jb2xsZWN0SXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtc1tpdGVtWF0gPSBpdGVtOyBcbiAgICAgICAgdGhpcy5pdGVtQ291bnQgKz0gMTtcblxuICAgIH1cblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7IFxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmxldCBnYW1lID0gbmV3IEdhbWUoKTsgXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3h5Z2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbmRlcihjdHgsIG4sIGNvbG9yKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7IC8vIGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwLCAyMCwgMjAsIDEwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjsgLy8gbGV2ZWxcbiAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyMCwgMTAsIG4pO1xuXG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZERvbGxhciB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoLCBjb2xsZWN0SXRlbXMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEwO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzSGVpZ2h0IC0zMDtcbiAgICAgICAgdGhpcy5yYW5nZSA9IDIwO1xuICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5jb2xsZWN0SXRlbXMgPSBjb2xsZWN0SXRlbXM7IFxuICAgIH1cblxuICAgIHJlbmRlcih4KSB7XG4gICAgICAgIHggPSBwYXJzZUludCh4KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJwaW5rXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIHgsIHRoaXMueSxcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXI7IFxuICAgICAgICAgICAgbGV0IG1pblggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICAgICAgbGV0IG1heFggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSArIHRoaXMucmFuZ2UpO1xuICAgICAgICAgICAgbGV0IG1pblkgPSAoKHRoaXMuY2FudmFzSGVpZ2h0IC8gMikgLSB0aGlzLnJhbmdlKTtcbiAgICAgICAgICAgIGxldCBtYXhZID0gKCh0aGlzLmNhbnZhc0hlaWdodCAvIDIpICsgdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMueTtcblxuICAgICAgICAgICAgaWYgKHggPiBtaW5YICYmIHggPCBtYXhYICYmIHkgPiBtaW5ZICYmIHkgPCBtYXhZICYmICF0aGlzLmNvbGxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoY3R4LCBzY29yZSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCg4MDAsIDIwLCA4MCwgNTApXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuXG4gICAgICAgIGN0eC5mb250ID0gJzE2cHggbW9ub3NwYWNlJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCA4MzAsIDUwKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmsge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aCwgZ2FtZU92ZXIpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDgwO1xuXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0OyBcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbnZhc1dpZHRoICsgMTAwO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG5cbiAgICAgICAgdGhpcy5yYW5nZSA9IDQwO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZ2FtZU92ZXI7XG4gICAgfVxuXG4gICAgcmVuZGVyKHkpIHtcbiAgICAgICAgeSA9IHBhcnNlSW50KHkpO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiOyAvLyBib2R5XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KCBcbiAgICAgICAgdGhpcy54LCB5LFxuICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgLy8gaGVhZFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54LTMwLCB5KzUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54LCB5ICsgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54LCB5KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54ICsgdGhpcy53aWR0aCwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoICsgMjAsIHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCwgeSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTsgLy8gdGFpbFxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54ICsgdGhpcy53aWR0aCwgeSArIDUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aCAtIDEwICsgNDAsIHkgLSAxMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLndpZHRoICsgNDAsIHkgKyAyNSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmV5XCI7IC8vIGZpblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIDMwLCB5ICsgNSlcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMud2lkdGgvNCArIDQwLCB5IC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy53aWR0aC80ICsgNDAsIHkgKyA1KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7IC8vIGV5ZVxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgICAgIHRoaXMueCwgeSArIDEwICxcbiAgICAgICAgICAgIDMsIDMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy54IC09IDU7XG5cbiAgICAgICAgbGV0IG1pblggPSAoKHRoaXMuY2FudmFzV2lkdGggLyAyKSAtIHRoaXMucmFuZ2UpO1xuICAgICAgICBsZXQgbWF4WCA9ICgodGhpcy5jYW52YXNXaWR0aCAvIDIpICsgdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtaW5ZID0gKCh0aGlzLmNhbnZhc0hlaWdodCAvIDIpIC0gdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCBtYXhZID0gKCh0aGlzLmNhbnZhc0hlaWdodCAvIDIpICsgdGhpcy5yYW5nZSk7XG4gICAgICAgIGxldCB4ID0gdGhpcy54O1xuXG4gICAgICAgIGlmICh4ID4gbWluWCAmJiB4IDwgbWF4WCAmJiB5ID4gbWluWSAmJiB5IDwgbWF4WSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=