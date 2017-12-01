import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import {
    Home,
    New,
    Caring,
    Library,
    Profile
} from '../Screens/index.js';

const labelStyle = Platform.select({
    ios: {
        fontSize: 12,
        color: '#A3A6A9',
        marginBottom: 5,
    },
    android: {
        fontSize: 2,
        color: '#A3A6A9',
        marginBottom: 2,
    }
})

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
        labelStyle,
        style: {
            backgroundColor: '#1A2127',
            paddingTop: 3,
        },
    }
})

export default TabApp;