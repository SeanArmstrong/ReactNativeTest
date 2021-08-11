import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInPage from './../components/pages/auth/signin'
import SignUpPage from './../components/pages/auth/signup'

const AuthStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <AuthStack.Navigator initialRouteName="AuthSignInPage">
      <AuthStack.Screen name="AuthSignInPage" component={SignInPage} />
      <AuthStack.Screen name="AuthSignUpPage" component={SignUpPage} />
    </AuthStack.Navigator>
  );
}