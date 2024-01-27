const Player = require('./models/player');

class MagicalArena {
    constructor(PlayerA, PlayerB) {
        this.PlayerA = PlayerA;
        this.PlayerB = PlayerB;
        this.rollingPlayer = this.PlayerA.health < this.PlayerB.health ? 'A' : 'B';
    }

    startGame() {
        console.log(`Game Starts : 
        Player A - Health :${this.PlayerA.health} , Strength : ${this.PlayerA.strength}, Attack: ${this.PlayerA.attack},
        Player B - Health :${this.PlayerB.health} , Strength : ${this.PlayerB.strength}, Attack: ${this.PlayerB.attack}
         `);

        while (this.PlayerA.health > 0 && this.PlayerB.health > 0) {
            this.playGame();
        }

        const winningPlayer = this.PlayerA.health < 0 ? 'PlayerB' : 'PlayerA';
        console.log(`Wohoo! ${winningPlayer} won the game`);
    }

    playGame() {
        const attacker = this.rollingPlayer == 'A' ? this.PlayerA : this.PlayerB;
        const defender = this.rollingPlayer == 'A' ? this.PlayerB : this.PlayerA;
        const attackNumber = attacker.rollDice();
        const defenceNumber = defender.rollDice();
        
        const attackValue = attackNumber * (attacker.attack);
        const defenceValue = defenceNumber * (defender.strength);
        
        const damageValue = Math.max(0, attackValue - defenceValue);
        defender.health -= damageValue;

        console.log(`Player ${this.rollingPlayer == 'A' ? 'A' : 'B'} attacks with roll ${attackNumber}`);
        console.log(`Player ${this.rollingPlayer == 'A' ? 'B' : 'A'} defends with roll ${defenceNumber}`);
        console.log(`Attack damage: ${attackValue}, Defense strength: ${defenceValue}`);
        console.log(`Player ${this.rollingPlayer == 'A'? 'B' : 'A'} health reduced to ${defender.health}\n`);
    
        this.#nextTurn();
    }

    #nextTurn() {
        this.rollingPlayer = this.rollingPlayer == 'A' ? 'B' : 'A';
    }

}

module.exports = MagicalArena;