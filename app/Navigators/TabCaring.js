import { TabNavigator } from 'react-navigation';
import Category from '../Screens/Category.js';
import HighLight from '../Screens/HighLight.js';
import MostWatch from '../Screens/MostWatch.js';
import IMDb from '../Screens/IMDb.js';

export default TabCaring = TabNavigator({
    Category: { screen: Category },
    HighLight: { screen: HighLight },
    MostWatch: { screen: MostWatch },
    IMDb: { screen: IMDb }
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