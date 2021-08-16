import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShoppingbagPage from '../components/pages/purchase/shoppingbag'
import CheckoutPage from '../components/pages/purchase/checkout'
import ConfirmationPage from '../components/pages/purchase/confirmation'

import AuthStack from './authStack';
import { useSelector } from 'react-redux';

const PurchaseStack = createNativeStackNavigator();

export default function({ navigation }) {
  const loggedIn = useSelector((state) => state.appReducer.loggedIn)

  if (loggedIn) {
    return (
      <PurchaseStack.Navigator initialRouteName="ShoppingbagPage">
        <PurchaseStack.Screen name="ShoppingbagPage" component={ShoppingbagPage} />
        <PurchaseStack.Screen name="CheckoutPage" component={CheckoutPage} />
        <PurchaseStack.Screen name="ConfirmationPage" component={ConfirmationPage} />
      </PurchaseStack.Navigator>
    );
  } else {
    return <AuthStack />
  }
}