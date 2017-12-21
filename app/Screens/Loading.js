import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import StatusBarApp from '../Components/StatusBarApp.js';
import styles from './Styles/Loading.js';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('TabApp')
        }, 3000)
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBarApp />
                <View style={styles.containerIndicator}>
                    <PulseIndicator
                        size={100}
                        color='chocolate'
                    />
                    <Text style={styles.textLoading}>
                        Loading...
                    </Text>
                </View>
            </View>
        )
    }
}