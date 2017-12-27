import { StyleSheet, Platform } from 'react-native';
import windows from '../../Themes/Windows.js'
const icon = Platform.select({
    ios: {
        fontSize: 24,
        color: 'white',
    },
    android: {
        fontSize: 32,
        color: 'white',
    }
});


const borderSearchBar = Platform.select({
    ios: {
        //borderRadius: 5,
    },
    android: {

    }
});


const CustomContainerIcon = Platform.select({
    ios: {
        marginLeft: 8,
        borderRadius: 7,
    },
    android: {

    }
});

const customIconMicrophone = Platform.select({
    ios: {
        opacity: 0.8,
    },
    android: {
        opacity: 0.8,
    }
});

const customInputSearch = Platform.select({
    ios: {
        opacity: 0.7,
        fontSize: 18,
    },
    android: {
        opacity: 0.7,
    }
});

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    containerHeader: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSearchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
        backgroundColor: 'black',
        //margin: 1,
    },
    containerInput: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSearch: {
        flex: 9.8 / 10,
        height: 40,
        marginLeft: 10,
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
    },
    greyLine: {
        marginTop: 2, 
        height: 3,
        backgroundColor: 'grey',
        width: windows.width - 20
    },
    containerIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearButton: {
        borderRadius: 10,
    },
    icon,
    borderSearchBar,
    CustomContainerIcon,
    customIconMicrophone,
    customInputSearch,
    containerListResults: {
        marginTop: 52,
        margin: 7,
        width: windows.width - 14,
        position: 'absolute',
        backgroundColor: 'black',
        //make sure that render list result above image slider - can't be moved
        zIndex: 100
    },
    containerEmptyResult: {
        height: 50,
        marginTop: 52,
        width: windows.width,
        position: 'absolute',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        //make sure that render list result above image slider - can't be moved
        zIndex: 100
    },
    textResult: {
        fontSize: 14,
        color: 'gray'
    },
    containerIndicator: {
        marginTop: 52,
        margin: 2,
        height: 70,
        width: windows.width - 20,
        position: 'absolute',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        //make sure that render list result above image slider - can't be moved
        zIndex: 100
    },
});