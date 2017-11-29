import React, { Component } from 'react';
import TabApp from './Navigators/TabApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';
import TestScreen from './Test/TestScreen.js';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <TabApp /> */}
                <TestScreen />
            </Provider>
        );
    }
}
