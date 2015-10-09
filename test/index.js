import { expect } from 'chai';
import toReadableFraction from '../index.js';

describe('decimalToFraction', () => {
  let decimalsAndFractions = [
    { decimal: 0.125, fraction: '1/8' },
    { decimal: 0.333333, fraction: '1/3' },
    { decimal: 0.34, fraction: '1/3' },
    { decimal: 0.666666, fraction: '2/3' },
    { decimal: 0.67, fraction: '2/3' },
    { decimal: 0.1875, fraction: '1/5' },
  ];

  decimalsAndFractions.forEach(obj => {
    let { decimal, fraction } = obj;

    it(`should correctly convert ${decimal} to a fractions`, () => {
      expect(toReadableFraction(decimal)).to.equal(fraction);
    });
  });
});
