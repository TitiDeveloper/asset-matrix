import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../Text/PlainText';

const HorScrollItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('assets/images/coca-cola.png')} />
            </View>

            <PlainText style={styles.text}>{props.title}</PlainText>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '33.3%',
    },
    imageContainer: {
        // marginBottom: 10,
        height: 90,
        width: 80
    },
    text: {
        width: '75%'
    }
});

export default HorScrollItem;