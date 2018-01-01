import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TestFullMid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxes}>
                </View>
                <View style={styles.mid_box}>
                </View>
                <View style={styles.boxes}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    boxes: {
        width: 200, height: 100, backgroundColor: 'pink'
    },
    mid_box: {
        flex: 1, backgroundColor: 'blue'
    }
})