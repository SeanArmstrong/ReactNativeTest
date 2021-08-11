import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'

export default function AccountSignInScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>
      <Button
        onPress={() => navigation.navigate('AccountSignInPage')}
        title="Sign In"
      />
      <Button
        onPress={() => navigation.navigate('AccountPage')}
        title="Exit"
      />
    </View>
  );
}
