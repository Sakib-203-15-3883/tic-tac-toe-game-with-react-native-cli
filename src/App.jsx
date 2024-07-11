
import React,{useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LandingPage from './screens/LandingPage';
import {colors} from './utils/constants';
import AppCSS from './App.css';
import Banner from '../Ads/BannerAds';

import SplashScreen from 'react-native-splash-screen';

// CSS
const styles = StyleSheet.create({
  ...AppCSS,
  root: {
    ...AppCSS.root,
    backgroundColor: colors.backgroundColor,
  },

  banner:{
    marginTop:"30%",
    marginBottom:"10%"
  }
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
      <View style={styles.banner}>
      <Banner />

      </View>
      
    </SafeAreaProvider>
  );
};




export default App;
