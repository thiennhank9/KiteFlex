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
        height: 100,
        borderRadius: 100
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
    modalICContent: {
        elevation: 100,
        borderRadius: 7,
        width: 280,
        height: 250,
        alignItems: 'center',
        backgroundColor: '#D73E15',
        paddingTop: 21,
        paddingBottom: 14
    },
    modalICContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    modalContent: {
        marginTop: 12,
        fontSize: 14,
        color: '#757575',
        fontFamily: 'OpenSans-Regular',
        lineHeight: 20
    },
    modalButtonText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'OpenSans-SemiBold',
        lineHeight: 20,
        letterSpacing: 0.5
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 250,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        paddingRight: 35,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 16,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})