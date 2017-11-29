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
    tabBarOptions: {
        lazy: true,
        showLabel: true,
        showIcon: true,
        labelStyle: {
            fontSize: 10
        }
    }
})