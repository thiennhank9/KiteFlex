import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TestAutoDown extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxes1}>
                </View>
                <View style={styles.boxes2}>
                </View>
                <View style={styles.boxes3}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxes1: {
        width: 200, height: 100, backgroundColor: 'pink'
    },
    boxes2: {
        width: 100, height: 100, backgroundColor: 'black'
    },
    boxes3: {
        width: 200, height: 100, backgroundColor: 'white'
    },
    mid_box: {
        flex: 1, backgroundColor: 'blue'
    }
})