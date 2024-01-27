class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDice() {
        return Math.random(Math.random() * 6) + 1;
    }
}

module.exports = Player;