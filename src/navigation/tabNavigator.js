import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeStack from './homeStack';
import discoverStack from './discoverStack';
import menuStack from './menuStack';
import myLikesStack from './myLikesStack';
import howToWearStack from './howToWearStack';
import { useSelector } from 'react-redux';
import authStack from './authStack';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const loggedIn = useSelector((state) => state.appReducer.loggedIn)

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={homeStack} />
      <Tab.Screen name="Discover" component={discoverStack} />
      <Tab.Screen name="Menu" component={menuStack} />
      <Tab.Screen name="MyLikes" component={loggedIn ? myLikesStack : authStack} />
      <Tab.Screen name="HowToWear" component={howToWearStack} />
    </Tab.Navigator>
  )
}