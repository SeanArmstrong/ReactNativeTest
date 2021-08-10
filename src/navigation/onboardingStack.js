import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

function WelcomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WELCOME</Text>
      <Button
        onPress={() => navigation.navigate('QuestionScreen')}
        title="Next"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}

function QuestionScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>QUESTION</Text>
      <Button
        onPress={() => navigation.navigate('SignInScreen')}
        title="Continue"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}

function SignInScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In</Text>
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Sign In"
      />
      <Button
        onPress={() => navigation.navigate('OnboardingSignUpScreen')}
        title="Not registered - Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}

function SignUpScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In</Text>
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Already have an account - Sign In"
      />
      <Button
        onPress={() => navigation.navigate('TabNavigator')}
        title="Exit"
      />
    </View>
  );
}

export default function({ navigation }) {
  return (
    <OnboardingStack.Navigator initialRouteName="WelcomeScreen">
      <OnboardingStack.Screen name="WelcomeScreen" option={ { title: "OBOARDING" } } component={WelcomeScreen} />
      <OnboardingStack.Screen name="QuestionScreen" component={QuestionScreen} />
      <OnboardingStack.Screen name="SignInScreen" component={SignInScreen} />
      <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </OnboardingStack.Navigator>
  );
}