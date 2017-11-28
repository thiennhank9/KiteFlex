import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';

import styles from './Styles/ListFilmByCategory.js';
import lsFilmByCategory from '../Objects/ListFilmByCategory.js';
import {ItemFilm} from '../Components/index.js';

export default class ListFilmByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lsFilmByCategory: lsFilmByCategory
        }
    }

    renderItemFilm(item){
        return(
            <ItemFilm 
                uri={item.uri}
                name={item.name}
            />
        )
    }

    render() {
        return (
            <FlatList
                horizontal
                data={this.state.lsFilmByCategory}
                renderItem={({ item }) => this.renderItemFilm(item)}
            />
        )
    }
}