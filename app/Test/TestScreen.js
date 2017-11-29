import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayVideo from '../Components/PlayVideo.js';


export default class TestScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aThird}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    aThird: {
        width: window.width/3,
        height: 100,
        backgroundColor: 'black'
    }
})