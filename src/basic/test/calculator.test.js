const Calculator = require("../calculator");

describe("Calculator", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  it("value should be initialized by 0", () => {
    expect(calc.value).toBe(0);
  });

  it("sets", () => {
    calc.set(8);
    expect(calc.value).toBe(8);
  });

  it("clear", () => {
    calc.set(9);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  describe("adds", () => {
    it("6+4 === 10", () => {
      calc.set(6);
      calc.add(4);
      expect(calc.value).toBe(10);
    });

    // 에러 테스트 예제
    it("add should throw an error if value is greater than 100", () => {
      expect(() => calc.add(101)).toThrow("Value can not be greater than 100");
    });
  });

  it("substracts", () => {
    calc.substract(1);
    expect(calc.value).toBe(-1);
  });

  it("multiplies", () => {
    calc.set(4);
    calc.multiply(5);
    expect(calc.value).toBe(20);
  });

  describe("devides", () => {
    it("10/2 === 5", () => {
      calc.set(10);
      calc.divide(2);
      expect(calc.value).toBe(5);
    });

    it("0/0 === NaN", () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
  });
});
