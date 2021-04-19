let apple = {
  count: 10,
  set price(val) {
    if (val < 0) {
      this._price = 0
    } else {
      this._price = val
    }
  },
  get price() {
    return this._price
  }
}

apple.price = -12;
console.log(apple.price)