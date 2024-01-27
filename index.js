const Player = require('./src/player');
const MagicalArena = require('./src/MagicalArena');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const arena = new MagicalArena(playerA, playerB);
arena.startGame();
