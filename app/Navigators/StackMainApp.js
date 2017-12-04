import { StackNavigator } from 'react-navigation';
import TabApp from './TabApp.js';
import {DetailFilm} from '../Screens/index.js';

export default StackMainApp = StackNavigator({
    TabApp: { screen: TabApp },
    DetailFilm: { screen: DetailFilm }
}, {
    headerMode: 'none'
})