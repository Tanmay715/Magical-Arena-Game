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

    attackAndDefend() {
        const attacker = this.rollingPlayer == 'A' ? this.PlayerA : this.PlayerB;
        const defender = this.rollingPlayer == 'A' ? this.PlayerB : this.PlayerA;
        const attackNumber = attacker.rollDice();
        const defenceNumber = defender.rollDice();
        
        const attackValue = attackNumber * (attacker.attack);
        const defenceValue = defenceNumber * (defender.strength);
        
        const damageValue = Math.max(0, attackValue - defenceValue);
        defender.health -= damageValue;

        console.log(`Player ${attacker === this.playerA ? 'A' : 'B'} attacks with roll ${attackValue}`);
        console.log(`Player ${defender === this.playerA ? 'A' : 'B'} defends with roll ${defenceValue}`);
        console.log(`Attack damage: ${attackValue}, Defense strength: ${defenceValue}`);
        console.log(`Player ${defender === this.playerA ? 'A' : 'B'} health reduced to ${defender.health}\n`);
    
        this.nextTurn();
    }

    startGame() {
        while (this.PlayerA.health > 0 && this.PlayerB.health > 0) {
            this.attackAndDefend();
        }

    }

}

module.exports = MagicalArena;