import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

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
        height: 210,
        width: windows.width/3,
        backgroundColor: 'black',
        flexDirection: 'column',
        //margin: 5,
        borderRadius: 8
    },
    cardImage: {
        // width: window.width / 3,
        margin: 4,
        borderRadius: 4,
        height: 160,
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
        color: 'whitesmoke',
        fontSize: 15,
        margin: 5,
        //fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 1,
        backgroundColor: 'transparent',
    }
})