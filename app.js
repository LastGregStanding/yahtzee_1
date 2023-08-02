"use strict";

const rollBtn = document.querySelector(".roll_btn");
const keepBtns = document.querySelectorAll(".keep");
const playerTurn = document.querySelector(".turn");
let turn = 1;
const dice = [];
let rollCount = 0;
// Random number 1-6
const randomNumber = () => Math.floor(Math.random() * 6 + 1);

const rollDice = function () {
  const turnOver = document.querySelector(".turn_over");
  // Reset keep buttons for next player
  if (rollCount === 0) {
    keepBtns.forEach((btn) => {
      btn.classList.remove("pressed");
      btn.style.backgroundColor = "green";
    });
    playerTurn.textContent = `Player ${turn}'s Turn:`;
    turnOver.classList.add("hidden");
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
    if (turn === 1) {
      turn = 2;
    } else {
      turn = 1;
    }
    rollCount = 0;
    turnOver.classList.remove("hidden");
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

//#region Player 1 Score section
const upper1 = document.querySelector(".upper_section_1");
const upper1Arr = [];
for (let i = 0; i < 30; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  upper1.appendChild(cell);
  upper1Arr.push(cell);
}

//#region Player 1 Upper Scoreboard
upper1Arr[0].textContent = "Upper Section";
upper1Arr[1].textContent = "How To Score";
upper1Arr[2].textContent = "Game Score";
upper1Arr[3].textContent = "Aces";
upper1Arr[4].textContent = "Add Aces";
upper1Arr[5].textContent = null;
upper1Arr[6].textContent = "Twos";
upper1Arr[7].textContent = "Add Twos";
upper1Arr[8].textContent = null;
upper1Arr[9].textContent = "Threes";
upper1Arr[10].textContent = "Add Threes";
upper1Arr[11].textContent = null;
upper1Arr[12].textContent = "Fours";
upper1Arr[13].textContent = "Add Fours";
upper1Arr[14].textContent = null;
upper1Arr[15].textContent = "Fives";
upper1Arr[16].textContent = "Add Fives";
upper1Arr[17].textContent = null;
upper1Arr[18].textContent = "Sixes";
upper1Arr[19].textContent = "Add Sixes";
upper1Arr[20].textContent = null;
upper1Arr[21].textContent = "Total Score";
upper1Arr[22].textContent = "------------->";
upper1Arr[23].textContent = null;
upper1Arr[24].textContent = "Bonus >=63";
upper1Arr[25].textContent = "Score 35";
upper1Arr[26].textContent = null;
upper1Arr[27].textContent = "Upper Total";
upper1Arr[28].textContent = "------------->";
upper1Arr[29].textContent = null;

for (let i = 21; i < upper1Arr.length; i++) {
  upper1Arr[i].style.backgroundColor = "cyan";
}

upper1Arr[0].style.backgroundColor = "orange";
upper1Arr[1].style.backgroundColor = "orange";
upper1Arr[2].style.backgroundColor = "orange";

//#endregion

const lower1 = document.querySelector(".lower_section_1");
const lower1Arr = [];
for (let i = 0; i < 33; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  lower1.appendChild(cell);
  lower1Arr.push(cell);
}

//#region Player 1 Lower Scoreboard
lower1Arr[0].textContent = "Lower Section";
lower1Arr[1].textContent = "How To Score";
lower1Arr[2].textContent = "Game Score";
lower1Arr[3].textContent = "3 of a kind";
lower1Arr[4].textContent = "Add all dice";
lower1Arr[5].textContent = null;
lower1Arr[6].textContent = "4 of a kind";
lower1Arr[7].textContent = "Add all dice";
lower1Arr[8].textContent = null;
lower1Arr[9].textContent = "Full House";
lower1Arr[10].textContent = "Score 25";
lower1Arr[11].textContent = null;
lower1Arr[12].textContent = "Sm. Straight";
lower1Arr[13].textContent = "Score 30";
lower1Arr[14].textContent = null;
lower1Arr[15].textContent = "Lg. Straight";
lower1Arr[16].textContent = "Score 40";
lower1Arr[17].textContent = null;
lower1Arr[18].textContent = "Yahtzee!";
lower1Arr[19].textContent = "Score 50";
lower1Arr[20].textContent = null;
lower1Arr[21].textContent = "Chance";
lower1Arr[22].textContent = "Add All Dice";
lower1Arr[23].textContent = null;
lower1Arr[24].textContent = "Lower Score";
lower1Arr[25].textContent = "------------->";
lower1Arr[26].textContent = null;
lower1Arr[27].textContent = "Upper Total";
lower1Arr[28].textContent = "------------->";
lower1Arr[29].textContent = null;
lower1Arr[30].textContent = "Grand Total";
lower1Arr[31].textContent = "------------->";
lower1Arr[32].textContent = null;

for (let i = 21; i < lower1Arr.length; i++) {
  lower1Arr[i].style.backgroundColor = "cyan";
}

lower1Arr[0].style.backgroundColor = "orange";
lower1Arr[1].style.backgroundColor = "orange";
lower1Arr[2].style.backgroundColor = "orange";
//#endregion
//#endregion

//#region Player 2 Score section
const upper2 = document.querySelector(".upper_section_2");
const upper2Arr = [];
for (let i = 0; i < 30; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  upper2.appendChild(cell);
  upper2Arr.push(cell);
}

//#region Player 2 Upper Scoreboard
upper2Arr[0].textContent = "Upper Section";
upper2Arr[1].textContent = "How To Score";
upper2Arr[2].textContent = "Game Score";
upper2Arr[3].textContent = "Aces";
upper2Arr[4].textContent = "Add Aces";
upper2Arr[5].textContent = null;
upper2Arr[6].textContent = "Twos";
upper2Arr[7].textContent = "Add Twos";
upper2Arr[8].textContent = null;
upper2Arr[9].textContent = "Threes";
upper2Arr[10].textContent = "Add Threes";
upper2Arr[11].textContent = null;
upper2Arr[12].textContent = "Fours";
upper2Arr[13].textContent = "Add Fours";
upper2Arr[14].textContent = null;
upper2Arr[15].textContent = "Fives";
upper2Arr[16].textContent = "Add Fives";
upper2Arr[17].textContent = null;
upper2Arr[18].textContent = "Sixes";
upper2Arr[19].textContent = "Add Sixes";
upper2Arr[20].textContent = null;
upper2Arr[21].textContent = "Total Score";
upper2Arr[22].textContent = "------------->";
upper2Arr[23].textContent = null;
upper2Arr[24].textContent = "Bonus >=63";
upper2Arr[25].textContent = "Score 35";
upper2Arr[26].textContent = null;
upper2Arr[27].textContent = "Upper Total";
upper2Arr[28].textContent = "------------->";
upper2Arr[29].textContent = null;

for (let i = 21; i < upper2Arr.length; i++) {
  upper2Arr[i].style.backgroundColor = "cyan";
}

upper2Arr[0].style.backgroundColor = "orange";
upper2Arr[1].style.backgroundColor = "orange";
upper2Arr[2].style.backgroundColor = "orange";

//#endregion

const lower2 = document.querySelector(".lower_section_2");
const lower2Arr = [];
for (let i = 0; i < 33; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  lower2.appendChild(cell);
  lower2Arr.push(cell);
}

//#region Player 2 Lower Scoreboard
lower2Arr[0].textContent = "Lower Section";
lower2Arr[1].textContent = "How To Score";
lower2Arr[2].textContent = "Game Score";
lower2Arr[3].textContent = "3 of a kind";
lower2Arr[4].textContent = "Add all dice";
lower2Arr[5].textContent = null;
lower2Arr[6].textContent = "4 of a kind";
lower2Arr[7].textContent = "Add all dice";
lower2Arr[8].textContent = null;
lower2Arr[9].textContent = "Full House";
lower2Arr[10].textContent = "Score 25";
lower2Arr[11].textContent = null;
lower2Arr[12].textContent = "Sm. Straight";
lower2Arr[13].textContent = "Score 30";
lower2Arr[14].textContent = null;
lower2Arr[15].textContent = "Lg. Straight";
lower2Arr[16].textContent = "Score 40";
lower2Arr[17].textContent = null;
lower2Arr[18].textContent = "Yahtzee!";
lower2Arr[19].textContent = "Score 50";
lower2Arr[20].textContent = null;
lower2Arr[21].textContent = "Chance";
lower2Arr[22].textContent = "Add All Dice";
lower2Arr[23].textContent = null;
lower2Arr[24].textContent = "Lower Score";
lower2Arr[25].textContent = "------------->";
lower2Arr[26].textContent = null;
lower2Arr[27].textContent = "Upper Total";
lower2Arr[28].textContent = "------------->";
lower2Arr[29].textContent = null;
lower2Arr[30].textContent = "Grand Total";
lower2Arr[31].textContent = "------------->";
lower2Arr[32].textContent = null;

for (let i = 21; i < lower2Arr.length; i++) {
  lower2Arr[i].style.backgroundColor = "cyan";
}

lower2Arr[0].style.backgroundColor = "orange";
lower2Arr[1].style.backgroundColor = "orange";
lower2Arr[2].style.backgroundColor = "orange";
//#endregion
//#endregion
