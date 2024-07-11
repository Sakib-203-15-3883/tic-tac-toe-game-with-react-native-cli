/* eslint-disable prettier/prettier */
import {winConditions} from './constants';

// Individual value for grid elements
const buildGridElement = () => ({
  value: '',
  isFilled: false,
  isWin: false,
});

// Check if the all elements are equal
const checkWinCondition = (a, b, c) => {
  const isValuesEqual = a.value === b.value && b.value === c.value;
  const isFilled = a.isFilled && b.isFilled && c.isFilled;

  return isFilled && isValuesEqual;
};

// Create grid element array
export const buildGrid = () =>
  Array.apply(null, {length: 9}).map(buildGridElement);

// Check if there is any winner
export const checkWinner = gridElements => {
  let winner = null;
  let winningMatrix = null;

  winConditions.forEach(([a, b, c]) => {
    if (checkWinCondition(gridElements[a], gridElements[b], gridElements[c])) {
      winner = gridElements[a];
      winningMatrix = [a, b, c];
    }
  });
  return {winner, winningMatrix};
};
