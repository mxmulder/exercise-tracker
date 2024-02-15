import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Navigator from './src/navigation/HomeStack.js';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator/>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6179cd',    
  },
  roundness: 7
};
