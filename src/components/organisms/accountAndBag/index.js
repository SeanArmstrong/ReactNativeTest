import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function HowToWearDetailsPage({ route, navigation }) {
  const { videoId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How To Wear Details</Text>
      <Text>{ videoId }</Text>

      <Button
        title='Account'
        onPress={ () => { navigation.push('Account', { productId: Math.round(Math.random() * 1000) }) } }
      />

      <Button
        title='Bag'
        onPress={ () => { navigation.push('ShoppingBag', { productId: Math.round(Math.random() * 1000) }) } }
      />
    </View>
  );
}