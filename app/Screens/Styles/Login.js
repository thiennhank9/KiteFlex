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
    containerBody: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconBack: {
      margin: 5  
    },
    logo:{
        marginTop: 30
    },
    textUnderline: {
        margin: 10,
        textDecorationLine: 'underline'
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windows.width,
        height: 50, 
        backgroundColor: 'black'
    },
    containerInput: {
        marginTop: 30,
        flexDirection: 'column',
        width: windows.width * 3 / 4
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextUnderline: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerSocialIcons: {
        flexDirection: 'row',
    },
    containerButton: {
        width: windows.width*3/4,
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIcon: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})