import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    hori: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'black'
    },
    headerContainer: {
        height: 50,
        backgroundColor: 'black',
    },
    textMajor: {
        fontSize: 16,
        color: 'white'
    },
    textInfo: {
        fontSize: 16,
        color: 'grey'
    },
    textNumberComment: {
        marginLeft: 10,
        marginTop: 2,
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerBackAndSearch: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'darkgray'
    },
    imageFilmContainer: {
        width: windows.width,
        height: windows.height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    imageFilm: {
        width: windows.width,
        height: windows.height / 3,
        position: 'absolute',
        zIndex: 1
    },
    textTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    star1Container: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    IMDbContainer: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textIMDb: {
        padding: 3,
        color: 'grey',
        borderRadius: 2,
        borderColor: 'grey',
        borderWidth: 1,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    textMark: {
        color: 'red',
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textHD: {
        padding: 3,
        color: 'white',
        borderRadius: 2,
        fontSize: 14,
        borderColor: 'red',
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textVN: {
        color: 'white',
        borderRadius: 2,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        fontSize: 14,
        padding: 3,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textNumberMarkStar: {
        color: 'red'
    },
    textMajor: {
        color: 'white'
    },
    textInfo: {
        color: 'grey'
    },
    textSeeMore: {
        color: 'red'
    },
    rankStartContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    textSeeMore: {
        fontSize: 16,
        color: 'lightcoral'
    },
    iconSearch: {
        borderRadius: 10,
        backgroundColor: 'tomato',
        marginRight: 5
    },
    detailContainer: {
        margin: 10
    },
    textDetail: {
        color: 'gainsboro',
        fontSize: 16,
        fontFamily: 'Cochin',
        textAlign: 'justify'
    },
    titleCategory: {
        color: 'palegoldenrod',
        fontSize: 19,
        fontWeight: 'bold',
        margin: 10
    },
})