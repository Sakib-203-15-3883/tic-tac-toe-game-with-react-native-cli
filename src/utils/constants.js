/* eslint-disable prettier/prettier */
// Hash Values for Color
export const colors = {
  backgroundColor: '#182739',
  text: 'white',
  win: 'white',
};

// Current condition of the game
export const status = {
  START: 'START',
  PLAYING: 'PLAYING',
  DRAW: 'DRAW',
  WIN: 'WIN',
};

// Winning matrix condition
export const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Player symbols
export const players = {
  A: '🔵',
  B: '❎',
};

// Constants for text
export const REPLAY = 'Replay';
