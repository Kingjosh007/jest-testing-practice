const Calculator = require("./Calculator.js");

describe("can perform additions", () => {
  test("add positive numbers", () => {
    expect(Calculator.add(12, 20)).toBe(32);
    expect(Calculator.add(3990, 10)).toBe(4000);
  });

  test("add negative numbers", () => {
    expect(Calculator.add(-2, -8)).toBe(-10);
  });

  test("add numbers with opposite sign", () => {
    expect(Calculator.add(-2, 8)).toBe(6);
    expect(Calculator.add(8, -2)).toBe(6);
  });

  test("add floats", () => {
    expect(Calculator.add(8.333333, 2.666666)).toBeCloseTo(11, 5);
    expect(Calculator.add(9.06, 20.18)).toBeCloseTo(29.24, 3);
    expect(Calculator.add(-9.06, 20.18)).toBeCloseTo(11.12, 3);
  });
});
