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
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        labelStyle: {
            fontSize: 10
        }
    }
})

export default TabApp;