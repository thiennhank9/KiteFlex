import { StyleSheet, Dimensions } from 'react-native';
const image_aspect_ratio = 281 / 500;

export default styles = StyleSheet.create({
    titleContainer: {
        position: 'absolute',
        marginTop: Dimensions.get('window').width * (image_aspect_ratio) * 3 / 4,
    },
    textTitle: {
        fontSize: 17,
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