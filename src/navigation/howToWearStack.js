import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HowToWearListingPage from '../components/pages/tabNavigator/howToWear'
import HowToWearDetailsPage from '../components/pages/howToWearDetails';
import ProductDetails from '../components/pages/productDetails';
import ProductListing from '../components/pages/productListing';
import BrandProductListing from '../components/pages/brandDetails';



const MenuStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <MenuStack.Navigator initialRouteName="HowToWearListingPage">
      <MenuStack.Screen name="HowToWearListingPage" component={HowToWearListingPage} />
      <MenuStack.Screen name="HowToWearDetailsPage" component={HowToWearDetailsPage} />
      <MenuStack.Screen name="ProductDetails" component={ProductDetails} />
      <MenuStack.Screen name="ProductListing" component={ProductListing} />
      <MenuStack.Screen name="BrandProductListing" component={BrandProductListing} />
    </MenuStack.Navigator>
  );
}