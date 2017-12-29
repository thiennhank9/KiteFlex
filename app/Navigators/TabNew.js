import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { Animated, Easing } from 'react-native';
import Movie from '../Screens/Movie.js';
import Episode from '../Screens/Episode.js';
import TVShow from '../Screens/TVShow.js';
import Cartoon from '../Screens/Cartoon.js';
import DetailFilm from '../Screens/DetailFilm.js';

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
/*
const StackTabNew = StackNavigator({
    TabNew: { screen: TabNew },
    DetailFilm: { screen: DetailFilm }
},
    {
        headerMode: 'none',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 200,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const width = layout.initWidth;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    })
*/
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
            labelStyle,
            style: {
                backgroundColor: '#1A2127',
                marginVertical: 7,
                height: 57,
            },
        }
    })