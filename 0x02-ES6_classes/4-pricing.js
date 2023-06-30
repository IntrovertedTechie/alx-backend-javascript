import Currency from './3-currency';

class Pricing {
  constructor(price, currency) {
    this._price = price;
    this._currency = currency;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._price} ${this._currency.displayFullCurrency()}`;
  }
}

export default Pricing;