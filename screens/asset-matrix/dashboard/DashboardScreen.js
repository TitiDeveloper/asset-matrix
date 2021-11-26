import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';

import PlainText from '../../../components/Text/PlainText';
import PillButton from '../../../components/Button/PillButton';
import ServiceItem from '../../../components/ListItem/ServiceItem';
import { Colors } from '../../../constants/Colors';

const services = [
  { title: 'Bill Payments', imageSource: require('assets/icons/icon.png') },
  { title: 'Loans', imageSource: require('assets/icons/icon.png') },
  { title: 'Savings', imageSource: require('assets/icons/icon.png') },
  { title: 'Investments', imageSource: require('assets/icons/icon.png') }
];

const DashboardScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.profileAvatar}></View>
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
          <PlainText style={styles.baseText}>ACCOUNT - 0929389038</PlainText>
          <PlainText style={styles.headerText}>N15,000</PlainText>
        </View>

        <PillButton onButtonTap={() => props.navigation.navigate('TransferInput')}>
          Transfer
        </PillButton>
      </View>

      <View style={styles.servicesPanel}>
        {services &&
          services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              imageSource={service.imageSource}
            />
          ))}
      </View>

      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('assets/images/landing-img.png')}
          style={styles.banner}>
          <PlainText style={styles.bannerText}>Lifestyle Banking</PlainText>
        </ImageBackground>
      </View>

      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: 60
  },
  profileInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'purple',
    marginRight: 15
  },
  profileMenuContainer: {
    flexDirection: 'row'
  },
  profileMenu: {},
  notificationMenu: {},
  balanceContainer: {
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: Colors.orangeBurn,
    alignItems: 'center'
  },
  baseText: {
    color: Colors.white
  },
  headerText: {
    color: Colors.white,
    fontSize: 24,
    lineHeight: 30
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
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    overflow: 'hidden'
  },
  bannerText: {
    color: Colors.white
  }
});

export default DashboardScreen;
