import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styles from './Styles/ListFilmByCategory.js';
import lsFilmByCategory from '../Objects/ListFilmByCategory.js';
import { ItemFilm } from '../Components/index.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

export default class ListFilmByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lsFilmByCategory: lsFilmByCategory
        }
    }

    renderItemFilm(item) {
        return (
            <ItemFilm
                navigation={this.props.navigation}
                uri={item.uri}
                name={item.name}
            />
        )
    }

    _keyExtractor = (item, index) => index;

    render() {
        return (
            <FlatList
                //style={{ backgroundColor: 'white' }}
                keyExtractor={this._keyExtractor}
                horizontal
                data={this.state.lsFilmByCategory}
                renderItem={this.renderItemFilm.bind(this)}
            />
        )
    }
}