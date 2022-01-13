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

  test('ranks up to "Novice" after achieving level 10', () => {
    warrior.training(["Training montage", 900, 1]);
    expect(warrior.rank()).toBe("Novice");
  })

  test('continues to rank up every 10 levels following specified sequence', () => {
    warrior.training(["Epic training montage", 8000, 1]);
    expect(warrior.rank()).toBe("Champion");
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

  test('does not increase experience when battling enemy two or more levels lower', () => {
    warrior.training(["Serious shadowboxing", 500, 1]);
    expect(warrior.experience()).toBe(600);
    warrior.battle(4);
    expect(warrior.experience()).toBe(600);
  })

  test('increases experience more quickly when battling higher level enemies', () => {
    warrior.battle(3);
    expect(warrior.experience()).toBe(180);
  })

  test('increases experience more quickly when battling higher level enemies', () => {
    warrior.training(["Working out", 200, 1]);
    warrior.battle(9);
    expect(warrior.experience()).toBe(1020);
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

  test('battle returns "Easy fight" if enemy is two or more levels lower', () => {
    warrior.training(["Training montage", 900, 1]);
    expect(warrior.battle(8)).toBe("Easy fight");
    expect(warrior.battle(7)).toBe("Easy fight");
  })

  test('battle returns "A good fight" if enemy is equal level or one below', () => {
    warrior.training(["Training montage", 900, 1]);
    expect(warrior.battle(10)).toBe("A good fight");
    expect(warrior.battle(9)).toBe("A good fight");
  })

  test('battle returns "An intense fight" if enemy is higher level', () => {
    expect(warrior.battle(2)).toBe("An intense fight");
    expect(warrior.battle(5)).toBe("An intense fight");
  })

  test('cannot do battle if warrior is at least one rank lower and at least 5 levels lower than enemy', () => {
    warrior.training(["Training montage", 700, 1]);
    expect(warrior.battle(13)).toBe("You've been defeated");
  })

  test('can still do battle if warrior is at least 5 levels lower than enemy but is less than one rank lower', () => {
    expect(warrior.battle(7)).not.toBe("You've been defeated");
  })

  test('can still do battle if warrior is at least 1 rank lower than enemy but not 5 levels lower', () => {
    warrior.training(["Training montage", 700, 1]);
    expect(warrior.battle(10)).not.toBe("You've been defeated");
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
