import * as React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/button'

export default function AccountPage({ navigation}) {
  const loggedIn = useSelector((state) => state.appReducer.loggedIn)
  const dispatch = useDispatch()
  console.log(loggedIn)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>

      { !loggedIn && (
        <>
          <Button
            onPress={() => navigation.navigate('AccountSignUpPage')}
            title="Register"
          />
          <Button
            onPress={() => navigation.navigate('AccountSignUpPage')}
            title="Sign In"
          />
        </>
      )}

      { loggedIn && (
          <Button
          onPress={() => dispatch({type: 'LOGOUT' })}
          title="Sign Out"
        />
      )}

      <Button
        onPress={() => navigation.navigate('FAQPage')}
        title="FAQS"
      />
      <Button
        onPress={() => navigation.navigate('PersonalDetailsPage')}
        title="Personal Details"
      />

      <Button
        onPress={() => navigation.navigate('OrderHistoryPage')}
        title="Order History"
      />

      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />

    </View>
  );
}