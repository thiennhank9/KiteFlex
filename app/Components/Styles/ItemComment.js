import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 3,
        borderColor: 'black'
    },
    ava: {
        width: 55,
        height: 55
    },
    txtContainer: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 5
        //backgroundColor: 'black'
    },
    statusContainer: {
        //backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'space-between' 
    }
})