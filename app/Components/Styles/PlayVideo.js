import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
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
      controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
      },
      trackingControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#D8D8D8',
        padding: 3,
      },
      playControl: {
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
      },
      speaker: {
        marginLeft: 3,
      },
      progress: {
        flex: 1,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
      },
      innerProgressCompleted: {
        backgroundColor: 'red',
        height: 3,
      },
      innerProgressRemaining: {
        backgroundColor: '#2C2C2C',
        height: 3,
      },
      handrails: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'red',
      },
      textTime: {
        color: 'black',
        fontSize: 10,
      },
      currentTime: {
        marginRight: 5,
      },
      remainingTime: {
        marginLeft: 5,
      },
      generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10,
      },
      rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
      },
      icon: {
        color: 'black',
      }
})