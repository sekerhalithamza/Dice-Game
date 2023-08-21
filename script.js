"use strict";

const dice = document.getElementsByClassName("dice")[0];
const newBtn = document.getElementsByClassName("btn--new")[0];
const rollBtn = document.getElementsByClassName("btn--roll")[0];
const holdBtn = document.getElementsByClassName("btn--hold")[0];

const player0 = {
  container: document.getElementsByClassName("player--0")[0],
  score: document.getElementById("score--0"),
  current: document.getElementById("current--0"),
};

const player1 = {
  container: document.getElementsByClassName("player--1")[0],
  score: document.getElementById("score--1"),
  current: document.getElementById("current--1"),
};

var activePlayer = player0;

newBtn.addEventListener("click", () => {
  player0.score.innerHTML =
    player0.current.innerHTML =
    player1.score.innerHTML =
    player1.current.innerHTML =
      0;
  player0.container.classList.add("player--active");
  player1.container.classList.remove("player--active");
  activePlayer = player0;
});

rollBtn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${num}.png`;
  if (num === 1) {
    activePlayer.current.innerHTML = 0;
    holdBtn.click();
  } else {
    activePlayer.current.innerHTML =
      Number(activePlayer.current.innerHTML) + num;
  }
});

holdBtn.addEventListener("click", () => {
  activePlayer.container.classList.remove("player--active");
  [activePlayer.current.innerHTML, activePlayer.score.innerHTML] = [
    0,
    Number(activePlayer.score.innerHTML) +
      Number(activePlayer.current.innerHTML),
  ];
  if (activePlayer === player0) activePlayer = player1;
  else activePlayer = player0;
  activePlayer.container.classList.add("player--active");
});

dice.src = `dice-${Math.floor(Math.random() * 6) + 1}.png`;
