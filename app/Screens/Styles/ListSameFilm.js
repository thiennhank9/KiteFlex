import {StyleSheet} from 'react-native';
import Windows from '../../Themes/Windows';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: 'black',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'chocolate'
    },
    colorline: {
        height: 3,
        backgroundColor: 'chocolate',
        margin: 5
    },
    footer: {
        backgroundColor: 'black',
        height: 50,
        //top: windows.height - 70,
        //position: 'absolute',
        width: windows.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})