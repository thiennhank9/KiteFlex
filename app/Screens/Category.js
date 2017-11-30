import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListCategoryByIcon } from '../Containers/index.js';

export default class Category extends Component {
    static navigationOptions = {
        tabBarLabel: 'Danh mục',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='border-all'
                size={30}
                style={{ color: tintColor }}
            />
        )
    }
    render() {
        return (
                <ListCategoryByIcon />
        )
    }
}