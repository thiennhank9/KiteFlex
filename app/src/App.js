import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import AppStack from './navigators/index.js';

export default class App extends Component<{}> {
    render() {
        return (
            <AppStack />
        );
    }
}
