import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';

import styles from './Styles/ListCategory.js';
import lsCategory from '../Objects/ListCategory.js';
import { HeaderCategory } from '../Components/index.js';
import { ListFilmByCategory } from '../Containers/index.js';

export default class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lsCategory: lsCategory
        }
    }

    renderItemCategory(item) {
        return (
            <View style={styles.container}>
                <HeaderCategory
                    category={item.category}
                />
                <ListFilmByCategory />
            </View>
        )
    }
    render() {
        return (
            <FlatList
                data={this.state.lsCategory}
                renderItem={({ item }) => this.renderItemCategory(item)}
            />
        )
    }
}