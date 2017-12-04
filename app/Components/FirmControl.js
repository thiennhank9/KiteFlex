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

    render() {
        const flexCompleted = this.props.flexCompleted;
        const flexRemaining = this.props.flexRemaining;

        const playPauseIcon = this.props.playPauseIcon;
        const speakerIcon = this.props.speakerIcon;

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
                        <Text style={[styles.textTime, styles.remainingTime]}> - { this.showingTextTime(this.props.duration - this.props.currentTime) } </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FirmControl;