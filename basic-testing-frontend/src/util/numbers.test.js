import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers.js';

describe('transformToNumber()', () => {
    it('should transform a string to a number', () => {
        // Arrange
        const value = '123';
        const expectedResult = 123;

        // Act
        const result = transformToNumber(value);

        // Assert
        // expect(result).toBe(expectedResult);
        // expect(result).toBeTypeOf('number');

        expect(result).toBe(expectedResult).toBeTypeOf('number');
    });

    it('should transform a string with a leading zero to a number', () => {
        // Arrange
        const value = '0123';
        const expectedResult = 123;

        // Act
        const result = transformToNumber(value);

        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return NaN if the value is not a number', () => {
        // Arrange
        const value = 'invalid';
        const value2 = { a: 1, b: 2 }

        // Act
        const result = transformToNumber(value);
        const result2 = transformToNumber(value2);

        // Assert
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of numbers', () => {
        // Arrange
        const numberValues = ['1', '2', '3'];
        const expectedResult = [1, 2, 3];

        // Act
        const result = cleanNumbers(numberValues);

        // Assert
        expect(result).toEqual(expectedResult);
        expect(result[0]).toBeTypeOf('number');
    });

    it('should throw an error if a value is not a number', () => {
        // Arrange
        const numberValues = ['1', 'invalid', '3'];

        // Act
        const result = () => cleanNumbers(numberValues);

        // Assert
        expect(result).toThrow();
    });

});