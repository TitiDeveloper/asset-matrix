import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import PlainText from '../../../../components/Text/PlainText';
import FeaturesListItem from '../../../../components/ListItem/FeaturesListItem';

const features = [
    { title: 'H.M.O', description: 'Get health', imageSource: require('assets/images/landing-img.png') },
    { title: 'Hotels and Flights', description: 'Book your flights', imageSource: require('assets/images/landing-img.png') },
];

const LifestyleBankingScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.sectionContainer}>
                <PlainText style={styles.sectionTitle}>Features</PlainText>

                <View style={styles.sectionContent}>
                    {features && features.map((feature, index) => (
                        <FeaturesListItem key={index} title={feature.title} description={feature.description} imageSource={feature.imageSource} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        padding: 15,
        backgroundColor: '#ffffff'
    },
    sectionContainer: {
        marginVertical: 10
    },
    sectionTitle: {
        marginVertical: 20
    },
    sectionContent: {
        borderRadius: 10,
        backgroundColor: 'dodgerblue',
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
});

export default LifestyleBankingScreen;