import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Movie.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Movie extends Component {
    static navigationOptions = {
        tabBarLabel: 'Phim mới',
        tabBarIcon: () => (
            <Icon
                name='movie-roll'
                size={30}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Movies
                </Text>
            </View>
        )
    }
}