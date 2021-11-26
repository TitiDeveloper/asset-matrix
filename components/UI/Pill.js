import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlainText from '../Text/PlainText';
import { Colors } from '../../constants/Colors';

const Pill = (props) => {
    return (
        <View style={{ ...styles.pill, ...props.containerStyle }}>
            <PlainText style={{ ...styles.pillText, ...props.textStyle}}>{props.children}</PlainText>
        </View>
    );
};

const styles = StyleSheet.create({
    pill: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    pillText: {
        color: Colors.orangeBurn,
    }
});

export default Pill;
