import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import PlainText from '../../../../components/Text/PlainText';
import FeaturesListItem from '../../../../components/ListItem/FeaturesListItem';
import HorScrollItem from '../../../../components/ListItem/HorScrollItem';

const features = [
  {
    title: 'H.M.O',
    description: 'Get health insurance  services',
    imageSource: require('assets/images/hmo.png')
  },
  {
    title: 'Hotels and Flights',
    description: 'Book your flights and hotels right away',
    imageSource: require('assets/images/hotels-flight.png')
  },
  {
    title: 'H.M.O',
    description: 'Get health insurance  services',
    imageSource: require('assets/images/hmo.png')
  },
  {
    title: 'Hotels and Flights',
    description: 'Book your flights and hotels right away',
    imageSource: require('assets/images/hotels-flight.png')
  },
];

const HMOScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.sectionContainer}>
        <PlainText style={styles.sectionTitle}>Facilities</PlainText>
        <PlainText style={styles.sectionDesc}>These are the facilities you are qualified for after careful analysis</PlainText>

        <View style={styles.sectionContent}>
          {features &&
            features.map((feature, index) => (
              <FeaturesListItem
                key={index}
                title={feature.title}
                description={feature.description}
                imageSource={feature.imageSource}
                onTap={() => props.navigation.navigate('HMO')}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    screen: {
      flexGrow: 1,
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: '#ffffff'
    },
    sectionContainer: {
      marginTop: 10,
      marginBottom: 30
    },
    sectionTitle: {
      marginVertical: 10,
      fontSize: 16,
      fontWeight: '700',
      color: '#272D37'
    },
    sectionDesc: {
        fontSize: 12,
        color: '#66737F',
        marginBottom: 20
    },
    sectionContent: {
      borderRadius: 10,
      backgroundColor: '#F5F8FA',
      paddingVertical: 20,
      paddingHorizontal: 10
    },
    scrollSection: {
      width: '100%',
      overflow: 'hidden',
      marginBottom: 25
    },
    horScrollContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  });

export default HMOScreen;
