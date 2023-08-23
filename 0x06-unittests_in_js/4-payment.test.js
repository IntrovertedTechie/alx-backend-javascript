const sinon = require('sinon'); 
 const Utils = require('./utils'); 
 const { expect } = require('chai'); 
 const sendPaymentRequestToApi = require('./4-payment'); 
  
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const Bayo = sinon.spy(console);
    const Taiwo = sinon.stub(Utils, 'calculateNumber');

    Taiwo.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(Taiwo.calledWith('SUM', 100, 20)).to.be.true;
    expect(Taiwo.callCount).to.be.equal(1);
    expect(Bayo.log.calledWith('The total is: 10')).to.be.true;
    expect(Bayo.log.callCount).to.be.equal(1);
    Taiwo.restore();
    Bayo.log.restore();
  });
});