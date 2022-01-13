'use strict';

const { beforeEach } = require('@jest/globals');
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
})
