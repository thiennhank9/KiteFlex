import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IMDb extends Component {
    static navigationOptions = {
        tabBarLabel: 'IMDb',
        tabBarIcon: () => (
            <Icon
                name='imdb'
                size={30}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>
                    IMDb
                </Text>
            </View>
        )
    }
}