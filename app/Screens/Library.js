import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Library.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabLibrary from '../Navigators/TabLibrary.js';

export default class Library extends Component {
    static navigationOptions = {
        tabBarLabel: 'Thư viện',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='book-open-page-variant'
                size={30}
                style={{ color: tintColor }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TabLibrary />
            </View>
        )
    }
}