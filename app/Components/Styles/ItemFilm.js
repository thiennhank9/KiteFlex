import {StyleSheet} from 'react-native';
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    imageFilm: {
        borderRadius: 5,
        width: window.width/3 - 10,        
        height: 160,
        backgroundColor: 'black'
    },
    textTitleFilm: {
        marginVertical: 3,
        alignSelf: 'center',
        color: 'white',
    }
})