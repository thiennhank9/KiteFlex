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
        borderRadius: 10,
        height: 160,
        backgroundColor: 'black'
    },
    textTitleFilm: {
        marginVertical: 3,
    },
    cardContainer: {
        height: 200,
        width: window.width / 3,
        backgroundColor: 'black',
        flexDirection: 'column',
        margin: 5,
        borderRadius: 8
    },
    cardImage: {
        width: window.width / 3,
        height: 200,
        // borderTopLeftRadius: 4,
        // borderTopRightRadius: 4
    },
    cardTitleContainer: {
        position: 'absolute',
        bottom: 0,
        height: 55,
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: 'white',
        // borderBottomLeftRadius: 4,
        // borderBottomRightRadius: 4
    },
    cardTitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 1
    }
})