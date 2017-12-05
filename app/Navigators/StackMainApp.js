import { StackNavigator } from 'react-navigation';
import TabApp from './TabApp.js';
import {DetailFilm, FilmDetails} from '../Screens/index.js';

export default StackMainApp = StackNavigator({
    TabApp: { screen: TabApp },
    DetailFilm: { screen: DetailFilm },
    FilmDetail: { screen: FilmDetails }
}, {
    headerMode: 'none'
})