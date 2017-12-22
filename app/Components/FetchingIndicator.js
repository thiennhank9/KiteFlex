import React, { Component } from 'react';
import { View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import styles from './Styles/FetchingIndicator.js';

export default class FetchingIndicator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PacmanIndicator
                    size={50}
                    color='gold'
                />
            </View>
        )
    }
}