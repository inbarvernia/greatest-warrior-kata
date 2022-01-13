'use strict';

class Warrior {

  constructor() {
    this.xp = 100;
    this.achievementArr = [];
    this.MAX_XP = 10000;
  }

  level() {
    return Math.floor(this.experience()/100);
  }

  rank() {
    return "Pushover";
  }

  experience() {
    return (this.xp > this.MAX_XP) ? this.MAX_XP : this.xp;
    // Not sure if this is the best way of doing this or if better to stop other methods from adding to xp after this point
  }

  achievements() {
    return this.achievementArr;
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    } else if (enemyLevel = this.level()) {
      this.xp += 10;
    }
  }

  training(detailArray) {
    const description = detailArray[0];
    const experienceAwarded = detailArray[1];
    const minLevel = detailArray[2];

    if (minLevel > this.level()) {
      return "Not strong enough";
    } else {
      this.xp += experienceAwarded;
      this.achievementArr.push(description);
      return description;
    }
  }
}

module.exports = Warrior;
