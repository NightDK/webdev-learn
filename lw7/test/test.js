var expect = require("chai").expect,
fs = require("fs");

var fileContent = fs.readFileSync("./src/js/coffeeScript.js", "utf8");
eval(fileContent);
var coffeeMachine = new CoffeeMachine();

describe("coffeeMachine", function() {
  
    describe("setCash", function() {
      describe("invalid", function() {
        it("number", function() {
          expect(coffeeMachine.setCash(-4)).to.equal(false);
        });
        it("boolean", function() {
          expect(coffeeMachine.setCash(false)).to.equal(false);
        });
        it("string", function() {
          expect(coffeeMachine.setCash('20')).to.equal(false);
        });
      });
      it("valid", function() {
        expect(coffeeMachine.setCash(31)).to.equal(true);
      });
    });
  
    
  
  });