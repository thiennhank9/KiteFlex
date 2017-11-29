import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Caring.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabCaring from '../Navigators/TabCaring.js';

export default class Caring extends Component {
    static navigationOptions = {
        tabBarLabel: 'Quan tâm',
        tabBarIcon: () => (
            <Icon
                name='view-list'
                size={30}
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