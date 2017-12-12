import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './Styles/GridFilm.js';
import lsFilmByCategory from '../Objects/ListFilmByCategory.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import { ItemFilm } from '../Components/index.js';

export default class GridFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsFilmByCategory
        }
    }
    renderItemFilm(item) {
        return (
            <ItemFilm
                uri={item.uri}
                name={item.name}
            />
        )
    }

    render() {
        return (
            <View>
            </View>
        )
    }

    // render() {
    //     return (
    //         <OptimizedFlatList
    //             numColumns={3}
    //             style={styles.container}
    //             data={this.state.ds}
    //             renderItem={({ item }) => this.renderItemFilm(item)}
    //         />
    //     )
    // }
}