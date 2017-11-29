import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Episode extends Component {
    static navigationOptions = {
        tabBarLabel: 'Phim bộ',
        tabBarIcon: () => (
            <Icon
                name='television-classic'
                size={30}
            />
        )
    }

    render() {
        return (
            <View>
                <Text>
                    Episode
                </Text>
            </View>
        )
    }
}