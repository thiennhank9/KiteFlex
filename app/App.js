import React, { Component } from 'react';
import TabApp from './Navigators/TabApp.js';
import store from './Redux/Store.js';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TabApp />
            </Provider>
        );
    }
}
