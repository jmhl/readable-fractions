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

export default function formatReadableFraction(fractionObject, isImproper=false) {
  let { denominator, error, numerator } = fractionObject;

  // If the fraction is improper or the numerator is less than the denominator
  // then we can do the easy thing and return numerator/denominator.
  if (isImproper || numerator < denominator) {
    return `${numerator}/${denominator}`;
  }

  // Grab the whole number.
  let wholeNumber = Math.floor(numerator / denominator);
  // Grab the remainder which will be the numerator in the remainder fraction.
  let remainder = numerator % denominator;

  return `${wholeNumber} ${remainder}/${denominator}`;
}
