import { TabNavigator } from 'react-navigation';
import {
    Home,
    New,
    Caring,
    Library,
    Profile
} from '../Screens/index.js';

const TabApp = TabNavigator({
    Home: {screen: Home},
    New: {screen: New},
    Caring: {screen: Caring},
    Library: {screen: Library},
    Profile: {screen: Profile}   
}, {
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        labelStyle: {
            fontSize: 10
        }
    }
})

export default TabApp;