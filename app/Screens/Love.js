import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridFilm from '../Containers/GridFilm.js';
import styles from './Styles/Container.js';
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
            <View style={styles.container}>
                <GridFilm />
            </View>
        )
    }
}