import { it, expect } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

it("should throw an error, if empty string is passed", () => {
  // Arrange
  const value = "";

  // Act
  const resultFn = () => validateStringNotEmpty(value);

  // Assert
  expect(resultFn).toThrow();
});

it("should throw an error, if a string with only spaces is passed", () => {
  // Arrange
  const value = "   ";

  // Act
  const resultFn = () => validateStringNotEmpty(value);

  // Assert
  expect(resultFn).toThrow();
});

it("should throw an error, if any other value than a string is provided ", () => {
  // Arrange
  const value1 = 123;
  const value2 = true;
  const value3 = {};

  // Act
  const resultFn = () => validateStringNotEmpty(value);
  const resultFn2 = () => validateStringNotEmpty(value2);
  const resultFn3 = () => validateStringNotEmpty(value3);

  // Assert
  expect(resultFn).toThrow();
  expect(resultFn2).toThrow();
  expect(resultFn3).toThrow();
});

it("should not throw an error, if a non-empty string is passed", () => {
  // Arrange
  const value = "valid";

  // Act
  const resultFn = () => validateStringNotEmpty(value);

  // Assert
  expect(resultFn).not.toThrow();
});

it("should throw an error, if a non-numeric value is passed", () => {
  // Arrange
  const value = "invalid";

  // Act
  const validateFn = () => validateNumber(value);

  // Assert
  expect(validateFn).toThrow();
});
