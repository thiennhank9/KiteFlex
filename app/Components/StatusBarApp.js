import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';

export default class StatusBarApp extends Component {
    render() {
        if (Platform.OS === 'ios') return <StatusBar hidden={true} />
        return (
            <StatusBar
                backgroundColor={this.props.color}
                barStyle="light-content"
                networkActivityIndicatorVisible={true}
            />
        )
    }
}
