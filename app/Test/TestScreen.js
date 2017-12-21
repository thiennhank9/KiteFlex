import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomIndicators } from '../Components/index.js';
export default class TestScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomIndicators />
            </View>
        )
    }
}
