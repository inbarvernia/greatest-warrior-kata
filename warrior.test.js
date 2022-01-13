'use strict';

const { beforeEach } = require('@jest/globals');
const Warrior = require('./warrior');

describe('Warrior', () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior();
  })

  test('has a level which starts at 1', () => {
    expect(warrior.level()).toBe(1);
  })
})
