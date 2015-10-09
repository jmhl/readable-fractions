import chai from 'chai';
import toReadableFraction from './index.js';
let { expect } = chai;

describe('decimalToFraction', () => {
  it('should convert decimals to fractions', () => {
    let decimalsAndFractions = [
      { decimal: 0.333333, fraction: '1/3' },
      { decimal: 0.125, fraction: '1/3' },
      { decimal: 0.333333, fraction: '1/3' },
      { decimal: 0.333333, fraction: '1/3' },
      { decimal: 0.333333, fraction: '1/3' },
      { decimal: 0.333333, fraction: '1/3' },
    ];


    decimalsAndFractions.forEach(obj => {
      let { decimal, fraction } = obj;

      expect(toReadableFraction(decimal)).to.equal(fraction);
    });
  });
});
