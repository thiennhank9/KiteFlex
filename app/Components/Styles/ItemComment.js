import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        // borderWidth: 1,
        borderColor: 'black'
    },
    ava: {
        width: 50,
        height: 50,
        marginRight: 5,
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
    },
    txtContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 5,
        borderRadius: 10,
        marginLeft: 5,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    statusContainer: {
        //backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'space-between' 
    }
})