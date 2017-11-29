import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Recent extends Component {
    static navigationOptions = {
        tabBarLabel: 'Mới xem',
        tabBarIcon: () => (
            <Icon
                name='clock'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    Recent
                </Text>
            </View>
        )
    }
}