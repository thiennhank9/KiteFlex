import { TabNavigator } from 'react-navigation';

import Movie from '../Screens/Movie.js';
import Episode from '../Screens/Episode.js';
import TVShow from '../Screens/TVShow.js';
import Cartoon from '../Screens/Cartoon.js';

export default TabNew = TabNavigator({
    Movie: { screen: Movie },
    Episode: { screen: Episode },
    TVShow: { screen: TVShow },
    Cartoon: { screen: Cartoon }
}, {
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'top',
    tabBarOptions: {
        lazy: true,
        activeTintColor: '#D73E15',
        showIcon: true,
        style: {
            backgroundColor: '#1A2127',
            marginVertical: 7,
        },
    }
})