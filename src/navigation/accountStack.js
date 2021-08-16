import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountPage from './../components/pages/account'
import SignInPage from './../components/pages/account/signin'
import SignUpPage from './../components/pages/account/signup'
import FAQSPage from './../components/pages/account/faqs'
import OrderDetailsPage from './../components/pages/account/orders/details'
import OrderHistoryPage from './../components/pages/account/orders/history'
import PersonalDetailsPage from './../components/pages/account/personalDetails'

const AccountStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <AccountStack.Navigator initialRouteName="AccountPage">
      <AccountStack.Screen name="AccountPage" component={AccountPage} />
      <AccountStack.Screen name="AccountSignInPage" component={SignInPage} />
      <AccountStack.Screen name="AccountSignUpPage" component={SignUpPage} />
      <AccountStack.Screen name="FAQPage" component={FAQSPage} />
      <AccountStack.Screen name="PersonalDetailsPage" component={PersonalDetailsPage} />
      <AccountStack.Screen name="OrderDetailsPage" component={OrderDetailsPage} />
      <AccountStack.Screen name="OrderHistoryPage" component={OrderHistoryPage} />
    </AccountStack.Navigator>
  );
}