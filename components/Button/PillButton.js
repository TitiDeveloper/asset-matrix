import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../../constants/Colors';

const PillButton = (props) => {
    let buttonStyle = { ...styles.button, ...styles.defaultButton };
    let buttonTextStyle = { ...styles.buttonText, ...styles.defaultBtnText };
  
    if (props.type === 'primary') {
      buttonStyle = { ...styles.button, ...styles.primaryButton };
      buttonTextStyle = { ...buttonTextStyle, ...styles.primaryBtnText };
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onButtonTap}>
            <View style={{ ...buttonStyle, ...props.style }}>
                <Text style={buttonTextStyle}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
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
});

export default PillButton;