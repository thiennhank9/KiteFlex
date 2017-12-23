import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarApp extends Component {
    render() {
        return (
            <StatusBar
                backgroundColor={this.props.color}
                barStyle="light-content"
            />
        )
    }
}
