import React, { Component } from 'react';
import { View } from 'react-native';
import YouTube from 'react-native-youtube';
import Orientation from 'react-native-orientation';
const api_key_youtube = 'AIzaSyBeR28f0U8cz_1TNY6rmajH5wBrheEvkPY';

export default class TestYoutube extends Component {
    constructor(props){
        super(props);
        this.state = {
            isReady: true,
            status: '',
            quality: '',
            error: ''
        }
    }

    componentWillMount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
            <YouTube
                apiKey={api_key_youtube}
                videoId="KVZ-P-ZI6W4"   // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={true}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                controls={1}
                style={{ 
                    // alignSelf: 'stretch', 
                    height: 200 }}
            />
        )
    }
}