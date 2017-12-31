import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //height: 200,
        width: windows.width,
        backgroundColor: 'black',
        flexWrap: 'wrap'
    },
    titleCategory: {
        color: 'palegoldenrod',
        fontSize: 17,
        fontWeight: 'bold'
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