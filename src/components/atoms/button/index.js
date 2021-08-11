import * as React from 'react';
import { Button, View } from 'react-native';

export default function AtomButton({ title, onPress }) {
  return (
    <View style={{ paddingTop: 10 }}>
      <Button onPress={ onPress } title={ title }/>
    </View>
  )
}