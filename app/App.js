import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabApp from './Navigators/TabApp.js';
import StackMainApp from './Navigators/StackMainApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';

const isTest = true;
console.disableYellowBox = true;

export default class App extends Component {
    render() {
        const screens = isTest ? <TestScreen /> : <StackMainApp />
        return (
            <Provider store={store}>
                { screens }
            </Provider>
        );
    }
}
