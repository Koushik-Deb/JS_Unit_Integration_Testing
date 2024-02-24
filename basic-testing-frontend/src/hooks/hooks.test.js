import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com'; //global - available to all tests
// let user = new User(testEmail); //global - available to all tests
let user;

beforeAll(() => {
  user = new User(testEmail);
  console.log('beforeAll');
})

beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach');
})

afterEach(() => {
  // user = new User(testEmail);
  console.log('afterEach');
})

afterAll(() => {
  console.log('afterAll');
})

//it.concurrent - run tests concurrently
//describe.concurrent - run all the test in describe blocks concurrently


it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {




  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();
  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {



  user.clearEmail();

  expect(user).toHaveProperty('email');
});
