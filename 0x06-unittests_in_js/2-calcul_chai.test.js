
 { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should add positive numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should subtract positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should divide positive numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

  describe('type == "DIVIDE"', () => {
    it('should handle division by 0', () => {
      expect(() => calculateNumber('DIVIDE', 1.4, 0)).to.throw('Error');
    });
  });
});