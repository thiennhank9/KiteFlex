import React, { Component } from 'react';
import TabApp from './Navigators/TabApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';

const isTest = false;

export default class App extends Component {
    render() {
        const screens = isTest ? <TestScreen /> : <TabApp />
        return (
            <Provider store={store}>
                { screens }
            </Provider>
        );
    }
}
