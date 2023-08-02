"use strict";

const rollBtn = document.querySelector(".roll_btn");
const dice1 = document.querySelector("#dice_1");
const dice2 = document.querySelector("#dice_2");
const dice3 = document.querySelector("#dice_3");
const dice4 = document.querySelector("#dice_4");
const dice5 = document.querySelector("#dice_5");
const dice = [];

// Random number 1-6
const randomNumber = () => Math.floor(Math.random() * 6 + 1);

const rollDice = function () {
  for (let i = 0; i < 5; i++) {
    let number = randomNumber();
    dice.push(number);
  }
};

rollDice();
console.log(dice);

dice1.src = `dice/dice-${dice[0]}.png`;
dice2.src = `dice/dice-${dice[1]}.png`;
dice3.src = `dice/dice-${dice[2]}.png`;
dice4.src = `dice/dice-${dice[3]}.png`;
dice5.src = `dice/dice-${dice[4]}.png`;
