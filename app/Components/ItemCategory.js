import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './Styles/ItemCategory.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ItemCategory extends Component {

    clickToFindFilms() {
        console.log('Clicked Item Category!')
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.clickToFindFilms()}>
                <Icon
                    name={this.props.icon}
                    size={30}
                />
                <Text>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}