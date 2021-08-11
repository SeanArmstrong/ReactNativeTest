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
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 1000) }) } }
      />

      <Button
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 1000) }) } }
      />

      <Button
        title='Link to Product'
        onPress={ () => { navigation.push('ProductDetails', { productId: Math.round(Math.random() * 1000) }) } }
      />
    </View>
  );
}