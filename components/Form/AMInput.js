import React, { useEffect, useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';
import PlainText from '../Text/PlainText';

const INPUT_UPDATE = 'INPUT_UPDATE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };

    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };

    default:
      return state;
  }
};

const AMInput = (props) => {
  // const [active, setActive] = useState(false);

  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value, inputState.isValid, id);
    }
  }, [inputState, onInputChange, id]);

  const inputChangeHandler = (inputText) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (props.required && inputText.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(inputText.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +inputText < props.min) {
      isValid = false;
    }
    if (props.max != null && +inputText > props.max) {
      isValid = false;
    }
    if (props.minLength != null && inputText.length < props.minLength) {
      isValid = false;
    }

    dispatchInputState({ type: INPUT_UPDATE, value: inputText, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatchInputState({ type: INPUT_BLUR });
  };

  let borderColor;

  if (inputState.touched) {
    if (inputState.isValid) {
      borderColor = Colors.greenTint3;
    } else {
      borderColor = Colors.error;
    }
  } else {
    borderColor = '#dddddd';
  }

  let prefixIcon = null;

  if (props.showPrefixIcon) {
    prefixIcon = (
      <View style={styles.prefixIcon}>
        <Icon name={props.prefixIconName} size={18} color={Colors.darkGray4} />
      </View>
    );
  }

  return (
    <View style={props.containerStyle}>
      {prefixIcon}
      
      <TextInput
        {...props}
        style={{
          ...styles.input,
          ...props.style,
          ...(props.showPrefixIcon ? { paddingLeft: 40 } : {}),
          borderColor
        }}
        value={inputState.value}
        autoCapitalize="none"
        onChangeText={inputChangeHandler}
        onBlur={lostFocusHandler}
      />

      {/* {inputState.touched && !inputState.isValid && (
        <PlainText style={styles.errorTip}>{props.errorTip}</PlainText>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 55,
    lineHeight: 20,
    letterSpacing: 0.0025,
    position: 'relative',
    backgroundColor: Colors.white
  },
  errorTip: {
    marginTop: 2.5,
    // color: Colors.error
  },
  prefixIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 10,
    justifyContent: 'center',
    height: 48
    // alignItems: 'center'
  }
});

export default AMInput;
