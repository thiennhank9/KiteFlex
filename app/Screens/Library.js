import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Library.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Library extends Component {
    static navigationOptions = {
        tabBarLabel: 'Thư viện',
        tabBarIcon: () => (
            <Icon
                name='book-open-page-variant'
                size={30}
            />
        )
    }

    render() {
        return (
            <View>
                <Text> Library </Text>
            </View>
        )
    }
}