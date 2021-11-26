import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const SuccessScreen = () => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('assets/images/Frame-33.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height:'70%'
    },
    imageContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }
})


export default SuccessScreen