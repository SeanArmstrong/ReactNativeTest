import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'
import { useDispatch } from 'react-redux';

export default function AccountSignInScreen({ navigation}) {
  const  dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>
      <Button
        onPress={() => {
          dispatch({ type: 'LOGIN' })
          navigation.popToTop()
        }}
        title="Complete Sign Up"
      />
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
