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

var _formatReadableFractionJs = require('./formatReadableFraction.js');

var _formatReadableFractionJs2 = _interopRequireDefault(_formatReadableFractionJs);

var _fractionToDecimalJs = require('./fractionToDecimal.js');

var _fractionToDecimalJs2 = _interopRequireDefault(_fractionToDecimalJs);

var _toReadableFractionJs = require('./toReadableFraction.js');

var _toReadableFractionJs2 = _interopRequireDefault(_toReadableFractionJs);

exports['default'] = {
  formatReadableFraction: _formatReadableFractionJs2['default'],
  fractionToDecimal: _fractionToDecimalJs2['default'],
  toReadableFraction: _toReadableFractionJs2['default']
};
module.exports = exports['default'];