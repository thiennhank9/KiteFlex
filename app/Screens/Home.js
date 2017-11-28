import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Home.js';
import { SearchFilm } from '../Components/index.js';
import {ScrollHome} from '../Containers/index.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Khám phá',
        tabBarIcon: () => (
            <Icon
                name='star'
                size={30}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchFilm />
                <ScrollHome />
            </View>
        )
    }
}