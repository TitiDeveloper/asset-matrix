import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/auth/landing/LandingScreen';
import AuthOptionsScreen from '../screens/auth/auth-options/AuthOptionsScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';

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

// const AMNavigator = createStackNavigator({

// });

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator
  // AssetMatrix: AMNavigator
});

export default createAppContainer(AppNavigator);
