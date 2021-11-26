import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../Text/PlainText';

const FeaturesListItem = () => {
    <View style={{ ...styles.itemContainer, ...props.containerStyle }}>
        <View>
            <View style={styles.imageContainer}>
                <Image source={props.imageSource} />
            </View>
            <View>
                <PlainText>{props.title}</PlainText>
                <PlainText>{props.description}</PlainText>
            </View>
        </View>

        <View>
            <Image source={require('assets/icons/icon.png')} />
        </View>
    </View>
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10
    },
    imageContainer: {
        borderRadius: 15,
        marginRight: 7
    }
});

export default FeaturesListItem;