import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a numeric string to a number", () => {
  // Arrange
  const value = "123";
  const expectedResult = 123;

  // Act
  const result = transformToNumber(value);

  // Assert
  expect(result).toBe(expectedResult);
  expect(typeof result).toBe("number");
  expect(result).toBeTypeOf("number");
});

it("should yield NaN if a non-numeric string is passed", () => {
  // Arrange
  const value = "invalid";

  // Act
  const result = transformToNumber(value);

  // Assert
  expect(result).toBeNaN();
});
