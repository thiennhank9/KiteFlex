import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridFilm from '../Containers/GridFilm.js';
import styles from './Styles/Container.js';
export default class HighLight extends Component {
    static navigationOptions = {
        tabBarLabel: 'Nổi bật',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='diamond'
                size={30}
                style={{ color: tintColor }}
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