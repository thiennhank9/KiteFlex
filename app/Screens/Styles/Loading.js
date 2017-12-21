import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111', // nearly black but in red?,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIndicator: {
        flexDirection: 'column',
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center', 
        height: 100
    },
    textLoading: {
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'chocolate'
    }
})