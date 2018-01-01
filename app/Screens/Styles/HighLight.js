import {StyleSheet} from 'react-native';
import Windows from '../../Themes/Windows';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    header: {
        backgroundColor: 'black',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'chocolate'
    },
    colorline: {
        height: 3,
        backgroundColor: 'chocolate',
        margin: 5
    },
    footer: {
        backgroundColor: '#1A2127',
        height: 30,
        width: windows.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})