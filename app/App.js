import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabApp from './Navigators/TabApp.js';
import StackMainApp from './Navigators/StackMainApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';
import TestStack from './Test/TestStack.js';
<<<<<<< HEAD
import TestAsyncStorage from './Test/TestAsyncStorage.js';
=======

>>>>>>> f0db5fc2dc09b89e8d1b8a1860b8e49ba4d230b0
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
