import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeStack from './homeStack';
import discoverStack from './discoverStack';
import menuStack from './menuStack';
import myLikesStack from './myLikesStack';
import howToWearStack from './howToWearStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={homeStack} />
      <Tab.Screen name="Discover" component={discoverStack}  />
      <Tab.Screen name="Menu" component={menuStack} />
      <Tab.Screen name="MyLikes" component={myLikesStack} />
      <Tab.Screen name="HowToWear" component={howToWearStack} />
    </Tab.Navigator>
  )
}