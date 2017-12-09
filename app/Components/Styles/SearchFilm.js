import { StyleSheet, Platform } from 'react-native';

const icon = Platform.select({
    ios: {
        fontSize: 24,
        color: 'white',
    },
    android: {
        color: 'white',
    }
});


const borderSearchBar = Platform.select({
    ios: {
        borderRadius: 5,
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
        fontSize: 24,
    },
    android: {
        
    }
});

const customInputSearch = Platform.select({
    ios: {
        opacity: 0.7,
        fontSize: 18,
    },
    android: {
        
    }
});

export default styles = StyleSheet.create({
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
        backgroundColor: 'darkslategray',
        margin: 1,
    },
    containerInput: {
        flexDirection: 'row',
        flex: 9/10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSearch: {
        flex: 9.8/10,
        height: 40,
        marginLeft: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
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
});