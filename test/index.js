import chai from 'chai';
import decimalToFraction from './index.js';
let { expect } = chai;

describe('decimalToFraction', () => {
  it('should convert decimals to fractions', () => {
    expect(decimalToFraction(0.333333)).to.equal('1/3');
  });
});
