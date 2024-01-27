const readline = require('readline');
const Player = require('./src/player');
const MagicalArena = require('./src/magicalArena');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function enterAttributes(playerName) {
  return new Promise((resolve) => {
    rl.question(`Enter attributes for Player ${playerName} : health, strength, attack (comma-separated): `, (input) => {
      const [health, strength, attack] = input.split(',').map(Number);
      const player = new Player(health, strength, attack);
      resolve(player);
    });
  });
}

async function setupGame() {
  const playerA = await enterAttributes('A');
  const playerB = await enterAttributes('B');
  rl.close();

  const arena = new MagicalArena(playerA, playerB);
  arena.startGame();
}

setupGame();
