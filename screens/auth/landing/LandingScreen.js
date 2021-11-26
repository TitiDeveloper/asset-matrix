import React from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from '../../../components/UI/Carousel';
import PlainText from '../../../components/Text/PlainText';
import AMButton from '../../../components/Button/AMButton';
import { Colors } from '../../../constants/Colors';

const LandingScreen = (props) => {
  return (
    <Carousel>
      <View style={styles.screen}>
        <PlainText style={styles.header}>Asset Matrix</PlainText>

        <PlainText style={styles.text}>Bank the way you want.</PlainText>

        <AMButton onButtonTap={() => props.navigation.navigate('AuthOptions')}>Get Started</AMButton>
      </View>
    </Carousel>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
    // backgroundColor: 'purple'
  },
  header: {
      color: '#ffffff',
      fontSize: 30,
      lineHeight: 30
  },
  text: {
      color: Colors.white,
      fontSize: 22,
      lineHeight: 30
  }
});

export default LandingScreen;
