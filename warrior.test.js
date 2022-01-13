'use strict';

const { beforeEach, test, expect } = require('@jest/globals');
const Warrior = require('./warrior');

describe('Warrior', () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior();
  })

  test('starts at level 1', () => {
    expect(warrior.level()).toBe(1);
  })

  test('starts at rank "Pushover"', () => {
    expect(warrior.rank()).toBe("Pushover");
  })

  test('starts with 100 experience', () => {
    expect(warrior.experience()).toBe(100);
  })

  test("can engage in battle and record enemy's level", () => {
    expect(warrior.battle(1)).toBeDefined;
  })
})
