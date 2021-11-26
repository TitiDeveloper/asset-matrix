import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlainText from '../../../components/Text/PlainText';
import AMInput from '../../../components/Form/AMInput';
import AMButton from '../../../components/Button/AMButton';
import { Colors } from '../../../constants/Colors';

const LoginScreen = (props) => {
  const inputChangeHandler = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <PlainText style={styles.headerText}>Asset Matrix</PlainText>
      </View>

      <View style={styles.loginForm}>
        <View style={styles.formTitleContainer}>
          <PlainText style={styles.formTitle}>Login</PlainText>
        </View>

        <View style={styles.formField}>
          <PlainText style={styles.inputLabel}>User ID</PlainText>
          <AMInput
            id="email"
            containerStyle={styles.input}
            placeholder="Email or Phone Number"
            initialValue={''}
            initiallyValid={false}
            keyboardType="email-address"
            onInputChange={inputChangeHandler}
            errorTip="Please enter a valid email address"
            required
            email
          />
        </View>

        <View style={styles.formField}>
          <PlainText style={styles.inputLabel}>Password</PlainText>
          <AMInput
            id="password"
            containerStyle={styles.input}
            placeholder="Password"
            initialValue={''}
            initiallyValid={false}
            onInputChange={inputChangeHandler}
            errorTip="Please enter a valid password"
            required
            secureTextEntry
          />
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: Colors.orangeBurn
  },
  header: {
    height: 240,
    paddingHorizontal: 25,
    justifyContent: 'center'
  },
  headerText: {
    color: Colors.white,
    fontSize: 30,
    lineHeight: 30
  },
  loginForm: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: Colors.gray1,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70
    // justifyContent: 'center'
  },
  formTitleContainer: {
    marginBottom: 30
  },
  formTitle: {
    fontSize: 24,
    lineHeight: 24,
    color: Colors.white
  },
  inputLabel: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 10
  },
  input: {},
  formField: {
    marginBottom: 25
  }
});

export default LoginScreen;
