import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function AccountAndBag({ route, navigation }) {
  return (
    <View>
      <Button
        title='Account'
        onPress={ () => { navigation.push('AccountScreen', { productId: Math.round(Math.random() * 1000) }) } }
      />
      <Button
        title='Bag'
        onPress={ () => { navigation.push('PurchaseScreen') } }
      />
    </View>
  );
}