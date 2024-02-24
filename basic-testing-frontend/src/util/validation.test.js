import { it, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation'

it('should throw an error if the string is empty', () => {
    // Arrange
    const value = '';

    // Act
    const resultFn = () => validateStringNotEmpty(value);

    // Assert
    expect(resultFn).toThrow();
});

it('should throw an error if the string is only whitespace', () => {
    // Arrange
    const value = ' ';

    // Act
    const resultFn = () => validateStringNotEmpty(value);

    // Assert
    expect(resultFn).toThrow();
});

it('should throw an error if any other value is provided other than string', () => {
    // Arrange
    const valueInt = 123;
    const valueBool = true;
    const valueObj = { a: 1, b: 2 };
    // Act
    const resultFn = () => validateStringNotEmpty(valueInt);
    const resultFn2 = () => validateStringNotEmpty(valueBool);
    const resultFn3 = () => validateStringNotEmpty(valueObj);

    // Assert
    expect(resultFn).toThrow();
    expect(resultFn2).toThrow();
    expect(resultFn3).toThrow();
});

it('should not throw an error if the string is not empty', () => {
    // Arrange
    const value = 'test';

    // Act
    const resultFn = () => validateStringNotEmpty(value);

    // Assert
    expect(resultFn).not.toThrow();
});

it('should throw an error if NaN is provided', () => {
    // Arrange
    const value = NaN;

    // Act
    const resultFn = () => validateNumber(value);

    // Assert
    expect(resultFn).toThrow();
});

it('should throw an error if a non-numeric value is provided', () => {
    // Arrange
    const value = '1';

    // Act
    const resultFn = () => validateNumber(value);

    // Assert
    expect(resultFn).toThrow();
});

it('should not throw an error if a number is provided', () => {
    // Arrange
    const value = 123;

    // Act
    const resultFn = () => validateNumber(value);

    // Assert
    expect(resultFn).not.toThrow();
});
