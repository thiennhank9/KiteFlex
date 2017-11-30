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
        activeTintColor: '#D73E15',
        labelStyle: {
            fontSize: 12,
            color: '#A3A6A9',
            marginBottom: 5,
        },
        style: {
            backgroundColor: '#1A2127',
        },
    }
})

export default TabApp;