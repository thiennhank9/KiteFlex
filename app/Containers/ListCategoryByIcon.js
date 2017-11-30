import React, { Component } from 'react';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import { ItemCategory } from '../Components/index.js';
import styles from './Styles/ListCategoryByIcon';
import lsIconCategory from '../Objects/ListIconCategory.js';

export default class ListCategoryByIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsIconCategory
        }
    }
    renderItemCategory(item) {
        return (
            <ItemCategory
                icon={item.icon}
                name={item.name}
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