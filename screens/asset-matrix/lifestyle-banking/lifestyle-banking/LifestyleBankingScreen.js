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
  }
];

const LifestyleBankingScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.sectionContainer}>
        <PlainText style={styles.sectionTitle}>Features</PlainText>

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

      <View style={styles.scrollSection}>
        <PlainText style={styles.sectionTitle}>Brands</PlainText>

        <View style={styles.horScrollContainer}>
          <HorScrollItem title="50 % discount on Uber Eats" />
          <HorScrollItem title="20% discount on ICM" />
          <HorScrollItem title="Buy 1 and get 1 Redbull ticket" />
        </View>
      </View>

      <View style={styles.scrollSection}>
        <PlainText style={styles.sectionTitle}>Our Partners</PlainText>

        <View style={styles.horScrollContainer}>
          <HorScrollItem title="SHOPRITE" />
          <HorScrollItem title="CHICKEN REPUBLIC" />
          <HorScrollItem title="UBER" />
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

export default LifestyleBankingScreen;
