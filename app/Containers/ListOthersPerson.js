import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';

import styles from './Styles/ListOthersPerson.js';
import { HeaderCategory } from '../Components/index.js';
import { ListFilmByCategory } from '../Containers/index.js';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

export default class ListOthersPerson extends Component {
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
                    navigation={this.props.navigation}
                    category={item.category}
                />
                <ListFilmByCategory
                    category={item.category}
                    navigation={this.props.navigation} />
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