import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class WatchLater extends Component {
    static navigationOptions = {
        tabBarLabel: 'Theo dõi',
        tabBarIcon: () => (
            <Icon
                name='bell'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    WatchLater
                </Text>
            </View>
        )
    }
}