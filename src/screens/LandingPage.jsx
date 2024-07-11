/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Grid from '../components/Grid';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';

import {players, status} from '../utils/constants';
import {buildGrid, checkWinner} from '../utils/utils';

// Initial state of the game
const initialState = {
  gridElements: buildGrid(),
  isPlayerA: true,
  gameState: status.START,
};

const LandingPage = () => {
  // Game states
  const [gridElements, setGridElements] = useState(initialState.gridElements);
  const [isPlayerA, setIsPlayerA] = useState(initialState.isPlayerA);
  const [gameState, setGameState] = useState(initialState.gameState);

  // Functions
  // Replay game
  const replayGame = () => {
    // Set all states to initial state
    setGridElements(initialState.gridElements);
    setIsPlayerA(initialState.isPlayerA);
    setGameState(initialState.gameState);
  };

  useEffect(() => {
    const winning = winningMatrix => {
      setGameState(status.WIN);

      const elements = [...gridElements];
      winningMatrix.forEach(index => {
        elements[index] = {
          ...elements[index],
          isWin: true,
        };
      });

      setGridElements(elements.map(element => ({...element, isFilled: true})));
    };

    // Check if the game is draw
    const checkIfDraw = () => {
      // Check if all grids are filled
      const areAllGridFilled = !gridElements.some(g => !g.isFilled);
      areAllGridFilled && setGameState(status.DRAW);
    };

    if (gameState === status.PLAYING) {
      const {winner, winningMatrix} = checkWinner(gridElements);
      winner ? winning(winningMatrix) : checkIfDraw();
    }
  }, [gridElements, gameState]);

  // Check if the game is completed
  const isCompleted = () =>
    gameState === status.DRAW || gameState === status.WIN;

  // Get current player in game
  const getCurrentPlayer = () => (isPlayerA ? players.A : players.B);

  // Get player value for status bar
  const player = () =>
    isCompleted() ? (isPlayerA ? players.B : players.A) : getCurrentPlayer();

  const turn = index => {
    const elements = [...gridElements];
    elements[index] = {
      ...elements[index],
      value: getCurrentPlayer(),
      isFilled: true,
    };
    setGridElements(elements);
  };

  // Change respective grid element state
  const handlePress = index => {
    setGameState(status.PLAYING);
    turn(index);
    setIsPlayerA(!isPlayerA);
  };

  return (
    <SafeAreaView>


    
    <React.Fragment>
      <StatusBar gameState={gameState} player={player()} />

      <Grid gridElements={gridElements} onGridElementPress={handlePress} />

      {isCompleted() && <Button onClick={replayGame} />}
    </React.Fragment>
    </SafeAreaView>
  );
};

export default LandingPage;
