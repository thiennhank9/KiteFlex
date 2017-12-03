import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filmTitle: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#D8D8D8',
        top: 0,
        left: 0,
        right: 0,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      headerTitle: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
      },
      textTitle: {
        marginHorizontal: 10,
        color: 'black',
        fontSize: 16,
      },
      anotherButton: {
        backgroundColor: 'white',
        width: 150,
        height: 35,
      },
});

export default styles;