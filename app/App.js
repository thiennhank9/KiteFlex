import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabApp from './Navigators/TabApp.js';
import StackMainApp from './Navigators/StackMainApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';
import TestStack from './Test/TestStack.js';
import TestAsyncStorage from './Test/TestAsyncStorage.js';
const isTest = false;
console.disableYellowBox = true;

export default class App extends Component {
    render() {
        const screens = isTest ? <TestAsyncStorage /> : <StackMainApp />
        return (
            <Provider store={store}>
                {screens}
            </Provider>
        );
    }
}
