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

  test('achieves level 2 once experience has increased to 200', () => {
    warrior.training(["Casual shadowboxing", 100, 1]);
    expect(warrior.level()).toBe(2);
  })

  test('continues to gain levels for each 100 points of experience', () => {
    warrior.training(["Serious shadowboxing", 500, 1]);
    expect(warrior.level()).toBe(6);
  })

  test('maxes out at level 100', () => {
    warrior.training(["Hardcore shadowboxing", 10000, 1]);
    expect(warrior.level()).toBe(100);
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

  test('increases experience by 5 when battling enemy one level lower', () => {
    warrior.training(["Casual shadowboxing", 100, 1]);
    expect(warrior.experience()).toBe(200);
    warrior.battle(1);
    expect(warrior.experience()).toBe(205);
  })

  test('can gain experience by training, based on experience specified', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 1]);
    expect(warrior.experience()).toBe(9100);
  })

  test('cannot gain experience by training if below required level', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 2]);
    expect(warrior.experience()).toBe(100);
  })

  test('maxes out experience at 10000', () => {
    warrior.training(["Hardcore shadowboxing", 10000, 1]);
    expect(warrior.experience()).toBe(10000);
  })

  test('starts with an empty array of achievements', () => {
    expect(warrior.achievements()).toBeDefined;
  })

  test('gets training description added to achievements if meeting level requirement', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 1]);
    expect(warrior.achievements()).toContain("Defeated Chuck Norris");
  })

  test('does not get training description added to achievements if below level requirement', () => {
    warrior.training(["Defeated Chuck Norris", 9000, 2]);
    expect(warrior.achievements()).not.toContain("Defeated Chuck Norris");
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
