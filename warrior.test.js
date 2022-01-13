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

  test('experience increases by 10 when battling enemy of same level', () => {
    warrior.battle(1);
    expect(warrior.experience()).toBe(110);
  })

  test("can engage in battle and record enemy's level", () => {
    expect(warrior.battle(1)).toBeDefined;
  })

  test("cannot engage in battle if an enemy level doesn't fall in the range of 1-100", () => {
    expect(warrior.battle(111)).toBe("Invalid level");
  })
})
