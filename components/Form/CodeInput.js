import React, { useEffect, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import { Colors } from '../../constants/Colors';
import PlainText from '../Text/PlainText';

const INPUT_UPDATE = 'INPUT_UPDATE';
const INPUT_FULFILLED = 'INPUT_FULFILLED';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      return {
        code: action.code,
        touched: true
      };
    // isValid: action.isValid,

    case INPUT_FULFILLED:
      return {
        ...state,
        fulfilled: action.fulfilled
      };

    default:
      return state;
  }
};

const CodeInput = (props) => {
  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    code: '',
    touched: false,
    fulfilled: false
    // isValid: false,
  });

  const { onCodeChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onCodeChange(inputState.code, inputState.fulfilled, id);
    }
  }, [inputState, onCodeChange, id]);

  const inputChangeHandler = (inputCode) => {
    dispatchInputState({ type: INPUT_UPDATE, code: inputCode });
  };

  const codeInputCompleteHandler = (inputCode) => {
    dispatchInputState({ type: INPUT_FULFILLED, fulfilled: true });
  };

  let borderColor;

  if (inputState.touched && inputState.fulfilled) {
    if (!props.errorTip) {
      borderColor = Colors.greenTint3;
    } else {
      borderColor = Colors.error;
    }
  } else {
    borderColor = '#dddddd';
  }

  return (
    <View>
      <SmoothPinCodeInput
        value={inputState.code}
        cellSize={46}
        codeLength={6}
        containerStyle={styles.codeInput}
        cellStyle={{ ...styles.cell, borderColor }}
        cellStyleFocused={{ ...styles.focusedCell, borderColor }}
        cellSpacing={16}
        onTextChange={inputChangeHandler}
        onFulfill={(code) => codeInputCompleteHandler(code)}
        textStyle={styles.text}
        restrictToNumbers
        //   ref={this.pinInput}
        //   value={code}
        //   onTextChange={(code) => this.setState({ code })}
        //   onFulfill={this._checkCode}
        //   onBackspace={this._focusePrevInput}
      />

      {inputState.fulfilled && inputState.touched && props.errorTip && (
        <PlainText style={styles.errorTip}>{props.errorTip}</PlainText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  codeInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cell: {
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 4
  },
  focusedCell: {
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 4
  },
  text: {
    fontFamily: 'gotham-book',
    color: Colors.darkGray2,
    fontSize: 16
    // lineHeight: 20,
    // letterSpacing: .0025,
  },
  errorTip: {
    marginTop: 5,
    color: Colors.error
  }
});

export default CodeInput;
