const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const Bayo = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(Bayo.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Bayo.calculateNumber.callCount).to.be.equal(1);
    Bayo.calculateNumber.restore();
  });
});
