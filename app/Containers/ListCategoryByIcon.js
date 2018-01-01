import React, { Component } from 'react';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import { ItemCategory } from '../Components/index.js';
import styles from './Styles/ListCategoryByIcon';
import genres from '../Objects/GenresFromAPI.js';

export default class ListCategoryByIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: genres
        }
    }
    renderItemCategory(item) {
        return (
            <ItemCategory
                item={item}
            />
        )
    }
    render() {
        return (
            <OptimizedFlatList
                style={styles.container}
                renderItem={({ item }) => this.renderItemCategory(item)}
                data={this.state.ds}
            />

        )
    }
}