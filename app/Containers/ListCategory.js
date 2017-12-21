import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';

import styles from './Styles/ListCategory.js';
import lsCategory from '../Objects/ListCategory.js';
import { HeaderCategory } from '../Components/index.js';
import { ListFilmByCategory } from '../Containers/index.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

export default class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lsCategory: lsCategory
        }
    }

    renderItemCategory(item) {
        return (
            <View style={styles.container} key={item.key}>
                <HeaderCategory
                    category={item.category}
                />
                <ListFilmByCategory navigation={this.props.navigation} />
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.state.lsCategory.map((item) => (
                    this.renderItemCategory(item)
                ))}
            </View>
        )
    }
}