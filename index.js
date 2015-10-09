// JavaScript implementation of:
// http://www.ics.uci.edu/~eppstein/numth/frap.c
// Ruby gem implemenation:
// https://github.com/clord/fraction
// Via:
// http://stackoverflow.com/questions/95727/how-to-convert-floats-to-human-readable-fractions
// More info:
// https://en.wikipedia.org/wiki/Continued_fraction

/**
 * Converts a decimal to a human readable fraction with a maximum
 * denominator of 10.
 *
 * @param {Number} num - The decimal number to convert.
 * @returns {String} The decimal represented as a fraction.
 */
function toReadableFraction(decimal) {
  // The decimal to convert.
  let startx = decimal;
  // The maximum denominator.
  let maxden = 10;
  let sign = 1;

  // Only work with positive numbers.
  if (decimal < 0) {
    sign = -1;
    decimal *= -1;
  }

  // Create a matrix.
  // The numerator and denominator of the final fraction will be the
  // first column of the matrix (m[0][0] and m[1][0]).
  let matrix = [
    [1, 0],
    [0, 1]
  ];

  let x = decimal;
  let term;
  let ai;
  let count = 0;

  while (matrix[1][0] * (ai = Math.floor(x)) + matrix[1][1] <= maxden) {
    // Don't let it loop too long.
    if (count += 1 > 50) {
      break;
    }

    let term = matrix[0][0] * ai + matrix[0][1];
    matrix[0][1] = matrix[0][0];
    matrix[0][0] = term;
    term = matrix[1][0] * ai + matrix[1][1];
    matrix[1][1] = matrix[1][0];
    matrix[1][0] = term;

    // Don't divide by zero.
    if (x === ai) {
      break;
    }
    x = 1 / Math.abs(x - ai);
  }

  let numerator = matrix[0][0];
  // If the decimal argument was negative, make sure we return a negative fraction.
  numerator *= sign;
  let denominator = matrix[1][0];
  let error = startx - (matrix[0][0] / matrix[1][0]);

  return `${numerator}/${denominator}`;
}

// console.log(toReadableFraction(0.33333));
// console.log(toReadableFraction(0.125));
console.log(toReadableFraction(0.66));
// console.log(toReadableFraction(0.67));
// console.log(toReadableFraction(0.99));
// console.log(toReadableFraction(0.334));
// console.log(toReadableFraction(1.334));
// console.log(toReadableFraction(0.1875));
