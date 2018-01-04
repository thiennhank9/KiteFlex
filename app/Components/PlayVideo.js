import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import styles from './Styles/PlayVideo.js';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FirmControl from '../Components/FirmControl';
import TitleControl from '../Components/TitleControl';
import Orientation from 'react-native-orientation';

const url_mp4 =  'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
//const url_mp4 = 'http://s.phimbathu.com/hien/11_09/trailer_1.mp4';
//const url_mp4= 'http://ic-1b4afd00-12f1d2-1bjdobr21.s.loris.llnwd.net/hien/12_2017/9_12/Brawl.in.Cell.Block.99.2017.1080p.HDrip.x264.SUB.mp4'
export default class PlayVideo extends Component {

  state = {
    rate: 1,
    volume: 100,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: false,
    showFirmControl: false,
  };

  componentWillMount() {
    //Orientation.lockToLandscape();
  }
  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.video.seek(0);
    this.setState({ paused: true });
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  showingTextTime = (time) => {
    time = time.toString();
    const positionDots = time.indexOf('.');

    const secondTime = time.slice(0, positionDots);
    const minute = parseInt(secondTime / 60);
    let second = (secondTime - minute * 60);
    if (second < 10) second = `0${second}`;

    return `${minute}:${second}`;
  }

  onPressSpeaker = () => {
    const nextVolumn = this.state.muted ? false : true;

    this.setState({ muted: nextVolumn });
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderFirmTitle = () => {
    return (
      <TitleControl 
      item={this.props.navigation.state.params.item}
      navigation={this.props.navigation}
      firmName='Chuyen tinh bac sy' />
    )
  }

  renderFirmControl = () => {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    const playPauseIcon = this.state.paused ? 'play-circle-outline' : 'pause-circle-outline';
    const speakerIcon = this.state.muted ? 'volume-off' : 'volume-high';

    return (
      <FirmControl flexCompleted={flexCompleted}
        flexRemaining={flexRemaining}
        playPauseIcon={playPauseIcon}
        speakerIcon={speakerIcon}
        currentTime={this.state.currentTime}
        duration={this.state.duration}
        onPressPlay={() => this.setState({ paused: !this.state.paused })}
        onPressSpeaker={this.onPressSpeaker} />
    );
  }

  render() {
    const titleControl = this.state.showFirmControl ? this.renderFirmTitle() : null;
    const firmControl = this.state.showFirmControl ? this.renderFirmControl() : null;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={1}
          onPress={() => this.setState({ showFirmControl: !this.state.showFirmControl })}
        >
          <Video
            ref={(ref: Video) => { this.video = ref }}
            /* For ExoPlayer */
            source={{ uri: url_mp4, type: 'mpd' }}
            //source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
            controls={false}
          />
        </TouchableOpacity>

        {titleControl}
        {firmControl}

        {/* <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.25)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(1.5)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.playControl}>
              <TouchableOpacity style={styles.play}
                                onPress={() => this.setState({ paused: !this.state.paused })}>
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
              <Text style = {[styles.textTime, styles.currentTime]}> { this.showingTextTime(this.state.currentTime) } </Text>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={styles.handrails} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
              <Text style={[styles.textTime, styles.remainingTime]}> { this.showingTextTime(this.state.duration - this.state.currentTime) } </Text>
            </View>
          </View>
        </View> */}
      </View>
    );
  }
}