import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/components/signup';

const AppNavigation = createStackNavigator(
  {
    login: { components: signup }
  },
  {
    initialRouteName: 'signup'
  }
)

export default AppNavigation