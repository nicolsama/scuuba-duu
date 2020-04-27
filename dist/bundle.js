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
  function Bubble() {
    _classCallCheck(this, Bubble);

    this.height = 20;
    this.width = 20;
  }

  _createClass(Bubble, [{
    key: "render",
    value: function render(ctx, x, y) {
      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, this.width, this.height);
      ctx.fillStyle = "white";
      ctx.fillRect(x + this.width / 6, y + this.width / 6, this.width / 6, this.height / 6);
    }
  }]);

  return Bubble;
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
  function Diver() {
    _classCallCheck(this, Diver);

    this.width = 20;
    this.height = 20;
  }

  _createClass(Diver, [{
    key: "render",
    value: function render(ctx, x, y, canvas) {
      ctx.fillStyle = "white";
      ctx.fillRect( // tank
      x - 16, y - 15, this.width / 2.5, this.height * 1.5);
      ctx.fillStyle = "yellow";
      ctx.fillRect( // left flipper
      x - 13, y + 52, this.width / 2, this.height * 1.5);
      ctx.fillRect( // right flipper
      x, y + 54, this.width / 2, this.height * 1.5);
      ctx.fillStyle = "black";
      ctx.fillRect( // head
      x - 4, y - 25, this.width / 2, this.height - 2);
      ctx.fillRect( // body
      x - this.height / 2, y - this.width / 2, this.width, this.height * 2);
      ctx.fillRect( // right upper leg
      x + 2, y + 30, this.width / 3.5, this.height);
      ctx.fillRect( // right upper leg
      x + 2, y + 40, this.width / 5, this.height);
      ctx.fillRect( // left upper leg
      x - 7, y + 30, this.width / 3.5, this.height / 2);
      ctx.fillRect( // right lower leg
      x - 8, y + 40, this.width / 5, this.height);
      ctx.fillStyle = "blue";
      ctx.fillRect( // goggles
      x - 2, y - 22, this.width / 2, this.height / 5);
    }
  }]);

  return Diver;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    var rightPressed = false;
    var leftPressed = false;
    this.diver = new _diver_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.sanddollar = new _sanddollar_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.shark = new _shark_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.bubble = new _bubble_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  _createClass(Game, [{
    key: "render",
    value: function render(x, y) {
      this.diver.render(this.ctx, x, y, this.canvas);
      this.sanddollar.render(this.ctx, this.x + 40, this.y + 40);
      this.shark.render(this.ctx, this.x + 200, this.y - 200);
      this.bubble.render(this.ctx, this.x - 200, this.y - 200);
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
var x = 100;
var y = 400;
setInterval(game.render(x, y));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGl2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYW5kZG9sbGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQnViYmxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdHgiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiRGl2ZXIiLCJjYW52YXMiLCJHYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsImRpdmVyIiwic2FuZGRvbGxhciIsIlNhbmREb2xsYXIiLCJzaGFyayIsIlNoYXJrIiwiYnViYmxlIiwicmVuZGVyIiwiZ2FtZSIsInNldEludGVydmFsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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LEtBQVQsR0FBaUIsRUFBakIsR0FBc0IsRUFBakMsRUFBcUNHLENBQUMsR0FBRyxFQUF6QztBQUNBRixTQUFHLENBQUN3QixNQUFKLENBQVd2QixDQUFDLEdBQUcsS0FBS0YsS0FBVCxHQUFpQixFQUE1QixFQUFnQ0csQ0FBQyxHQUFHLEVBQXBDO0FBQ0FGLFNBQUcsQ0FBQ3lCLFNBQUo7QUFDQXpCLFNBQUcsQ0FBQzBCLElBQUo7QUFFQTFCLFNBQUcsQ0FBQ0csU0FBSixHQUFnQixNQUFoQixDQTdCYyxDQTZCVTs7QUFDeEJILFNBQUcsQ0FBQ3NCLFNBQUo7QUFDQXRCLFNBQUcsQ0FBQ3VCLE1BQUosQ0FBV3RCLENBQUMsR0FBRyxFQUFmLEVBQW1CQyxDQUFDLEdBQUcsQ0FBdkI7QUFDQUYsU0FBRyxDQUFDd0IsTUFBSixDQUFXdkIsQ0FBQyxHQUFHLEtBQUtGLEtBQUwsR0FBVyxDQUFmLEdBQW1CLEVBQTlCLEVBQWtDRyxDQUFDLEdBQUcsRUFBdEM7QUFDQUYsU0FBRyxDQUFDd0IsTUFBSixDQUFXdkIsQ0FBQyxHQUFHLEtBQUtGLEtBQUwsR0FBVyxDQUFmLEdBQW1CLEVBQTlCLEVBQWtDRyxDQUFDLEdBQUcsQ0FBdEM7QUFDQUYsU0FBRyxDQUFDeUIsU0FBSjtBQUNBekIsU0FBRyxDQUFDMEIsSUFBSjtBQUdBMUIsU0FBRyxDQUFDRyxTQUFKLEdBQWdCLEtBQWhCLENBdENjLENBc0NTOztBQUN2QkgsU0FBRyxDQUFDSSxRQUFKLENBQ0lILENBREosRUFDT0MsQ0FBQyxHQUFHLEVBRFgsRUFFSSxDQUZKLEVBRU8sQ0FGUDtBQUtIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETCx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjA7IFxuICAgICAgICB0aGlzLndpZHRoID0gMjA7IFxuICAgIH1cblxuICAgIHJlbmRlcihjdHgsIHgsIHkpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCggXG4gICAgICAgICAgICB4LCB5LFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB4ICsgdGhpcy53aWR0aCAvIDYsIHkgKyB0aGlzLndpZHRoIC8gNixcbiAgICAgICAgICAgIHRoaXMud2lkdGgvNiwgdGhpcy5oZWlnaHQvNixcbiAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gMjA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgeCwgeSwgY2FudmFzKSB7XG5cbiAgICAgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyB0YW5rXG4gICAgICAgICAgICB4IC0gMTYsIHktMTUsXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMi41LCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgZmxpcHBlclxuICAgICAgICAgICAgeCAtIDEzLCB5KzUyLFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBmbGlwcGVyXG4gICAgICAgICAgICB4LCB5KzU0LFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodCAqIDEuNSxcbiAgICAgICAgKTtcblxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gaGVhZFxuICAgICAgICAgICAgeC00LCB5LTI1LFxuICAgICAgICAgICAgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC0yLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGJvZHlcbiAgICAgICAgICAgIHggLSB0aGlzLmhlaWdodC8yLCB5IC0gdGhpcy53aWR0aC8yLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAyLFxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIHJpZ2h0IHVwcGVyIGxlZ1xuICAgICAgICAgICAgeCsyLCB5KzMwLFxuICAgICAgICAgICAgdGhpcy53aWR0aC8zLjUsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsUmVjdCggLy8gcmlnaHQgdXBwZXIgbGVnXG4gICAgICAgICAgICB4ICsgMiwgeSs0MCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyA1LCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGxlZnQgdXBwZXIgbGVnXG4gICAgICAgICAgICB4LTcsIHkgKyAzMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAzLjUsIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAvLyByaWdodCBsb3dlciBsZWdcbiAgICAgICAgICAgIHgtOCwgeSArIDQwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDUsIHRoaXMuaGVpZ2h0LFxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoIC8vIGdvZ2dsZXNcbiAgICAgICAgICAgIHgtMiwgeSAtIDIyLFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gNSxcbiAgICAgICAgKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgRGl2ZXIgZnJvbSAnLi9kaXZlci5qcyc7XG5pbXBvcnQgU2FuZERvbGxhciBmcm9tICcuL3NhbmRkb2xsYXIuanMnO1xuaW1wb3J0IFNoYXJrIGZyb20gJy4vc2hhcmsuanMnO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL2J1YmJsZS5qcyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICBsZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7IFxuICAgIGxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGl2ZXIgPSBuZXcgRGl2ZXIoKTsgXG4gICAgdGhpcy5zYW5kZG9sbGFyID0gbmV3IFNhbmREb2xsYXIoKTtcbiAgICB0aGlzLnNoYXJrID0gbmV3IFNoYXJrKCk7IFxuICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZSgpOyBcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKHgsIHkpIHtcbiAgICAgICAgdGhpcy5kaXZlci5yZW5kZXIodGhpcy5jdHgsIHgsIHksIHRoaXMuY2FudmFzKTtcblxuICAgICAgICB0aGlzLnNhbmRkb2xsYXIucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggKyA0MCwgdGhpcy55ICsgNDApXG4gICAgICAgIHRoaXMuc2hhcmsucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnggKyAyMDAsIHRoaXMueSAtIDIwMCk7XG4gICAgICAgIHRoaXMuYnViYmxlLnJlbmRlcih0aGlzLmN0eCwgdGhpcy54IC0gMjAwLCB0aGlzLnkgLSAyMDApXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnOyBcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKCk7IFxuXG5sZXQgeCA9IDEwMDsgXG5sZXQgeSA9IDQwMDsgXG5cbnNldEludGVydmFsKGdhbWUucmVuZGVyKHgsIHkpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmREb2xsYXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gMTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgeCwgeSkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicGlua1wiXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgeCwgeSxcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJrIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDgwO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgsIHgsIHkpIHtcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyYXlcIjsgLy8gYm9keVxuICAgICAgICBjdHguZmlsbFJlY3QoIFxuICAgICAgICB4LCB5LFxuICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IC8vIGhlYWRcbiAgICAgICAgY3R4Lm1vdmVUbyh4LTMwLCB5KzUpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgdGhpcy53aWR0aCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHRoaXMud2lkdGggKyAyMCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHRoaXMud2lkdGgsIHkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IC8vIHRhaWxcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgdGhpcy53aWR0aCwgeSArIDUpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB0aGlzLndpZHRoIC0gMTAgKyA0MCwgeSAtIDEwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdGhpcy53aWR0aCArIDQwLCB5ICsgMjUpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiOyAvLyBmaW5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHggKyAzMCwgeSArIDUpXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHRoaXMud2lkdGgvNCArIDQwLCB5IC0gMTApO1xuICAgICAgICBjdHgubGluZVRvKHggKyB0aGlzLndpZHRoLzQgKyA0MCwgeSArIDUpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjsgLy8gZXllXG4gICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgIHgsIHkgKyAxMCAsXG4gICAgICAgICAgICAzLCAzLFxuICAgICAgICApO1xuXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=