import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    hori: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContainer: {
        height: 50,
        backgroundColor: '#111111',
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
        marginTop: 2,
        color: 'white',
        fontSize: 13,
    },
    containerBackAndSearch: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageFilmContainer: {
        width: windows.width,
        height: windows.height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
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
        borderRadius: 10,
        backgroundColor: 'tomato',
        marginRight: 5
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
})