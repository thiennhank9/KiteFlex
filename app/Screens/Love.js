import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Love extends Component {
    static navigationOptions = {
        tabBarLabel: 'Yêu thích',
        tabBarIcon: () => (
            <Icon
                name='heart'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    Yêu thích
                </Text>
            </View>
        )
    }
}