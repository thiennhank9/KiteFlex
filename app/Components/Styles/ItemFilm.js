import {StyleSheet} from 'react-native';
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: window.width/3,
    },
    imageFilm: {
        borderRadius: 5,
        width: window.width/3 - 10,
        margin: 5,
        height: 160,
        backgroundColor: 'black'
    },
    textTitleFilm: {
        
    }
})