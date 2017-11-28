import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/Home.js';
import { SearchFilm } from '../Components/index.js';
import {ScrollHome} from '../Containers/index.js';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchFilm />
                <ScrollHome />
            </View>
        )
    }
}