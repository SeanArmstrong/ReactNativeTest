import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuPage from '../components/pages/tabNavigator/menu'
import ProductDetails from '../components/pages/productDetails';
import ProductListing from '../components/pages/productListing';
import BrandProductListing from '../components/pages/brandDetails';

const MenuStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <MenuStack.Navigator initialRouteName="DiscoverPage">
      <MenuStack.Screen name="MenuPage" component={MenuPage} />
      <MenuStack.Screen name="ProductDetails" component={ProductDetails} />
      <MenuStack.Screen name="ProductListing" component={ProductListing} />
      <MenuStack.Screen name="BrandProductListing" component={BrandProductListing} />
    </MenuStack.Navigator>
  );
}