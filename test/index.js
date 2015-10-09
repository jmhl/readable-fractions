import { expect } from 'chai';
import {
  formatReadableFraction,
  fractionToDecimal,
  toReadableFraction
} from '../src/index.js';

const DECIMALS_AND_FRACTIONS = [
  { decimal: 0.125, fraction: '1/8' },
  { decimal: 0.333333, fraction: '1/3' },
  { decimal: 0.34, fraction: '1/3' },
  { decimal: 0.666666, fraction: '2/3' },
  { decimal: 0.67, fraction: '2/3' },
  { decimal: 0.1875, fraction: '1/5' },
  { decimal: 2.1875, fraction: '2 1/5' },
];

const FRACTIONS_AND_DECIMALS = [
  { decimal: 0.125, fraction: '1/8' },
  { decimal: 0.3333333333333333, fraction: '1/3' },
  { decimal: 0.6666666666666666, fraction: '2/3' },
  { decimal: 0.2, fraction: '1/5' },
  { decimal: 2.2, fraction: '2 1/5' },
];

describe('formatReadableFraction', () => {
  it('should correctly format a fraction', () => {
    let decimal = 0.33;
    let fraction = '1/3';
    let result = toReadableFraction(decimal);

    expect(formatReadableFraction(result)).to.equal(fraction);
  });

  it('should correctly format a fraction that is greater than one', () => {
    let decimal = 2.1875;
    let fraction = '2 1/5';
    let result = toReadableFraction(decimal);

    expect(formatReadableFraction(result)).to.equal(fraction);
  });

  it('should correctly format an improper fraction', () => {
    let decimal = 2.1875;
    let fraction = '11/5';
    let result = toReadableFraction(decimal);

    expect(formatReadableFraction(result, true)).to.equal(fraction);
  });
});

describe('toReadableFraction', () => {
  it('should return the correct fraction object by default', () => {
    let decimal = 0.125;
    let fractionObject = { denominator: 8, error: 0, numerator: 1 };

    expect(toReadableFraction(decimal)).to.deep.equal(fractionObject);
  });

  DECIMALS_AND_FRACTIONS.forEach(obj => {
    let { decimal, fraction } = obj;

    it(`should correctly convert ${decimal} to a fraction`, () => {
      expect(toReadableFraction(decimal, true)).to.equal(fraction);
    });
  });
});

describe('fractionToDecimal', () => {
  FRACTIONS_AND_DECIMALS.forEach(obj => {
    let { decimal, fraction } = obj;

    it(`should correctly convert ${fraction} to a decimal`, () => {
      expect(fractionToDecimal(fraction)).to.equal(decimal);
    });
  });
});
