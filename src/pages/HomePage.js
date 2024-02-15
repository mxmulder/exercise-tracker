import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import BottomAppBar  from '../navigation/BottomAppBar.js';

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>HomePage</Text>
      <BottomAppBar navigation={navigation}/>
    </View>
  );
};