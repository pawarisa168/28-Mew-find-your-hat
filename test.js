"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
  [PLAYER, EMPTY, HOLE],
  [EMPTY, HOLE, EMPTY],
  [EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
  console.clear(); // call console.clear() before print each move
  for (let row of board) {
    console.log(row.join(""));
  }
}

// Movement Functions
function MoveUp() {
  playerRow--;
}
function MoveDown() {
  playerRow++;
}
function MoveLeft() {
  playerCol--;
}
function MoveRight() {
  playerCol++;
}

// input function

function userInput() {
  const input = prompt("Which way? (w/a/s/d): ");
  if (input === "w") {
    MoveUp();
    console.log(input);
  } else if (input === "s") {
    MoveDown();
  } else if (input === "a") {
    MoveLeft();
  } else if (input === "d") {
    MoveRight();
  } else {
    console.log("Which way?");
    return userInput();
  }
}

userInput();
// Which way? (w/a/s/d): w
// w
console.log(board[0][0]);
