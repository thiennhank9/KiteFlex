import { 
    StackNavigator 
} from 'react-navigation';
import Screen1 from '../screens/Screen1.js';
import Screen2 from '../screens/Screen1.js';

const AppStack = StackNavigator({
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    }
})

export default AppStack;