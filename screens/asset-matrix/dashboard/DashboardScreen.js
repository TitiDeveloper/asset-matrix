import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import PlainText from '../../../components/Text/PlainText';
import PillButton from '../../../components/Button/PillButton';
import ServiceItem from '../../../components/ListItem/ServiceItem';
import { Colors } from '../../../constants/Colors';
import { Icon } from '../../../constants/Icon';

const services = [
  { title: 'Bill Payments', imageSource: require('assets/icons/Group-40.png') },
  { title: 'Loans', imageSource: require('assets/icons/Group-41.png') },
  { title: 'Savings', imageSource: require('assets/icons/Group-42.png') },
  { title: 'Investments', imageSource: require('assets/icons/Group-43.png') }
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
              // title={service.title}
              imageSource={service.imageSource}
            />
          ))}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('LifestyleBanking')}>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={require('assets/images/background.png')}
            style={styles.banner}>
            <View style={styles.bannerOverlay}>
              <PlainText style={styles.bannerText}>Lifestyle Banking</PlainText>
              <Icon name="arrow-right" size={12} color={Colors.white} />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '70%'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    marginBottom: 20,
    // width: '90%',
    // height: '70%'

  },
  bannerContainer: {
    marginBottom: 30
  },
  banner: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ccc'
  },
  bannerOverlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(6, 5, 5, 0.31)'
  },
  bannerText: {
    color: Colors.white
  }
});

export default DashboardScreen;
