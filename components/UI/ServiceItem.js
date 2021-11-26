import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../Text/PlainText';

const ServiceItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image source={props.imageSource} style={styles.image} />
            </View>

            <PlainText>{props.title}</PlainText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 50,
        marginBottom: 15
    },
    image: {
        
    }
});

export default ServiceItem;
