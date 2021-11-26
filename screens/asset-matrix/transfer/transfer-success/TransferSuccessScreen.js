import React from 'react';
import { View, StyleSheet, DynamicColorIOS } from 'react-native';

import PillButton from '../../../../components/Button/PillButton';
import PlainText from '../../../../components/Text/PlainText';
import { Colors } from '../../../../constants/Colors';


const TransferSuccessScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.overlayScreen}>
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        <Image source={require('assets/icons/icon.png')} style={styles.collapsePressable} />
                    </View>

                    <View style={styles.closePressable}>
                        <Image source={require('assets/icons/icon.png')} />
                    </View>
                </View>

                <View style={styles.messageContainer}>
                    <PlainText style={styles.text}>SUCCESS!</PlainText>
                </View>

                <View style={styles.amountContainer}>
                    <PlainText>AMOUNT</PlainText>
                    <PlainText>N15,000</PlainText>
                </View>

                <View style={styles.profileInfo}>
                    <View style={styles.profileAvatar}>

                    </View>
                    <View>
                        <PlainText>Joshua Adewale</PlainText>
                        <PlainText>UBA Bank - 0928928290</PlainText>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <PillButton>Done</PillButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 15
    },
    overlayScreen: {
        backgroundColor: 'limegreen',
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInfo: {
        flexDirection: 'row',

    },
    messageContainer: {
        marginVertical: 30
    },
    text: {
        color: Colors.white
    },
    profileInfo: {
        flexDirection: 'row'
    },
    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default TransferSuccessScreen;