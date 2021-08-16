import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../../atoms/button'


export default function OrderHistoryPage({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order History Page</Text>

      <Button
        onPress={() => navigation.navigate('OrderDetailsPage', { orderId: '1' })}
        title="Order 1"
      />

      <Button
        onPress={() => navigation.navigate('OrderDetailsPage', { orderId: '2' })}
        title="Order 2"
      />
    </View>
  );
}