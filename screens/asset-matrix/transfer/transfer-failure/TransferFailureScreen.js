import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PillButton from '../../../../components/Button/PillButton';
import PlainText from '../../../../components/Text/PlainText';
import { Colors } from '../../../../constants/Colors';

const TransferFailureScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.overlayScreen}>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            {/* <Image source={require('assets/icons/icon.png')} style={styles.collapsePressable} /> */}
          </View>

          <View style={styles.closePressable}>
            {/* <Image source={require('assets/icons/icon.png')} /> */}
          </View>
        </View>

        <View style={styles.messageContainer}>
          <PlainText style={styles.text}>FAILED!</PlainText>
        </View>

        <View style={styles.amountContainer}>
          <PlainText style={styles.baseText}>AMOUNT</PlainText>
          <PlainText style={styles.headerText}>N15,000</PlainText>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.profileAvatar}></View>
          <View>
            <PlainText style={styles.profileInfoText}>Joshua Adewale</PlainText>
            <PlainText style={styles.profileInfoText}>UBA Bank - 0928928290</PlainText>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <PlainText style={styles.actionText}>RETRY TRANSACTION</PlainText>
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
    paddingTop: 60
  },
  overlayScreen: {
    backgroundColor: '#EB5757',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    // marginBottom: 20,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerInfo: {
    flexDirection: 'row'
  },
  messageContainer: {
    marginVertical: 30
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 50
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
  text: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20
  },
  profileInfo: {
    flexDirection: 'row'
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  profileInfoText: {
    color: Colors.white
  },
  actionContainer: {},
  actionText: {
    color: Colors.white,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  },
  buttonContainer: {
    // flex: 1,
    backgroundColor: '#EB5757',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 50
  }
});

export default TransferFailureScreen;
