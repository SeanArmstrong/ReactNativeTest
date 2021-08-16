import * as React from 'react';
import { View, Text } from 'react-native';

export default function OrderDetailsPage({ route, navigation }) {
  const { orderId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order Details Page</Text>
      <Text>{ orderId }</Text>
    </View>
  );
}