import { TabNavigator } from 'react-navigation';
import { Platform} from 'react-native';
import Category from '../Screens/Category.js';
import HighLight from '../Screens/HighLight.js';
import MostWatch from '../Screens/MostWatch.js';
import IMDb from '../Screens/IMDb.js';

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
        activeTintColor: '#D73E15',
        showIcon: true,
        labelStyle,
        style: {
            backgroundColor: '#1A2127',
            marginVertical: 7,
            height: 57,
        },
    }
    })