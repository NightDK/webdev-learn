function CoffeeMachine() {
    this.moneyCash;
    this.coffeeMenu = [
      { id: 'Американо', price: 10 },
      { id: 'Латте', price: 15 },
      { id: 'Каппучино', price: 20 },
    ];
    this.selectCoffeeNumber;
}
  this.setCash = function (money) {
    if (typeof money == 'number') {
      if (money <= 0) {
        console.log('error: money <= 0');
        return false;
      }
      this.moneyCash = money;
      return true;
    }
    return false;
  }