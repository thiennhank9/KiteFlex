import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../Screens/Account/Login';
import TestRefs from './TestRefs.js';
//import Signup from '../Screens/Signup';
import YoutubePlayer from './YoutubePlayer.js';
import TestYoutube from './TestYoutube.js';
import TestFullMid from './TestFullMid.js';
import TestAutoDown from './TestAutoDown.js';
import TestVoice from './TestVoice.js';
import DetailPerson from '../Screens/DetailPerson.js';
import TestFirebase from './TestFirebase.js';

export default class TestScreen extends Component {
    render() {
        return (
            <Login />
        )
    }
}
