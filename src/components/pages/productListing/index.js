import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function ProductListing({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Listing</Text>

      <Button
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 1000) }) } }
      />
    </View>
  );
}