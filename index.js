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
 * @param {Number} decimal - The decimal number to convert.
 * @param {Number} shouldFormat (optional) - If true then the function will
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
function toReadableFraction(decimal, shouldFormat=false) {
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

  let fractionObject = {
    denominator,
    error,
    numerator,
  };

  if (shouldFormat) {
    return formatReadableFraction(fractionObject);
  }

  return fractionObject;
}

function formatReadableFraction(fractionObject, isImproper=false) {
  let { denominator, error, numerator } = fractionObject;

  if (isImproper) {
    return `${numerator}/${denominator}`;
  }

  let wholeNumber;
  if (numerator > denominator) {
    wholeNumber = Math.floor(numerator / denominator);
  }
  let remainder = numerator % denominator;

  return `${wholeNumber ? wholeNumber + ' ': ''}${remainder}/${denominator}`;
}

function fractionToDecimal(fraction) {

}

export {
  formatReadableFraction,
  fractionToDecimal,
  toReadableFraction,
};
