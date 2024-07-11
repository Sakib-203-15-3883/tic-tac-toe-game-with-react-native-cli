
import React,{useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LandingPage from './screens/LandingPage';
import {colors} from './utils/constants';
import AppCSS from './App.css';

import SplashScreen from 'react-native-splash-screen';

// CSS
const styles = StyleSheet.create({
  ...AppCSS,
  root: {
    ...AppCSS.root,
    backgroundColor: colors.backgroundColor,
  },
});

const App = () => {
  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaProvider style={styles.root}>
      <LandingPage />
    </SafeAreaProvider>
  );
};

export default App;
