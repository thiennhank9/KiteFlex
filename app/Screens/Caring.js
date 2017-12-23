import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import styles from './Styles/Caring.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabCaring from '../Navigators/TabCaring.js';

export default class Caring extends Component {
    static navigationOptions = {
        tabBarLabel: 'Popular',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='view-list'
                size={24}
                style={[{ color: tintColor }]}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TabCaring />
            </View>
        )
    }
}