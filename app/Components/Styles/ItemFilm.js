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
        height: 202,
        width: windows.width / 3,
        backgroundColor: 'black',
        flexDirection: 'column'
    },
    cardImage: {
        height: 160,
        margin: 4,
        borderRadius: 4,
    },
    cardTitleContainer: {
        position: 'absolute',
        bottom: 0,
        height: 30,
        width: '100%',
        justifyContent: 'center',
    },
    cardTitle: {
        color: 'whitesmoke',
        fontSize: 13,
        margin: 1,
        textAlign: 'center',
        paddingHorizontal: 1,
        backgroundColor: 'transparent',
    },
    episodeContainer: {
        width: windows.width / 3,
        height: 30,
        position: 'absolute',
        marginTop: 3,
        marginLeft: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    IMDb: {
        width: 30,
        height: 20,
        backgroundColor: 'maroon',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textIMDb: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    episodeNumber: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: 'gold',
        borderWidth: 1,
        borderColor: 'darkviolet',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEp: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    containerTextAndIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: 'transparent',
    }
})