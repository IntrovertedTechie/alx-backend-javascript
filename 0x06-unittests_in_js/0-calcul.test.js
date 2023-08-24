const assert= require('assert');

const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('handles whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('rounds a whole number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('rounds down with fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounds up with floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
