
import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'

const MenuItem = ({ menuItem, navigation }) => (
  <View style={{ padding: 10}}>
    <Button
      title={ `Link to Sub Menu Item ${menuItem}` }
      onPress={ () => { navigation.push('MenuPage', { menuItem: menuItem }) } }
    />
  </View>
)

function MenuItems({ navigation }) {
  const menuItems = [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]

  return menuItems.map((menuItem) => {
    return <MenuItem key={ menuItem } menuItem={ menuItem } navigation={navigation} />
  })
}

export default function MenuPage({ route, navigation}) {
  const menuItem = route.params?.menuItem

  const title = menuItem ? `Sub Menu ${menuItem}` : 'Top Level Menu'

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{ title }</Text>
      <MenuItems navigation={ navigation } />
      <Button
        title='Link to Listing'
        onPress={ () => { navigation.push('ProductListing', { productId: Math.round(Math.random() * 1000) }) } }
      />
      <Button
        title='Link to Listing'
        onPress={ () => { navigation.push('ProductListing', { productId: Math.round(Math.random() * 1000) }) } }
      />
      <Button
        title='Link to Listing'
        onPress={ () => { navigation.push('ProductListing', { productId: Math.round(Math.random() * 1000) }) } }
      />
    </View>
  );
}
