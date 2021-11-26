import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../../../../components/Text/PlainText';
import Pill from '../../../../components/UI/Pill';

const TransferInputScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.overlayScreen}>
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        <Image source={require('assets/icons/icon.png')} style={styles.collapsePressable} />

                        <View style={styles.profileInfo}>
                            <View style={styles.profileAvatar}>

                            </View>
                            <View>
                                <PlainText>Joshua Adewale</PlainText>
                                <PlainText>UBA Bank - 0928928290</PlainText>
                            </View>
                        </View>
                    </View>

                    <View style={styles.closePressable}>
                        <Image source={require('assets/icons/icon.png')} />
                    </View>
                </View>

                <View style={styles.amountContainer}>
                    <PlainText>AMOUNT</PlainText>
                    <PlainText>N15,000</PlainText>
                </View>
            </View>

            <View>
                <PlainText>QUICK AMOUNTS</PlainText>

                <View style={styles.horizontalList}>
                    {[2000, 5000, 15000, 20000].map(amount => (
                        <Pill key={amount} >{amount}</Pill>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical: 15
    },
    overlayScreen: {
        backgroundColor: 'brown',
        height: 300,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInfo: {
        flexDirection: 'row',

    },
    profileInfo: {
        flexDirection
    },
    collapsePressable: {

    },
    closePressable: {

    },
    amountContainer: {
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontalList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default TransferInputScreen;