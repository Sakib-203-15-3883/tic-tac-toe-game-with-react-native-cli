/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, status} from '../utils/constants';
import StatusBarCSS from './StatusBar.css';

// CSS
const styles = StyleSheet.create({
  ...StatusBarCSS,
  text: {
    ...StatusBarCSS.text,
    color: colors.text,
  },
});

const StatusBar = props => {
  let text = '';

  console.log(props.player);
  // Modify status bar text according to the status
  switch (props.gameState) {
    case status.START:
      text = 'First Move';
      break;

    case status.PLAYING:
      text = `Next Player ${props.player}`;
      break;

    case status.WIN:
      text = `Winner is ${props.player}`;
      break;

    case status.DRAW:
      text = 'Draw';
      break;
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default StatusBar;
