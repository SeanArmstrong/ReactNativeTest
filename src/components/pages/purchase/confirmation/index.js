import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../atoms/button'

export default function ConfirmationPage({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Purchase Confirmation</Text>

      <Button
        title='Continue Shopping'
        onPress={ () => { navigation.push('TabNavigator') } }
      />

      <Button
        title='View orders'
        onPress={ () => { navigation.push('AccountScreen', { screen: 'OrderHistoryPage' }) } }
      />
    </View>
  );
}