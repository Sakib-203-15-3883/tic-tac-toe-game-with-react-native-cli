/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colors} from '../utils/constants';
import GridElementCSS from './GridElement.css';

// CSS
const styles = StyleSheet.create({
  ...GridElementCSS,
  value: {
    ...GridElementCSS.value,
    color: colors.text,
  },
});

const GridElement = props => {
  // Condition for background color of each element based
  const backgroundColor = props.isWin ? colors.win : 'transparent';

  return (
    <TouchableOpacity
      style={[styles.root, {backgroundColor}]}
      disabled={props.isFilled}
      onPress={props.onPress}>
      <Text style={styles.value}>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default GridElement;
