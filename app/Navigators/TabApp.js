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
    }
})

const tabBarStyle = Platform.select({
    ios: {
        backgroundColor: '#1A2127',
        paddingTop: 3,
    },
    android: {
        backgroundColor: '#1A2127',
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
        showLabel: (Platform.OS !== 'android'),
        showIcon: true,
        activeTintColor: '#D73E15',
        labelStyle,
        style: tabBarStyle,
    },
})

export default TabApp;