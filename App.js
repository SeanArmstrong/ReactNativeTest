import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/authStack'
import TabStack from './src/navigation/tabNavigator'
import OnboardingStack from './src/navigation/onboardingStack'
import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/store';


const RootStack = createNativeStackNavigator();

function Main() {
  const onboarded = useSelector((state) => state.appReducer.onboarded)

  if (onboarded) {
    return (
      <RootStack.Navigator initialRouteName="TabNavigator">
        <RootStack.Group>
          <RootStack.Screen name="TabNavigator" component={TabStack} options={{ headerShown: false }} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
          <RootStack.Screen name="AuthScreen" component={AuthStack} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
  } else {
    return (
      <RootStack.Navigator initialRouteName="OnboardingStack">
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    )
  }
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  )
}

export default App