import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './Styles/GridFilm.js';
import ItemGridFilm from '../Components/ItemGridFilm.js';

export default class GridFilm extends Component {
    constructor(props) {
        super(props);
    }

    renderItemFilm(item) {
        return (
            <ItemGridFilm
                navigation={this.props.navigation}
                item={item}
            />
        )
    }

    render() {
        return (
            <FlatList
                numColumns={3}
                style={styles.container}
                data={this.props.data}
                renderItem={({ item }) => this.renderItemFilm(item)}
            />
        )
    }
}