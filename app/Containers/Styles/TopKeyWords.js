import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //height: 25,
        width: windows.width,
        backgroundColor: 'black',
        flexWrap: 'wrap'
    },
    titleCategory: {
        height: 30,
        margin: 5,
        color: 'palegoldenrod',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    itemContainer: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 30,
        //width: 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'gold'
    },
    text: {
        fontSize: 15,
        color: 'black',
    }
})