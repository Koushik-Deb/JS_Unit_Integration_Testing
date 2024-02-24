import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example.js';

describe('generateToken()', () => {
    it('should generate a token', () => new Promise(done => {
        const testUserEmail = 'koushik@test.com'
        generateToken(testUserEmail, (err, token) => {
            try {
                expect(token).toBeDefined();
                // expect(token).toBe(2);
                done();
            } catch (err) {
                done(err)
            }
        })
    }));
});


describe('generateTokenPromise()', () => {
    it('should generate a token', () => {
        const testUserEmail = 'koushik@test.com'
        return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
    }
    )

    it('should generate a token alternative', async () => {
        const testUserEmail = 'koushik@test.com'
        const token = await generateTokenPromise(testUserEmail);
        expect(token).toBeDefined();
    }
    )
});

