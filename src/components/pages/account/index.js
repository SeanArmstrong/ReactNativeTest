import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/button'

export default function AccountPage({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>
      <Button
        onPress={() => navigation.navigate('AccountSignUpPage')}
        title="Register"
      />
      <Button
        onPress={() => navigation.navigate('AccountSignUpPage')}
        title="Sign In"
      />
      <Button
        onPress={() => navigation.navigate('FAQPage')}
        title="FAQS"
      />
      <Button
        onPress={() => navigation.navigate('PersonalDetailsPage')}
        title="Personal Details"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}