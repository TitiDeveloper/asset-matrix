import React from 'react';
import { View, ImageBackground } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/auth/landing/LandingScreen';
import AuthOptionsScreen from '../screens/auth/auth-options/AuthOptionsScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import CreateAccountScreen from '../screens/auth/create-account/CreateAccountScreen'
import DashboardScreen from '../screens/asset-matrix/dashboard/DashboardScreen';
import TransferInputScreen from '../screens/asset-matrix/transfer/transfer-input/TransferInputScreen';
import TransferSuccessScreen from '../screens/asset-matrix/transfer/transfer-success/TransferSuccessScreen';
import TransferFailureScreen from '../screens/asset-matrix/transfer/transfer-failure/TransferFailureScreen';
import SetPasswordScreen from '../screens/auth/set-password/SetPasswordScreen';
import WelcomeScreen from '../screens/auth/welcome/WelcomeScreen';
import SuccessScreen from '../screens/auth/success/SuccessScreen';
import PasswordResetSuccessScreen from '../screens/auth/password-reset-success/PasswordResetSuccessScreen';

import LifestyleBankingScreen from '../screens/asset-matrix/lifestyle-banking/lifestyle-banking/LifestyleBankingScreen';
import { Colors } from '../constants/Colors';
import { Icon } from '../constants/Icon';
import PlainText from '../components/Text/PlainText';
import HMOScreen from '../screens/asset-matrix/lifestyle-banking/hmo/HMOScreen';
import VerifyAccountScreen from '../screens/auth/verify-account/VerifyAccountScreen';
import VerifyPhoneScreen from '../screens/auth/verify-phone/VerifyPhoneScreen';


const AuthNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
    AuthOptions: AuthOptionsScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
    SetPassword: SetPasswordScreen,
    Welcome: WelcomeScreen,
    Success: SuccessScreen,
    PasswordResetSuccess: PasswordResetSuccessScreen,
    VerifyAccount: VerifyAccountScreen,
    VerifyPhone: VerifyPhoneScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: '',
      headerStyle: {
        elevation: 0,
      },
      headerBackImage: () => <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <Icon name="caret-left" size={15} color={Colors.orangeBurn} />
        <PlainText style={{marginLeft: 10, fontSize: 16}}>Back</PlainText>
      </View>,
      headerBackTitleVisible: false
    }
  }
);

const AMNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    TransferInput: {
      screen: TransferInputScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    TransferSuccess: {
      screen: TransferSuccessScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    TransferFailure: {
      screen: TransferFailureScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    LifestyleBanking: {
      screen: LifestyleBankingScreen,
      navigationOptions: {
        headerTitle: 'Lifestyle Banking'
      }
    },
    HMO: {
      screen: HMOScreen,
      navigationOptions: {
        headerTitle: 'H.M.O'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Set a Title!',
      headerTitleAlign: 'center',
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontSize: 15,
        lineHeight: 20
      },
      headerStyle: {
        backgroundColor: '#FCFCFC',
        // height: 140,
        elevation: 0
      },
      // headerTransparent: true,
      headerBackImage: () => <Icon name="caret-left" size={15} color={Colors.white} />,
      headerBackground: () => (
        <View style={{ flex: 1, }}>
          <ImageBackground
            source={require('assets/images/header-bg.png')}
            resizeMode="stretch"
            style={{
              height: '100%',
              width: '100%',
              // overflow: 'hidden',
              backgroundColor: '#ccc',
              borderRadius: 0
            }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // paddingVertical: 30,
              // paddingHorizontal: 20,
              // backgroundColor: 'rgba(6, 5, 5, 0.31)'
            }}>
            </View>
          </ImageBackground>
        </View>
      )
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  AssetMatrix: AMNavigator,
});

export default createAppContainer(AppNavigator);
