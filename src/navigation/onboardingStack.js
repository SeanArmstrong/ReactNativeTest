import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import Button from './../components/atoms/button'

const OnboardingStack = createNativeStackNavigator();

function CompleteOnboardingButton({ text = 'Exit', auth = false }) {
  const dispatch = useDispatch()

  return (
    <Button
      style={{ padding: 1000 }}
      onPress={() => {
        dispatch({ type: 'ONBOARDING_COMPLETE' })

        if (auth) {
          dispatch({ type: 'LOGIN' })
        }
      }}

      title={ text }
    />
  )
}

function WelcomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WELCOME</Text>
      <Button
        onPress={() => navigation.navigate('QuestionScreen')}
        title="Next"
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
      <CompleteOnboardingButton />
    </View>
  );
}

function SignInScreen({ navigation}) {
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In</Text>
      <CompleteOnboardingButton text='COMPLETE Sign In' auth={ true } />

      <Button
        onPress={() => navigation.navigate('SignUpScreen')}
        title="Not registered - Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('Recover')}
        title="Forgot my password - Sign In"
      />
      <CompleteOnboardingButton />
    </View>
  );
}

function SignUpScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign Up</Text>
      <CompleteOnboardingButton text='COMPLETE Sign Up' auth={ true } />
      <Button
        onPress={() => navigation.navigate('SignInScreen')}
        title="Already have an account - Sign In"
      />
      <CompleteOnboardingButton />
    </View>
  );
}

function Recover({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recover</Text>
      <Button
        onPress={() => navigation.navigate('SignUpScreen')}
        title="Dont have an account Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('SignInScreen')}
        title="Remembered your details - Sign In"
      />
      <CompleteOnboardingButton />
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
      <OnboardingStack.Screen name="Recover" component={Recover} />
    </OnboardingStack.Navigator>
  );
}