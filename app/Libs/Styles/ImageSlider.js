import { StyleSheet, Dimensions } from 'react-native';
const image_aspect_ratio = 281 / 500;

export default styles = StyleSheet.create({
    titleContainer: {
        position: 'absolute',
        flexDirection: 'column',
        marginTop: Dimensions.get('window').width * (image_aspect_ratio) * 3 / 4 - 40,
        marginLeft: 20
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    },
    textOverview: {
        fontSize: 12,
        color: 'white',
        width: Dimensions.get('window').width - 70,
        backgroundColor: 'transparent',
    },
    containerIcon: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerMarkNumber: {
        width: 40,
        height: 22,
        borderRadius: 4,
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    numberVote: {
        fontSize: 15,
        marginLeft: 2,
        fontWeight: 'bold',
        color: 'darkorange',
        backgroundColor: 'transparent',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#222'
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 3,
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#ccc',
        opacity: 0.9
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: '#fff',
    }
});