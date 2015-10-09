// A JavaScript implementation of:
// http://www.ics.uci.edu/~eppstein/numth/frap.c
// Via:
// http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions
// Ruby gem implemenation:
// https://github.com/clord/fraction
// More info:
// https://en.wikipedia.org/wiki/Continued_fraction

import formatReadableFraction from './formatReadableFraction.js';
import fractionToDecimal from './fractionToDecimal.js';
import toReadableFraction from './toReadableFraction.js';

export default {
  formatReadableFraction,
  fractionToDecimal,
  toReadableFraction,
};
