import * as React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../atoms/button'

export default function AccountSignInPage({ navigation}) {
  const  dispatch = useDispatch()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>
      <Button
        onPress={() => {
          dispatch({ type: 'LOGIN' })
          navigation.popToTop()
        }}
        title="Complete Sign in"
      />
      <Button
        onPress={() => navigation.navigate('AccountSignUpPage')}
        title="Register"
      />
      <Button
        onPress={() => navigation.navigate('AccountPage')}
        title="Exit"
      />
    </View>
  );
}