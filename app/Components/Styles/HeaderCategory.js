import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 60,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    titleCategory: {
        color: 'palegoldenrod',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textAdd: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});