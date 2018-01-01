import { StyleSheet, Platform } from 'react-native';
import windows from '../../Themes/Windows.js';

const icon = Platform.select({
    ios: {
        fontSize: 32,
        color: 'red',
    },
    android: {
        fontSize: 40,
        color: 'red',
    }
})

export default styles = StyleSheet.create({
    hori: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMajor: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    textInfo: {
        fontSize: 14,
        color: 'grey'
    },
    textNumberComment: {
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 2,
        color: 'white',
        fontSize: 16,
    },
    containerBackAndSearch: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        height: 50,
        backgroundColor: '#111111',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageFilmContainer: {
        width: windows.width,
        height: windows.height / 3,
        backgroundColor: 'black',
    },
    imageBackground: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    textTitle: {
        color: 'white',
        fontSize: 15,
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
        fontSize: 13,
        textAlign: 'center'
    },
    textMark: {
        color: 'red',
        marginLeft: 10,
        fontSize: 13,
        textAlign: 'center',
    },
    textHD: {
        padding: 3,
        color: 'white',
        borderRadius: 2,
        fontSize: 10,
        borderColor: 'red',
        borderWidth: 1,
        textAlign: 'center',

    },
    textVN: {
        color: 'white',
        borderRadius: 2,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        fontSize: 10,
        padding: 3,
        textAlign: 'center',

    },
    textNumberMarkStar: {
        color: 'red',
        marginLeft: 7
    },
    textSeeMore: {
        fontSize: 16,
        color: 'lightcoral'
    },
    rankStartContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconSearch: {
        borderRadius: 6,
        //margin: 10,
        padding: 2,
        paddingHorizontal: 4,
        backgroundColor: 'tomato',
        alignItems: 'center',
    },
    detailContainer: {
        margin: 10
    },
    textDetail: {
        color: 'gainsboro',
        fontSize: 14,
    },
    titleCategory: {
        color: 'palegoldenrod',
        fontSize: 19,
        margin: 10
    },
    icon
})