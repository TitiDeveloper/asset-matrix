import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';

const Carousel = (props) => {
  return (
    <ImageBackground
      source={require('assets/images/landing-img.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.overlay}>{props.children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
    // backgroundColor: Colors.orangeTint
  },
  overlay: {
    backgroundColor: Colors.orangeTint,
    flex: 1
  }
});

export default Carousel;
