'use strict';

class Warrior {

  constructor() {
    this.xp = 100;
    this.achievementArr = [];
    this.MAX_XP = 10000;
    this.RANKS = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
  }

  level() {
    return Math.floor(this.experience()/100);
  }

  rank() {
    return this.RANKS[Math.floor(this.level()/10)];
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
    } else if (enemyLevel > this.level()) {
      this.xp += 20 * (enemyLevel - this.level()) ** 2;
      return "An intense fight";
    } else if (enemyLevel == this.level()) {
      this.xp += 10;
      return "A good fight";
    } else if (enemyLevel == (this.level() - 1)) {
      this.xp += 5;
      return "A good fight";
    }
    return "Easy fight";
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
