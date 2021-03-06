import {Animated, Easing} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TabApp from './TabApp.js';
import {DetailFilm} from '../Screens/index.js';
import Loading from '../Screens/Loading.js';
import Login from '../Screens/Account/Login.js';
import SignUp from '../Screens/Account/SignUp.js';
import ListSameFilm from '../Screens/ListSameFilm.js';
import DetailPerson from '../Screens/DetailPerson.js';
import ListSameCategory from '../Screens/ListSameCategory';
import PlayVideo from '../Components/PlayVideo.js';

export default StackMainApp = StackNavigator({
    Loading: {
        screen: Loading
    },
    TabApp: {screen: TabApp},
    DetailFilm: {screen: DetailFilm},
    SignUp: {screen: SignUp},
    DetailPerson: {screen: DetailPerson},
    ListSameFilm: {screen: ListSameFilm},
    ListSameCategory: {screen: ListSameCategory},
    Login: {screen: Login},
    PlayVideo: {screen: PlayVideo}
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 200,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateX}]};
        },
    }),
})