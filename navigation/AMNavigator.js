import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/auth/landing/LandingScreen';
import AuthOptionsScreen from '../screens/auth/auth-options/AuthOptionsScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import DashboardScreen from '../screens/asset-matrix/dashboard/DashboardScreen';

const AuthNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
    AuthOptions: AuthOptionsScreen,
    Login: LoginScreen
  },
  {
    defaultNavigationOptions: {
        headerShown: false
    }
  }
);

const AMNavigator = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen
  }
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  AssetMatrix: AMNavigator
});

export default createAppContainer(AppNavigator);
