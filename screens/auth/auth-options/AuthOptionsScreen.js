import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import PlainText from '../../../components/Text/PlainText';
import AMButton from '../../../components/Button/AMButton';
import { Colors } from '../../../constants/Colors';

const AuthOptionsScreen = (props) => {
  return (
    <ImageBackground
      source={require('assets/images/landing-img.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.overlay}>
        <PlainText style={styles.header}>Asset Matrix</PlainText>

        <View>
          <AMButton
            style={styles.button}
            onButtonTap={() => props.navigation.navigate('Login')}>
            Login
          </AMButton>

          <AMButton
            type="primary"
            onButtonTap={() => props.navigation.navigate('CreateAccount')}>
            Create Account
          </AMButton>
        </View>
      </View>
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
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.orangeTint
  },
  header: {
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 30
  },
  button: {
    marginBottom: 20
  }
});

export default AuthOptionsScreen;
