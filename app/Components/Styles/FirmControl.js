import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
      },
});

export default styles;