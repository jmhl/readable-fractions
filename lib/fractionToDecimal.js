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