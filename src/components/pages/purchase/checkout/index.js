import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../atoms/button'

export default function CheckoutPage({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checkout</Text>

      <Button
        title='Pay'
        onPress={ () => { navigation.push('ConfirmationPage') } }
      />
    </View>
  );
}