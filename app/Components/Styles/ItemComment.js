import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        // borderWidth: 1,
        borderColor: 'black'
    },
    ava: {
        width: 55,
        height: 55
    },
    txtContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 5,
        borderRadius: 10,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: 'black'
        //backgroundColor: 'black'
    },
    statusContainer: {
        //backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'space-between' 
    }
})