/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import GridElement from './GridElement';
import GridCSS from './Grid.css';

// CSS
const styles = StyleSheet.create({
  ...GridCSS,
});

const Grid = props => (
  <View style={styles.root}>
    {props.gridElements.map((element, index) => (
      <GridElement
        key={index}
        value={element.value}
        isFilled={element.isFilled}
        isWin={element.isWin}
        onPress={() => props.onGridElementPress(index)}
      />
    ))}
  </View>
);

export default Grid;
