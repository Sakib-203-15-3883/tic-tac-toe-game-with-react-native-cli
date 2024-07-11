/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, REPLAY} from '../utils/constants';
import ButtonCSS from './Button.css';

// CSS
const styles = StyleSheet.create({
  ...ButtonCSS,
  text: {
    ...ButtonCSS.text,
    color: colors.text,
  },
});

const Button = props => (
  <TouchableOpacity style={styles.root} onPress={props.onClick}>
    <Text style={styles.text}>{REPLAY}</Text>
  </TouchableOpacity>
);

export default Button;
