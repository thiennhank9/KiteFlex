import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';
import styles from './Styles/ItemFilm.js';
import res from '../Resources/index.js';

export default class ItemFilm extends Component {
    constructor(props) {
        super(props);
    }

    clickToSeeDetail() {
        console.log("Clicked!")
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.clickToSeeDetail()}>
                {/* <Image
                    style={styles.imageFilm}
                    source={res.images.banner}
                    resizeMode='stretch'
                /> */}
                <View style={styles.imageFilm}>
                </View>
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}