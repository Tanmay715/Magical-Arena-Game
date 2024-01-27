# Magical Arena Game

Welcome to the Magical Arena Game! This is a simple turn-based game where two players engage in magical battles, attempting to reduce each other's health to zero. Players take turns attacking and defending using dice rolls to determine the outcome.

## How to Play

cd SwiggyLDGame
Install dependencies:

npm install
Run the game: node src/index.js

Rules: 

    1.Each player has attributes: health, strength, and attack, represented by positive integers.
    2.Strength and attack values are constants while health will reduce during the game.
    3.Players take turns attacking and defending.
    4.Attack and defense outcomes are determined by rolling a die.
    5.The attacking player's attack value is multiplied by the attacking die roll to calculate damage.
    6.The defending player's strength value is multiplied by the defending die roll to calculate defense.
    7.Excess damage is subtracted from the defender's health.
    8.The game ends when one player's health reaches zero.


Project Structure:
    The project is organized into the following files and directories:
    
    src/player.js: Contains the Player class definition.
    src/magicalArena.js: Contains the MagicalArena class and game logic.
    src/index.js: Entry point of the application. Create instances of Player and MagicalArena to start the game.

Enjoy the Magical Arena Game!