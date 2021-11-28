import React, { useState, useEffect, useReducer } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { Icon } from 'constants/Icon';
import { Colors } from 'constants/Colors';
import DefaultText from 'components/UI/Text/DefaultText';
// import PhoneInput from 'react-native-phone-number-input';

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

const CustomPhoneInput = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [dialingCode, setDialingCode] = useState('+234');

  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(dialingCode + inputState.value, inputState.isValid, props.id);
    }
  }, [inputState, onInputChange, id]);

  const inputChangeHandler = (inputText) => {
    let isValid = true;

    if (props.required && inputText.trim().length === 0) {
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

  const changeDialingCode = (code) => {
    setDialingCode(code);
    setShowModal(false);
  };

  return (
    <View style={props.containerStyle}>
      <View style={{ ...styles.inputContainer, borderColor }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.countryPickerButton}
          onPress={() => {}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Text style={styles.countryFieldText}>+234</Text>
            <Icon name="caret-down" size={5} color="#BCBCBC" />
          </View>
        </TouchableOpacity>

        <View style={styles.phoneInputSection}>
          <View
            style={{
              height: 48,
              justifyContent: 'center'
            }}>
            <DefaultText style={styles.phoneInputCode}>{dialingCode}</DefaultText>
          </View>
          <TextInput
            {...props}
            style={{ ...styles.input, ...props.style }}
            value={inputState.value}
            onChangeText={inputChangeHandler}
            onBlur={lostFocusHandler}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {inputState.touched && !inputState.isValid && (
        <DefaultText style={styles.errorTip}>{props.errorTip}</DefaultText>
      )}

      <Modal
        transparent
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalBody}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.countryWrapper}>
                  <TouchableOpacity onPress={() => changeDialingCode('+1')}>
                    <View style={styles.countryField}>
                      <Image
                        source={require('assets/icons/flag.png')}
                        style={styles.countryPickerIcon}
                      />
                      <Text style={styles.countryFieldText}>United States (+1)</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => changeDialingCode('+234')}>
                    <View style={styles.countryField}>
                      <DefaultText style={styles.countryPickerIcon}>NG</DefaultText>
                      <Text style={styles.countryFieldText}>Nigeria (+234)</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

    // <PhoneInput
    //   //   ref={phoneInput}
    //   //   defaultValue={value}
    //   placeholder={' '}
    //   defaultCode="US"
    //   layout="first"
    //   containerStyle={styles.phoneInputContainer}
    //   textInputStyle={styles.phoneInputText}
    //   textContainerStyle={styles.phoneInput}
    //   countryPickerButtonStyle={{ width: 65 }}
    //   //   onChangeText={(text) => {
    //   //     setValue(text);
    //   //   }}
    //   //   onChangeFormattedText={(text) => {
    //   //     setFormattedValue(text);
    //   //   }}
    //   //   withDarkTheme
    //   //   withShadow
    //   //   autoFocus
    // />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 48,
    flexDirection: 'row'
  },
  countryPickerButton: {
    width: '14%',
    // borderWidth: 1,
    // borderColor: 'dodgerblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15
  },
  countryPickerIcon: {
    height: 16,
    width: 26
  },
  phoneInputCode: {
    // height: 48,
    marginRight: 5,
    fontFamily: 'gotham-book',
    // lineHeight: 20,
    letterSpacing: 0.0025,
    color: Colors.darkGray2
    // borderColor: 'rebeccapurple',
    // borderWidth: 1
  },
  phoneInputSection: {
    flex: 1,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 48,
    fontFamily: 'gotham-book',
    fontSize: 13,
    // lineHeight: 20,
    letterSpacing: 0.0025,
    color: Colors.darkGray2,
    fontSize: 13
  },
  errorTip: {
    marginTop: 2.5,
    color: Colors.error
  },
  modalBody: {
    backgroundColor: '#00000080',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modalContent: {
    height: 362,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopStartRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  countryWrapper: {},
  countryField: {
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  countryFieldText: {
    marginLeft: 10,
    fontFamily: 'gotham-book',
    lineHeight: 20,
    letterSpacing: 0.0025,
    color: Colors.darkGray2
  }
  // phoneInputContainer: {
  //     borderWidth: 1,
  //     borderColor: '#dddddd',
  //     // paddingVertical: -15,
  //     // paddingHorizontal: 10,
  //     borderRadius: 5,
  //     marginBottom: 15,
  //     width: '100%',
  //     height: 55,
  // },
  // phoneInput: {
  //     // borderWidth: 1,
  //     // borderColor: '#dddddd',
  //     margin: 0,
  //     backgroundColor: '#ffffff',
  //     padding: 0,
  //     width: '100%'
  // },
  // phoneInputText: {
  //     margin: 0,
  //     backgroundColor: '#ffffff',
  //     padding: 0,
  //     width: '100%'
  // }
});

export default CustomPhoneInput;
