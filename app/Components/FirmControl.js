import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/FirmControl';

class FirmControl extends Component {
    state = {  }

    showingTextTime = (time) => {
        time = time.toString();
        const positionDots = time.indexOf('.');
    
        const secondTime = time.slice(0, positionDots);
        const minute = parseInt(secondTime / 60);
        let second = (secondTime - minute * 60);
        if (second < 10) second = `0${second}`;
    
        return `${minute}:${second}`;
    }

    onPressPlayButton = () => {
        this.props.onPressPlay();
    }

    onSpeakerVolumeChange = () => {
        this.props.onPressSpeaker();
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value();
      }
    
      componentDidMount() {
        this.startSlideIn();
      }
      
      onLayoutChange = (event) => {
        const {layout: { height } } = event.nativeEvent;
        if (this.state.height === -1000){
          this.setState({ height });
        }
      }
      getAnimation(value, autoHide) {
        const { delay } = this.props;
        return Animated.timing(
          this.animatedValue,
          {
            toValue: value,
            duration: 500,
            easing: Easing.cubic,
            delay: autoHide ? delay : 0,
          }
        );
      }
      startSlideIn () {
        const { onOpen, autoHide } = this.props;
    
        this.animatedValue.setValue(0);
        this.getAnimation(1)
          .start(() => {
            onOpen();
            if (autoHide){
              this.startSlideOut();
            }
          });
      }
      startSlideOut() {
        const { autoHide, onClose } = this.props;
    
        this.animatedValue.setValue(1);
        this.getAnimation(0, autoHide)
          .start(() => onClose());
      }

    render() {
        return (
            <View style={styles.controls}>
                <View style={styles.trackingControls}>
                    <View style={styles.playControl}>
                        <TouchableOpacity style={styles.play}
                                        onPress={this.onPressPlayButton}>
                        <Icon
                            name={playPauseIcon}
                            size={24}
                            style={styles.icon}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.speaker}
                                        onPress={this.onSpeakerVolumeChange}>
                        <Icon 
                            name={speakerIcon}
                            size={24}
                            style={styles.icon}
                        />
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.progress}>
                        <Text style = {[styles.textTime, styles.currentTime]}> { this.showingTextTime(this.props.currentTime) } </Text>
                        <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                        <View style={styles.handrails} />
                        <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
                        <Text style={[styles.textTime, styles.remainingTime]}> { this.showingTextTime(this.props.duration - this.props.currentTime) } </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FirmControl;