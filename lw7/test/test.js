var expect = require("chai").expect,
  fs = require("fs");

var fileContent = fs.readFileSync("./src/js/coffeeScript.js", "utf8");
eval(fileContent);

var coffeeMachine = new CoffeeMachine();

describe("coffeeMachine", function () {

  describe("setCash", function () {
    describe("invalid number", function () {
      it("negative number", function () {
        expect(coffeeMachine.setCash(-4)).to.equal(false);
      });
      it("boolean number", function () {
        expect(coffeeMachine.setCash(false)).to.equal(false);
      });
      it("valid number", function () {
        expect(coffeeMachine.setCash(31)).to.equal(true);
      });
      it("string number", function () {
        expect(coffeeMachine.setCash('20')).to.equal(false);
      });
    });
    it("zero number", function () {
      expect(coffeeMachine.setCash(0)).to.equal(false);
    });
  });

  it("printCoffeeMenu", function () {
    expect(coffeeMachine.printCoffeeMenu()).to.equal('1 10Руб. Американо\n2 15Руб. Латте\n3 20Руб. Каппучино\n');
  });

  describe("selectCoffee input", function () {
    describe("invalid", function () {
      it("string number", function () {
        expect(coffeeMachine.chooseCoffee('1')).to.equal(false);
      });
      it("big number", function () {
        expect(coffeeMachine.chooseCoffee(10)).to.equal(false);
      });
      it("negative number", function () {
        expect(coffeeMachine.chooseCoffee(-2)).to.equal(false);
      });
      it("boolean number", function () {
        expect(coffeeMachine.chooseCoffee(false)).to.equal(false);
      });
      it("zero number", function () {
        expect(coffeeMachine.chooseCoffee(0)).to.equal(false);
      });
    });
    it("valid number", function () {
      expect(coffeeMachine.chooseCoffee(2)).to.equal(true);

    });
  });

  describe("returnCash", function () {

    it("coffee and money not installed", function () {
      var coffeeMachine = new CoffeeMachine();
      expect(coffeeMachine.returnCash()).to.equal(false);
    });
    it("coffee is not entered", function () {
      var coffeeMachine = new CoffeeMachine();
      coffeeMachine.setCash(30);
      expect(coffeeMachine.returnCash()).to.equal(false);
    });

    it("money is not entered", function () {
      var coffeeMachine = new CoffeeMachine();
      coffeeMachine.chooseCoffee(1);
      expect(coffeeMachine.returnCash()).to.equal(false);
    });

    it("coffee and more money entered", function () {
      var coffeeMachine = new CoffeeMachine();
      coffeeMachine.setCash(30);
      coffeeMachine.chooseCoffee(2);
      expect(coffeeMachine.returnCash()).to.equal(15);
    });

    it("coffee and equal money entered", function () {
      var coffeeMachine = new CoffeeMachine();
      coffeeMachine.setCash(20);
      coffeeMachine.chooseCoffee(3);
      expect(coffeeMachine.returnCash()).to.equal(0);
    });

    it("coffee and small money entered", function () {
      var coffeeMachine = new CoffeeMachine();
      coffeeMachine.setCash(10);
      coffeeMachine.chooseCoffee(3);
      expect(coffeeMachine.returnCash()).to.equal(false);
    });
  });

});