import { it, expect, describe } from 'vitest';
import { generateResultText, outputResult } from './output.js';

describe('generateResultText()', () => {
    it("should return a string no matter what value is passed on", () => {
        const value1 = 1;
        const value2 = 'invalid';
        const value3 = false;

        const resultText1 = generateResultText(value1);
        const resultText2 = generateResultText(value2);
        const resultText3 = generateResultText(value3);

        expect(typeof resultText1).toBe("string");
        expect(typeof resultText2).toBe("string");
        expect(typeof resultText3).toBe("string");
    });

    it('should return a string that contains result if a number is provided as a result', () => {
        const result = 10;
        const resultText = generateResultText(result);
        expect(resultText).toContain(result.toString());
    });

    it('should return an empty string if result is "no-calc"', () => {
        const result = 'no-calc';
        const resultText = generateResultText(result);
        expect(resultText).toBe('');
    });

    it("should return a string that contains 'Invalid' if 'invalid' is provided as a result", () => {
        const result = 'invalid';
        const resultText = generateResultText(result);
        expect(resultText).toContain('Invalid');
    });
    // it('should return "Invalid input. You must enter valid numbers." if result is "invalid"', () => {
    //     const result = 'invalid';
    //     const resultText = generateResultText(result);
    //     expect(resultText).toBe('Invalid input. You must enter valid numbers.');
    // });

});