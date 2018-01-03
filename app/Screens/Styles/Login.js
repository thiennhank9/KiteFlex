import { StyleSheet } from 'react-native';
import windows from '../../Themes/Windows.js';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2127',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textUnderline: {
        margin: 10,
        textDecorationLine: 'underline'
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windows.width,
        height: 50
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerTextUnderline: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})