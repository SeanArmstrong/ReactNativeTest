import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('AuthScreen')}
        title="Open Auth"
      />
    </View>
  );
}

function DiscoverScreen({ navigation }) {
  return (
    <View>
      <Text>Discover</Text>
      <Button
        onPress={() => navigation.navigate('AuthScreen')}
        title="Open Auth"
      />
    </View>
  );
}

function MenuScreen({ navigation }) {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
}

function MyLikesScreen({ navigation }) {
  return (
    <View>
      <Text>My Likes</Text>
    </View>
  );
}

function HowToWearScreen({ navigation }) {
  return (
    <View>
      <Text>How to Wear</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="MyLikes" component={MyLikesScreen} />
      <Tab.Screen name="HowToWear" component={HowToWearScreen} />
    </Tab.Navigator>
  )
}