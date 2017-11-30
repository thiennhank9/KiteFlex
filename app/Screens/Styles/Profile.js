import { StyleSheet, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1A2127',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    },
    avatar: {
        width: 100,
        height: 100
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
        color: '#A3A6A9',
    },
    text: {
        color: '#A3A6A9',
    },
})