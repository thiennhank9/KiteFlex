import React, { Component } from 'react';
import { View, Button, Text, ToastAndroid } from 'react-native';
import SpeechAndroid from 'react-native-android-voice';

export default class TestVoiceAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text_result: ''
        }
    }
    async recog(){
        try{
            //More Locales will be available upon release.
            var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.DEFAULT);
            ToastAndroid.show(spokenText , ToastAndroid.LONG);
            this.setState({
                text_result: spokenText
            })
        }catch(error){
            switch(error){
                case SpeechAndroid.E_VOICE_CANCELLED:
                    ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_NO_MATCH:
                    ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_SERVER_ERROR:
                    ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
                    break;
                /*And more errors that will be documented on Docs upon release*/
            }
        }
    }
    render() {
        return (
            <View>
                <Button
                    title='RECOG'
                    onPress={() => this.recog()} />
                <Text> {this.state.text_result}</Text>
            </View>
        )
    }
}