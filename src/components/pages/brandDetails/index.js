import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function BrandProductListing({ route, navigation }) {
  const { brand } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Brand Product Listing</Text>
      <Text>{ brand }</Text>

      <Button
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 100) }) } }
      />
    </View>
  );
}