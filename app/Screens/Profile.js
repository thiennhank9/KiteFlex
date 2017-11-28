import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Profile.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: 'Thêm',
        tabBarIcon: () => (
            <Icon
                name='menu'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text> Profile </Text>
            </View>
        )
    }
}