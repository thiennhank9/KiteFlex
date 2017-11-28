import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/HighLight.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class HighLight extends Component {
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
            <View>
                <Text> HighLight </Text>
            </View>
        )
    }
}