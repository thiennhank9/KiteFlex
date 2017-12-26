import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabApp from './TabApp.js';
import { DetailFilm } from '../Screens/index.js';
import Loading from '../Screens/Loading.js';
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'

export default StackMainApp = StackNavigator({
  Loading: {
    screen: Loading
  },
  TabApp: { screen: TabApp },
  DetailFilm: { screen: DetailFilm },
  Login: { screen: Login },
    Signup: {screen: Signup}
}, {
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