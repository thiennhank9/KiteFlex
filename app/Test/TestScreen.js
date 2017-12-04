import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayVideo from '../Components/PlayVideo.js';
import DetailFilm from '../Screens/DetailFilm.js';

export default class TestScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DetailFilm />
            </View>
        )
    }
}
