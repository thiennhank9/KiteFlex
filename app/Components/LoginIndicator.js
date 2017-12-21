import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import styles from './Styles/LoginIndicator.js';

export default class LoginIndicator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PulseIndicator
                    size={100}
                    color='chocolate'
                />
                <Text style={styles.textLoading}>
                    Loading...
                </Text>
            </View>
        )
    }
}