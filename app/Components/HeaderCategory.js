import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from './Styles/HeaderCategory.js';
import { toTitleCase, jsUcfirst } from '../Utils/Utils.js';

export default class HeaderCategory extends PureComponent {

    clickToExpand() {
        this.props.navigation.navigate('ListSameFilm', {category: this.props.category})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleCategory}>
                    {jsUcfirst(this.props.category)}
                </Text>
                <TouchableOpacity
                    style={styles.buttonText}
                    onPress={() => this.clickToExpand()}
                >
                    <Text style={styles.textAdd}>
                        More
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}