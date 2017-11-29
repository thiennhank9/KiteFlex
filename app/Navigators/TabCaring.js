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
    tabBarOptions: {
        lazy: true,
        showLabel: true,
        showIcon: true,
        labelStyle: {
            fontSize: 10
        }
    }
    })