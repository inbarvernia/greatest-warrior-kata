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

  test('increase experience by 10 when battling enemy of same level', () => {
    warrior.battle(1);
    expect(warrior.experience()).toBe(110);
  })

  test('can gain experience by training, based on experience specified', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 1]);
    expect(warrior.experience()).toBe(9100);
  })

  test('starts with an empty array of achievements', () => {
    expect(warrior.achievements()).toBeDefined;
  })

  test('gets training description added to achievements if meeting level requirement', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 1]);
    expect(warrior.achievements()).toContain("Defeated Chuck Norris");
  })

  test("can engage in battle and record enemy's level", () => {
    expect(warrior.battle(1)).toBeDefined;
  })

  test("cannot engage in battle if an enemy level doesn't fall in the range of 1-100", () => {
    expect(warrior.battle(111)).toBe("Invalid level");
  })

  test('can train and enter training details', () => {
    expect(warrior.training(["Defeated Chuck Norris", 9000, 1])).toBeDefined;
  })

  test('receives training description back if current level meets minimum required', () => {
    expect(warrior.training(["Defeated Chuck Norris", 9000, 1])).toBe("Defeated Chuck Norris");
  })

  test('receives "Not strong enough" message if current level does not meet the minimum training level requirement', () => {
    expect(warrior.training(["Defeated Chuck Norris", 9000, 2])).toBe("Not strong enough");
  })
})
