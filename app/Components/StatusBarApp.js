import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarApp extends Component {
    render() {
        return (
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
                hidden={true}
            />
        )
    }
}
