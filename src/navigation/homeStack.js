import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../components/pages/tabNavigator/home'
import ProductDetailsPage from '../components/pages/productDetails';
import ProductListingPage from '../components/pages/productListing';
import BrandProductListingPage from '../components/pages/brandDetails';

const HomeStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName="HomePage">
      <HomeStack.Screen name="HomePage" component={HomePage} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetailsPage} />
      <HomeStack.Screen name="ProductListing" component={ProductListingPage} />
      <HomeStack.Screen name="BrandProductListing" component={BrandProductListingPage} />
    </HomeStack.Navigator>
  );
}