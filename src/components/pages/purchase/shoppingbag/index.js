import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../atoms/button'

export default function ShoppingbagPage({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shopping Bag</Text>

      <Button
        title='Link to Checkout'
        onPress={ () => { navigation.push('CheckoutPage') } }
      />
    </View>
  );
}