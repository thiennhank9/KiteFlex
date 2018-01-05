import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GridFilm from '../Containers/GridFilm.js';
import styles from './Styles/Container.js';
export default class Download extends Component {
    static navigationOptions = {
        tabBarLabel: 'Downed',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='cloud-download'
                size={24}
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