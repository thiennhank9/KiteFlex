import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../Screens/Login';
import TestRefs from './TestRefs.js';
import Signup from '../Screens/Signup'
export default class TestScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Login /> */}
                <TestRefs />
            </View>
        )
    }
}
