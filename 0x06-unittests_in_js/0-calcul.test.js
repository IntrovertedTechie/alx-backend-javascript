const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('it round whole  number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('rounding down a and b whole and   fractional number', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounding down floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('rounding up floating point fractional numbers', () => {
   }); 
}); 
