"use strict";

const rollBtn = document.querySelector(".roll_btn");
const keepBtns = document.querySelectorAll(".keep");
const dice = [];

// Random number 1-6
const randomNumber = () => Math.floor(Math.random() * 6 + 1);

const rollDice = function () {
  for (let i = 1; i < 6; i++) {
    let number = randomNumber();
    let keepBtn = document.querySelector(`#keep_${i}`);
    if (keepBtn.classList.contains("pressed")) {
      continue;
    }
    dice[i] = number;
    let diceImage = document.getElementById(`dice_${i}`);
    diceImage.src = `dice/dice-${dice[i]}.png`;
  }
};

rollBtn.addEventListener("click", function () {
  rollDice();
});

keepBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "blue";
    btn.classList.add("pressed");
  })
);
