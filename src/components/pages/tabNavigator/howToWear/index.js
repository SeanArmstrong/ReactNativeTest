import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../atoms/button'

const HowToWearLink = ({ videoId, navigation }) => (
  <View style={{ padding: 10}}>
    <Button
      title={ `Link to How to Wear Video ${videoId}` }
      onPress={ () => { navigation.navigate('HowToWearDetailsPage', { videoId: videoId }) } }
    />
  </View>
)

function HowToWearVideos({ navigation }) {
  const videoIds = [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]

  return videoIds.map((videoId) => {
    return <HowToWearLink key={ videoId } videoId={ videoId } navigation={navigation} />
  })
}

export default function HowToWearListingPage({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How To Wear</Text>
      <HowToWearVideos navigation={ navigation } />
    </View>
  );
}