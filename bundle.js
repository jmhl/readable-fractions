/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// A JavaScript implementation of:
	// http://www.ics.uci.edu/~eppstein/numth/frap.c
	// Via:
	// http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions
	// Ruby gem implemenation:
	// https://github.com/clord/fraction
	// More info:
	// https://en.wikipedia.org/wiki/Continued_fraction

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formatReadableFractionJs = __webpack_require__(1);

	var _formatReadableFractionJs2 = _interopRequireDefault(_formatReadableFractionJs);

	var _fractionToDecimalJs = __webpack_require__(2);

	var _fractionToDecimalJs2 = _interopRequireDefault(_fractionToDecimalJs);

	var _toReadableFractionJs = __webpack_require__(3);

	var _toReadableFractionJs2 = _interopRequireDefault(_toReadableFractionJs);

	exports['default'] = {
	  formatReadableFraction: _formatReadableFractionJs2['default'],
	  fractionToDecimal: _fractionToDecimalJs2['default'],
	  toReadableFraction: _toReadableFractionJs2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Formats the readable fraction object as a string.
	 *
	 * @param {Object} fraction - The fraction object to convert to a string.
	 *   It's recommended to use the result of toReadableFraction, but any
	 *   array with the format of [numerator, denominator] is allowed.
	 * @param {Boolean} isImproper (optional) - If true, will return an improper
	 *   fraction if the fraction object has a numerator greater than its
	 *   denominator.
	 * @returns {String} The fraction object in string format.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = formatReadableFraction;

	function formatReadableFraction(fractionObject) {
	  var isImproper = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	  var denominator = fractionObject.denominator;
	  var error = fractionObject.error;
	  var numerator = fractionObject.numerator;

	  // If the fraction is improper or the numerator is less than the denominator
	  // then we can do the easy thing and return numerator/denominator.
	  if (isImproper || numerator < denominator) {
	    return numerator + "/" + denominator;
	  }

	  // Grab the whole number.
	  var wholeNumber = Math.floor(numerator / denominator);
	  // Grab the remainder which will be the numerator in the remainder fraction.
	  var remainder = numerator % denominator;

	  return wholeNumber + " " + remainder + "/" + denominator;
	}

	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Converts a fraction to a decimal. Unlike toReadableFraction,
	 * this is precise.
	 *
	 * @param {String} fraction - The fraction (as a string) to convert.
	 * @returns {Number} The converted fraction in decimal notation.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	exports["default"] = fractionToDecimal;
	var NONDIGIT_OR_SLASH = /(\D|^\/)/;

	function fractionToDecimal(fraction) {
	  var eachChar = fraction.split(NONDIGIT_OR_SLASH);

	  // Split will result in [Number, '/', Number] if fraction is less than one,
	  // and result in [Number, ' ', Number, '/', Number] if greater than one.
	  if (eachChar.length === 3) {
	    var _eachChar = _slicedToArray(eachChar, 3);

	    var numerator = _eachChar[0];
	    var slash = _eachChar[1];
	    var denominator = _eachChar[2];

	    return +numerator / +denominator;
	  } else {
	    var _eachChar2 = _slicedToArray(eachChar, 5);

	    var wholeNumber = _eachChar2[0];
	    var _ = _eachChar2[1];
	    var numerator = _eachChar2[2];
	    var slash = _eachChar2[3];
	    var denominator = _eachChar2[4];

	    var decimal = +numerator / +denominator;

	    return +wholeNumber + decimal;
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// A JavaScript implementation of:
	// http://www.ics.uci.edu/~eppstein/numth/frap.c
	// Via:
	// http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions
	// Ruby gem implemenation:
	// https://github.com/clord/fraction
	// More info:
	// https://en.wikipedia.org/wiki/Continued_fraction

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = toReadableFraction;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formatReadableFractionJs = __webpack_require__(1);

	var _formatReadableFractionJs2 = _interopRequireDefault(_formatReadableFractionJs);

	/**
	 * Converts a decimal to a human readable fraction with a maximum
	 * denominator of 10. This means that the result is NOT precise.
	 *
	 * @param {Number} decimal - The decimal number to convert.
	 * @param {Boolean} shouldFormat (optional) - If true then the function will
	 *   return a string instead of the fraction object.
	 * @returns {Object|String} A fraction object with keys:
	 *     - denominator
	 *     - error
	 *     - numerator
	 *   OR
	 *   a formatted fraction string (This will always return a result with a
	 *   proper fraction so if the decimal is greater than 1 then the result
	 *   will never be improper (e.g. 12/5). To retrieve an improper fraction,
	 *   call formatReadableFraction on the result of toReadableFraction.
	 */

	function toReadableFraction(decimal) {
	  var shouldFormat = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  // The decimal to convert.
	  var startx = decimal;
	  // The maximum denominator.
	  var maxDenominator = 10;
	  var sign = 1;

	  // Only work with positive numbers.
	  if (decimal < 0) {
	    sign = -1;
	    decimal *= -1;
	  }

	  // Create a matrix.
	  // The numerator and denominator of the final fraction will be the
	  // first column of the matrix (m[0][0] and m[1][0]).
	  var matrix = [[1, 0], [0, 1]];

	  var x = decimal;
	  var term = undefined;
	  var ai = undefined;
	  var count = 0;

	  while (matrix[1][0] * (ai = Math.floor(x)) + matrix[1][1] <= maxDenominator) {
	    // Don't let it loop too long.
	    if (count += 1 > 50) {
	      break;
	    }

	    var _term = matrix[0][0] * ai + matrix[0][1];
	    matrix[0][1] = matrix[0][0];
	    matrix[0][0] = _term;
	    _term = matrix[1][0] * ai + matrix[1][1];
	    matrix[1][1] = matrix[1][0];
	    matrix[1][0] = _term;

	    // Don't divide by zero.
	    if (x === ai) {
	      break;
	    }
	    x = 1 / Math.abs(x - ai);
	  }

	  var numerator = matrix[0][0];
	  // If the decimal argument was negative, make sure we return a negative fraction.
	  numerator *= sign;
	  var denominator = matrix[1][0];
	  var error = startx - matrix[0][0] / matrix[1][0];

	  var fractionObject = {
	    denominator: denominator,
	    error: error,
	    numerator: numerator
	  };

	  if (shouldFormat) {
	    return (0, _formatReadableFractionJs2['default'])(fractionObject);
	  }

	  return fractionObject;
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);