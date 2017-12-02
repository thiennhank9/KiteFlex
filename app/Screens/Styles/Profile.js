import { StyleSheet, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1A2127',
    },
    avatarContainer: {
        position: 'absolute',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 220,
    },
    avatar: {
        width: 100,
        height: 100
    },
    itemContainer: {
        paddingLeft: 18,
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
        color: '#D73E15',
    },
    text: {
        color: '#A3A6A9',
    },
})