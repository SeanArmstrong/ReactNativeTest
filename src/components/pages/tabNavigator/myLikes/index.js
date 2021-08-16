import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './../../../atoms/button'

const ProductLink = ({ productId, navigation }) => (
  <View style={{ padding: 10}}>
    <Button
      title={ `Link to Product ${productId}` }
      onPress={ () => { navigation.navigate('ProductDetails', { productId: productId }) } }
    />
  </View>
)

function Products({ navigation }) {
  const productIds = [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]

  return productIds.map((productId) => {
    return <ProductLink key={ productId } productId={ productId } navigation={navigation} />
  })
}

export default function MyLikesPage({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Likes</Text>
      <Products navigation={ navigation } />
    </View>
  );
}