import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../Screens/Login';
export default class TestScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Login />
            </View>
        )
    }
}
