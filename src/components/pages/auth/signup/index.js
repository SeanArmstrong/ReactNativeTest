import * as React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from './../../../atoms/button'

export default function AuthSignUpPage({ navigation}) {
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp</Text>
      <Button
        onPress={() => {
          dispatch({ type: 'LOGIN' })
        }}
        title="Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('AuthSignInPage')}
        title="Go to Sign In"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}
