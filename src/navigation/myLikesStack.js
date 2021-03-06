import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux'

import MyLikesPage from '../components/pages/tabNavigator/myLikes'
import ProductDetails from '../components/pages/productDetails';
import ProductListing from '../components/pages/productListing';
import BrandProductListing from '../components/pages/brandDetails';
import authStack from './authStack';
import { HeaderOptions } from './headerOptions';

const MyLikesStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <MyLikesStack.Navigator initialRouteName="MyLikesPage"  screenOptions={ HeaderOptions}>
      <MyLikesStack.Screen name="MyLikesPage" component={MyLikesPage} />
      <MyLikesStack.Screen name="ProductDetails" component={ProductDetails} />
      <MyLikesStack.Screen name="ProductListing" component={ProductListing} />
      <MyLikesStack.Screen name="BrandProductListing" component={BrandProductListing} />
    </MyLikesStack.Navigator>
  );
}