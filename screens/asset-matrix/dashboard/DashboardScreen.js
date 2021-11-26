import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';

import PlainText from '../../../components/Text/PlainText';
import Pill from '../../../components/UI/Pill';
import ServiceItem from '../../../components/UI/ServiceItem';


const services = [
    { title: 'Bill Payments', imageSource: require('assets/icons/icon.png') },
    { title: 'Loans', imageSource: require('assets/icons/icon.png') },
    { title: 'Savings', imageSource: require('assets/icons/icon.png') },
    { title: 'Investments', imageSource: require('assets/icons/icon.png') }
];

const DashboardScreen = () => {
    return (
        <ScrollView>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profileInfo}>
                    <View style={styles.profileAvatar}>

                    </View>
                    <View>
                        <PlainText>WELCOME</PlainText>
                        <PlainText>Fadekemi</PlainText>
                    </View>
                </View>
                <View style={styles.profileMenuContainer}>
                    <View style={styles.profileMenu}></View>
                    <View style={styles.notificationMenu}></View>
                    <View></View>
                </View>
            </View>

            <View style={styles.balanceContainer}>
                <View>
                    <PlainText>ACCOUNT - 0929389038</PlainText>
                    <PlainText>N15,000</PlainText>
                </View>

                <Pill>Transfer</Pill>
            </View>

            <View style={styles.servicesPanel}>
                {services && services.map((service, index) => (
                    <ServiceItem key={index} title={service.title} imageSource={service.imageSource} />
                ))}
            </View>

            <View style={styles.bannerContainer}>
                <ImageBackground source={require('assets/images/landing-img.png')} style={styles.banner}>
                    <PlainText>Lifestyle Banking</PlainText>
                </ImageBackground>
            </View>

            <View>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    profileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    profileInfo: {
        flexDirection: 'row',

    },
    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    profileMenuContainer: {
        flexDirection: 'row',

    },
    profileMenu: {

    },
    notificationMenu: {

    },
    balanceContainer: {
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    servicesPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    bannerContainer: {
        marginBottom: 30
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default DashboardScreen;