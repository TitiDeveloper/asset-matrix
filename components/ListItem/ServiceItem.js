import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../Text/PlainText';

const ServiceItem = (props) => {
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
        height: 50,
        width: 30,
        borderRadius: 50,
        marginBottom: 25,
        marginTop: 40,
        marginLeft: 30,
        
        
    },
    image: {
        // marginRight: 20,
        width: '250%',
        height:'250%'

    }
});

export default ServiceItem;
