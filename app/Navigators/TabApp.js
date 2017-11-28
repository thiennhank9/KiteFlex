import { TabNavigator } from 'react-navigation';
import {
    Home,
    New,
    HighLight,
    Library,
    Profile
} from '../Screens/index.js';

const TabApp = TabNavigator({
    Home: {screen: Home},
    New: {screen: New},
    HighLight: {screen: HighLight},
    Library: {screen: Library},
    Profile: {screen: Profile}   
}, {
    tabBarPosition: 'bottom'
})

export default TabApp;