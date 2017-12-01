import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import styles from './Styles/Home.js';
import { SearchFilm } from '../Components/index.js';
import { ScrollHome } from '../Containers/index.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Khám phá',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='star'
                size={24}
                style={{ color: tintColor }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <SearchFilm />
                <ScrollHome />
            </View>
        )
    }
}