import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                flex: 1,
            }
        }),
    }
})