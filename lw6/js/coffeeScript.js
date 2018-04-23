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

  this.printCoffeeMenu = function () {
    let menu = ' ';
    for (i in this.coffeeMenu) {
      menu += Number(i) + 1 + ' ' + this.coffeeMenu[i].price + 'Руб. ' + this.coffeeMenu[i].id + '\n';
    }
    console.log(menu);
    return menu;
  }