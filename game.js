const Player = require('./src/player');

class MagicalArena {
    constructor(PlayerA, PlayerB) {
        this.PlayerA = PlayerA;
        this.PlayerB = PlayerB;
        this.mainPlayer = this.PlayerA.health < this.PlayerB.health ? 'A' : 'B';
    }
}