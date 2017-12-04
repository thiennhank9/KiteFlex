import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filmTitle: {
        position: 'absolute',
        flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(30, 30, 30, 0.85)',
      },
      headerTitle: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
      },
      textTitle: {
        marginHorizontal: 10,
        color: 'white',
        fontSize: 16,
      },
      anotherButton: {
        backgroundColor: 'white',
        width: 150,
        height: 35,
      },
      iconBack: {
        backgroundColor: 'transparent',
      },
      icon: {
        color: 'white',
      }
});

export default styles;