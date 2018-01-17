import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import { AppRegistry } from 'react-native';

import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  ScrollView,
} from 'react-native';

const styles=StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  player:{
    height:PixelRatio.roundToNearestPixel(Dimensions.get('window').width/(16/9)),
    alignSelf:'stretch',
    backgroundColor:'black',
    marginVertical:10,
  },
});

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state={
      play:true,
      fullscreen:true,
    };
  }
 
  render() {
    const opts={
      loop:false,
      showFullscreenButton:false,
      showinfo:false,
      modestbranding:true,
      controls:2,
      rel:true,
    }


    return (
      <ScrollView style={styles.container}>
        <YouTube
          ref={(ref)=>{
            this._videoPlayer=ref;
          }}
          apiKey='AIzaSyBeR28f0U8cz_1TNY6rmajH5wBrheEvkPY'
          videoId='KVZ-P-ZI6W4'
          play={this.state.play}
          fullscreen={this.state.fullscreen}
          loop={opts.loop}
          style={styles.player}
          showFullscreenButton={opts.showFullscreenButton||true}
          showinfo={opts.showinfo||true}
          modestbranding={opts.modestbranding||true}
          rel={opts.rel||false}
          controls={opts.controls==undefined?2:opts.controls}

          onError={(e)=>{this.videoError(e.error)}}
          onChangeState={(e)=>{this.videoState({e:e,state:e.state})}}
          onReady={(e)=>{this.videoState({e:e,state:'ready'})}}
          onProgress={(e)=>{this.videoProgress({e:e,currentTime:e.currentTime,duration:e.duration})}}
          onChangeQuality={(e)=>{this.videoState({e:e,quality:e.quality})}}
          />
        </ScrollView>
    )
 
  } // render
  videoError(e){

  }
  videoState(e){

    if (e.state=='playing'){
      // hack to get video to play in portrait; must init both to true in constructor
      if (this.state.fullscreen){
        this.setState({play:false,fullscreen:false,})
      }
    }
  }
  videoProgress(e){

  }
}