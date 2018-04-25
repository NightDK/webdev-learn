function CoffeeMachine() {
  this.moneyCash = 0;
  this.coffeeMenu = [
    { name: 'Американо', price: 10 },
    { name: 'Латте', price: 15 },
    {name: 'Каппучино', price: 20 },
  ];
  this.selectCoffeeNumber;

  this.setCash = function (money) {
    if (typeof money === 'number') {
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
    let menu = '';
    for (i in this.coffeeMenu) {
      menu += Number(i) + 1 + ' ' + this.coffeeMenu[i].price + 'Руб. ' + this.coffeeMenu[i].name + '\n';
    }
    console.log(menu);
    return menu;
  }

  this.chooseCoffee = function (coffeeNumber) {
    if (typeof coffeeNumber === 'number') {
      if (coffeeNumber >= 1 && coffeeNumber <= 3) {
        if (this.moneyCash >= this.coffeeMenu[coffeeNumber - 1].price){
          console.log('choosed ' + coffeeNumber);
          this.selectCoffeeNumber = coffeeNumber - 1;
          return true;
        }
        console.log('Нужно больше золота!');
        return false;
      }
      console.log('Эй куда жмёшь? Нет такой кнопки!');
      return false;
    }
    return false;
  }

  this.returnCash = function () {
    if (typeof this.selectCoffeeNumber === 'number' && typeof this.moneyCash === 'number'){
      backMoney = this.moneyCash - this.coffeeMenu[this.selectCoffeeNumber].price;
      console.log('Ваша сдача: ' + backMoney);
      return backMoney;
    }
    return false;
  }
}