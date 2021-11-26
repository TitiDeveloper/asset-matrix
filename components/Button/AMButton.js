import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { Colors } from '../../constants/Colors';
import PlainText from '../Text/PlainText';

const AMButton = (props) => {
  let buttonStyle = { ...styles.button, ...styles.defaultButton };
  let buttonTextStyle = { ...styles.buttonText, ...styles.defaultBtnText };

  if (props.type === 'primary') {
    buttonStyle = { ...styles.button, ...styles.primaryButton };
    buttonTextStyle = { ...buttonTextStyle, ...styles.primaryBtnText };
  }

  if (props.disabled) {
    buttonStyle = { ...buttonStyle, ...styles.disabledButton };
  }

  const buttonTapHandler = () => {
    if (props.loading) {
      return;
    }

    props.onButtonTap();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ width: '100%' }}
      onPress={buttonTapHandler}
      disabled={props.disabled}>
      <View style={{ ...buttonStyle, ...props.style }}>
        {props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#ffffff" />
            <PlainText style={styles.loadingText}>Loading...</PlainText>
          </View>
        ) : (
          <Text style={buttonTextStyle}>{props.children}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  primaryButton: {
    backgroundColor: Colors.primary
  },
  defaultButton: {
    backgroundColor: Colors.white,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 20,
  },
  primaryBtnText: {
    color: Colors.white
  },
  defaultBtnText: {
    color: Colors.darkOrange,
  },
  disabledButton: {
    // backgroundColor: Colors.greenTint4
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: Colors.white,
    marginLeft: 5,
    fontSize: 15,
    lineHeight: 20
  }
});

export default AMButton;
