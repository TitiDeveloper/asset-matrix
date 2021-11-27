import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AMNavigator from './navigation/AMNavigator';
import PlainText from './components/Text/PlainText';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    IcoMoon: require('./assets/resources/fonts/icomoon.ttf')
  });

  if (error) {
    return <PlainText>{error.message}</PlainText>;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AMNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// <StatusBar style="auto" />
