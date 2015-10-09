/**
 * Converts a fraction to a decimal. Unlike toReadableFraction,
 * this is precise.
 *
 * @param {String} fraction - The fraction (as a string) to convert.
 * @returns {Number} The converted fraction in decimal notation.
 */

const NONDIGIT_OR_SLASH = /(\D|^\/)/;

export default function fractionToDecimal(fraction) {
  let eachChar = fraction.split(NONDIGIT_OR_SLASH);

  // Split will result in [Number, '/', Number] if fraction is less than one,
  // and result in [Number, ' ', Number, '/', Number] if greater than one.
  if (eachChar.length === 3) {
    let [numerator, slash, denominator] = eachChar;

    return +numerator / +denominator;
  } else {
    let [wholeNumber, _, numerator, slash, denominator] = eachChar;
    let decimal = +numerator / +denominator;

    return +wholeNumber + decimal;
  }
}
