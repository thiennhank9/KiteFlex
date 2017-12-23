import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import styles from './Styles/New.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNew from '../Navigators/TabNew.js';

export default class New extends Component {
    static navigationOptions = {
        tabBarLabel: 'Lastest',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='movie'
                size={24}
                style={{ color: tintColor }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNew />
            </View>
        )
    }
}

