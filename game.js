const Player = require('./src/player');

class MagicalArena {
    constructor(PlayerA, PlayerB) {
        this.PlayerA = PlayerA;
        this.PlayerB = PlayerB;
        this.rollingPlayer = this.PlayerA.health < this.PlayerB.health ? 'A' : 'B';
    }

    nextTurn() {
        this.rollingPlayer == 'A' ? 'B' : 'A';
    }

    attackAndDefend(PlayerA, PlayerB) {
        const attacker = this.rollingPlayer == 'A' ? PlayerA : PlayerB;
        const defender = attacker == PlayerA ? PlayerB : PlayerA;

        const attackNumber = attacker.rollDice();
        const defenceNumber = defender.rollDice();
        
        const attackValue = attackNumber * (attacker.attack);
        const defenceValue = defenceNumber * (defender.strength);
        
        const damageValue = Math.max(0, attackValue - defenceValue);
        defender.health -= damageValue;
    }

    startGame(PlayerA, PlayerB) {
        while (PlayerA.health > 0 && PlayerB.health > 0) {
            this.attackAndDefend(PlayerA, PlayerB);
        }

    }

}

module.exports = MagicalArena;