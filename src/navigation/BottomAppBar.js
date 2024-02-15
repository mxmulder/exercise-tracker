import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function BottomAppBar({ navigation }) {
  return (
      <Appbar style={styles.bottom}>
          <Appbar.Action style={ styles.icon } icon="home" onPress={() => navigation.navigate('HomePage')}/>
      </Appbar>
  );
}

const styles = StyleSheet.create({
  bottom: {
   position: 'absolute',
   left: 0,
   right: 0,
   bottom: 0,
   height: 80,
   justifyContent: 'space-evenly',
  },
  icon: {
    marginBottom: 15,
  },
});