import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'

export default function AuthSignInPage({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>
      <Button
        onPress={() => navigation.navigate('AuthSignUpPage')}
        title="Register"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}