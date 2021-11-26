import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PlainText from '../../../../components/Text/PlainText';
import Pill from '../../../../components/UI/Pill';
import PillButton from '../../../../components/Button/PillButton';
import { Colors } from '../../../../constants/Colors';

const TransferInputScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.overlayScreen}>
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        {/* <Image source={require('assets/icons/icon.png')} style={styles.collapsePressable} /> */}

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
                        {/* <Image source={require('assets/icons/icon.png')} /> */}
                    </View>
                </View>

                <View style={styles.amountContainer}>
                    <PlainText style={styles.baseText}>AMOUNT</PlainText>
                    <PlainText style={styles.headerText}>N15,000</PlainText>
                </View>
            </View>

            <View style={styles.listContainer}>
                <PlainText style={{ marginBottom: 10 }}>QUICK AMOUNTS</PlainText>

                <View style={styles.horizontalList}>
                    {[2000, 5000, 15000, 20000].map(amount => (
                        <Pill key={amount} containerStyle={styles.pill}>{amount}</Pill>
                    ))}
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <PillButton type="primary" onButtonTap={() => props.navigation.navigate('TransferFailure')}>Transfer</PillButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 60
    },
    overlayScreen: {
        backgroundColor: Colors.darkOrange,
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
        flexDirection: 'row'
    },
    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50
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
    baseText: {
        color: Colors.white,
        marginBottom: 30
    },
    headerText: {
        color: Colors.white,
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '700'
    },
    listContainer: {
        paddingHorizontal: 20
    },
    horizontalList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonContainer: {
        alignItems: 'center'
    },
    pill: {
        borderWidth: 1,
        borderColor: '#D8D7DA'
    }
});

export default TransferInputScreen;