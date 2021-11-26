import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native';

const UploadButton = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth:1,
        borderColor: '#F2994A',
        minWidth: '80%',
        // height:'25%'
    },
  
    buttonText: {
        fontSize: 15,
        lineHeight: 20,
    },
});

export default UploadButton