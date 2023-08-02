"use strict";

const rollBtn = document.querySelector(".roll_btn");
const keepBtns = document.querySelectorAll(".keep");
const dice = [];
let rollCount = 0;
// Random number 1-6
const randomNumber = () => Math.floor(Math.random() * 6 + 1);

const rollDice = function () {
  // Reset keep buttons for next player
  if (rollCount === 0) {
    keepBtns.forEach((btn) => {
      btn.classList.remove("pressed");
      btn.style.backgroundColor = "green";
    });
  }

  for (let i = 1; i < 6; i++) {
    let number = randomNumber();
    let keepBtn = document.querySelector(`#keep_${i}`);

    // Don't roll if keep button is pressed
    if (keepBtn.classList.contains("pressed")) {
      continue;
    }

    dice[i] = number;
    //Change dice image
    let diceImage = document.getElementById(`dice_${i}`);
    diceImage.src = `dice/dice-${dice[i]}.png`;
  }

  rollCount++;
  console.log(rollCount);

  // Black out keep buttons for end of turn
  if (rollCount === 3) {
    rollCount = 0;
  }
};

rollBtn.addEventListener("click", function () {
  rollDice();
});

// Keep button
keepBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.classList.contains("pressed")) {
      btn.style.backgroundColor = "green";
      btn.classList.remove("pressed");
    } else if (!btn.classList.contains("pressed")) {
      btn.style.backgroundColor = "blue";
      btn.classList.add("pressed");
    }
  })
);
