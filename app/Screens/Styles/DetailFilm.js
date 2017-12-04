import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';
export default styles = StyleSheet.create({
    hori: {
        flexDirection: 'row'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'darkgray',
        height: 40,
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
    },
    IMDbContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textIMDb: {
        color: 'grey',
        borderRadius: 2,
        borderColor: 'grey',
        borderWidth: 0.5
    },
    textMark: {
        color: 'red',
        marginLeft: 10
    },
    textHD: {
        color: 'white',
        borderRadius: 2,
        borderColor: 'red',
        borderWidth: 0.5
    },
    textVN: {
        color: 'white',
        borderRadius: 2,
        borderColor: 'red',
        borderWidth: 0.5,
        marginLeft: 10
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
    }
})