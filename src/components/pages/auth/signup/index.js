import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'

export default function AuthSignUpPage({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp</Text>
      <Button
        onPress={() => navigation.navigate('AuthSignInPage')}
        title="Sign In"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}
