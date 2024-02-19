import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all numbers values in the array", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5];
  const expectedResult = numbers.reduce((a, b) => a + b, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one of the numbers is not a number", () => {
  // Arrange
  const numbers = [1, 2, "invalid", 4, 5];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric strings is passed", () => {
  // Arrange
  const numbers = ["1", "2", "3", "4", "5"];
  const expectedResult = numbers.reduce((a, b) => +a + +b, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is passed", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it("should throw an error if no arguments are passed", () => {
  // Act
  const resultFn = () => add();

  // Assert
  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  // Act
  const resultFn = () => add(1, 2, 3, 4, 5);

  // Assert
  expect(resultFn).toThrow(/is not iterable/);
});
