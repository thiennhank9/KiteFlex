import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './Styles/New.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNew from '../Navigators/TabNew.js';

export default class New extends Component {
    static navigationOptions = {
        tabBarLabel: 'Phim mới',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='movie'
                size={30}
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

