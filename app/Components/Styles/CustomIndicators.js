import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#01579B',
      padding: 20,
    },
  
    row: {
      flex: 1,
      flexDirection: 'row',
    },
  
    reverse: {
      transform: [{
        rotate: '180deg',
      }],
    },
  });