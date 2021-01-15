import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/signin';
import signup from '../components/Signup';


const AuthNavigation = createStackNavigator(
  {
    signin: { components: signin },
    Signup: { components: signup }
  },
  {
    initialRouteName: 'signin',
    headerMode: 'none'
  }
)

export default AuthNavigation