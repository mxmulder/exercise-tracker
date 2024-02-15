import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomePage from '../pages/HomePage';

const screens = {
  HomePage: {
    screen: HomePage
  },
};

const additionalOptions = {
  navigationOptions: {
    headerStyle:{backgroundColor:'#FFFF00'},
    headerTintColor:'#ad3232',
    gesturesEnabled:false,
    backgroundColor: 'black'
  },
};

const HomeStack = createStackNavigator(screens, additionalOptions);

export default createAppContainer(HomeStack);