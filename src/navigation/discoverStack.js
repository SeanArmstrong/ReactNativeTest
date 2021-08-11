import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscoverPage from '../components/pages/tabNavigator/discover'
import ProductDetails from '../components/pages/productDetails';
import ProductListing from '../components/pages/productListing';
import BrandProductListing from '../components/pages/brandDetails';
import HowToWearDetailsPage from '../components/pages/howToWearDetails';

const DiscoverStack = createNativeStackNavigator();

export default function({ navigation }) {
  return (
    <DiscoverStack.Navigator initialRouteName="DiscoverPage">
      <DiscoverStack.Screen name="HowToWearDetailsPage" component={HowToWearDetailsPage} />
      <DiscoverStack.Screen name="DiscoverPage" component={DiscoverPage} />
      <DiscoverStack.Screen name="ProductDetails" component={ProductDetails} />
      <DiscoverStack.Screen name="ProductListing" component={ProductListing} />
      <DiscoverStack.Screen name="BrandProductListing" component={BrandProductListing} />
    </DiscoverStack.Navigator>
  );
}