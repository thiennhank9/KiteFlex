import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Styles/ScrollOptimized.js';

export default class ScrollOptimized extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }]
        }
    }

    renderItem(item) {
        return (
            <View style={styles.boxItem}>
                <Text style={styles.textItem}>
                    {item.key}
                </Text>
            </View>
        )
    }

    addMoreItems() {
        this.setState({
            data: [...this.state.data, { key: 10 }, { key: 11 }]
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => this.renderItem(item)}
                onEndReached={() => {
                    this.addMoreItems()
                }}
            />
        )
    }
}