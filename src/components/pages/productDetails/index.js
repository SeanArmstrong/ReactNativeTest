import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function ProductDetails({ route, navigation }) {
  const { productId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Details</Text>
      <Text>{ productId }</Text>

      <Button
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 1000) }) } }
      />

      <Button
        title='Link to Listing'
        onPress={ () => { navigation.push('ProductListing', { productId: Math.round(Math.random() * 1000) }) } }
      />

      <Button
        title='Link to Brand'
        onPress={ () => { navigation.push('BrandProductListing', { brand: Math.round(Math.random() * 1000) }) } }
      />
    </View>
  );
}