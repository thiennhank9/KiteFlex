import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';

export default TestStack = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen }
})