import {
    StackNavigator
} from 'react-navigation';
import AppDrawer from './AppDrawer.js';
import AppStack from './AppStack.js';

const AppNavigation = StackNavigator({
    AppStack: {
        screen: AppStack
    },
    AppDrawer: {
        screen: AppDrawer
    },
})

export default AppNavigation;

