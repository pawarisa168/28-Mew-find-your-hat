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

// for (let row of board) {
//   console.log(row);
// }
// console.log(board);
// console.log(board.join(""));

// Print board
function printBoard(board) {
  console.clear(); // call console.clear() before print each move
  for (let row of board) {
    console.log(row.join(""));
  }
}

// Game play loop
printBoard(board);
// const input = prompt("Which way? (w/a/s/d): ");
// console.log(input);

// if (board[playerRow][playerCol] === HAT) {
// } else if (board[playerRow][playerCol] === HAT) {
// }
