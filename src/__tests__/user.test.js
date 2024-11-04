// src/__tests__/user.test.js
import { username, city } from '../data/user';

describe('User Data', () => {
  test('username is defined', () => {
    expect(username).toBeDefined();
  });

  test('city is defined', () => {
    expect(city).toBeDefined();
  });
});
