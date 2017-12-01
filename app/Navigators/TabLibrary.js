import {TabNavigator} from 'react-navigation';
import { Platform } from 'react-native';

import Recent from '../Screens/Recent.js';
import Download from '../Screens/Download.js';
import Love from '../Screens/Love.js';
import WatchLater from '../Screens/WatchLater.js';

const labelStyle = Platform.select({
    ios: {
        fontSize: 13,
        color: '#A3A6A9',
    },
    android: {
        fontSize: 10,
        color: '#A3A6A9',
    }
});

export default TabLibrary = TabNavigator({
    Recent: {screen: Recent},
    Download: {screen: Download},
    Love: {screen: Love},
    WatchLater: {screen: WatchLater}
}, {
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'top',
    tabBarOptions: {
        lazy: true,
        showLabel: true,
        showIcon: true,
        activeTintColor: '#D73E15',
        labelStyle,
        style: {
            backgroundColor: '#1A2127',
            marginVertical: 7,
            height: 57,
        },
    }
})