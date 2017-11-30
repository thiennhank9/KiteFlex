import {TabNavigator} from 'react-navigation';

import Recent from '../Screens/Recent.js';
import Download from '../Screens/Download.js';
import Love from '../Screens/Love.js';
import WatchLater from '../Screens/WatchLater.js';

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
        labelStyle: {
            fontSize: 10,
            color: '#A3A6A9',
        },
        style: {
            backgroundColor: '#1A2127',
            marginVertical: 7,
        },
    }
})