import {StyleSheet} from 'react-native';

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
        marginTop: 7,
        color: 'white'
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
        
    }
});