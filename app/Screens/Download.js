import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Download extends Component {
    static navigationOptions = {
        tabBarLabel: 'Quản lý tải',
        tabBarIcon: () => (
            <Icon
                name='cloud-download'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    Download
                </Text>
            </View>
        )
    }
}