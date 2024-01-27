const Player = require('../src/models/player');
const MagicalArena = require('../src/magicalArena');

describe('Player', () => {
  test('should create a player with given attributes', () => {
    const player = new Player(100, 10, 5);
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
  });

  test('should roll a die between 1 and 6', () => {
    const player = new Player(100, 10, 5);
    const roll = player.rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });
});

describe('MagicalArena', () => {
  test('should switch turns between players', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new MagicalArena(playerA, playerB);

    expect(arena.rollingPlayer).toBe('A');
    arena.nextTurn();
    expect(arena.rollingPlayer).toBe('B');
    arena.nextTurn();
    expect(arena.rollingPlayer).toBe('A');
  });

  test('should reduce defender health after a turn', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new MagicalArena(playerA, playerB);

    arena.startGame();
    expect(playerB.health).toBeLessThan(100);
  });
});
