class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDice() {
        const random_number = Math.floor(Math.random() * 6) + 1;
        return random_number;
    }
}

module.exports = Player;