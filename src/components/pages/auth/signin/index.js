import * as React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from './../../../atoms/button'

export default function AuthSignInPage({ navigation}) {
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In Page</Text>
      <Button
        onPress={() => {
          dispatch({ type: 'LOGIN' })
        }}
        title="Sign In"
      />
      <Button
        onPress={() => navigation.navigate('AuthSignUpPage')}
        title="Go to Register"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}